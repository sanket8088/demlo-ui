from django.http import HttpRequest
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.serilaizers.request import UserSerializer, SignUpRequest
from django.db import transaction
from common import Utils, BaseResponse


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
            resp = Utils.generate_user_response(request.user)
            resp = BaseResponse(data=resp)
            _ = resp.is_valid(raise_exception=True)
            return Response(resp.validated_data, status=status.HTTP_201_CREATED)
