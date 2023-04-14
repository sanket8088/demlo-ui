from rest_framework import serializers

class LoginRequest(serializers.Serializer):
    contact_number = serializers.IntegerField()
    password = serializers.CharField(max_length = 100)