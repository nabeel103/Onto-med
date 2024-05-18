from django.db import models

class Person(models.Model):
    personid = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    cnic = models.CharField(max_length=15)
    type = models.IntegerField()
    image = models.BinaryField(null=True)

    def __str__(self):
        return self.firstname

class Activity(models.Model):
    activity_id = models.AutoField(primary_key=True)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    description = models.TextField()
    date_time = models.DateTimeField()
    text=models.TextField(max_length=500)

class Diagnoses(models.Model):
    diagnosisid = models.AutoField(primary_key=True)
    patient = models.ForeignKey('Patients', on_delete=models.CASCADE)
    practitioner = models.ForeignKey('Practitioners', on_delete=models.CASCADE)
    diagnosisdate = models.DateField()
    automateddiagnosis = models.TextField()
    practitionerdiagnosis = models.TextField()
    regulatorrating = models.IntegerField()
    face_image = models.BinaryField()
    nail_image = models.BinaryField()
    hands_image = models.BinaryField()
    other_image = models.BinaryField()
    isaccepted = models.BooleanField()
    isconcluded = models.BooleanField()


class DiagnosedDisease(models.Model):
    diagnosed_disease_id = models.AutoField(primary_key=True)
    diagnosis = models.ForeignKey(Diagnoses, on_delete=models.CASCADE)
    disease = models.ForeignKey('Diseases', on_delete=models.CASCADE)
    diagnosed_datetime = models.DateTimeField()

class Diseases(models.Model):
    diseaseid = models.AutoField(primary_key=True)
    diseasename = models.CharField(max_length=100)

class DomainExperts(models.Model):
    expertid = models.OneToOneField(Person, primary_key=True, on_delete=models.CASCADE)
    expertisearea = models.CharField(max_length=100)
    approved = models.BooleanField(default=False)

class ElectronicHealthRecords(models.Model):
    ehrid = models.AutoField(primary_key=True)
    patient = models.ForeignKey('Patients', on_delete=models.CASCADE)
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    diagnosis = models.ForeignKey(Diagnoses, on_delete=models.CASCADE)

class KnowledgeEntries(models.Model):
    knowledgeid = models.AutoField(primary_key=True)
    expert = models.ForeignKey(DomainExperts, on_delete=models.CASCADE)
    entrydate = models.DateField()
    content = models.TextField()

class Meetings(models.Model):
    meetingid = models.AutoField(primary_key=True)
    patient = models.ForeignKey('Patients', on_delete=models.CASCADE)
    practitioner = models.ForeignKey('Practitioners', on_delete=models.CASCADE)
    meetingdate = models.DateField()
    status = models.CharField(max_length=20)
    meetingtime = models.TimeField()

class PatientDiseases(models.Model):
    patient = models.ForeignKey('Patients', on_delete=models.CASCADE)
    disease = models.ForeignKey(Diseases, on_delete=models.CASCADE)

class Patients(models.Model):
    patientid = models.OneToOneField(Person, primary_key=True, on_delete=models.CASCADE)
    blood_group = models.CharField(max_length=5,null=True)
    occupation = models.CharField(max_length=100,null=True)
    marital_status = models.CharField(max_length=20,null=True)


class PatientSymptoms(models.Model):
    patient = models.ForeignKey('Patients', on_delete=models.CASCADE)
    symptom = models.ForeignKey('Symptoms', on_delete=models.CASCADE)
    intensity = models.IntegerField()
    is_in_family = models.BooleanField()
    odd_symptoms = models.BooleanField()

class Practitioners(models.Model):
    practitionerid = models.OneToOneField(Person, primary_key=True, on_delete=models.CASCADE)
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
    patient = models.ForeignKey('Patients', on_delete=models.CASCADE)
    disease = models.ForeignKey(Diseases, on_delete=models.CASCADE)
    practitioner = models.ForeignKey('Practitioners', on_delete=models.CASCADE)  # Add this line
    presc_date = models.DateField()


class Questions(models.Model):
    questionid = models.AutoField(primary_key=True)
    statement = models.TextField()
    answer = models.TextField()
    type = models.TextField()
    body_part = models.TextField()
    answer_date = models.DateField()

class Symptoms(models.Model):
    symptomid = models.AutoField(primary_key=True)
    symptomname = models.CharField(max_length=100)
    description = models.TextField()


class DigitalDataRatings(models.Model):
    dataratingid = models.AutoField(primary_key=True)
    regulatorid = models.IntegerField()
    knowledgeid = models.ForeignKey(KnowledgeEntries, on_delete=models.CASCADE)
    ratingvalue = models.DecimalField(max_digits=5, decimal_places=2)
    validation = models.BooleanField()
    editing = models.BooleanField()
class DiagnosisRatings(models.Model):
    ratingid = models.AutoField(primary_key=True)
    regulatorid = models.IntegerField()
    diagnosisid = models.ForeignKey(Diagnoses, on_delete=models.CASCADE)
    ratingvalue = models.DecimalField(max_digits=5, decimal_places=2)
    comment = models.TextField()

class SymptomDisease(models.Model):
    symptomid = models.ForeignKey(Symptoms, on_delete=models.CASCADE)
    diseaseid = models.ForeignKey(Diseases, on_delete=models.CASCADE)
