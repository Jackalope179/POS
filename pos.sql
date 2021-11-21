-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2021 at 03:20 AM
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

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `password`, `fullname`, `phone`) VALUES
(1, 'Hoang12345', 'Hoang', '0765312842'),
(2, 'hoang123', 'Hoang', '0345623482');

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
  `accountID` int(11) DEFAULT NULL,
  `note` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`BookingId`, `customerSeat`, `startTime`, `endTime`, `date`, `accountID`, `note`) VALUES
(10, 16, '18:14:00', '21:14:00', '2021-11-12', 1, 'asdkjasd'),
(11, 20, '19:18:00', '20:18:00', '2021-12-03', 1, 'adsasdasd');

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
-- Table structure for table `clerk`
--

CREATE TABLE `clerk` (
  `ID` int(11) NOT NULL,
  `password` varchar(10) DEFAULT NULL,
  `fullname` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `coeff_salary` float DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_time` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clerk`
--

INSERT INTO `clerk` (`ID`, `password`, `fullname`, `phone`, `coeff_salary`, `address`, `created_time`) VALUES
(5, 'rmkq1xpdnc', 'Trần Thu Phương', '0822402029', 6.5, 'Vĩnh Phúc', '2019-06-30'),
(6, '9965lljxfu', 'Huỳnh Hạnh Tiến', '0890041418', 1.5, 'Bắc Ninh', '2019-05-07'),
(7, 'wuxhsfecj8', 'Lê Văn Tiến', '0925548420', 6, 'Gia Lai', '2020-05-14'),
(9, 'qs9rt4rnmg', 'Hồ Xuân Đạt', '0848105210', 7, 'Thái Bình', '2019-09-28'),
(10, 'vnd16v3nkr', 'Bùi Hồng Thái', '0863939166', 9, 'Cần Thơ	', '2020-05-03'),
(11, 'gx5n26pmah', 'Vũ Thị Dung', '0972962894', 5.5, 'Thái Nguyên', '2020-01-25'),
(12, 'w5nktt47xe', 'Hồ Đình Quang', '0979126629', 9.5, 'Tiền Giang', '2019-09-10'),
(13, 'kqqltapl6p', 'Hoàng Đại Anh', '0940350895', 4.5, 'Cao Bằng', '2019-06-01'),
(14, '1281hwep8u', 'Phạm Đại Nhất', '0858588760', 3, 'Khánh Hòa', '2020-06-25'),
(15, '2aabpune7v', 'Huỳnh Xuân Lam', '0902989729', 10, 'Lâm Đồng', '2020-07-05'),
(16, 'pwdysry9fn', 'Đặng Hoàng Hiếu', '0884214868', 8, 'Điện Biên', '2019-08-14'),
(17, 'n3fx5ghtxx', 'Lý Thị Kim', '0900921928', 9, 'Sóc Trăng', '2019-05-09'),
(18, '8g839dms1v', 'Bùi Văn Quốc', '0929433123', 2.5, 'Hải Phòng', '2019-09-07'),
(19, 'rl4v6wg5v0', 'Huỳnh Văn Dũng', '0871718047', 10, 'Vĩnh Phúc', '2019-07-09');

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
  `time` time DEFAULT current_timestamp(),
  `date` date DEFAULT current_timestamp(),
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

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

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
-- Indexes for table `clerk`
--
ALTER TABLE `clerk`
  ADD PRIMARY KEY (`ID`);

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
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BookingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `clerk`
--
ALTER TABLE `clerk`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
-- ALTER TABLE `payment`
--   ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`accoutID`) REFERENCES `account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
