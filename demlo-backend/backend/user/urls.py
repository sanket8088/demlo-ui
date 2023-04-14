from rest_framework import routers
from django.urls import path, include
from user.views import (UserSignUpView, UserView, AvatarView)


urlpatterns = [
    path("signup", UserSignUpView.as_view()),
    path("", UserView.as_view()),
    path("avatar", AvatarView.as_view())
]
