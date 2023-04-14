#Subject POST info
curl --location --request POST 'http://127.0.0.1:8000/v1/api/subject' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6' \
--data-raw '{
    "sub_name": "english",
    "sub_code": 5,
    "standard_id": 4,
    "board_id": 6
}'

#Subject GET info
curl --location --request GET 'http://127.0.0.1:8000/v1/api/subject/4' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6'

#Subject PUT info
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/subject/4' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6' \
--data-raw '{
    "sub_name": "grammar"
}'

#Subject DELETE info
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/subject/2' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6'



#get user subjects based on board and standard id
curl --location --request GET 'http://127.0.0.1:8000/v1/api/subject' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNzAwNzk0LCJpYXQiOjE2NDI1Mjc5OTQsImp0aSI6IjVlYTNkMzRhMmU1YTQwYWViN2RiNGY2MjVkOTJhMjQyIiwidXNlcl9pZCI6M30._x1JW-DH10dVY-9ZUKZ9Cf9UDpm_PZNNVUDpuBqWiRA' \
--data-raw ''


#All chapters of individual subject
curl --location --request GET 'http://127.0.0.1:8000/v1/api/subject/3/chapters' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNzAwNzk0LCJpYXQiOjE2NDI1Mjc5OTQsImp0aSI6IjVlYTNkMzRhMmU1YTQwYWViN2RiNGY2MjVkOTJhMjQyIiwidXNlcl9pZCI6M30._x1JW-DH10dVY-9ZUKZ9Cf9UDpm_PZNNVUDpuBqWiRA' \
--data-raw ''

#All question in individual chapters
curl --location --request GET 'http://127.0.0.1:8000/v1/api/subject/3/chapters/20/question' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNzAwNzk0LCJpYXQiOjE2NDI1Mjc5OTQsImp0aSI6IjVlYTNkMzRhMmU1YTQwYWViN2RiNGY2MjVkOTJhMjQyIiwidXNlcl9pZCI6M30._x1JW-DH10dVY-9ZUKZ9Cf9UDpm_PZNNVUDpuBqWiRA' \
--data-raw ''

#All options hint solution of every question
curl --location --request GET 'http://127.0.0.1:8000/v1/api/subject/3/chapters/20/question/242?options=true&hint=true&solution=true' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNzAwNzk0LCJpYXQiOjE2NDI1Mjc5OTQsImp0aSI6IjVlYTNkMzRhMmU1YTQwYWViN2RiNGY2MjVkOTJhMjQyIiwidXNlcl9pZCI6M30._x1JW-DH10dVY-9ZUKZ9Cf9UDpm_PZNNVUDpuBqWiRA' \
--data-raw ''