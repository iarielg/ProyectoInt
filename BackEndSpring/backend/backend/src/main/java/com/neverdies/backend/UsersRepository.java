package com.neverdies.backend;

import com.neverdies.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
    @Query ("SELECT u FROM User u WHERE u.email=?1")
    Optional<User> findByEmail(String email);
}//interface
