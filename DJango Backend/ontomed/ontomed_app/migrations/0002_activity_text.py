# Generated by Django 5.0.4 on 2024-05-16 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ontomed_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='text',
            field=models.TextField(default=1, max_length=500),
            preserve_default=False,
        ),
    ]
