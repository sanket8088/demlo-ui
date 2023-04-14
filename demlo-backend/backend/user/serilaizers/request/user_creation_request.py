from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import authentication_classes, permission_classes
from cryptography.fernet import Fernet
from user.models import User
from common import ErrorCodeMsg



class UserSerializer(serializers.HyperlinkedModelSerializer):

    @classmethod
    def create(self, validated_data):
        password = validated_data.pop("password", None)  
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        try:
            instance.save()
            return instance
        except Exception as e:
            resp = dict()
            resp["errorCode"] = ErrorCodeMsg.API_ERROR_INFO["userExists"]["errorCode"]
            resp["errorDesc"] = ErrorCodeMsg.API_ERROR_INFO["userExists"]["errorDesc"]
            return resp

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == "password":
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance

    class Meta:
        model = User
        extra_kwargs={"password" : {"write_only" :True}}
        fields = ( "password", "address", "contact_number", "first_name","id")
