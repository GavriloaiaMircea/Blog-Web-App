# Blog Web App

The Blog Web App is a full-stack web application developed using Node.js, Express.js, and the EJS templating engine. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on blog posts. This project is ideal for learning and understanding the fundamentals of full-stack development, with a focus on server-side rendering, routing, and managing form data in a web application.

## Features

- **Post Creation:** Users can create new blog posts by filling out a form.
- **Post Viewing:** All created posts are displayed on the home page in a clean, responsive layout.
- **Post Editing:** Users can edit existing posts and update the content.
- **Post Deletion:** Users can delete posts they no longer want.
- **Responsive Design:** The application is styled to be modern and looks great on both desktop and mobile devices.

## Technologies Used

- **Node.js:** The server-side environment that runs JavaScript code.
- **Express.js:** A web application framework for Node.js that simplifies routing and middleware management.
- **EJS (Embedded JavaScript):** A templating engine that generates HTML dynamically on the server-side.
- **CSS:** For styling the application and ensuring a responsive design.

## How It Works

This application uses in-memory storage, meaning that all blog posts are stored in an array in the server's memory. As a result, the posts will be lost when the server is restarted. This setup is perfect for learning and prototyping but would need to be extended with a database for production use.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm (Node Package Manager).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GavriloaiaMircea/Blog-Web-App.git
    cd blog-web-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

    Alternatively, if you have `nodemon` installed, you can use:

    ```bash
    nodemon app.js
    ```

2. Open your web browser and go to:

    ```
    http://localhost:3000
    ```

3. From the homepage, you can:
    - Create a new blog post by clicking on "New Post".
    - View all blog posts on the main page.
    - Edit or delete posts using the respective buttons on each post.
