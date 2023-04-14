#lEVEL POST info
curl --location --request POST 'http://127.0.0.1:8000/v1/api/level/' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{
    "level_type": "first",
     "level_desc":"xyz"
}
'


#LEVEL GET info

curl --location --request GET 'http://127.0.0.1:8000/v1/api/level/1' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'

#LEVEL PUT info

curl --location --request PUT 'http://127.0.0.1:8000/v1/api/level/2' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0' \
--data-raw '{"level_type":"second"}'

#LEVEL DELETE info
curl --location --request DELETE 'http://127.0.0.1:8000/v1/api/level/1' \
--header 'Authorization: token fdc57ed95511f5ddb731b3f370ef76e25ea708d8' \
--header 'Cookie: csrftoken=VGP1OMJVq3QnlBjV8E7ye9EPunPERmdnU7lEX6VVSUFVBX474jEzrrIdzSVBLDxv; sessionid=txkie6pbb80r8jrehpp7w6ofobc9pab0'