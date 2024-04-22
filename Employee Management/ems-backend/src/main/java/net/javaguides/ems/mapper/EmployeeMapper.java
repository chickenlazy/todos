package net.javaguides.ems.mapper;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Department;
import net.javaguides.ems.entity.Employee;
import net.javaguides.ems.repository.DepartmentRepository;
import net.javaguides.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMapper {

    private static DepartmentRepository departmentRepository;

    @Autowired
    public EmployeeMapper(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        if (employee == null) {
            throw new IllegalArgumentException("Employee object cannot be null.");
        }
        EmployeeDto dto = new EmployeeDto();
        dto.setId(employee.getId());
        dto.setFirstName(employee.getFirstName());
        dto.setLastName(employee.getLastName());
        dto.setEmail(employee.getEmail());
        dto.setDepartment_id(employee.getDepartment().getId());
        return dto;
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        if (employeeDto == null) {
            throw new IllegalArgumentException("EmployeeDto object cannot be null");
        }

        Department department = departmentRepository.findById(employeeDto.getDepartment_id())
                .orElseThrow(() -> new IllegalArgumentException("No department found with id: " + employeeDto.getDepartment_id()));

        Employee employee = new Employee();
        employee.setId(employeeDto.getId());
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employee.setDepartment(department);


        return employee;
    }
}
