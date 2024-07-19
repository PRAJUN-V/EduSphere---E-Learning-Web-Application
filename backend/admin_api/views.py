from rest_framework import viewsets, permissions
from rest_framework import status, generics
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from accounts.models import Profile
from .serializers import ProfileSerializer

class CategoryListCreate(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Category.objects.all()


class CategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Category.objects.all()

class InstructorReviewListView(generics.ListAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return Profile.objects.filter(
            role='instructor',
            admin_reviewed=False
        )
class InstructorReviewDetailView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.filter(role='instructor')
    serializer_class = ProfileSerializer
