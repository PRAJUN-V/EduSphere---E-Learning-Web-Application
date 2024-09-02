from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Chatroom
from .serializers import ChatroomSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
@api_view(['GET'])
def instructor_chatrooms(request, instructor_id):
    # Get the instructor (User object)
    instructor = get_object_or_404(User, id=instructor_id)
    
    # Filter chatrooms by the courses taught by the instructor
    chatrooms = Chatroom.objects.filter(course__instructor=instructor)
    
    # Serialize the chatrooms
    serializer = ChatroomSerializer(chatrooms, many=True)
    
    return Response(serializer.data)


class StudentChatroomsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, student_id, *args, **kwargs):
        try:
            student = User.objects.get(id=student_id)
            chatrooms = Chatroom.objects.filter(members=student)
            serializer = ChatroomSerializer(chatrooms, many=True)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"error": "Student not found"}, status=404)
