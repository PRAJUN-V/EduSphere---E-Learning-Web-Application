# Generated by Django 5.0.7 on 2024-08-20 05:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_purchase'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChapterMarker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DurationField()),
                ('label', models.CharField(max_length=255)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chapters', to='courses.course')),
            ],
            options={
                'ordering': ['timestamp'],
            },
        ),
    ]
