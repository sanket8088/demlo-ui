from django.http import HttpRequest
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.serilaizers.request import UserSerializer, SignUpRequest
from base64 import b64encode, b64decode
from django.db import transaction
from common import Utils
from user.models import User


class UserSignUpView(APIView):
    """
    A view to create an account for user
    """

    @transaction.atomic
    def post(self, request: HttpRequest) -> Response:
        """POST method to save data to db

        Args:
            request (HttpRequest)

        Returns:
            Response: User info
        """
        req_data = request.data
        request_data = SignUpRequest(data=req_data)
        _ = request_data.is_valid(raise_exception=True)
        request_data = request_data.validated_data
        user_instance = UserSerializer.create(request_data)
        if isinstance(user_instance, dict):
            return Response(user_instance, status=status.HTTP_400_BAD_REQUEST)
        else:
            resp = self.format_response(user_instance)
            return Response(resp, status=status.HTTP_200_OK)

    def format_response(self, user_instance: User) -> dict:
        """Converts a user instance to dictionary.

        Args:
            user (User): user instance

        Returns:
            dict: json of required user info
        """

        return {"id": user_instance.id,
                "first_name": user_instance.first_name,
                "contact_number": user_instance.contact_number,
                "email": user_instance.email,
                }
