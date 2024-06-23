from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from .models import Person
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password
from rest_framework import generics, permissions
import logging

logger = logging.getLogger(__name__)


#API For Login User

class LoginView(APIView):
    def post(self, request):
        # print(request.data)
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            # Check if the user with the provided email exists
            # print(email)
            # print(password)
            person = Person.objects.get(email=email)

            # print(person)
            # Compare the provided password with the stored password
            # print("ALL DONE")
            # print(person.password)
            if password == person.password:
                # Generate or retrieve token for user


                # Serialize user data
                serializer = PersonSerializer(person)
                # serializer.
                # print( serializer.data)
                # Return serialized user data along with token
                print(serializer.data)
                return Response({'detail': 'Login successful', 'user': serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except Person.DoesNotExist as e:
            print(e)
            return Response({'error': 'User does not exist'}, status=status.HTTP_401_UNAUTHORIZED)



class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

    def create(self, request, *args, **kwargs):
        try:
            # print("This i request")
            print(request.data)
            data = request.data
            person_serializer = self.get_serializer(data=data)
            # print("_________________1pass----------------------")
             
            person_serializer.is_valid(raise_exception=True)
            # print("Pass          --------------------1")
            person_instance = person_serializer.save()
            # Insert into specific table based on type
            # print(person_instance)
            person_type = data.get('type')
            # merge = dict(person_instance)
            if person_type == '1':
                
                newData = {'patientid': person_instance.personid, 'blood_group': data.get('blood_group')[0], 'occupation': data.get('occupation')[0], 'marital_status': data.get('marital_status')[0]}
                     
                patient_serializer = PatientsSerializer(
                    data={**newData, 'patientid': person_instance.personid})
                
                patient_serializer.is_valid(raise_exception=True)
                
                patient_serializer.save(patientid=person_instance)
                # merge.update(patient_serializer)
            elif person_type == '2':
                newData = {'practitionerid': person_instance.personid, 'certification': data.get('certification'), 'experience': data.get('experience'), 'specialization': data.get('specialization'), 'issenior': data.get('issenior')}
                practitioner_serializer = PractitionersSerializer(
                    data={**newData, 'practitionerid': person_instance.personid})
                practitioner_serializer.is_valid(raise_exception=True)
                practitioner_serializer.save(practitionerid=person_instance)
                # merge.update(practitioner_serializer)
            elif person_type == '3':
                domain_expert_serializer = DomainExpertsSerializer(
                    data={**data, 'expertid': person_instance.personid})
                domain_expert_serializer.is_valid(raise_exception=True)
                domain_expert_serializer.save(expertid=person_instance)
                # merge.update(domain_expert_serializer)
            
            
            # merge.update(patient_serializer.data)
            # print("DONE")
            print(person_instance.image)
            return Response({'message': 'Person added successfully' , "personid":  person_instance.personid , "email" : person_instance.email}, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def update(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
    
            # Update specific table based on type
            person_type = request.data.get('type')
            if person_type == '1':
                patient_data = {
                    'blood_group': request.data.get('blood_group')[0],
                    'occupation': request.data.get('occupation')[0],
                    'marital_status': request.data.get('marital_status')[0]
                }
                patient_instance = instance.patient
                patient_serializer = PatientsSerializer(
                    patient_instance, data=patient_data, partial=True)
                patient_serializer.is_valid(raise_exception=True)
                patient_serializer.save()
            elif person_type == '2':
                practitioner_data = {
                    'certification': request.data.get('certification'),
                    'experience': request.data.get('experience'),
                    'specialization': request.data.get('specialization'),
                    'issenior': request.data.get('issenior')
                }
                practitioner_instance = instance.practitioner
                practitioner_serializer = PractitionersSerializer(
                    practitioner_instance, data=practitioner_data, partial=True)
                practitioner_serializer.is_valid(raise_exception=True)
                practitioner_serializer.save()
            elif person_type == '3':
                domain_expert_data = {
                    'expert_field': request.data.get('expert_field')
                    # Add other fields as needed
                }
                domain_expert_instance = instance.domain_expert
                domain_expert_serializer = DomainExpertsSerializer(
                    domain_expert_instance, data=domain_expert_data, partial=True)
                domain_expert_serializer.is_valid(raise_exception=True)
                domain_expert_serializer.save()
    
            return Response({'message': 'Person updated successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        
    def destroy(self, request, *args, **kwargs):
        try:
            person_instance = self.get_object()
            person_instance.delete()
            return Response({'message': 'Person deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def list(self, request, *args, **kwargs):
        try:
            queryset = self.filter_queryset(self.get_queryset())
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    

# APIS For Patient Profile
class PatientProfileAPIView(APIView):
    
    def get(self, request, patient_id):
        try:
            person = Person.objects.filter(personid=patient_id, type=1).first()
            # print(person
            if person:
                patient_profile = Patients.objects.filter(
                    patientid=patient_id).first()
                print(patient_profile)
                if patient_profile:
                    person_data = PersonSerializer(person)
                    patient_data = PatientsSerializer(patient_profile)
                    person_data.data.update(patient_data.data)
                    # person_data.data.extend(patient_data.data)
                    merge = dict(person_data.data)
                    merge.update(patient_data.data)
                    # print(new_data)
                    return Response(merge, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Patient profile not found'}, status=status.HTTP_404_NOT_FOUND)
            else:
                return Response({'error': 'Patient not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AllPatientProfileAPIView(APIView):
    def get(self, request):
        try:
            patients = Patients.objects.all()
            serializer = PatientsSerializer(patients, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# APIS For Practitioner Profile
class PractitionerProfileAPIView(APIView):
    # queryset = Practitioners.objects.all()
    # serializer_class = PractitionersSerializer
    
    def get(self, request, practitioner_id):
        try:

            # Retrieve the Person and Practitioner profiles
            print(practitioner_id)
            person = Person.objects.filter(personid=practitioner_id, type=2).first()
            practitioner_profile = Practitioners.objects.filter(practitionerid=practitioner_id).first()
            print(person)
            if person:
                if practitioner_profile:
                    # Serialize the data
                    person_data = PersonSerializer(person)
                    practitioner_data = PractitionersSerializer(practitioner_profile)

                    # Merge the serialized data
                    merged_data = person_data.data.copy()
                    merged_data.update(practitioner_data.data)

                    return Response(merged_data, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Practitioner profile not found'}, status=status.HTTP_404_NOT_FOUND)
            else:
                return Response({'error': 'Practitioner not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AllPractitionerProfileAPIView(generics.ListAPIView):
    queryset = Practitioners.objects.all()
    serializer_class = PractitionersSerializer

class Full_PractitionerProfileAPIView(APIView):
    def get(self, request):
        try:
            # Retrieve the Person and Practitioner profiles
            # Practitioners.objects.all().select_related("")
            # print(practitioner_id)
            persons = Person.objects.filter( type=2).all()
            print(persons)
            all_prac = []
            for person in persons:

                practitioner_profile = Practitioners.objects.filter(practitionerid=person.personid).first()

                print(person)
                
                if practitioner_profile:
                    # Serialize the data
                    person_data = PersonSerializer(person)
                    practitioner_data = PractitionersSerializer(practitioner_profile)

                    # Merge the serialized data
                    merged_data = person_data.data.copy()
                    merged_data.update(practitioner_data.data)
                    all_prac.append(merged_data)
                    # return Response(merged_data, status=status.HTTP_200_OK)
            # print(all_prac.typ)
            return Response(all_prac, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    




# APIS For Diagnosis Model
class DiagnosisListCreateAPIView(generics.ListCreateAPIView):
    queryset = Diagnoses.objects.all()
    serializer_class = DiagnosesSerializer


class DiagnosisRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Diagnoses.objects.all()
    serializer_class = DiagnosesSerializer
    lookup_field = 'diagnosis_id'

class MyDiagnosisPatients(APIView):
    def get(self, request, prac_id):
        try:
            # print("This is request")
            diagnoses = Diagnoses.objects.filter(practitioner=prac_id)
            # print(diagnoses)
            merged = []
            for diagnosis in diagnoses:
                patient = Patients.objects.filter(
                    patientid=diagnosis.patient).first()
                person = Person.objects.filter(personid=patient.patientid.personid).first()
                # print(person)
                person_data = PersonSerializer(person)
                patient_data = PatientsSerializer(patient)
                diagnoses_data = DiagnosesSerializer(diagnosis)

                merged_data = person_data.data.copy()
                merged_data.update(patient_data.data)
                merged_data.update(diagnoses_data.data)

                merged.append(merged_data)

                # print(merged_data)
            
            return Response(merged, status=status.HTTP_200_OK)   

        except Exception as e:
            print(e)
            return Response({'error': 'Error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MySpecificDiagnosisPatients(APIView):
    def get(self, request, diag_id):
        try:
            # print("This is request")
            diagnose = Diagnoses.objects.filter(diagnosisid=diag_id).first()
            
            patient = Patients.objects.filter(
                patientid=diagnose.patient).first()
            person = Person.objects.filter(personid=patient.patientid.personid).first()
            # print(person)
            person_data = PersonSerializer(person)
            patient_data = PatientsSerializer(patient)
            diagnoses_data = DiagnosesSerializer(diagnose)

            merged_data = person_data.data.copy()
            merged_data.update(patient_data.data)
            merged_data.update(diagnoses_data.data)
            # merged.append(merged_data)
            # print(merged_data)
            
            return Response(merged_data, status=status.HTTP_200_OK)   

        except Exception as e:
            print(e)
            return Response({'error': 'Error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class specificPatientAllDiagnosis(APIView):
    def get(self, request, Patient_id):
        try:
            # print("This is request")
            diagnoses = Diagnoses.objects.filter(patient = Patient_id)
            # print(diagnoses)
            merged = []
            for diagnosis in diagnoses:
                patient = Patients.objects.filter(
                    patientid=diagnosis.patient).first()
                person = Person.objects.filter(personid=patient.patientid.personid).first()
                print(person)

                prac = Practitioners.objects.filter(practitionerid=diagnosis.practitioner).first()
                # print(prac.practitionerid)
                practitioner = Person.objects.filter(personid=prac.practitionerid.personid).first()

                person_data = PersonSerializer(person)
                practitioner_data = PersonSerializer(practitioner)
                prac_data = PractitionersSerializer(prac)
                patient_data = PatientsSerializer(patient)
                diagnoses_data = DiagnosesSerializer(diagnosis)

                merged_data = person_data.data.copy()
                merged_data.update(patient_data.data)
                merged_data.update(diagnoses_data.data)
                merged_data.update(practitioner_data.data)
                merged_data.update(prac_data.data)

                merged.append(merged_data)

                # print(merged_data)
            
            return Response(merged, status=status.HTTP_200_OK)   

        except Exception as e:
            print(e)
            return Response({'error': 'Error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# APIS For Disease Model
class DiseaseListCreateAPIView(generics.ListCreateAPIView):
    queryset = Diseases.objects.all()
    serializer_class = DiseasesSerializer

class DiseaseRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Diseases.objects.all()
    serializer_class = DiseasesSerializer
    lookup_field = 'diseaseid'




#APIS For Patient Disease
# List and Create view
class PatientDiseasesListCreateAPIView(generics.ListCreateAPIView):
    queryset = PatientDiseases.objects.all()
    serializer_class = PatientDiseasesSerializer

# Retrieve, Update, and Delete view
class PatientDiseasesRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PatientDiseases.objects.all()
    serializer_class = PatientDiseasesSerializer
    lookup_field = 'id'



# APIS FOr Diagnosed Disease Model
class DiagnosedDiseaseListCreateAPIView(generics.ListCreateAPIView):
    queryset = DiagnosedDisease.objects.all()
    serializer_class = DiagnosedDiseaseSerializer

class DiagnosedDiseaseRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DiagnosedDisease.objects.all()
    serializer_class = DiagnosedDiseaseSerializer
    lookup_field = 'diagnosed_disease_id'




# APIS For Prescription Model
class PrescriptionListCreateAPIView(generics.ListCreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

class PrescriptionRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    lookup_field = 'prescid'





# APIS For Meething Model
class MeetingListCreateAPIView(generics.ListCreateAPIView):
    queryset = Meetings.objects.all()
    serializer_class = MeetingsSerializer

class MeetingRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Meetings.objects.all()
    serializer_class = MeetingsSerializer
    lookup_field = 'meetingid'






# APIS For Diagnosis Ratings
class DiagnosisRatingsListCreateAPIView(generics.ListCreateAPIView):
    queryset = DiagnosisRatings.objects.all()
    serializer_class = DiagnosisRatingsSerializer

class DiagnosisRatingsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DiagnosisRatings.objects.all()
    serializer_class = DiagnosisRatingsSerializer
    lookup_field = 'ratingid'





#APIS For Questions Model
class QuestionsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer

class QuestionsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer
    lookup_field = 'questionid'






# APIS For Symptoms Model
class SymptomsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Symptoms.objects.all()
    serializer_class = SymptomsSerializer

class SymptomsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Symptoms.objects.all()
    serializer_class = SymptomsSerializer
    lookup_field = 'symptomid'






# APIS For Patient Symptoms Model
class PatientSymptomsListCreateAPIView(generics.ListCreateAPIView):
    queryset = PatientSymptoms.objects.all()
    serializer_class = PatientSymptomsSerializer

class PatientSymptomsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PatientSymptoms.objects.all()
    serializer_class = PatientSymptomsSerializer
    lookup_field = 'id'





#APIS For Symptom Disease Model

class SymptomDiseaseListCreateAPIView(generics.ListCreateAPIView):
    queryset = SymptomDisease.objects.all()
    serializer_class = SymptomDiseaseSerializer

class SymptomDiseaseRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SymptomDisease.objects.all()
    serializer_class = SymptomDiseaseSerializer
    lookup_field = 'id'



#APIS For Activity
class ActivityListCreateAPIView(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

# Retrieve, Update, and Delete view
class ActivityRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    lookup_field = 'activity_id'



#APIS For Domain Experts
class DomainExpertsListCreateAPIView(generics.ListCreateAPIView):
    queryset = DomainExperts.objects.all()
    serializer_class = DomainExpertsSerializer

# Retrieve, Update, and Delete view
class DomainExpertsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DomainExperts.objects.all()
    serializer_class = DomainExpertsSerializer
    lookup_field = 'expertid'




# APIS For EHR Model
class ElectronicHealthRecordsListCreateAPIView(generics.ListCreateAPIView):
    queryset = ElectronicHealthRecords.objects.all()
    serializer_class = ElectronicHealthRecordsSerializer

# Retrieve, Update, and Delete view
class ElectronicHealthRecordsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ElectronicHealthRecords.objects.all()
    serializer_class = ElectronicHealthRecordsSerializer
    lookup_field = 'ehrid'




# APIS For Knowledge Entries Model
class KnowledgeEntriesListCreateAPIView(generics.ListCreateAPIView):
    queryset = KnowledgeEntries.objects.all()
    serializer_class = KnowledgeEntriesSerializer

# Retrieve, Update, and Delete view
class KnowledgeEntriesRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = KnowledgeEntries.objects.all()
    serializer_class = KnowledgeEntriesSerializer
    lookup_field = 'knowledgeid'



# APIS For Digital Ratings
# List and Create view
class DigitalDataRatingsListCreateAPIView(generics.ListCreateAPIView):
    queryset = DigitalDataRatings.objects.all()
    serializer_class = DigitalDataRatingsSerializer

# Retrieve, Update, and Delete view
class DigitalDataRatingsRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DigitalDataRatings.objects.all()
    serializer_class = DigitalDataRatingsSerializer
    lookup_field = 'dataratingid'





# API for Patient Report

class PatientReportAPIView(APIView):
    def get(self, request, patient_id):
        try:
            patient = get_object_or_404(Patients, pk=patient_id)

            symptoms = Symptoms.objects.filter(
                patientsymptoms__patient=patient).values_list('symptomname', flat=True)

            diseases = Diseases.objects.filter(
                patientdiseases__patient=patient).values_list('diseasename', flat=True)

            diagnosis = Diagnoses.objects.filter(patient=patient).values(
                'diagnosisdate', 'automateddiagnosis', 'practitionerdiagnosis',
                'practitioner__practitionerid__firstname', 'practitioner__practitionerid__lastname',
                'practitioner__certification', 'practitioner__specialization').first()

            prescription = Prescription.objects.filter(patient=patient).values(
                'prescname', 'diet', 'amount', 'method').first()

            report_data = {
                'patient_firstname': patient.patientid.firstname,
                'patient_lastname': patient.patientid.lastname,
                'gender': patient.patientid.gender,
                'date_of_birth': str(patient.patientid.date_of_birth),
                'cnic': patient.patientid.cnic,
                'blood_group': patient.blood_group,
                'occupation': patient.occupation,
                'marital_status': patient.marital_status,
                'symptoms': list(symptoms),
                'diseases': list(diseases),
                'diagnosis': diagnosis,
                'prescription': prescription
            }

            serializer = PatientReportSerializer(report_data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# API For shoiwng list of practitioners
class PractitionersListAPIView(generics.ListAPIView):
    queryset = Practitioners.objects.prefetch_related('practitionerid').all()
    serializer_class = PractitionersSerializer




# APIS For Diagnosis for Concluded TRUE
class ConcludedDiagnosesListAPIView(generics.ListAPIView):
    queryset = Diagnoses.objects.filter(isconcluded=True)
    serializer_class = DiagnosesSerializer




# APIS For Diagnosis for Concluded False
class NonConcludedDiagnosesListAPIView(generics.ListAPIView):
    queryset = Diagnoses.objects.filter(isconcluded=False)
    serializer_class = DiagnosesSerializer
