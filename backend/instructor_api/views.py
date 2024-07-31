# views.py
from rest_framework import viewsets
from accounts.models import Profile
from .serializers import ProfileSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated  # Ensure this import is correct

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]  # This allows any user to access the view
