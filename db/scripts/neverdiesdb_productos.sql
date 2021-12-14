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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `precio` decimal(5,0) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `talla` varchar(45) DEFAULT NULL,
  `tipo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idProductos_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Gran Elfo','Suéter Negro con estampado de duende verde','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975542/neverdiesco/hombres/Playera6_h1f4u8.jpg',290,'Negro','M','Sueter'),(2,'Clásico NeverDies','Playera negra clasica neverdies manga corta','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera7_dyoq5o.jpg',290,'Negro','M','Playera'),(3,'Navidad','Suéter craneo de reno ','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975541/neverdiesco/hombres/Playera3_pk6oyp.jpg',390,'Negro','M','Sueter'),(4,'Cráneos','Playera cuello redondo manga corta estampado de cráneos','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera2_ntvlr6.jpg',250,'Negro','M','Playera'),(5,'Beso Rosa','Playera manga larga cuello redondo con estampado de ojo y labios','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera5_ecbgdd.jpg',320,'Negro','M','Playera'),(6,'Iluminación','Playera negra manga larga cuello redondo','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera4_sslzbx.jpg',340,'Negro','M','Playera'),(7,'Catrina','Playera manga corta cuello redondo estampado catrina','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975545/neverdiesco/hombres/Playera9_qmfrji.jpg',280,'Negro','M','Playera'),(8,'Gris Never','Playera manga larga cuello redondo Nuevo Modelo','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975542/neverdiesco/hombres/Playera1_sec4ab.jpg',290,'Negro','M','Playera');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-09 23:47:43
