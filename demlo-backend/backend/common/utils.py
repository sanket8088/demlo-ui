from common import ErrorCodeMsg
from user.serilaizers.response import BaseResponse

class Utils():

    @classmethod
    def generate_error_response(self, errorKey):
        data = dict(success=False)
        data['errorCode'] = ErrorCodeMsg.API_ERROR_INFO[errorKey]["errorCode"]
        data['errorDesc'] = ErrorCodeMsg.API_ERROR_INFO[errorKey]["errorDesc"]
        response = BaseResponse(data=data)
        _ = response.is_valid(raise_exception = True)
        return response.validated_data
