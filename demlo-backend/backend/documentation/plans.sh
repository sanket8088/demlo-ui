#PLANS POST info

curl --location --request POST 'http://127.0.0.1:8000/v1/api/plans/' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{
    "plan_name": "premium",
    "plan_cost": 1200,
    "validity": 365


}'

#PLANS GET info

curl --location --request GET 'http://127.0.0.1:8000/v1/api/plans/4' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'

#PLANS PUT info

curl --location --request PUT 'http://127.0.0.1:8000/v1/api/plans/3' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{
    "plan_name": "1 month",
    "plan_cost": 300,
    "validity": 365
}'

#PLANS DELETE info

curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/plans/3' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'