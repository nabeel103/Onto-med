from rest_framework import serializers
from .models import *

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'
class DiagnosedDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiagnosedDisease
        fields = '__all__'

class DiagnosesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnoses
        fields = '__all__'

class DiagnosisRatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiagnosisRatings
        fields = '__all__'

class DigitalDataRatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DigitalDataRatings
        fields = '__all__'

class DiseasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diseases
        fields = '__all__'


class DomainExpertsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomainExperts
        fields = '__all__'

class ElectronicHealthRecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectronicHealthRecords
        fields = '__all__'

class KnowledgeEntriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeEntries
        fields = '__all__'

class MeetingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meetings
        fields = '__all__'

class PatientDiseasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDiseases
        fields = '__all__'

class PatientsSerializer(serializers.ModelSerializer):
    # patient = PersonSerializer()
    class Meta:
        model = Patients
        fields = '__all__'

class PatientSymptomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientSymptoms
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

class PractitionersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practitioners
        fields = '__all__'

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = '__all__'

class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'

class SymptomDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SymptomDisease
        fields = '__all__'

class SymptomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptoms
        fields = '__all__'

class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['image', 'firstname', 'lastname', 'email', 'phone', 'address', 'gender', 'date_of_birth', 'cnic']

class PatientReportSerializer(serializers.Serializer):
    patient_firstname = serializers.CharField()
    patient_lastname = serializers.CharField()
    gender = serializers.CharField()
    date_of_birth = serializers.DateField()
    cnic = serializers.CharField()
    blood_group = serializers.CharField()
    occupation = serializers.CharField()
    marital_status = serializers.CharField()
    symptoms = serializers.ListField(child=serializers.CharField())
    diseases = serializers.ListField(child=serializers.CharField())
    diagnosis = serializers.DictField()
    prescription = serializers.DictField()
# class PersonSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Person
#         fields = ['personid', 'firstname', 'lastname', 'email', 'phone', 'password', 'address', 'gender', 'date_of_birth', 'cnic', 'type', 'image']

# class PatientsSerializer(serializers.ModelSerializer):
# #     patientid = PersonSerializer()
#
# #     class Meta:
# #         model = Patients
#         fields = ['patientid', 'blood_group', 'occupation', 'marital_status']

# class PractitionersSerializer(serializers.ModelSerializer):
#     person = PersonSerializer()
#     class Meta:
#         model = Practitioners
        
#         fields = ['personid', 'certification', 'experience', 'specialization', 'issenior']

# class DomainExpertsSerializer(serializers.ModelSerializer):
#     expertid = PersonSerializer()

#     class Meta:
#         model = DomainExperts
#         fields = ['expertid', 'expertisearea', 'approved']
