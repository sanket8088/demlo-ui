from rest_framework import serializers

class UserPlanSerializerResponse(serializers.Serializer):
    plan_id = serializers.IntegerField()
