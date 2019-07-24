# express_backend_service
Middle Layer Service to retrieve a list of users from https://jsonplaceholder.typicode.com/users using Express.

Backend
Create a middle layer server in Express to retrieves a list of users from https://jsonplaceholder.typicode.com/users.
This API should follow RESTful patterns (including error handling) and return only the values needed by the frontend.
Include unit tests to validate the implemenantion.

Frontend
Create a React App that retrieves a list of users from from the Express backend.
For each user create a button with the user's first and last name that when clicked toggles the user's phone number and address below the user's first and last name. 
The exact look of the UI is up to you as long as the information is legible. Write a unit test using Jest to ensure that clicking the button toggles the visibility of the user's address.
