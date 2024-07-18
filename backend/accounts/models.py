from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('instructor', 'Instructor'),
        ('admin', 'Admin')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    current_profession = models.CharField(max_length=100, default='')  # Default value added
    skills = models.TextField(help_text="Comma-separated list of skills", default='')  # Default value added
    bio = models.TextField(blank=True, null=True, default='')  # Default value added
    # resume = models.FileField(upload_to='resumes/', blank=True, null=True, default='')  # Default value added
    approved = models.BooleanField(default=False)
    approval_date = models.DateTimeField(blank=True, null=True)
    eligibility_document = models.FileField(upload_to='eligibility_documents/', null=True, blank=True, default='')  # Default value added

    def __str__(self):
        return f'Profile of {self.user.username}'
