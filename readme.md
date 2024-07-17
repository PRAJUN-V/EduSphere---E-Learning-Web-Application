EduSphere-E-Learning

Folder named backend is created for maintaining backend of application.

Folder named frontend is created for maintaining frontend of application.

npm create vite@latest , and created a react project named edusphere at frontend.

pip install django, installed django in backend.

python.exe -m pip install --upgrade pip , upgraded pip version

django-admin startproject edusphere .   , by using this commend created a django project named edusphere in the current directory.

pip install djangorestframework , installed djangorestframework in the project.

created a app named accounts from authentication and autherisation in backend.

created super user in django,
username : admin
password : 1234
email : admin@gmail.com

To handle cors,
pip install django-cors-headers

in settings.py file added cors handling settings like,
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWS_CREDENTIALS = True

npm install axios jwt-decode react-router-dom , installed these packages in frontend.

Watching a tutorial to implement authentication and autherisation in my project.
https://www.youtube.com/watch?v=c-QsfbznSXI
Github mentioned in the video : https://github.com/techwithtim/Django-React-Full-Stack-App

I have added a requirements.txt file mentioned in the video and installed all the pip package in it.
pip install -r requirements.txt

In the video the app name is "api" but in my case I am using "accounts" as my app name.

Making changes in settings.py file

created a file named serializers.py in accounts app.
Serializer convert python object to json data and vice versa.


user view is created inside views.py accounts.

added url patterns for authentication in urls.py in settings.












