CREATE DATABASE  IF NOT EXISTS `pruebas` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `pruebas`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pruebas
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `humans`
--

DROP TABLE IF EXISTS `humans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `humans` (
  `name` varchar(45) NOT NULL DEFAULT '',
  `password` varchar(16) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `humans`
--

LOCK TABLES `humans` WRITE;
/*!40000 ALTER TABLE `humans` DISABLE KEYS */;
INSERT INTO `humans` VALUES ('hola','hola'),('luis','luis'),('mario','mario'),('prueba','prueba'),('sergio','sergio');
/*!40000 ALTER TABLE `humans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `url` varchar(100) NOT NULL DEFAULT '',
  `answer` varchar(45) NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`url`),
  KEY `type` (`type`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`type`) REFERENCES `test` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('images/img1.png','false','P1','.png'),('images/img10.png','true','P1','.png'),('images/img11.png','false','P1','.png'),('images/img12.png','false','P1','.png'),('images/img13.png','false','P1','.png'),('images/img14.png','true','P1','.png'),('images/img15.png','false','P1','.png'),('images/img16.png','false','P1','.png'),('images/img17.png','false','P1','.png'),('images/img18.png','true','P1','.png'),('images/img19.png','false','P1','.png'),('images/img2.png','false','P1','.png'),('images/img20.png','true','P1','.png'),('images/img3.png','false','P1','.png'),('images/img4.png','false','P1','.png'),('images/img5.png','true','P1','.png'),('images/img6.png','true','P1','.png'),('images/img7.png','true','P1','.png'),('images/img8.png','false','P1','.png'),('images/img9.png','false','P1','.png'),('images/no.png','false','P1','.png'),('images/yes.png','true','P1','.png');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `results` (
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(45) NOT NULL DEFAULT '',
  `type` varchar(20) NOT NULL DEFAULT '',
  `score` double NOT NULL,
  `time` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`date`,`name`,`type`),
  KEY `name` (`name`),
  KEY `type` (`type`),
  CONSTRAINT `results_ibfk_1` FOREIGN KEY (`name`) REFERENCES `humans` (`name`),
  CONSTRAINT `results_ibfk_2` FOREIGN KEY (`type`) REFERENCES `test` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES ('2014-10-06 03:03:13','luis','P1',7,'0.5490499999999999'),('2014-10-06 03:05:50','hola','P1',7,'0.25434999999999997'),('2014-10-06 03:06:56','hola','P1',7,'0.22895'),('2014-10-06 03:07:13','hola','P1',7,'0.2076'),('2014-10-06 03:10:15','luis','P1',7,'0.2527'),('2014-10-06 03:11:20','mario','P1',7,'0.15965000000000004'),('2014-10-06 03:22:12','luis','P1',7,'0.19549999999999998'),('2014-10-06 03:40:54','prueba','P1',7,'0.4021');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `type` varchar(45) NOT NULL DEFAULT '',
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES ('P1','Prueba de Atencion');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-10-05 22:46:35
