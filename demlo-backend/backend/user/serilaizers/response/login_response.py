from rest_framework import serializers

class LoginResponse(serializers.Serializer):
    token = serializers.CharField(max_length = 250)