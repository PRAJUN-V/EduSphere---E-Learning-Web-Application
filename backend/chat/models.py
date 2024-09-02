from courses.models import Course
from django.contrib.auth.models import User
from django.db import models

class Chatroom(models.Model):
    course = models.OneToOneField(Course, on_delete=models.CASCADE, related_name='chatroom')
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    members = models.ManyToManyField(User, related_name='chatrooms')

    def __str__(self):
        return self.name
