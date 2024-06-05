# Generated by Django 4.2.6 on 2024-06-01 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ontomed_app', '0012_remove_electronichealthrecords_height_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patientsymptoms',
            name='intensity',
        ),
        migrations.RemoveField(
            model_name='patientsymptoms',
            name='is_in_family',
        ),
        migrations.RemoveField(
            model_name='patientsymptoms',
            name='odd_symptoms',
        ),
        migrations.RemoveField(
            model_name='symptoms',
            name='description',
        ),
        migrations.AddField(
            model_name='diagnoses',
            name='symptoms',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='symptoms',
            name='intensity',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='symptoms',
            name='is_in_family',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='symptoms',
            name='odd_symptoms',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='diagnoses',
            name='practitionerdiagnosis',
            field=models.TextField(null=True),
        ),
    ]
