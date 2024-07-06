# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file into the container
COPY target/producer-0.0.1-SNAPSHOT.jar kafka-producer.jar

# Expose the port the application runs on
EXPOSE 8082

# Run the jar file
ENTRYPOINT ["java", "-jar", "kafka-producer.jar"]
