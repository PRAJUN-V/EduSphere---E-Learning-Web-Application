from rest_framework import serializers
from .models import Message, Room

class MessageSerializer(serializers.ModelSerializer):
    sender_id = serializers.PrimaryKeyRelatedField(source='sender', read_only=True)

    class Meta:
        model = Message
        fields = ['sender_id', 'message']

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'room_name']
