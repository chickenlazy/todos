package net.javaguides.todo.dto;

public class LoginDto {
    private String usernameOrEmail;
    private String password;

    // Constructor mặc định
    public LoginDto() {
    }

    // Constructor với các tham số
    public LoginDto(String usernameOrEmail, String password) {
        this.usernameOrEmail = usernameOrEmail;
        this.password = password;
    }

    // Getter cho usernameOrEmail
    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    // Setter cho usernameOrEmail
    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }

    // Getter cho password
    public String getPassword() {
        return password;
    }

    // Setter cho password
    public void setPassword(String password) {
        this.password = password;
    }
}
