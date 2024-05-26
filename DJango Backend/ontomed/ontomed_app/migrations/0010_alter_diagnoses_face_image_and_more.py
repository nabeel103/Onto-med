# Generated by Django 5.0.4 on 2024-05-26 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ontomed_app', '0009_alter_diagnoses_other_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diagnoses',
            name='face_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='diagnoses',
            name='hands_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='diagnoses',
            name='nail_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
