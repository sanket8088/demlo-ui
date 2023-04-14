# user_solution POST
curl --location --request POST 'http://127.0.0.1:8000/v1/api/question/solution' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw '{"answer":"A file","question_id": 6}'

# user_solution GET
curl --location --request GET 'http://127.0.0.1:8000/v1/api/question/solution/2' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw ''

# user_solution PUT
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/question/solution/2' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw '{"answer":"python prohraming language","question_id": 2}'

# user_solution DELETE
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/question/solution/2' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=oTlWh3sChwdEKgmrRpniVuQXDH5g3VsKUKKhIseg8A0IchaUCLVHxNPcUQDbIgDj' \
--data-raw ''