from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet
from .views import update_user

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
    path('users/<int:user_id>/', update_user, name='update_user'),
]
