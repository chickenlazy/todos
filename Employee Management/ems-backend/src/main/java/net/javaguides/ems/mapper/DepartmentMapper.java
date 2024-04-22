package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department) {
        if (department == null) {
            throw new IllegalArgumentException("Department object cannot be null.");
        }
        DepartmentDto dto = new DepartmentDto();
        dto.setId(department.getId());
        dto.setName(department.getName());
        dto.setDescription(department.getDescription());
        return dto;
    }

    public static Department mapToDepartment(DepartmentDto departmentDto) {
        if (departmentDto == null) {
            throw new IllegalArgumentException("DepartmentDto object cannot be null");
        }
        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setName(departmentDto.getName());
        department.setDescription(departmentDto.getDescription());
        return department;
    }
}
