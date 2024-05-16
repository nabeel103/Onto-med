from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from .models import Person


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

    def create(self, request, *args, **kwargs):
        try:
            data = request.data
            person_serializer = self.get_serializer(data=data)
            person_serializer.is_valid(raise_exception=True)
            person_instance = person_serializer.save()
            # print(person_instance.personid)

            # Insert into specific table based on type
            person_type = data.get('type')
            if person_type == 1:
                patient_serializer = PatientsSerializer(
                    data={**data, 'patientid': person_instance.personid})
                # print(patient_serializer)
                patient_serializer.is_valid(raise_exception=True)
                patient_serializer.save(patientid=person_instance)
            elif person_type == 2:
                practitioner_serializer = PractitionersSerializer(
                    data={**data, 'practitionerid': person_instance.personid})
                practitioner_serializer.is_valid(raise_exception=True)
                practitioner_serializer.save(practitionerid=person_instance)
            elif person_type == 3:
                domain_expert_serializer = DomainExpertsSerializer(
                    data={**data, 'expertid': person_instance.personid})
                domain_expert_serializer.is_valid(raise_exception=True)
                domain_expert_serializer.save(expertid=person_instance)

            return Response({'message': 'Person added successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def update(self, request, *args, **kwargs):
        try:
            data = request.data
            person_instance = self.get_object()
            person_serializer = self.get_serializer(person_instance, data=data)
            person_serializer.is_valid(raise_exception=True)
            person_instance = person_serializer.save()

            # Update specific table based on type
            person_type = data.get('type')
            if person_type == 1:
                patient_instance = Patients.objects.get(
                    patientid=person_instance)
                patient_serializer = PatientsSerializer(
                    patient_instance, data={**data, 'patientid': person_instance.personid})
                patient_serializer.is_valid(raise_exception=True)
                patient_instance = patient_serializer.save()
            elif person_type == 2:
                practitioner_instance = Practitioners.objects.get(
                    practitionerid=person_instance)
                practitioner_serializer = PractitionersSerializer(
                    practitioner_instance, data={**data, 'practitionerid': person_instance.personid})
                practitioner_serializer.is_valid(raise_exception=True)
                practitioner_instance = practitioner_serializer.save()
            elif person_type == 3:
                domain_expert_instance = DomainExperts.objects.get(
                    expertid=person_instance)
                domain_expert_serializer = DomainExpertsSerializer(
                    domain_expert_instance, data={**data, 'expertid': person_instance.personid})
                domain_expert_serializer.is_valid(raise_exception=True)
                domain_expert_instance = domain_expert_serializer.save()

            return Response({'message': 'Person updated successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def destroy(self, request, *args, **kwargs):
        try:
            person_instance = self.get_object()
            person_instance.delete()
            return Response({'message': 'Person deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # def list(self, request, *args, **kwargs):
    #     try:
    #         queryset = self.filter_queryset(self.get_queryset())
    #         serializer = self.get_serializer(queryset, many=True)
    #         return Response(serializer.data)
    #     except Exception as e:
    #         return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


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


class PatientReportAPIView(APIView):
    def get(self, request, patient_id):
        try:
            patient = Patients.objects.select_related(
                'patientid').get(patientid__personid=patient_id)
            print(patient)
            if patient:
                symptoms = Symptoms.objects.filter(
                    patientsymptoms__patient=patient).values_list('symptomname', flat=True)
                # print(symptoms)
                diseases = Diseases.objects.filter(
                    patientdiseases__patient=patient).values_list('diseasename', flat=True)
                # print(diseases)

                diagnosis = Diagnoses.objects.filter(patient=patient).values('diagnosisdate', 'automateddiagnosis', 'practitionerdiagnosis',
                                                                             'practitioner__personid__firstname', 'practitioner__personid__lastname',
                                                                             'practitioner__certification', 'practitioner__specialization').first()
                print("This is diagnosis "+diagnosis)
                prescription = Prescription.objects.filter(patient=patient).values(
                    'prescname', 'diet', 'amount', 'method').first()
                print(prescription)
                serializer = PatientReportSerializer({
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
                })
                print(serializer.data)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Patient not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': f'Error occurred: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
