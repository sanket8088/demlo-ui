#Standard POST info
curl --location --request POST 'http://127.0.0.1:8000/v1/api/standard' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyMjQxNDg4LCJpYXQiOjE2NDIyNDExODgsImp0aSI6ImZiZjBhZmMwZDk4ZjQ3MGNiZWUxNzU3OTkyN2I3ZDljIiwidXNlcl9pZCI6MX0.hmfBKUVf31mab66rtNeB6y9ffrtaSgX-MFwBTzTY09M' \
--data-raw '{"standard_name":"eight","std_code":8, "board_id":1}'

#Standard GET info
curl --location --request GET 'http://127.0.0.1:8000/v1/api/standard/7' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6'

#Standard PUT info
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/standard/7' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6' \
--data-raw '{
    "standard_name": "tenth"
}'

#Standard DELETE info
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/standard/6' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6'