# user_hint POST
curl --location --request POST 'http://127.0.0.1:8000/v1/api/question/hint' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw '{"hint":"variable is lokc","question_id": 1}'

# user_hint GET
curl --location --request GET 'http://127.0.0.1:8000/v1/api/question/hint/3' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw ''

# user_hint PUT
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/question/hint/3' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw '{"hint": "python is programming language","question_id": 1}'

# user_hint DELETE
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/question/hint/3' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw ''