from django.contrib import admin
from django.urls import path, include
from accounts.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("accounts/api/user/register/", CreateUserView.as_view(), name="register"),
    path("accounts/api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("accounts/api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("accounts/api-auth/", include("rest_framework.urls")),
]
