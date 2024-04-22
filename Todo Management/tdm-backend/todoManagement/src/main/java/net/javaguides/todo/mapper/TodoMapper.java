package net.javaguides.todo.mapper;

import net.javaguides.todo.dto.TodoDto;
import net.javaguides.todo.entity.Todo;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TodoMapper {
    TodoMapper INSTANCE = Mappers.getMapper(TodoMapper.class);

    TodoDto mapToTodoDto(Todo todo);
    Todo mapToTodo(TodoDto todoDto);

    //		Todo todo = new Todo(1L, "Learn MapStruct", "Learn how to use MapStruct for mapping", true);
//		TodoDto todoDto = TodoMapper.INSTANCE.mapToTodoDto(todo);
//		System.out.println(todoDto);
//
//		Todo todoBack = TodoMapper.INSTANCE.mapToTodo(todoDto);
//		System.out.println(todoBack);
}
