from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.http import HttpRequest
from common import BaseResponse
from common import Utils
from user.serilaizers.request import UpdateUserInfoRequest, UserSerializer
from django.db import transaction


class UserView(APIView):
    """
    A view to fetch user info based on the token provided.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request: HttpRequest) -> Response:
        """GET method to fetch user data

        Args:
            request (HttpRequest)

        Returns:
            Response: User info
        """
        resp = Utils.generate_user_response(request.user)
        resp = BaseResponse(data=resp)
        _ = resp.is_valid(raise_exception=True)
        return Response(resp.validated_data, status=status.HTTP_200_OK)

    @transaction.atomic
    def patch(self, request: HttpRequest) -> Response:
        """PATCH method to update the user info

        Args:
            request (HttpRequest)

        Returns:
            Response: User info
        """
        req_data = request.data
        user = request.user
        request_data = UpdateUserInfoRequest(data=req_data)
        _ = request_data.is_valid(raise_exception=True)
        request_data = request_data.validated_data
        user_instance = UserSerializer.update(user, request_data)
        resp = Utils.generate_user_response(user_instance)
        resp = BaseResponse(data=resp)
        _ = resp.is_valid(raise_exception=True)
        return Response(resp.validated_data, status=status.HTTP_200_OK)
