# Sports Car Application

Welcome to the **Sports Car Application**! This project is a small web application built with **React** (TypeScript) for the frontend and **Java** with **Spring Boot** for the backend. It allows users to browse through a collection of sports cars, search for cars by name or color, view detailed information about each car, and interact with a simple checkout process.

## Features

- **Homepage Carousel**: A visually appealing carousel component showcasing cars fetched from the database.
- **Search Cars**: Users can search for cars by name or select colors to filter the displayed cars.
- **Detailed Car View**: Provides detailed information about each car including its model, color, fuel type, year, availability, type, and an image.
- **Star Reviews**: Although the functionality is not yet fully implemented, users can expect to see star reviews once the sign-in feature is integrated.
- **Pagination Support**: Implemented pagination for easier navigation through the list of cars.

## Backend Configuration

The backend of the application is powered by **Spring Boot** and **MySQL**. Here's a brief overview of the backend components:

### Configuration

- **MyDataRestConfig**: Configures repository REST endpoints, exposes entity IDs, and disables unsupported HTTP methods.
- **Database Configuration**: Connects to the MySQL database using Spring Data JPA.

### DAO (Data Access Object)

- **CarRepository**: Defines methods to interact with the `Car` entity, such as searching by model or color.

### Entity

- **Car**: Represents a sports car entity with properties like model, color, fuel type, year, availability, type, and image URL.

### Database Configuration

- Configures the MySQL database connection properties including the driver class, URL, username, password, and Hibernate dialect.

## Installation and Setup

To run the Sports Car Application locally, follow these steps:

1. **Clone the Repositories**:
   - Backend: [sportCarAppBackend](https://github.com/VladislavsDanilovs/sportCarAppBackend)
   - Frontend: [sportCarAppFrontend](https://github.com/VladislavsDanilovs/sportCarAppFrontend)

2. **Backend Setup**:
   - Ensure you have Java and Maven installed.
   - Navigate to the `sportCarAppBackend` directory.
   - Modify `application.properties` with your MySQL database credentials if necessary.
   - Run the SQL scripts `sportCarAppDBScripts-1.sql` and `sportCarAppDBScripts-2.sql` to create tables and fill them with information and car images (as BLOBs).
   - Run `mvn spring-boot:run` to start the backend server.

3. **Frontend Setup**:
   - Ensure you have Node.js and npm installed.
   - Navigate to the `sportCarAppFrontend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the frontend server.

4. **Access the Application**: Open `http://localhost:3000` in your web browser to view the application.

<img width="960" alt="image" src="https://github.com/VladislavsDanilovs/sportCarAppFrontend/assets/94972469/e8152126-16fd-4d33-88f3-30296d231020">
<img width="960" alt="image" src="https://github.com/VladislavsDanilovs/sportCarAppFrontend/assets/94972469/5ca8ae18-dea4-425e-889a-de542ec64611">
<img width="961" alt="image" src="https://github.com/VladislavsDanilovs/sportCarAppFrontend/assets/94972469/b2b11ae1-f804-4e84-a9b5-51be11019744">

<img width="960" alt="image" src="https://github.com/VladislavsDanilovs/sportCarAppFrontend/assets/94972469/99ff271e-9d0b-480a-80b5-01243297e586">
<img width="950" alt="image" src="https://github.com/VladislavsDanilovs/sportCarAppFrontend/assets/94972469/4c813ad1-d01f-4d76-b83d-6f0b1e295f70">



