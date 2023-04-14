from rest_framework import serializers

class BaseResponse(serializers.Serializer):
    errorCode = serializers.CharField()
    errorDesc = serializers.CharField()


class BaseSuccessResponse(serializers.Serializer):
    success = serializers.BooleanField()
    message = serializers.CharField(allow_null = True, allow_blank = True, required=False)
    data    = serializers.JSONField(allow_null = True, required = False)

