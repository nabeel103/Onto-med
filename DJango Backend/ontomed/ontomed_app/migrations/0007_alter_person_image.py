# Generated by Django 5.0.4 on 2024-05-26 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ontomed_app', '0006_alter_person_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='image',
            field=models.BinaryField(null=True),
        ),
    ]
