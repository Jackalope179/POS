SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `clerk` (
  `ID` int(11) NOT NULL,
  `password` varchar(10) DEFAULT NULL,
  `fullname` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `coeff_salary` float DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_time` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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


ALTER TABLE `clerk`
  ADD PRIMARY KEY (`ID`);


ALTER TABLE `clerk`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
