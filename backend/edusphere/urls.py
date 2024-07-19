from django.contrib import admin
from django.urls import path, include
from accounts.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static
from accounts.views import CustomTokenObtainPairView
from accounts.views import VerifyOTPView, GenerateOTPView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("accounts/api/user/register/", CreateUserView.as_view(), name="register"),
    path("accounts/api/token/", CustomTokenObtainPairView.as_view(), name="get_token"),
    path("accounts/api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("accounts/api-auth/", include("rest_framework.urls")),
    path('admin_api/', include('admin_api.urls')),
    path('instructor/', include('instructor_api.urls')),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('generate-otp/', GenerateOTPView.as_view(), name='generate-otp'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
