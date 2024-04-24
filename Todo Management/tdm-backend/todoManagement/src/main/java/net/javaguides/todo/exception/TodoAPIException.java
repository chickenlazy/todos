package net.javaguides.todo.exception;

import org.springframework.http.HttpStatus;

public class TodoAPIException extends RuntimeException {

    private HttpStatus httpStatus;
    private String message;

    public TodoAPIException(HttpStatus httpStatus, String message) {
        super(message);  // Call the parent class (RuntimeException) constructor
        this.httpStatus = httpStatus;
        this.message = message;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public String getMessage() {
        return message;
    }
}
