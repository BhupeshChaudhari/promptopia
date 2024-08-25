# Promptopia 

PromptoPia is an open-source AI prompting tool that allows users to discover, create, and share creative prompts. It provides a personalized profile page where users can manage their prompts
(https://github.com/BhupeshChaudhari/promptopia/blob/main/Screenshot%20(396).png)
## Features

- **User Authentication :** Secure user sign-up and login using NextAuth.js.
- **Create and Manage Prompts :** Users can create, edit, and delete prompts.
- **Profile Management :** Each user has a personalized profile page to manage their content.
- **MongoDB Integration :** All prompts and user data are stored in MongoDB.
- **Search Functionality :** Users can search for prompts using tags or usernames.
- **Responsive Design :** The application is responsive and works well on all devices.

## Technologies Used

- **Next.js** 
- **NextAuth.js**
- **MongoDB**
- **Tailwind CSS**

### Steps

1. Clone the repository :
```
git clone https://github.com/yourusername/PromptoPia.git
cd PromptoPia
```

2. Install dependencies : 
```
npm install
```

3. Create a .env file in the root directory and add your environment variables :
```
MONGODB_URI=your_mongodb_uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=google_id
GOOGLE_CLIENT_SECRET=google_client_secret_key
```

4. Run the development server :
```
npm run dev
```
