-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2024 at 01:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productCode` varchar(100) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `productLine` varchar(100) NOT NULL,
  `productScale` varchar(100) NOT NULL,
  `productVendor` varchar(100) NOT NULL,
  `productDescription` varchar(100) NOT NULL,
  `quantityInStock` int(10) NOT NULL,
  `buyPrice` int(10) NOT NULL,
  `MSRP` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productCode`, `productName`, `productLine`, `productScale`, `productVendor`, `productDescription`, `quantityInStock`, `buyPrice`, `MSRP`) VALUES
('P001', 'SuperWidget', 'Widgets', 'S', 'WidgetCo', 'A high-quality widget designed for durability.', 150, 1200, 1500),
('P002', 'MegaGadget', 'Gadgets', 'M', 'GadgetWorks', 'An advanced gadget with multiple features.', 80, 2500, 3200),
('P003', 'UltraTool', 'Tools', 'L', 'ToolMasters', 'A powerful tool for professional use.', 50, 4500, 6000),
('P004', 'NanoGadget', 'Gadgets', 'XS', 'NanoTech', 'A compact and efficient gadget.', 200, 800, 1000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
