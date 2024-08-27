from rest_framework import serializers
from courses.models import Course

class AdminDashboardSerializer(serializers.Serializer):
    total_revenue = serializers.DecimalField(max_digits=10, decimal_places=2)
    total_instructors = serializers.IntegerField()
    total_students = serializers.IntegerField()

