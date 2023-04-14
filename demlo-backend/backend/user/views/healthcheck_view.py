from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from user.models import User
from user.serilaizers.request import UserSerializer
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

@csrf_exempt
def healthcheck(request):
    return JsonResponse({"info" :"Demlo", "Author" : "Demlo"})