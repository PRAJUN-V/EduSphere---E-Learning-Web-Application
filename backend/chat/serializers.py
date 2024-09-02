from rest_framework import serializers
from .models import Chatroom

class ChatroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ['id', 'name', 'course']

class ChatroomStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ['id', 'name']
