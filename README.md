# Chat Application with Apache Kafka and Spring Boot

Welcome to the chat application built using Apache Kafka, Spring Boot, and Docker. This guide will walk you through the steps to set up and run the project.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Prerequisites](#prerequisites)
5. [Installation Guide](#installation-guide)
   - [Using Docker](#using-docker)
   - [Without Docker](#without-docker)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This is a real-time chat application that uses Apache Kafka for message brokering and Spring Boot for the backend. The frontend is built with React, providing a simple interface for sending and receiving messages.

## Features

- Real-time messaging
- Kafka-based message brokering
- REST API for sending and receiving messages
- Docker support for easy setup and deployment

## Technologies Used

- Apache Kafka
- Spring Boot
- React
- Docker
- Maven

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Java JDK 11 or higher](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven](https://maven.apache.org/install.html)
- [Node.js and npm](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop) (for Docker setup)

## Installation Guide

### Using Docker

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/chat-application.git
   cd chat-application
   ```

2. **Start Docker Services**

   Ensure Docker is running, then start the services using Docker Compose.

   ```sh
   docker-compose up -d
   ```

3. **Build and Run the React Application**

   Navigate to the frontend directory and start the React application.

   ```sh
   cd frontend-ui
   npm install
   npm start
   ```

4. **Access the Application**

   Open your browser and navigate to `http://localhost:3000`.

### Without Docker

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/chat-application.git
   cd chat-application
   ```

2. **Set Up Kafka and Zookeeper**

   - Download and extract [Apache Kafka](https://kafka.apache.org/downloads).
   - Start Zookeeper:

     ```sh
     bin/zookeeper-server-start.sh config/zookeeper.properties
     ```

   - Start Kafka:

     ```sh
     bin/kafka-server-start.sh config/server.properties
     ```

3. **Build and Run the Spring Boot Applications**

   Open two terminal windows for the producer and consumer services.

   - **Producer Service:**

     ```sh
     cd producer
     mvn clean install
     mvn spring-boot:run
     ```

   - **Consumer Service:**

     ```sh
     cd consumer
     mvn clean install
     mvn spring-boot:run
     ```

4. **Build and Run the React Application**

   Navigate to the frontend directory and start the React application.

   ```sh
   cd frontend-ui
   npm install
   npm start
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Send a Message:**
  - Type your message in the "Send Message" box and click "Send".
  
- **Receive Messages:**
  - Messages sent by all users will appear in the "Received Messages" box.

## Project Structure

```sh
springboot-kafka-docker/
├── consumer/          # Spring Boot consumer application
├── producer/          # Spring Boot producer application
├── frontend-ui/       # React frontend application
├── docker-compose.yml # Docker Compose file
├── README.md          # Project README file
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the Apache 2.0 License.
