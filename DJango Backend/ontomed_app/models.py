from django.db import models

class Person(models.Model):
    personid = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(unique=True, null=True)
    phone = models.CharField(max_length=20, null=True)
    password = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    cnic = models.CharField(max_length=15)
    type = models.IntegerField()
    image = models.BinaryField(null=True)

class Activity(models.Model):
    activity_id = models.AutoField(primary_key=True)
    person_id = models.ForeignKey(Person, on_delete=models.CASCADE)
    description = models.TextField()
    date_time = models.DateTimeField()

class AuthGroup(models.Model):
    name = models.CharField(max_length=150, unique=True)

class AuthGroupPermissions(models.Model):
    group_id = models.ForeignKey(AuthGroup, on_delete=models.CASCADE)
    permission_id = models.IntegerField()

class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type_id = models.IntegerField()
    codename = models.CharField(max_length=100)

class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(null=True)
    is_superuser = models.BooleanField(default=False)
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField()
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField()

class AuthUserGroups(models.Model):
    user_id = models.ForeignKey(AuthUser, on_delete=models.CASCADE)
    group_id = models.ForeignKey(AuthGroup, on_delete=models.CASCADE)

class AuthUserUserPermissions(models.Model):
    user_id = models.ForeignKey(AuthUser, on_delete=models.CASCADE)
    permission_id = models.IntegerField()

class DiagnosedDisease(models.Model):
    diagnosed_disease_id = models.AutoField(primary_key=True)
    diagnosis_id = models.IntegerField()
    disease_id = models.IntegerField()
    diagnosed_datetime = models.DateTimeField()


class Diagnoses(models.Model):
    diagnosisid = models.AutoField(primary_key=True)
    patientid = models.IntegerField()
    practitionerid = models.IntegerField()
    diagnosisdate = models.DateField()
    automateddiagnosis = models.TextField()
    practitionerdiagnosis = models.TextField()
    regulatorrating = models.IntegerField()
    face_image = models.BinaryField(null=True)
    nail_image = models.BinaryField(null=True)
    hands_image = models.BinaryField(null=True)
    other_image = models.BinaryField(null=True)
    isaccepted = models.BooleanField()
    isconcluded = models.BooleanField()

class DiagnosisRatings(models.Model):
    ratingid = models.AutoField(primary_key=True)
    regulatorid = models.IntegerField()
    diagnosisid = models.IntegerField()
    ratingvalue = models.DecimalField(max_digits=5, decimal_places=2)
    comment = models.TextField()

class DigitalDataRatings(models.Model):
    dataratingid = models.AutoField(primary_key=True)
    regulatorid = models.IntegerField()
    knowledgeid = models.IntegerField()
    ratingvalue = models.DecimalField(max_digits=5, decimal_places=2)
    validation = models.BooleanField()
    editing = models.BooleanField()

class Diseases(models.Model):
    diseaseid = models.AutoField(primary_key=True)
    diseasename = models.CharField(max_length=100)

class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type_id = models.IntegerField(null=True)
    user_id = models.IntegerField()

class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

class DjangoSession(models.Model):
    session_key = models.CharField(max_length=40, primary_key=True)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

class DomainExperts(models.Model):
    expertid = models.IntegerField(primary_key=True)
    expertisearea = models.CharField(max_length=100)
    approved = models.BooleanField(default=False)

class ElectronicHealthRecords(models.Model):
    ehrid = models.AutoField(primary_key=True)
    patientid = models.IntegerField()
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    diagnosisid = models.IntegerField()

class KnowledgeEntries(models.Model):
    knowledgeid = models.AutoField(primary_key=True)
    expertid = models.IntegerField()
    entrydate = models.DateField()
    content = models.TextField()

class Meetings(models.Model):
    meetingid = models.AutoField(primary_key=True)
    patientid = models.IntegerField()
    practitionerid = models.IntegerField()
    meetingdate = models.DateField()
    status = models.CharField(max_length=20)
    meetingtime = models.TimeField()

class PatientDiseases(models.Model):
    patientid = models.IntegerField()
    diseaseid = models.IntegerField()

class Patients(models.Model):
    patientid = models.IntegerField(primary_key=True)
    blood_group = models.CharField(max_length=5)
    occupation = models.CharField(max_length=100)
    marital_status = models.CharField(max_length=20)

class PatientSymptoms(models.Model):
    patientid = models.IntegerField()
    symptomid = models.IntegerField()
    intensity = models.IntegerField()
    is_in_family = models.BooleanField()
    odd_symptoms = models.BooleanField()

class Practitioners(models.Model):
    practitionerid = models.IntegerField(primary_key=True)
    certification = models.CharField(max_length=100)
    experience = models.IntegerField()
    specialization = models.CharField(max_length=100)
    issenior = models.BooleanField(default=False)

class Prescription(models.Model):
    prescid = models.AutoField(primary_key=True)
    prescname = models.CharField(max_length=100)
    diet = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    method = models.CharField(max_length=100)
    patientid = models.IntegerField()
    diseaseid = models.IntegerField()
    presc_date = models.DateField()

class Questions(models.Model):
    questionid = models.AutoField(primary_key=True)
    statement = models.TextField()
    answer = models.TextField()
    type = models.TextField()
    body_part = models.TextField()
    answer_date = models.DateField()

class SymptomDisease(models.Model):
    symptomid = models.IntegerField()
    diseaseid = models.IntegerField()

class Symptoms(models.Model):
    symptomid = models.AutoField(primary_key=True)
    symptomname = models.CharField(max_length=100)
    description = models.TextField()
