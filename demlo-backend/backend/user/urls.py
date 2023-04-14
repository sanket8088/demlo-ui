from rest_framework import routers
from django.urls import path, include
from user.views import (UserSignUpView, UserView)
from rest_framework.authtoken import views


urlpatterns = [
    path("signup", UserSignUpView.as_view()),
    path("", UserView.as_view()),
    
]

