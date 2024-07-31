from rest_framework import viewsets
from .models import Course, Purchase
from .serializers import CourseSerializer
from rest_framework import generics
from .serializers import InstructorCoursesSerializer, AdminCoursesListSerializer, AdminCoursesFullDetailSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CourseStudentSerializer
from django.contrib.auth.decorators import login_required

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class InstructorCoursesListView(generics.ListAPIView):
    serializer_class = InstructorCoursesSerializer

    def get_queryset(self):
        instructor_id = self.kwargs['instructor_id']
        return Course.objects.filter(instructor_id=instructor_id)

class AdminCoursesListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = AdminCoursesListSerializer

@api_view(['PATCH'])
def toggle_course_activation(request, pk):
    try:
        course = Course.objects.get(pk=pk)
        course.is_active = not course.is_active
        course.save()
        return Response({'is_active': course.is_active}, status=status.HTTP_200_OK)
    except Course.DoesNotExist:
        return Response({'error': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)

class AdminCoursesFullDetailView(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = AdminCoursesFullDetailSerializer


class CourseStudentListCreateView(generics.ListCreateAPIView):
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseStudentSerializer

    def perform_create(self, serializer):
        serializer.save()

class CourseStudentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseStudentSerializer


@api_view(['POST'])
@login_required
def purchase_course(request, course_id):
    try:
        course = Course.objects.get(id=course_id)
        purchase, created = Purchase.objects.get_or_create(student=request.user, course=course)
        if created:
            return Response({'message': 'Course purchased successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'Course already purchased'}, status=status.HTTP_400_BAD_REQUEST)
    except Course.DoesNotExist:
        return Response({'message': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@login_required
def check_purchase_status(request, course_id):
    try:
        course = Course.objects.get(id=course_id)
        purchased = Purchase.objects.filter(student=request.user, course=course).exists()
        return Response({'purchased': purchased}, status=status.HTTP_200_OK)
    except Course.DoesNotExist:
        return Response({'message': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)
