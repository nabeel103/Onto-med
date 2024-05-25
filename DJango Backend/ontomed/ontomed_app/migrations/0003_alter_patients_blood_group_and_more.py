# Generated by Django 5.0.4 on 2024-05-16 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ontomed_app', '0002_activity_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patients',
            name='blood_group',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='patients',
            name='marital_status',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='patients',
            name='occupation',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
