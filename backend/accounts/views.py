from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import random
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import OTP
from .serializers import OTPSerializer


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class GenerateOTPView(APIView):
    authentication_classes = []  # Disable authentication
    permission_classes = []      # Disable permission

    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        otp = ''.join(random.choices('0123456789', k=6))
        sender_email = "prajun0604@gmail.com"
        receiver_email = email
        password = "fgmx pzdh xnxz yojz"  # Use your app password here
        subject = "EduSphere registration One Time Password"
        body = f"OTP to register in EduSphere : {otp}"

        # Create the MIME object
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = receiver_email
        message["Subject"] = subject

        # Attach the body to the email
        message.attach(MIMEText(body, "plain"))

        # Establish a connection to the SMTP server (in this case, Gmail)
        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.starttls()
                server.login(sender_email, password)
                server.sendmail(sender_email, receiver_email, message.as_string())
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Save the OTP in the database
        otp_instance = OTP.objects.create(email=email, otp=otp)
        serializer = OTPSerializer(otp_instance)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class VerifyOTPView(APIView):
    authentication_classes = []  # Disable authentication
    permission_classes = []      # Disable permission

    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        try:
            otp_instance = OTP.objects.get(email=email, otp=otp)
            if otp_instance.is_valid():
                otp_instance.delete()
                return Response({'message': 'OTP is valid'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'OTP has expired'}, status=status.HTTP_400_BAD_REQUEST)
        except OTP.DoesNotExist:
            return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)


