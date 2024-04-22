package net.javaguides.todo.service.impl;

import net.javaguides.todo.dto.TodoDto;
import net.javaguides.todo.entity.Todo;
import net.javaguides.todo.exception.ResourceNotFoundException;
import net.javaguides.todo.mapper.TodoMapper;
import net.javaguides.todo.repository.TodoRepository;
import net.javaguides.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        // Chuyển đổi TodoDto thành Todo entity
        Todo todo = TodoMapper.INSTANCE.mapToTodo(todoDto);
        // Lưu Todo vào cơ sở dữ liệu
        Todo savedTodo = todoRepository.save(todo);
        // Chuyển đổi entity trả về thành TodoDto
        return TodoMapper.INSTANCE.mapToTodoDto(savedTodo);
    }

    @Override
    public TodoDto getTodoById(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));
        return TodoMapper.INSTANCE.mapToTodoDto(todo);
    }

    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> todos = todoRepository.findAll();
        return todos.stream().map(TodoMapper.INSTANCE::mapToTodoDto).collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(Long id, TodoDto todoDto) {
        Todo existingTodo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));
        existingTodo.setTitle(todoDto.getTitle());
        existingTodo.setDescription(todoDto.getDescription());
        existingTodo.setCompleted(todoDto.isCompleted());
        Todo updatedTodo = todoRepository.save(existingTodo);
        return TodoMapper.INSTANCE.mapToTodoDto(updatedTodo);
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));
        todoRepository.delete(todo);
    }

    @Override
    public TodoDto completeTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));

        todo.setCompleted(true); // Set the completed status to true
        Todo savedTodo = todoRepository.save(todo); // Save the updated todo
        return TodoMapper.INSTANCE.mapToTodoDto(savedTodo); // Return the updated todo DTO
    }

    @Override
    public TodoDto incompleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));

        todo.setCompleted(false); // Set the completed status to false
        Todo savedTodo = todoRepository.save(todo); // Save the updated todo
        return TodoMapper.INSTANCE.mapToTodoDto(savedTodo); // Return the updated todo DTO
    }
}
