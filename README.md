# P.A_API_REST

In order to test and use the API, one you have initilized the Backend with <npm run start> you will go to the requests.http file, where you will find the following:
  
  ### -------------> This will let you CREATE a new entry on the DB, just change the data contained inside the JSON portion.
POST http://localhost:9000/api/adduser HTTP/1.1
Content-Type: application/json

{
    "name": "Simon Bolivar", 
    "year": 1783, 
    "bio": "Libertador nacido en Caracas",
    "image": "https://www.biografiasyvidas.com/biografia/b/fotos/bolivar_simon.jpg"
}

###-----------------------> This will let you pull all entrys on the DB
GET http://localhost:9000/api/readuser HTTP/1.1

###----------------> This will let you pull an specific entry by changing the <id> portion of the URL for the ID of the character you are looking for.
GET http://localhost:9000/api/finduser/<id> HTTP/1.1
  Example:
    GET http://localhost:9000/api/finduser/63f8276b798a0783d811c0b2 HTTP/1.1

###---------------> This will let you updater an existing entry by changing the <id> part form the URL
PUT http://localhost:9000/api/updateuser/<id> HTTP/1.1
Content-Type: application/json

{
    "name": "Simon Bolivar", 
    "year": 1783, 
    "bio": "Libertador nacido en Caracas",
    "image": "https://www.biografiasyvidas.com/biografia/b/fotos/bolivar_simon.jpg"
}

###---------------> This will allow you to delete an entry by using the ID from the entry you want to delete on the URL
DELETE http://localhost:9000/api/deleteuser/<id> HTTP/1.1
