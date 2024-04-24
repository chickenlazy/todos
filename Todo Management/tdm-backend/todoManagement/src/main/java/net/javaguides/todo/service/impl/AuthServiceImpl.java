package net.javaguides.todo.service.impl;

import net.javaguides.todo.dto.JwtAuthResponse;
import net.javaguides.todo.dto.LoginDto;
import net.javaguides.todo.dto.RegisterDto;
import net.javaguides.todo.entity.Role;
import net.javaguides.todo.entity.User;
import net.javaguides.todo.exception.TodoAPIException;
import net.javaguides.todo.mapper.UserMapper;
import net.javaguides.todo.repository.RoleRepository;
import net.javaguides.todo.repository.UserRepository;
import net.javaguides.todo.security.JwtTokenProvider;
import net.javaguides.todo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    public AuthServiceImpl(UserRepository userRepository, RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public String register(RegisterDto registerDto) {
        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new TodoAPIException(HttpStatus.BAD_REQUEST, "Tên người dùng đã tồn tại");
        }

        if (userRepository.existsByEmail(registerDto.getEmail())) {
            throw new TodoAPIException(HttpStatus.BAD_REQUEST, "Email đã tồn tại");
        }

        User user = UserMapper.INSTANCE.mapToUser(registerDto);
        user.setPassword(passwordEncoder.encode(registerDto.getPassword())); // Mã hóa mật khẩu

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);
        user = userRepository.save(user);
        return "Người dùng đã được đăng ký thành công với ID " + user.getId();
    }

    //Xác thực User -> Tạo token, lấy role -> Tạo obj jwtAuthResponse với các value trên
    @Override
    public JwtAuthResponse login(LoginDto loginDto) {
        //1. Tạo đối tượng authentication từ loginDto
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsernameOrEmail(), loginDto.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        //2. Tạo một token JWT dựa trên thông tin trong đối tượng Authentication và gán vào biến AccessToken của JwtAuthResponse
        String token = jwtTokenProvider.generateToken(authentication);

        //3. Kiểm tra Role của User, lấy role đầu tiên gán vào biến role của JwtAuthResponse
        Optional<User> userOptional = userRepository.findByUsernameOrEmail(loginDto.getUsernameOrEmail());
        String role = null;
        if(userOptional.isPresent()) {
            User loggedInUser  = userOptional.get();
            Optional<Role> optionalRole = loggedInUser.getRoles().stream().findFirst(); //

            if(optionalRole.isPresent()) {
                Role userRole = optionalRole.get();
                role = userRole.getName();
            }
        }

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setRole(role);
        jwtAuthResponse.setAccessToken(token);

        return  jwtAuthResponse;

    }
}
