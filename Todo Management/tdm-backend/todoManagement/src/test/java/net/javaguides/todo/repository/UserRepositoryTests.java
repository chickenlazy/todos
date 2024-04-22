package net.javaguides.todo.repository;

import net.javaguides.todo.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByUsernameOrEmail() {
        User newUser = new User();
        newUser.setUsername("testuser");
        newUser.setEmail("testemail@example.com");
        newUser.setPassword("password");
        entityManager.persist(newUser);
        entityManager.flush();

        // Test by username
        Optional<User> foundByUsername = userRepository.findByUsernameOrEmail("testuser");
        assertThat(foundByUsername.isPresent()).isTrue();
        assertThat(foundByUsername.get().getUsername()).isEqualTo("testuser");

        // Test by email
        Optional<User> foundByEmail = userRepository.findByUsernameOrEmail("testemail@example.com");
        assertThat(foundByEmail.isPresent()).isTrue();
        assertThat(foundByEmail.get().getEmail()).isEqualTo("testemail@example.com");
    }
}
