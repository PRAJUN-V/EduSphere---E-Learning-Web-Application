from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet
from . import views
from .views import InstructorReviewListView, InstructorReviewDetailView
# Initialize the default router
router = DefaultRouter()

# Define the URL patterns
urlpatterns = [
    # Include the router URLs under the 'admin_api/' prefix
    path('', include(router.urls)),
    path('categories/', views.CategoryListCreate.as_view(), name='category_list'),
    path('categories/<int:pk>/', views.CategoryRetrieveUpdateDestroy.as_view(), name='category-retrieve-update-destroy'),
    path('new_instructors/', InstructorReviewListView.as_view(), name='instructor-review-list'),
    path('instructors/<int:pk>/', InstructorReviewDetailView.as_view(), name='instructor-review-detail'),
    # Other paths can be added here
]
