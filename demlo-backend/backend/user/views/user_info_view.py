from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.models import User
from user.serilaizers.response import UserDetailResponse
from rest_framework.permissions import IsAuthenticated

class UserView(APIView):

    permission_classes = [IsAuthenticated]


    def get(self, request):
        user = request.user
        resp = self.format_response(user)
        response = UserDetailResponse(data=resp)
        _ = response.is_valid(raise_exception=True)
        return Response(response.validated_data, status=status.HTTP_200_OK)


    def format_response(self,user):
        return {"id": user.id,
                "name" : user.first_name,
                "contact": user.contact_number,
                "email" : user.email,
                "username" : user.username,
                "dob" : user.dob,
                }