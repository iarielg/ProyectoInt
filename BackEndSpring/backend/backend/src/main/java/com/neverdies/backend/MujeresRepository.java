package com.neverdies.backend;

import com.neverdies.backend.model.mujeres;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MujeresRepository extends JpaRepository<mujeres, Long> {
    @Query("SELECT p FROM mujeres p WHERE p.nombre=?1")//?1 porque es el primer parametro que se dee pasar
    Optional<mujeres> findByName(String nombre);
}//Interface productosRepository

