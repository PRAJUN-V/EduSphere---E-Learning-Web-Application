# Generated by Django 5.0.7 on 2024-07-18 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_rename_approved_profile_admin_approved_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='admin_rejected',
            field=models.BooleanField(default=False),
        ),
    ]