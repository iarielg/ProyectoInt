-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: neverdiesdb
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mujeres`
--

DROP TABLE IF EXISTS `mujeres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mujeres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `precio` decimal(5,0) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `talla` varchar(45) DEFAULT NULL,
  `genero` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mujeres`
--

LOCK TABLES `mujeres` WRITE;
/*!40000 ALTER TABLE `mujeres` DISABLE KEYS */;
INSERT INTO `mujeres` VALUES (1,'Gran Navidad','Sueter con reno alas verdes','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975624/neverdiesco/mujeres/MPlayera100_hxzsyw.jpg',360,'Negro','M','M'),(2,'Estilo Never','Nuevo modelo cuello redondo manga larga','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975627/neverdiesco/mujeres/MPlayera109_h72ve4.jpg',340,'Negro','M','M'),(3,'Lobo Anillado','Blusa negra sin mangas con escote','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975625/neverdiesco/mujeres/MPlayera103_xwt6qm.jpg',320,'Negro','M','M'),(4,'Mishi Negro','Chaleco mezclilla con estampado en espalda de gato negro','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975627/neverdiesco/mujeres/MPlayera104_stbjuq.jpg',420,'Negro','M','M'),(5,'Defensor','Esqueleto con Espada mangas verdes','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975630/neverdiesco/mujeres/MPlayera108_vjcey7.jpg',370,'Negro','M','M'),(6,'Vestido Inverso','Vestido Negro manga corta ','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975627/neverdiesco/mujeres/MPlayera106_p0jsjq.jpg',480,'Negro','M','M'),(7,'Navidad Roja','Sueter rojo estilo navidad never','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975626/neverdiesco/mujeres/MPlayera112_sqdvzf.jpg',360,'Rojo','M','M'),(8,'Cráneos Blancos','Blusa larga sin mangas con escote','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975629/neverdiesco/mujeres/MPlayera105_ejjlum.jpg',290,'Negro','M','M');
/*!40000 ALTER TABLE `mujeres` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-09 22:06:36
