package net.javaguides.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    // Constructor mặc định
    public ResourceNotFoundException() {
        super();
    }

    // Constructor với thông điệp lỗi
    public ResourceNotFoundException(String message) {
        super(message);
    }

    // Constructor với thông điệp lỗi và nguyên nhân
    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    // Constructor với nguyên nhân
    public ResourceNotFoundException(Throwable cause) {
        super(cause);
    }
}
