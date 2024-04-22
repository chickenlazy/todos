package net.javaguides.todo;

import net.javaguides.todo.dto.RegisterDto;
import net.javaguides.todo.dto.TodoDto;
import net.javaguides.todo.entity.Role;
import net.javaguides.todo.entity.Todo;
import net.javaguides.todo.entity.User;
import net.javaguides.todo.mapper.TodoMapper;
import net.javaguides.todo.mapper.UserMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;

@SpringBootApplication
public class TodoManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoManagementApplication.class, args);

		//		Todo todo = new Todo(1L, "Learn MapStruct", "Learn how to use MapStruct for mapping", true);
//		TodoDto todoDto = TodoMapper.INSTANCE.mapToTodoDto(todo);
//		System.out.println(todoDto);
//
//		Todo todoBack = TodoMapper.INSTANCE.mapToTodo(todoDto);
//		System.out.println(todoBack);


//		// Khởi tạo một tập hợp rỗng cho các vai trò
//		HashSet<Role> emptyRoles = new HashSet<>();
//
//		// Tạo đối tượng User mới với thông tin cụ thể và không có vai trò
//		User user = new User(null, "Nguyen Van A", "nguyenvana", "nguyenvana@gmail.com", "password123", emptyRoles);
//		RegisterDto registerDto = UserMapper.INSTANCE.mapToRegisterDto(user);
//		System.out.println(user);
//
//		User userBack = UserMapper.INSTANCE.mapToUser(registerDto);
//		System.out.println(registerDto);


	}

}

