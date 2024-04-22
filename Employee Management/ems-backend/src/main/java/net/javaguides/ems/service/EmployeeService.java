package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.exception.ResourceNotFoundException;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto) throws ResourceNotFoundException;
    EmployeeDto getEmployeeById(Long employeeId) throws ResourceNotFoundException;

    List<EmployeeDto > getAllEmployee();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto) throws ResourceNotFoundException;

    void deleteEmployee(Long employeeId) throws ResourceNotFoundException;















}
