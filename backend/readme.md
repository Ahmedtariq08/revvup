# Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next-dot-js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## Setup

1. Clone the repository
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Copy `.env.prototype` to `.env`: `cp .env.prototype .env`
5. Fill in your Firebase project details in the `.env` file
6. Build and start the emulators: `npm run serve`

# User Management API
This API provides functionalities to manage users in the application. It allows you to fetch, create, update, and delete users.

## Endpoints
**Base Path** `/users`

### Get All Users
Fetches all users from the database.

- **URL:** `/fetch-user-data`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - `200 OK`: Returns a list of users.
  - `Error`: Returns an error message if unable to fetch users.


### Create a New User
Creates a new user in the database.

- **URL:** `/create-user`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
  - JSON object representing the user to be created.
- **Response:**
  - `201 Created`: Returns the created user.
  - `Error`: Returns an error message if unable to create the user.

### Update Existing User

Updates the data of an existing user.

- **URL:** `/update-user-data`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
  - JSON object representing the user data to be updated.
- **Response:**
  - `200 OK`: Returns the updated user.
  - `404 Not Found`: Returns an error message if the user is not found.
  - `Error`: Returns an error message if unable to update the user.

### Delete an Existing User

Deletes an existing user from the database.

- **URL:** `/delete-user/:id`
- **Method:** `DELETE`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Params:**
  - `id` (string): The ID of the user to be deleted.
- **Response:**
  - `200 OK`: Returns a success message if the user is deleted.
  - `404 Not Found`: Returns an error message if the user is not found.
  - `Error`: Returns an error message if unable to delete the user.