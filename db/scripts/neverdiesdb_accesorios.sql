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
-- Table structure for table `accesorios`
--

DROP TABLE IF EXISTS `accesorios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accesorios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `precio` decimal(5,0) DEFAULT NULL,
  `color` varchar(20) DEFAULT 'Negro',
  `talla` varchar(45) DEFAULT NULL,
  `tipo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accesorios`
--

LOCK TABLES `accesorios` WRITE;
/*!40000 ALTER TABLE `accesorios` DISABLE KEYS */;
INSERT INTO `accesorios` VALUES (1,'Gorro Jabali','Gorro Negro con parche de jabali','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975580/neverdiesco/accesorios/Accesorios1_jd1tqs.jpg',120,'Negro','M','Gorro'),(2,'Stickers Never Dies','Paquete de 8 Stickers estilo neverdies','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975586/neverdiesco/accesorios/Accesorios7_rkmn2s.jpg',20,'Varios','M','Stickes'),(3,'Mochila Dark','Mochila Negra Agregados estilos Neverdies','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975585/neverdiesco/accesorios/Accesorios8_kkgzq5.jpg',280,'Negro','M','Mochila'),(4,'Gorra Azul NDB','Gorra azul con parche neverdies','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975582/neverdiesco/accesorios/Accesorios3_pregqy.jpg',320,'Azul','M','Gorra'),(5,'Anillo Diablo','Anillo rostro demonio','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975583/neverdiesco/accesorios/Accesorios9_sdumeg.jpg',120,'Plata','M','Anillo'),(6,'Almohada NeverDies','Almohada con craneo blanco','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975581/neverdiesco/accesorios/Accesorios12_htcfbg.jpg',280,'Negra','M','Almohada'),(7,'Bebé NeverDies','Pañalero para bebé estilo neverdies','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975582/neverdiesco/accesorios/Accesorios4_jpehzh.jpg',160,'Rosa','M','Bebé'),(8,'Lentes NeverDies','Gafas polarizadas de lentes grande','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975580/neverdiesco/accesorios/Accesorios_ulhk7v.jpg',320,'Negro','M','Lentes'),(9,'Pines','Pines Varios colores','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975585/neverdiesco/accesorios/Accesorios11_eo5ftm.jpg',50,'Varios','M','Pines'),(10,'Carcasa','hvcerohvielvlehveñvjreñ','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975586/neverdiesco/accesorios/Accesorios32_wr38ln.jpg',150,'NEGRO','M','Carcasa'),(11,'Mochila Gris','Mochila gris estilo neverdies','https://res.cloudinary.com/dehvodgm2/image/upload/v1638975581/neverdiesco/accesorios/Accesorios2_gsmf8u.jpg',120,'Negro','M','Mochila');
/*!40000 ALTER TABLE `accesorios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-09 23:47:44
