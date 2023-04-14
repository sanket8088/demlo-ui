class ErrorCodeMsg:

    API_ERROR_INFO = {
    "invalidUser" : {"errorCode": "SY-USER-ERR-01", "errorDesc" : "Invalid user"},
    "invalidPassword" : {"errorCode": "SY-USER-ERR-02", "errorDesc" : "Invalid Password"},
    "userNotActivated" : {"errorCode": "SY-USER-ERR-03", "errorDesc" : "Account not activated"},
    "otpNotmatched" : {"errorCode": "SY-USER-ERR-04", "errorDesc" : "Otp Not matched"},
    "userExists" : {"errorCode": "SY-USER-ERR-05", "errorDesc" : "User already exists"},
    "invalidParameterId" :{"errorCode": "SY-BIZ-ERR-01", "errorDesc" : "Invalid Id"}
    }