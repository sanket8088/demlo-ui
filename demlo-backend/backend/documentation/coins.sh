#COINS POST info

curl --location --request POST 'http://127.0.0.1:8000/v1/api/coins/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyMTA1NTE0LCJpYXQiOjE2NDIxMDUyMTQsImp0aSI6ImE2ZTE0NDczYmJlZDQ3NTA5NTA4NGNiOWViYzRmMjYzIiwidXNlcl9pZCI6Mn0.NYFMgynZXDF3hbUs8ztLuOiKVr1mwLIe2dJ9dW1hVFs' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{
    "coin_type": "debit",
    "coin_desc": "acb" ,
    "coin_amount": 50

}'

#COINS GET info

curl --location --request GET 'http://127.0.0.1:8000/v1/api/coins/3' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'

#COINS PUT info
curl --location --request PUT 'http://127.0.0.1:8000/v1/api/coins/4' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{
    "coin_type":"credit"
}'

#COINS DELETE info

curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/coins/1' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'