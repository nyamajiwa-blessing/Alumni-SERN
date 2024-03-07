# Alumni Management System (Alumni-SERN)

Welcome to the Alumni Management System repository! This system is designed to assist universities/colleges in managing their alumni data effectively. The system consists of two main components: frontend and server.

## Project Overview

The Alumni Management System has been developed with the following key features:

- **Admin Side**: 
  - Manages job listings, alumni data, events, forum topics, and gallery.
  - Verifies alumnus/alumna accounts.
  - Creates and manages the about content of the school.
  
- **Alumni Side**:
  - Registers and waits for verification from the admin.
  - Explores job opportunities posted by other alumni or admin.
  - Views a list of upcoming events.
  - Joins forums with other alumni.

## Flow of the System

1. **User Registration**: Alumni register on the website and await verification from the school management.
2. **Admin Verification**: School management verifies alumni accounts to enlist them as users on the website.
3. **Alumni Interaction**: Verified alumni explore the system's features, including job opportunities, events, and forums.
4. **Admin Management**: The admin oversees account verification, alumni lists, gallery management, and school about content.

## Folder Structure

- **frontend/**: Contains the frontend code developed in ReactJS.
- **server/**: Contains the backend code developed in Node.js and Express.js.
  - **alumni_db.sql**: SQL database file containing alumni data.

## Getting Started

To set up the Alumni Management System locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ranajunaidhashim/Alumni-SERN.git`
2. Navigate to the `frontend` folder and install dependencies: `cd frontend && npm install`
3. Navigate to the `server` folder and install dependencies: `cd ../server && npm install`
4. Import the `alumni_db.sql` file into your SQL database.
5. Configure the server to connect to your database.
6. Start the frontend and backend servers: `npm start` in both `frontend` and `server` folders.

## Contributing

Contributions to the Alumni Management System are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request.

Thank you for using the Alumni Management System! If you have any questions or need assistance, please don't hesitate to contact us.
