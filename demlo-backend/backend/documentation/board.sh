#Board POST info

curl --location --request POST 'http://127.0.0.1:8000/v1/api/boards' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6' \
--data-raw '{"board_name":"pune","board_code":620}'

#Board GET info
curl --location --request GET 'http://127.0.0.1:8000/v1/api/boards/9' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6'

#Board PUT info
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/boards/8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6' \
--data-raw '{
    "board_name": "delhi"
}'

#Board DELETE info
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/boards/9' \
--header 'Cookie: csrftoken=62WiZhTqjhZkU6xZpRW1uvFith2dnz0Acp3naOz4LS67AKzJ4OLx5Mowwn8kEUr6'
