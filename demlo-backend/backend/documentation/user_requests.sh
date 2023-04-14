#replace http://127.0.0.1:8000 with http://sanket38088.pythonanywhere.com

# Sign up user
curl --location --request POST 'http://127.0.0.1:8000/v1/api/user/signup' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=3ehbAKaeBrr1pyZrrBPFyfwxMHXdCh84BGK63uhGCUvRT8Iif7ZbYF9q4qZz4Nl5' \
--data-raw '{"contact_number" : 6830346973, "password" : "Gmail@123", "first_name": "Sanket"}'


Response:- {
    "address": null,
    "contact_number": 7045307804,
    "first_name": "Rajesh",
    "id": 1
}


#Login

curl --location --request POST 'http://127.0.0.1:8000/v1/api/user/' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VoGwh9BkHPgv43ysPGuWm35lhcMSux3tvMCG3t0RYLdsPgVGP7yJtVM2Gv1Bj8bE; sessionid=rPTbFPZzFiLwA17kBfsyJF3Fm1kuFsVtSc' \
--data-raw '{"contact_number" : "6830346973", "password" : "Gmail@123"}'

Response:- {
    "success": true,
    "message": "",
    "data": {
        "token": "1d6ec89b584e666a2db44cff3dc810eddff11ac1"
    }
}



#userdetails
curl --location --request GET 'http://127.0.0.1:8000/v1/api/user/info' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VoGwh9BkHPgv43ysPGuWm35lhcMSux3tvMCG3t0RYLdsPgVGP7yJtVM2Gv1Bj8bE; sessionid=rPTbFPZzFiLwA17kBfsyJF3Fm1kuFsVtSc; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF; sessionid=b69yqd7rhpyhqofvva29r4v6hdf8g85t' \
--header 'Authorization: Token 23ec6d37761302a04eb940863c15b3fa9c03172a' \
--data-raw ''

#verify otp
curl --location --request POST 'http://127.0.0.1:8000/v1/api/user/verify/7' \
--header 'Cookie: csrftoken=zP3fxZIH5fiQWRV99VFfAkZp79Y4vqo581N74434jipqUG9fyNVj8CXbxVeXrtb0; sessionid=r5hsdme0qvotn94py80k751qh76yb2ds' \
--form 'otp="784377"'

Response :- 204 status



#add user boards
curl --location --request POST 'http://127.0.0.1:8000/v1/api/user/info' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VoGwh9BkHPgv43ysPGuWm35lhcMSux3tvMCG3t0RYLdsPgVGP7yJtVM2Gv1Bj8bE; sessionid=rPTbFPZzFiLwA17kBfsyJF3Fm1kuFsVtSc; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF; sessionid=b69yqd7rhpyhqofvva29r4v6hdf8g85t; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDE4Nzg2LCJpYXQiOjE2NDIyNDU5ODYsImp0aSI6ImNlYTQ2NmMwODNlMzRhZDc5ZDQyMjEwZmY4YTkxNzNiIiwidXNlcl9pZCI6MX0.Ss2L6MUp2z4kzSomAi3mt16_AdGm25SPalEXxG5Igh0' \
--data-raw '{"standard_id" : 1, "board_id" :1 }'

Response {
    "id": 1
}


#fetch user details

curl --location --request GET 'http://127.0.0.1:8000/v1/api/user/info' \
--header 'Content-Type: application/json' \
--header 'Cookie: csrftoken=VoGwh9BkHPgv43ysPGuWm35lhcMSux3tvMCG3t0RYLdsPgVGP7yJtVM2Gv1Bj8bE; sessionid=rPTbFPZzFiLwA17kBfsyJF3Fm1kuFsVtSc; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF; sessionid=b69yqd7rhpyhqofvva29r4v6hdf8g85t; csrftoken=lEJjUPDaGsooB6MkyVes8X5WUSFuHOkQ1ogOj73taDivCPVYU3Nh9K31Jw0m0JlF' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDE4Nzg2LCJpYXQiOjE2NDIyNDU5ODYsImp0aSI6ImNlYTQ2NmMwODNlMzRhZDc5ZDQyMjEwZmY4YTkxNzNiIiwidXNlcl9pZCI6MX0.Ss2L6MUp2z4kzSomAi3mt16_AdGm25SPalEXxG5Igh0'


Response {
    "id": 1,
    "name": "Sanket",
    "contact": 3830346978,
    "address": null,
    "standard": {
        "id": 1,
        "name": "CBSE"
    },
    "board": {
        "id": 1,
        "name": "eight"
    }
}