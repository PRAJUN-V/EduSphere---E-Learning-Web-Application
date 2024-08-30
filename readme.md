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

Backend part for authentication is completed now I need to look frontend.

Now I am going to install tailwind in react

.env file is added in edusphere project folder to put secret api keys and other keys at frontend.

we created api.js and constants.js file.

I am creating a model named Profile in accounts model to extend the field of User model

I have created a signal that will create profile related to user at the time of user creation itself.

Media folder is setuped to store profile image in django side. It is best to store images in backend side
because at time of deployment we can easily connect it with aws s3 bucket.

npm install react-toastify , to include toaster in react

authentication is partially completed.

Now I am going to manage category add by admin.

Role based protected route is almost completed.

Admin Password changed,
Prajun@123

Now I am going to do admin approval for tutor.

now my profile id and user id are same to make it easy. It is implemented using signals.

use patch method instead of put if you need to update the model data partially otherwise it will show 
400 bad request error.

Now I didn't added categroy in the tutor approval side I need to do it after category is done in
admin side.

Now I am going to complete otp on registration side.

Instructor application list in admin side is partially completed I need to implement action in it.

Admin password changed,
Admin@123

There is a small problem in adding interest in student should be corrected.

my password change from profile is not working I need to solve it.

I am going to create a app in backend named courses to manage course in backend.

Second week completed... 

Forgot password is implemented.

my instructor requests is showing not authenticated error, Previously it worked properly I need to debug 
the error in it. fixed

by going to git log and I added the previous code it worked. Yaaa hooooo.........
Instructor request is now working properly

My google authentication is not complete there is an issue I need to find it.

I was not able to do chapter wise course because I need to rebuild the entire course for that.

I deleted the all the implementation of chat in frontend and backend

websocket connection is established for chat

4th week task
    - Instructor is listed in the admin side.
    - Student list in instructor side.
    - Sidebar height is correct.

Created an app in django to manage admin and instructor dashboard
Created an app in django to manage examination at student and instructor side.

Logo and title name of the application is changed according to our project.

I am going to design my homepage.

I am creating the view for home in student_api app.

In Homepage I added
    - Top Categories
    - Our Featured Courses
    - Recently Added Courses
    - Top3 tutor
    - Trusted Companies

Homepage design almost completed

Size of the sidebar is adjust using : flex min-h-screen

Admin Dashboard Completed

About section in homepage completed
Contact section in homepage completed

In instructor dashboard implemented chart

Instructor dashboard completed

created two folders named exam in user and instructor side for managing exam in frontend

exam in tutor side is completed