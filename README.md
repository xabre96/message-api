Message API

Dependencies:
- node
- npm

Prerequisites:
- Run `npm install` to install API dependencies.
- Run `npm start` to start the API.

base URL: `http://localhost:3000`

endpoints:
- POST `/message`


    Headers:
    * Content-Type: application/json - <REQUIRED>

    Parameters:
    * conversation_id - <REQUIRED>
    * message - <REQUIRED>

    Response:
    * response_id
    * response