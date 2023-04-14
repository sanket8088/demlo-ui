#POINTS POST info
curl --location --request POST 'http://127.0.0.1:8000/v1/api/points/' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{
    "point_type": "debit",
    "point_desc": "xyz" ,
    "point_amount": -50

}'


#POINTS GET info

curl --location --request GET 'http://127.0.0.1:8000/v1/api/points/3' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'

#POINTS PUT info

curl --location --request PUT 'http://127.0.0.1:8000/v1/api/points/3' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{"point_type": "credit"}'

#POINTS DELETE info

curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/points/1' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'