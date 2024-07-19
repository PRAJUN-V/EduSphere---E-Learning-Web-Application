from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
import datetime

class Profile(models.Model):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('instructor', 'Instructor'),
        ('admin', 'Admin')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)

    profile_description = models.TextField(null=True, blank=True)
    github_link = models.URLField(null=True, blank=True)
    linkedin_link = models.URLField(null=True, blank=True)
    house_name = models.CharField(max_length=100, null=True, blank=True)
    post = models.CharField(max_length=100, null=True, blank=True)
    street = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    district = models.CharField(max_length=100, null=True, blank=True)
    id_proof = models.FileField(upload_to='id_proofs/', null=True, blank=True)
    qualification_proof = models.FileField(upload_to='qualification_proofs/', null=True, blank=True)
    application_submitted = models.BooleanField(default=False)
    admin_approved = models.BooleanField(default=False)
    admin_rejected = models.BooleanField(default=False)
    admin_reviewed = models.BooleanField(default=False)
    approval_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f'Profile of {self.user.username}'

class OTP(models.Model):
    email = models.EmailField()
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_valid(self):
        now = timezone.now()
        return now < self.created_at + datetime.timedelta(minutes=10)  # OTP is valid for 10 minutes
