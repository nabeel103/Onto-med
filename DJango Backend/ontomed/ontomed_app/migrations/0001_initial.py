# Generated by Django 5.0.4 on 2024-04-28 16:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Diagnoses',
            fields=[
                ('diagnosisid', models.AutoField(primary_key=True, serialize=False)),
                ('diagnosisdate', models.DateField()),
                ('automateddiagnosis', models.TextField()),
                ('practitionerdiagnosis', models.TextField()),
                ('regulatorrating', models.IntegerField()),
                ('face_image', models.BinaryField()),
                ('nail_image', models.BinaryField()),
                ('hands_image', models.BinaryField()),
                ('other_image', models.BinaryField()),
                ('isaccepted', models.BooleanField()),
                ('isconcluded', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Diseases',
            fields=[
                ('diseaseid', models.AutoField(primary_key=True, serialize=False)),
                ('diseasename', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('personid', models.AutoField(primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=10)),
                ('date_of_birth', models.DateField()),
                ('cnic', models.CharField(max_length=15)),
                ('type', models.IntegerField()),
                ('image', models.BinaryField()),
            ],
        ),
        migrations.CreateModel(
            name='KnowledgeEntries',
            fields=[
                ('knowledgeid', models.AutoField(primary_key=True, serialize=False)),
                ('entrydate', models.DateField()),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('questionid', models.AutoField(primary_key=True, serialize=False)),
                ('statement', models.TextField()),
                ('answer', models.TextField()),
                ('type', models.TextField()),
                ('body_part', models.TextField()),
                ('answer_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Symptoms',
            fields=[
                ('symptomid', models.AutoField(primary_key=True, serialize=False)),
                ('symptomname', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='DiagnosisRatings',
            fields=[
                ('ratingid', models.AutoField(primary_key=True, serialize=False)),
                ('regulatorid', models.IntegerField()),
                ('ratingvalue', models.DecimalField(decimal_places=2, max_digits=5)),
                ('comment', models.TextField()),
                ('diagnosisid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diagnoses')),
            ],
        ),
        migrations.CreateModel(
            name='DiagnosedDisease',
            fields=[
                ('diagnosed_disease_id', models.AutoField(primary_key=True, serialize=False)),
                ('diagnosed_datetime', models.DateTimeField()),
                ('diagnosis', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diagnoses')),
                ('disease', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diseases')),
            ],
        ),
        migrations.CreateModel(
            name='DomainExperts',
            fields=[
                ('expertid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='ontomed_app.person')),
                ('expertisearea', models.CharField(max_length=100)),
                ('approved', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Patients',
            fields=[
                ('patientid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='ontomed_app.person')),
                ('blood_group', models.CharField(max_length=5)),
                ('occupation', models.CharField(max_length=100)),
                ('marital_status', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Practitioners',
            fields=[
                ('practitionerid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='ontomed_app.person')),
                ('certification', models.CharField(max_length=100)),
                ('experience', models.IntegerField()),
                ('specialization', models.CharField(max_length=100)),
                ('issenior', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('activity_id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.TextField()),
                ('date_time', models.DateTimeField()),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.person')),
            ],
        ),
        migrations.CreateModel(
            name='DigitalDataRatings',
            fields=[
                ('dataratingid', models.AutoField(primary_key=True, serialize=False)),
                ('regulatorid', models.IntegerField()),
                ('ratingvalue', models.DecimalField(decimal_places=2, max_digits=5)),
                ('validation', models.BooleanField()),
                ('editing', models.BooleanField()),
                ('knowledgeid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.knowledgeentries')),
            ],
        ),
        migrations.CreateModel(
            name='SymptomDisease',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diseaseid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diseases')),
                ('symptomid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.symptoms')),
            ],
        ),
        migrations.AddField(
            model_name='knowledgeentries',
            name='expert',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.domainexperts'),
        ),
        migrations.CreateModel(
            name='Prescription',
            fields=[
                ('prescid', models.AutoField(primary_key=True, serialize=False)),
                ('prescname', models.CharField(max_length=100)),
                ('diet', models.CharField(max_length=100)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('method', models.CharField(max_length=100)),
                ('presc_date', models.DateField()),
                ('disease', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diseases')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.patients')),
            ],
        ),
        migrations.CreateModel(
            name='PatientSymptoms',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('intensity', models.IntegerField()),
                ('is_in_family', models.BooleanField()),
                ('odd_symptoms', models.BooleanField()),
                ('symptom', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.symptoms')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.patients')),
            ],
        ),
        migrations.CreateModel(
            name='PatientDiseases',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disease', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diseases')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.patients')),
            ],
        ),
        migrations.CreateModel(
            name='ElectronicHealthRecords',
            fields=[
                ('ehrid', models.AutoField(primary_key=True, serialize=False)),
                ('height', models.DecimalField(decimal_places=2, max_digits=5)),
                ('weight', models.DecimalField(decimal_places=2, max_digits=5)),
                ('diagnosis', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.diagnoses')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.patients')),
            ],
        ),
        migrations.AddField(
            model_name='diagnoses',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.patients'),
        ),
        migrations.CreateModel(
            name='Meetings',
            fields=[
                ('meetingid', models.AutoField(primary_key=True, serialize=False)),
                ('meetingdate', models.DateField()),
                ('status', models.CharField(max_length=20)),
                ('meetingtime', models.TimeField()),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.patients')),
                ('practitioner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.practitioners')),
            ],
        ),
        migrations.AddField(
            model_name='diagnoses',
            name='practitioner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ontomed_app.practitioners'),
        ),
    ]