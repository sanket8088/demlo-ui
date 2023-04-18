from rest_framework import serializers


class SignUpRequest(serializers.Serializer):
    password = serializers.CharField(max_length=50)
    first_name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    dob = serializers.DateField()
    username = serializers.CharField(max_length=30)
