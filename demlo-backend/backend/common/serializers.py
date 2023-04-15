from rest_framework import serializers


class BaseResponse(serializers.Serializer):
    """
    Standard API response
    """
    success = serializers.BooleanField()
    message = serializers.CharField(
        allow_null=True, allow_blank=True, required=False)
    data = serializers.JSONField(allow_null=True, required=False)
    err_code = serializers.CharField(required=False)
