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
(5, 'rmkq1xpdnc', 'Tr???n Thu Ph????ng', '0822402029', 6.5, 'V??nh Ph??c', '2019-06-30'),
(6, '9965lljxfu', 'Hu???nh H???nh Ti???n', '0890041418', 1.5, 'B???c Ninh', '2019-05-07'),
(7, 'wuxhsfecj8', 'L?? V??n Ti???n', '0925548420', 6, 'Gia Lai', '2020-05-14'),
(9, 'qs9rt4rnmg', 'H??? Xu??n ?????t', '0848105210', 7, 'Th??i B??nh', '2019-09-28'),
(10, 'vnd16v3nkr', 'B??i H???ng Th??i', '0863939166', 9, 'C???n Th??	', '2020-05-03'),
(11, 'gx5n26pmah', 'V?? Th??? Dung', '0972962894', 5.5, 'Th??i Nguy??n', '2020-01-25'),
(12, 'w5nktt47xe', 'H??? ????nh Quang', '0979126629', 9.5, 'Ti???n Giang', '2019-09-10'),
(13, 'kqqltapl6p', 'Ho??ng ?????i Anh', '0940350895', 4.5, 'Cao B???ng', '2019-06-01'),
(14, '1281hwep8u', 'Ph???m ?????i Nh???t', '0858588760', 3, 'Kh??nh H??a', '2020-06-25'),
(15, '2aabpune7v', 'Hu???nh Xu??n Lam', '0902989729', 10, 'L??m ?????ng', '2020-07-05'),
(16, 'pwdysry9fn', '?????ng Ho??ng Hi???u', '0884214868', 8, '??i???n Bi??n', '2019-08-14'),
(17, 'n3fx5ghtxx', 'L?? Th??? Kim', '0900921928', 9, 'S??c Tr??ng', '2019-05-09'),
(18, '8g839dms1v', 'B??i V??n Qu???c', '0929433123', 2.5, 'H???i Ph??ng', '2019-09-07'),
(19, 'rl4v6wg5v0', 'Hu???nh V??n D??ng', '0871718047', 10, 'V??nh Ph??c', '2019-07-09');

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
(0, 'n?????c u???ng', 'n?????c u???ng Danisa', 35000, 'N?????c l???c Dasani', './img/image-food4.jpg', 0),
(1, 'n?????c u???ng', 'Bia heineiken l???nh', 25000, 'Bia Heneiken', './img/image-food5.jpg', 1),
(2, 'n?????c u???ng', 'Bia Tiger l???nh', 20000, 'Bia Tiger', './img/image-food6.jpg', 0),
(3, 'n?????c u???ng', 'Coca cola kh??ng ga', 15000, 'Coca Cola', './img/image-food7.jpg', 1),
(4, 'n?????c u???ng', 'Pepsi c?? ga', 35000, 'Pepsi', './img/image-food8.jpg', 0),
(5, 'c??m b??n ph???', 'ph??? t??i n???m', 25000, 'B??n b?? Hu???', './img/image-food9.jpg', 1),
(6, 'c??m b??n ph???', 'C??m t???m s?????n ch???', 20000, 'C??m t???m', './img/image-food10.jpg', 1),
(7, 'c??m b??n ph???', 'Ph??? g?? H?? n???i', 25000, 'Ph??? g??', './img/image-food11.jpg', 0),
(8, 'th???c ??n nhanh', 'Hamburger nhi???u rau, kh??ng b??o', 12000, 'Hamburger', './img/image-food1.jpg', 0),
(9, 'th???c ??n nhanh', 'Pizza h???i s???n', 25000, 'Pizza', './img/image-food12.jpg', 1),
(10, 'th???c ??n nhanh', 'Khoai t??y chi??n gi??n', 50000, 'Khoai t??y chi??n', './img/image-food13.jpg', 0),
(11, 'l???u', 'L???u th??i si??u cay', 50000, 'L???u th??i', './img/image-food14.jpg', 0),
(12, 'l???u', 'L???u ???ch Singapore', 50000, 'L???u ???ch', './img/image-food15.jpg', 0);

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
