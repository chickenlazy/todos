package net.javaguides.ems.service;

import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.exception.ResourceNotFoundException;

import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long departmentId) throws ResourceNotFoundException;

    List<DepartmentDto> getAllDepartments();

    DepartmentDto updateDepartment(Long departmentId, DepartmentDto departmentDto) throws ResourceNotFoundException;

    void deleteDepartment(Long departmentId) throws ResourceNotFoundException;
}
