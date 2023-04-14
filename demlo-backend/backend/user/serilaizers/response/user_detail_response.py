from rest_framework import serializers

class UserDetailResponse(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length = 250)
    contact = serializers.IntegerField()
    username = serializers.CharField(max_length=30)
    email = serializers.CharField(max_length=255)
    dob = serializers.DateField()
