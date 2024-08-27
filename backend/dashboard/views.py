from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from decimal import Decimal
from accounts.models import Profile
from courses.models import Purchase
from .serializers import AdminDashboardSerializer

class AdminDashboardView(APIView):
    permission_classes = []

    def get(self, request):
        # Calculate total revenue (10% of course purchases)
        purchases = Purchase.objects.all()
        total_revenue = sum((purchase.course.price * Decimal('0.10')) for purchase in purchases)

        # Count total number of instructors
        total_instructors = Profile.objects.filter(role='instructor').count()

        # Count total number of students
        total_students = Profile.objects.filter(role='student').count()

        # Serialize the data
        data = {
            'total_revenue': total_revenue,
            'total_instructors': total_instructors,
            'total_students': total_students,
        }

        serializer = AdminDashboardSerializer(data)
        return Response(serializer.data)

