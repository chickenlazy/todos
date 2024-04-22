    package net.javaguides.todo.service;

    import net.javaguides.todo.dto.TodoDto;

    import java.util.List;


    public interface TodoService {
        TodoDto addTodo(TodoDto todoDto);
        TodoDto getTodoById(Long id);
        List<TodoDto> getAllTodos();
        TodoDto updateTodo(Long id, TodoDto todoDto);
        void deleteTodo(Long id);
        TodoDto completeTodo(Long id);
        TodoDto incompleteTodo(Long id);
    }

