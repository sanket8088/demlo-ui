from rest_framework import serializers


class UpdateUserInfoRequest(serializers.Serializer):
    contact_number = serializers.IntegerField(required=False)
    password = serializers.CharField(max_length=50, required=False)
    first_name = serializers.CharField(max_length=50, required=False)
    dob = serializers.DateField(required=False)
    avatar = serializers.IntegerField(required=False)
