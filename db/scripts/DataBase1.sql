-- MySQL Script generated by MySQL Workbench
-- Mon Nov 29 22:47:36 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Categoria` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Categoria` (
  `idCategoria` INT UNSIGNED NOT NULL,
  `NombreCategoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idCategoria`),
  UNIQUE INDEX `idCategoria_UNIQUE` (`idCategoria` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tipo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Tipo` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Tipo` (
  `idTipo` INT NOT NULL,
  `NombreTipo` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idTipo`),
  UNIQUE INDEX `idTipo_UNIQUE` (`idTipo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Producto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Producto` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NOT NULL,
  `Categoria` INT NOT NULL,
  `Talla` VARCHAR(10) NULL,
  `Genero` VARCHAR(10) NOT NULL,
  `Precio` DECIMAL(2) NOT NULL,
  `Color` VARCHAR(20) NOT NULL,
  `Imagen` VARCHAR(300) NOT NULL,
  `Descripcion` VARCHAR(800) NOT NULL,
  `Categoria_idCategoria` INT UNSIGNED NOT NULL,
  `Tipo_idTipo` INT NOT NULL,
  `Cantidad_idCantidad` INT NOT NULL,
  PRIMARY KEY (`idProducto`, `Categoria_idCategoria`, `Tipo_idTipo`, `Cantidad_idCantidad`),
  UNIQUE INDEX `idProductos_UNIQUE` (`idProducto` ASC) VISIBLE,
  INDEX `fk_Productos_Categoria_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  INDEX `fk_Productos_Tipo1_idx` (`Tipo_idTipo` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Categoria`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `mydb`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_Tipo1`
    FOREIGN KEY (`Tipo_idTipo`)
    REFERENCES `mydb`.`Tipo` (`idTipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TipoUsuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`TipoUsuario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`TipoUsuario` (
  `idTipoUsuario` INT NOT NULL,
  `TipoUsuario` VARCHAR(45) NULL,
  PRIMARY KEY (`idTipoUsuario`),
  UNIQUE INDEX `idTipoUsuario_UNIQUE` (`idTipoUsuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `NombreUsuario` VARCHAR(60) NOT NULL,
  `Correo` VARCHAR(60) NOT NULL,
  `Telefono` VARCHAR(10) NOT NULL,
  `ContrasenaUsuario` VARCHAR(45) NOT NULL,
  `TipoUsuario_idTipoUsuario` INT NOT NULL,
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) VISIBLE,
  PRIMARY KEY (`idUsuario`, `TipoUsuario_idTipoUsuario`),
  INDEX `fk_Usuario_TipoUsuario1_idx` (`TipoUsuario_idTipoUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_TipoUsuario1`
    FOREIGN KEY (`TipoUsuario_idTipoUsuario`)
    REFERENCES `mydb`.`TipoUsuario` (`idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pedido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Pedido` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Pedido` (
  `idPedido` INT NOT NULL,
  `Cantidad` INT NOT NULL,
  `Fecha` DATE NOT NULL,
  `TotalPedido` DECIMAL(6,2) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Usuario_TipoUsuario_idTipoUsuario` INT NOT NULL,
  PRIMARY KEY (`idPedido`, `Usuario_idUsuario`, `Usuario_TipoUsuario_idTipoUsuario`),
  INDEX `fk_Pedido_Usuario1_idx` (`Usuario_idUsuario` ASC, `Usuario_TipoUsuario_idTipoUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario` , `Usuario_TipoUsuario_idTipoUsuario`)
    REFERENCES `mydb`.`Usuario` (`idUsuario` , `TipoUsuario_idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Inventario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Inventario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Inventario` (
  `idInventario` INT NOT NULL,
  `Color` VARCHAR(45) NULL,
  `Talla` VARCHAR(45) NULL,
  `Stock` INT NULL,
  `Pedido_idPedido` INT NOT NULL,
  `Pedido_Usuario_idUsuario` INT NOT NULL,
  `Pedido_Usuario_TipoUsuario_idTipoUsuario` INT NOT NULL,
  PRIMARY KEY (`idInventario`, `Pedido_idPedido`, `Pedido_Usuario_idUsuario`, `Pedido_Usuario_TipoUsuario_idTipoUsuario`),
  INDEX `fk_Inventario_Pedido1_idx` (`Pedido_idPedido` ASC, `Pedido_Usuario_idUsuario` ASC, `Pedido_Usuario_TipoUsuario_idTipoUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Inventario_Pedido1`
    FOREIGN KEY (`Pedido_idPedido` , `Pedido_Usuario_idUsuario` , `Pedido_Usuario_TipoUsuario_idTipoUsuario`)
    REFERENCES `mydb`.`Pedido` (`idPedido` , `Usuario_idUsuario` , `Usuario_TipoUsuario_idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Producto_has_Inventario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Producto_has_Inventario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Producto_has_Inventario` (
  `Producto_idProducto` INT NOT NULL,
  `Producto_Categoria_idCategoria` INT UNSIGNED NOT NULL,
  `Producto_Tipo_idTipo` INT NOT NULL,
  `Producto_Cantidad_idCantidad` INT NOT NULL,
  `Inventario_idInventario` INT NOT NULL,
  `Inventario_Pedido_idPedido` INT NOT NULL,
  `Inventario_Pedido_Usuario_idUsuario` INT NOT NULL,
  `Inventario_Pedido_Usuario_TipoUsuario_idTipoUsuario` INT NOT NULL,
  PRIMARY KEY (`Producto_idProducto`, `Producto_Categoria_idCategoria`, `Producto_Tipo_idTipo`, `Producto_Cantidad_idCantidad`, `Inventario_idInventario`, `Inventario_Pedido_idPedido`, `Inventario_Pedido_Usuario_idUsuario`, `Inventario_Pedido_Usuario_TipoUsuario_idTipoUsuario`),
  INDEX `fk_Producto_has_Inventario_Inventario1_idx` (`Inventario_idInventario` ASC, `Inventario_Pedido_idPedido` ASC, `Inventario_Pedido_Usuario_idUsuario` ASC, `Inventario_Pedido_Usuario_TipoUsuario_idTipoUsuario` ASC) VISIBLE,
  INDEX `fk_Producto_has_Inventario_Producto1_idx` (`Producto_idProducto` ASC, `Producto_Categoria_idCategoria` ASC, `Producto_Tipo_idTipo` ASC, `Producto_Cantidad_idCantidad` ASC) VISIBLE,
  CONSTRAINT `fk_Producto_has_Inventario_Producto1`
    FOREIGN KEY (`Producto_idProducto` , `Producto_Categoria_idCategoria` , `Producto_Tipo_idTipo` , `Producto_Cantidad_idCantidad`)
    REFERENCES `mydb`.`Producto` (`idProducto` , `Categoria_idCategoria` , `Tipo_idTipo` , `Cantidad_idCantidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Producto_has_Inventario_Inventario1`
    FOREIGN KEY (`Inventario_idInventario` , `Inventario_Pedido_idPedido` , `Inventario_Pedido_Usuario_idUsuario` , `Inventario_Pedido_Usuario_TipoUsuario_idTipoUsuario`)
    REFERENCES `mydb`.`Inventario` (`idInventario` , `Pedido_idPedido` , `Pedido_Usuario_idUsuario` , `Pedido_Usuario_TipoUsuario_idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;