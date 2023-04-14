# User_question Post

curl --location --request POST 'http://127.0.0.1:8000/v1/api/question/chapter/1' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyMjQxOTE2LCJpYXQiOjE2NDIyNDE2MTYsImp0aSI6IjQ3ZGE1MzQxY2U5NTRiNTViYTc3MjY1MGY0ODZmOTM2IiwidXNlcl9pZCI6MX0.4nGlAZDTsCnXCuihcMVQl3kHvmzZMJFUYdkEOKhTUMs' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=8XtZWkCMRAXDj4bfW7abCJWbXHbVDPP5mnTEckVFIngLY1hWA1SImispgiqK8SrM; sessionid=p6cipxdt78ftwfm0jh4rrxv5w3l82679; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--data-raw '{
    "question": "Whats is local variable",
    "question_type": "objective",
    "options":[{"options_ans":"abc","is_correct":0,"sequence_id": 1},{"options_ans":"bc","is_correct":0,"sequence_id": 2},{"options_ans":"ac","is_correct":0,"sequence_id": 3},{"options_ans":"abcd","is_correct":1,"sequence_id": 4}]

  
}'

# User_question GET
curl --location --request GET 'http://127.0.0.1:8000/v1/api/question/5' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw ''

# User_question PUT
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/question/5' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw '{"question": "what is javascript"}'


# User_question DELETE
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/question/5' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw ''