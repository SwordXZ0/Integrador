-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 05-06-2015 a las 10:15:31
-- Versión del servidor: 5.5.42-cll
-- Versión de PHP: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ancestra_borregos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contador`
--

CREATE TABLE IF NOT EXISTS `contador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(15) DEFAULT NULL,
  `hostname` varchar(50) DEFAULT NULL,
  `hora` varchar(8) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  `weeku` varchar(10) DEFAULT NULL,
  `diau` varchar(3) DEFAULT NULL,
  `aniou` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Volcado de datos para la tabla `contador`
--

INSERT INTO `contador` (`id`, `ip`, `hostname`, `hora`, `fecha`, `weeku`, `diau`, `aniou`) VALUES
(1, '148.240.67.153', '148.240.67.153', '08:40:53', '6 dl 11 d 2014', '45', 'Thu', '2014'),
(2, '187.237.14.245', 'customer-187-237-14-245.uninet-ide.com.mx', '08:45:40', '6 dl 11 d 2014', '45', 'Thu', '2014'),
(3, '12.192.102.252', '12.192.102.252', '01:46:22', '7 dl 11 d 2014', '45', 'Fri', '2014'),
(4, '148.240.67.153', '148.240.67.153', '03:49:22', '4 dl 2 d 2015', '06', 'Wed', '2015'),
(5, '187.237.14.226', 'customer-187-237-14-226.uninet-ide.com.mx', '04:03:55', '4 dl 2 d 2015', '06', 'Wed', '2015'),
(6, '187.237.14.227', 'customer-187-237-14-227.uninet-ide.com.mx', '01:04:24', '5 dl 2 d 2015', '06', 'Thu', '2015'),
(7, '207.249.143.241', '207-249-143-241.static.axtel.net', '05:33:35', '11 dl 2 d 2015', '07', 'Wed', '2015'),
(8, '148.240.67.153', '148.240.67.153', '06:58:52', '11 dl 2 d 2015', '07', 'Wed', '2015'),
(9, '131.178.110.168', '131.178.110.168', '03:24:57', '24 dl 2 d 2015', '09', 'Tue', '2015'),
(10, '131.178.106.52', '131.178.106.52', '10:09:58', '25 dl 2 d 2015', '09', 'Wed', '2015'),
(11, '148.241.190.42', 'cache01.ccm.itesm.mx', '07:09:32', '27 dl 2 d 2015', '09', 'Fri', '2015'),
(29, '148.240.67.153', '148.240.67.153', '07:48:44', '2 dl 3 d 2015', '10', 'Mon', '2015'),
(30, '213.89.8.153', 'c213-89-8-153.bredband.comhem.se', '11:11:02', '5 dl 4 d 2015', '14', 'Sun', '2015'),
(31, '207.249.143.241', '207-249-143-241.static.axtel.net', '05:26:07', '9 dl 4 d 2015', '15', 'Thu', '2015'),
(32, '148.240.67.153', '148.240.67.153', '03:05:53', '13 dl 4 d 2015', '16', 'Mon', '2015'),
(33, '189.217.73.242', '189.217.73.242', '03:29:03', '15 dl 4 d 2015', '16', 'Wed', '2015');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE IF NOT EXISTS `estados` (
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `contador` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`nombre`, `contador`) VALUES
('Aguascalientes', 0),
('Baja California', 0),
('Baja California Sur', 0),
('Campeche', 0),
('Coahuila de Zaragoza', 0),
('Colima', 0),
('Chiapas', 0),
('Chihuahua', 1),
('Distrito Federal', 12),
('Durango', 0),
('Guanajuato', 0),
('Guerrero', 0),
('Hidalgo', 0),
('Jalisco', 1),
('Mexico', 0),
('Michoacan de Ocampo', 0),
('Morelos', 0),
('Nayarit', 0),
('Nuevo Leon', 0),
('Oaxaca', 0),
('Puebla', 0),
('Queretaro de Arteaga', 0),
('Quintana Roo', 0),
('San Luis Potosi', 0),
('Sinaloa', 0),
('Sonora', 0),
('Tabasco', 0),
('Tamaulipas', 0),
('Tlaxcala', 0),
('Veracruz-Llave', 0),
('Yucatan', 0),
('Zacatecas', 0),
('Desconocido', 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
