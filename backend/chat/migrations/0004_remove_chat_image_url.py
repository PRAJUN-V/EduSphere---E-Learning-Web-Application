# Generated by Django 5.0.7 on 2024-09-04 09:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_alter_chatroom_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='image_url',
        ),
    ]
