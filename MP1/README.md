![Nodejs](https://img.shields.io/badge/nodejs-v12.18.4-blue.svg)
![Mongo](https://img.shields.io/badge/mongodb-v4.4.1-informational.svg)
![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)
![mini](https://img.shields.io/static/v1?&message=mini_project&color=<9cf>)

# Mini Project -1 #

## Simple CRUD operations for HospitalManagement ##


### Built With

- Node.js
- MongoDB
- Postman api

## Getting Started
### Dependencies
    "body-parser": "^1.19.0"
    "express": "^4.17.1"
    "jsonwebtoken": "^8.5.1"
    "mongoose": "^5.10.7"
    "nodemon": "^2.0.4"
### Prerequisites
* Installation of Node.js and MongoDB
* Express server
### Installation
1. Clone the repo : ```git clone https://github.com/sathwikreddy56/245318733012.git```
2. Navigate into Directory : ```cd MP1```
3. Install NPM packages : ```npm install```
## Executing program
1. Intializing server : 'npm start'
![Alt text](/screenshots/initializing.png?raw=true "starting the express server")
2. Open postman and send queries
## Testing
<details>
    <summary>Login</summary>
    <p>1. Add username and password in the body of the query in raw json format. We wil then get a authorization token as a response</p>
    <p>2. The endpoint to Login is : <b>POST</b> >>localhost:3000/login/ </p>
    <img src="/screenshots/login.png?raw=true">
</details>
<details>
    <summary>Fetching details of all Hospitals</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. The endpoint to get the List of all Hospitals is : <b>GET</b> >>localhost:3000/api/HospitalList</p>
    <img src="/screenshots/HospitalList.png?raw=true">
</details>
<details>
    <summary>Fetching details of all Ventilators</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. The endpoint to get the List of all Ventilators is : <b>GET</b> >>localhost:3000/api/VentilatorList</p>
    <img src="/screenshots/VentilatorsList.png?raw=true">
</details>
<details>
    <summary>Fetching details of Ventilators with Status and Hospital Name as Parameters</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. The endpoint to search for Ventilators with Status and Hospital Name is : <b>GET</b> >>localhost:3000/api/Ventilator/status/hospital_name</p>
    <img src="/screenshots/Vent_stat_HN.png?raw=true">
</details>
<details>
    <summary>Fetching details of Hospital with Hospital Name as Parameters</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. The endpoint to fetch details of Hospital with Hospital Name is : <b>GET</b> >>localhost:3000/api/Hospital/hospital_name</p>
    <img src="/screenshots/hospital_name.png?raw=true">
</details>
<details>
    <summary>Updating Ventilator Details</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. Attach the feilds to bve Updated to the body of the query</p>
    <p>4. The endpoint to Upadte ventilator details : <b>PUT</b> >>localhost:3000/api/Ventilator/vent_id</p>
    <img src="/screenshots/update_vent_details.png?raw=true">
</details>
<details>
    <summary>Adding new Ventilator</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. Attach the Ventialtor Details to the body of the query</p>
    <p>4. The endpoint to Add new ventilator : <b>POST</b> >>localhost:3000/api/Ventilator</p>
    <img src="/screenshots/adding_vent.png?raw=true">
</details>
<details>
    <summary>Deleteing Ventilator</summary>
    <p>1. Copy the token from the login query result.</p>
    <p>2. Add the token to the headers with key as Authorization and valuse as *Bearer $token*.</p>
    <p>3. The endpoint to Delete ventilator : <b>DELETE</b> >>localhost:3000/api/Ventilator/vent_id</p>
    <img src="/screenshots/delete_vent.png?raw=true">
</details>
