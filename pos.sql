-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2021 at 05:06 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `password` varchar(10) DEFAULT NULL,
  `fullname` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BookingId` int(11) NOT NULL,
  `customerSeat` int(11) DEFAULT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `accountID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `book_table`
--

CREATE TABLE `book_table` (
  `tableID` int(11) DEFAULT NULL,
  `BookingID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `foodId` int(11) NOT NULL,
  `category` varchar(30) DEFAULT NULL,
  `foodDescribe` varchar(30) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `image` varchar(2000) DEFAULT NULL,
  `isRecommended` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`foodId`, `category`, `foodDescribe`, `price`, `name`, `image`, `isRecommended`) VALUES
(0, 'nước uống', 'nước uống Danisa', 35000, 'Nước lọc Dasani', './img/image-food4.jpg', 0),
(1, 'nước uống', 'Bia heineiken lạnh', 25000, 'Bia Heneiken', './img/image-food5.jpg', 1),
(2, 'nước uống', 'Bia Tiger lạnh', 20000, 'Bia Tiger', './img/image-food6.jpg', 0),
(3, 'nước uống', 'Coca cola không ga', 15000, 'Coca Cola', './img/image-food7.jpg', 1),
(4, 'nước uống', 'Pepsi có ga', 35000, 'Pepsi', './img/image-food8.jpg', 0),
(5, 'cơm bún phở', 'phở tái nạm', 25000, 'Bún bò Huế', './img/image-food9.jpg', 1),
(6, 'cơm bún phở', 'Cơm tấm sườn chả', 20000, 'Cơm tấm', './img/image-food10.jpg', 1),
(7, 'cơm bún phở', 'Phở gà Hà nội', 25000, 'Phở gà', './img/image-food11.jpg', 0),
(8, 'thức ăn nhanh', 'Hamburger nhiều rau, không béo', 12000, 'Hamburger', './img/image-food1.jpg', 0),
(9, 'thức ăn nhanh', 'Pizza hải sản', 25000, 'Pizza', './img/image-food12.jpg', 1),
(10, 'thức ăn nhanh', 'Khoai tây chiên giòn', 50000, 'Khoai tây chiên', './img/image-food13.jpg', 0),
(11, 'lẩu', 'Lẩu thái siêu cay', 50000, 'Lẩu thái', './img/image-food14.jpg', 0),
(12, 'lẩu', 'Lẩu ếch Singapore', 50000, 'Lẩu ếch', './img/image-food15.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `foodpayment`
--

CREATE TABLE `foodpayment` (
  `Name` varchar(30) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `paymentid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymetid` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `time` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `accoutID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `reservationtable`
--

CREATE TABLE `reservationtable` (
  `tableID` int(11) NOT NULL,
  `maxCapacity` int(11) DEFAULT NULL,
  `status` bit(1) DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BookingId`),
  ADD KEY `accountID` (`accountID`);

--
-- Indexes for table `book_table`
--
ALTER TABLE `book_table`
  ADD KEY `BookingID` (`BookingID`),
  ADD KEY `tableID` (`tableID`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`foodId`);

--
-- Indexes for table `foodpayment`
--
ALTER TABLE `foodpayment`
  ADD KEY `paymentid` (`paymentid`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymetid`),
  ADD KEY `accoutID` (`accoutID`);

--
-- Indexes for table `reservationtable`
--
ALTER TABLE `reservationtable`
  ADD PRIMARY KEY (`tableID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BookingId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `foodId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymetid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservationtable`
--
ALTER TABLE `reservationtable`
  MODIFY `tableID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`id`);

--
-- Constraints for table `book_table`
--
ALTER TABLE `book_table`
  ADD CONSTRAINT `book_table_ibfk_1` FOREIGN KEY (`BookingID`) REFERENCES `booking` (`BookingId`),
  ADD CONSTRAINT `book_table_ibfk_2` FOREIGN KEY (`tableID`) REFERENCES `reservationtable` (`tableID`);

--
-- Constraints for table `foodpayment`
--
ALTER TABLE `foodpayment`
  ADD CONSTRAINT `foodpayment_ibfk_1` FOREIGN KEY (`paymentid`) REFERENCES `payment` (`paymetid`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`accoutID`) REFERENCES `account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
