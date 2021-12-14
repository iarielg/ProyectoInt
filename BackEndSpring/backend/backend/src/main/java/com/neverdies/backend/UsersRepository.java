package com.neverdies.backend;

import com.neverdies.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepsitory<User, Long> {
}//interface
