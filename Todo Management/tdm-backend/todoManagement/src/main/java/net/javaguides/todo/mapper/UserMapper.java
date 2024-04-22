package net.javaguides.todo.mapper;

import net.javaguides.todo.dto.RegisterDto;
import net.javaguides.todo.dto.TodoDto;
import net.javaguides.todo.entity.Todo;
import net.javaguides.todo.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

//    TodoMapper INSTANCE = Mappers.getMapper(TodoMapper.class);
//
//    TodoDto mapToTodoDto(Todo todo);
//    Todo mapToTodo(TodoDto todoDto);

    //		Todo todo = new Todo(1L, "Learn MapStruct", "Learn how to use MapStruct for mapping", true);
//		TodoDto todoDto = TodoMapper.INSTANCE.mapToTodoDto(todo);
//		System.out.println(todoDto);
//
//		Todo todoBack = TodoMapper.INSTANCE.mapToTodo(todoDto);
//		System.out.println(todoBack);

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    RegisterDto mapToRegisterDto(User user);
    User mapToUser(RegisterDto registerDto);
}
