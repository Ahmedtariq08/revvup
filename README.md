# Task
**Developer:** Ahmed Bin Tariq  
**Date:** 12 July, 2024

### Part 1: Backend Setup

#### Create a Backend Repository
- **Repository Name:** backend-repo
- **Framework:** Express.js
- **Setup:** Initialize Firebase SDK in your project.

#### Directory Structure
Create the following folders:
- `routes`
- `controller`
- `middleware`
- `config`

#### Endpoint and Middleware Creation
- **Endpoint Name:** update-user-data
  - **Functionality:** Updates Firestore data in the USERS collection.
- **Endpoint Name:** fetch-user-data
  - **Functionality:** Fetch Firestore data in the USERS collection.
- **Middleware:** Create a simple `authMiddleware` to validate the request token.

#### Error Handling
Create an `ApiError` class to standardize error responses.

#### Example Directory Structure and Code
```
backend-repo/
├── config/
│ └── firebaseConfig.ts
├── controller/
│ └── api.ts
├── core/
│ └── app.ts
├── entities/
│ └── ApiError.ts
├── middleware/
│ └── authMiddleware.ts
├── repository/
│ └── userCollection.ts
├── routes/
│ └── userRoutes.ts
└── package.json
```


---

### Part 2: Frontend Setup

#### Create a Frontend Repository
- **Repository Name:** frontend-repo
- **Framework:** Next.js
- **UI Library:** React MUI

#### Directory Structure
Create the following folders:
- `apis`
- `components`
- `store`
- `theme`
- `app`

#### Setup Redux
- Configure Redux for state management.
- Setup and configure React-MUI Theme.
- Setup Firebase auth login and create a basic Logic Form.

#### Logic Form
- The Logic Form needs to be mobile responsive with the help of React MUI configuration.
- Use App Router (Next.js 13+) to navigate between login and main page.

#### Button and Update Data API Integration
- **Button:** Create a button to trigger the backend endpoint.
  - I should get an unauthorized error when I click the button without logging in.
- **API Abstraction:** Ensure proper abstraction for API calls.
- **State Management:** Use Redux to manage and display the state of the update process, including loading, success, and error messages using Typography.

#### Display Label with Fetch Data API Integration using SSR
- Make the FE repo able to test API calling locally using Firebase Emulator if I run `npm run build && firebase emulators:start --only functions` on the BE repo.

#### Submission
Please submit your BE and FE GitHub public repo link to hello@ebuddy.gg when you are done.

#### Example Directory Structure and Code
```
frontend-repo/
├── apis/
│ └── userApi.ts
├── theme/...
├── app/...
├── components/
│ └── UpdateButton.tsx
├── store/
│ ├── actions.ts
│ ├── reducers.ts
│ └── store.ts
└── package.json
```
