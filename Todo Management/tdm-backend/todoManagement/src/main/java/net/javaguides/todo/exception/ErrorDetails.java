package net.javaguides.todo.exception;

import java.time.LocalDateTime;

public class ErrorDetails {
    private LocalDateTime timeStamp;
    private String message;
    private String details;

    // Constructor without parameters
    public ErrorDetails() {
    }

    // Constructor with parameters
    public ErrorDetails(LocalDateTime timeStamp, String message, String details) {
        this.timeStamp = timeStamp;
        this.message = message;
        this.details = details;
    }

    // Getter for timeStamp
    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    // Setter for timeStamp
    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    // Getter for message
    public String getMessage() {
        return message;
    }

    // Setter for message
    public void setMessage(String message) {
        this.message = message;
    }

    // Getter for details
    public String getDetails() {
        return details;
    }

    // Setter for details
    public void setDetails(String details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "ErrorDetails{" +
                "timeStamp=" + timeStamp +
                ", message='" + message + '\'' +
                ", details='" + details + '\'' +
                '}';
    }
}
