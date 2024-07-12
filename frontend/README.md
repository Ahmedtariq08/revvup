# Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next-dot-js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-FF5733?style=for-the-badge&logo=formik&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-55c57a?style=for-the-badge&logoColor=white)

## Getting Started

To get a local copy up and running
Populate the enviroment vairables accordingly
follow these steps:

```bash
git clone [repo]
cd your-repo
npm install 
npm run dev
```

# Features

## Authentication
- Firebase authentication using email and password, token verification on the server
- Using auth provider to keep the user details and token
- Routing based on sign in, sign out and unauthorized 

## Validation
- Type safe form validations using Zod schema
- Api response and request object parsing
- Consistent schemas for frontend and backend

## API / Error Handling
- Axios with type safe wrapper to make api calls
- Custom error handling using interceptors

## User Interface
- Material UI interface with custom theme
- Loading signs, response web design and proper color scheme

## State Management
- Global statement using redux-toolkit, setup of slices and store
- Using selectors to subscribe to store changes, such as notifications and users