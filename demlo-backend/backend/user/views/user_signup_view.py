from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.serilaizers.request import UserSerializer, SignUpRequest
from base64 import b64encode, b64decode
from django.db import transaction
from common import Utils


class UserSignUpView(APIView):

    @transaction.atomic
    def post(self, request):
        req_data =request.data
        request_data = SignUpRequest(data = req_data)
        validation = request_data.is_valid(raise_exception=True)
        request_data = request_data.validated_data
        userInstance = UserSerializer.create(request_data)
        if type(userInstance) == dict:
            return Response(userInstance, status = status.HTTP_400_BAD_REQUEST)
        else:
            resp = self.generateResponse(userInstance)
            return Response(resp, status = status.HTTP_200_OK)

    def generateResponse(self, instance):
        resp = dict()
        resp["id"] = instance.id
        resp["first_name"] = instance.first_name
        resp["contact_number"] = instance.contact_number

        return resp