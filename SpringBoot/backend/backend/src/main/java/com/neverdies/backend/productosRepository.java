package com.neverdies.backend;

import com.neverdies.backend.model.productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

public interface productosRepository extends JpaRepository<productos, Long>{
    @Query("SELECT p FROM productos p WHERE p.nombre=?1")//?1 porque es el primer parametro que se dee pasar
    Optional<productos> findByName(String nombre);
}//Interface productosRepository
