from django.urls import path
from .views import AdminDashboardView, CourseStatsView

urlpatterns = [
    path('admin/', AdminDashboardView.as_view(), name='admin-dashboard'),
    path('admin/course-stat', CourseStatsView.as_view(), name='admin-dashboard'),
]
