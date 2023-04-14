#USERPLANS POST info

curl --location --request POST 'http://127.0.0.1:8000/v1/api/plans/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDQ1MjEwLCJpYXQiOjE2NDIyNzI0MTAsImp0aSI6IjJjNGU1NTM5YjRjYzQ1Y2ZiMWVjZTQ4MTJjNTI1NjI5IiwidXNlcl9pZCI6MX0.pSQzkapOlJRvVPdkyFm14Lp6Itsj9YbRfR6OQfgUa9U' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plan_name": "yearly",
    "plan_cost": 1000,
    "validity": 365
}'

#USERPLANS GET info

curl --location --request GET 'http://127.0.0.1:8000/v1/api/plans/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDQ2NDc5LCJpYXQiOjE2NDIyNzI0MTAsImp0aSI6ImFlMzk3YTM4ODRmNDRiNjZiYWI3NzZkYTI3ZjI4YTkxIiwidXNlcl9pZCI6MX0.1MPc3TYFmps1XHiLR83pFds2E7E6M6eGh0BIfqIT3Bk' \
--data-raw ''

#USERPLANS PUT info

curl --location --request PUT 'http://127.0.0.1:8000/v1/api/plans/1' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDQ1MjEwLCJpYXQiOjE2NDIyNzI0MTAsImp0aSI6IjJjNGU1NTM5YjRjYzQ1Y2ZiMWVjZTQ4MTJjNTI1NjI5IiwidXNlcl9pZCI6MX0.pSQzkapOlJRvVPdkyFm14Lp6Itsj9YbRfR6OQfgUa9U' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plan_name": "monthly",
    "plan_cost": 100,
    "validity": 365
}'


#USERPLANS DELETE info

curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/plans/3' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDQ1MjEwLCJpYXQiOjE2NDIyNzI0MTAsImp0aSI6IjJjNGU1NTM5YjRjYzQ1Y2ZiMWVjZTQ4MTJjNTI1NjI5IiwidXNlcl9pZCI6MX0.pSQzkapOlJRvVPdkyFm14Lp6Itsj9YbRfR6OQfgUa9U'