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
