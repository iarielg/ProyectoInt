package com.neverdies.backend;

import com.neverdies.backend.model.accesorios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AccesoriosRepository extends JpaRepository<accesorios, Long> {
    @Query("SELECT p FROM accesorios p WHERE p.nombre=?1")//?1 porque es el primer parametro que se dee pasar
    Optional<accesorios> findByName(String nombre);
}//Interface productosRepository
