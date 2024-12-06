# Home Inventory Management App

This is an inventory management application that helps users track, manage, and update their home inventory.

# Live Preview
https://inventory-app-24a9.onrender.com/

Note: Using free tier PostgreSQL Database on Render, if data does not load it means the database free period has ended.

## Features

- **Add Items**: Add new items to the inventory with details like name, category, type and price.
- **Delete Items**: Remove items or categories from the inventory when no longer needed.
- **Search Functionality**: Quickly find items based on their name or category by using searchbar.
- **User-Friendly Interface**: Simple and intuitive design for ease of use.

## Technologies Used

The app is built using the following technologies:

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Other Tools**: Axios, React Router

## Installation and Usage

Follow the steps below to run the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/inventory-app.git

2. **Install**
   ```bash
   cd inventory-app
   npm install
   
3. **Setup database**
   - Connect postgreSQL database
   - Add .env file to project directory and include database details:
    ```code
    DB_USER=
    DB_NAME=
    DB_PASSWORD=
    DB_HOST=
    DB_PORT=5432
    DATABASE_URL=
    ```
   
4. **Create tables and dummy data**
   ```bash
   cd server
   node db/createTables.js
   node db/seed.js

5. **Start server**
   ```bash
   cd server
   npm run dev

6. **Start client**
   ```bash
   cd client
   npm run dev
