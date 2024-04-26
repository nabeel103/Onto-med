from rest_framework import serializers
from .models import *

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class AuthGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthGroup
        fields = '__all__'

class AuthGroupPermissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthGroupPermissions
        fields = '__all__'

class AuthPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthPermission
        fields = '__all__'

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = '__all__'

class AuthUserGroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUserGroups
        fields = '__all__'

class AuthUserUserPermissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUserUserPermissions
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

class DjangoAdminLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoAdminLog
        fields = '__all__'

class DjangoContentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoContentType
        fields = '__all__'

class DjangoMigrationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoMigrations
        fields = '__all__'

class DjangoSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoSession
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
    class Meta:
        model = Patients
        fields = '__all__'

class PatientSymptomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientSymptoms
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
