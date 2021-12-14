package com.neverdies.backend;

import com.neverdies.backend.model.accesorios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AccesoriosRepository extends JpaRepository<accesorios, Long> {
}//Interface productosRepository
