from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.models import Avatar
from user.serilaizers.response import UserDetailResponse
from rest_framework.permissions import IsAuthenticated
from django.http import HttpRequest
from common import BaseResponse


class AvatarView(APIView):
    """
    A view to fetch avatar stored.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request: HttpRequest) -> Response:
        """GET method to fetch user data

        Args:
            request (HttpRequest)

        Returns:
            Response: Success response with avatar list as data
        """

        avatar_qs = Avatar.objects.filter(is_deleted=False)
        resp = self.format_response(avatar_qs)
        resp = BaseResponse(data=resp)
        _ = resp.is_valid(raise_exception=True)
        return Response(resp.validated_data, status=status.HTTP_200_OK)

    def format_response(self, avatar_instances: list) -> dict:
        """Converts list of avatar instance in correct data.

        Args:
            avatar_instances (List):  

        Returns:
            dict: Success response with data
        """
        avatar_resp = []
        for avatar in avatar_instances:
            avatar_resp.append({
                "id": avatar.id,
                "name": avatar.name,
                "img_url": avatar.img_url

            })

        resp = {"success": True, "message": "", "data": avatar_resp}
        return resp
