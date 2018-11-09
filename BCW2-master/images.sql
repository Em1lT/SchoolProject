-- phpMyAdmin SQL Dump
-- version 4.4.15.8
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 16, 2016 at 09:08 PM
-- Server version: 5.5.50-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ilkkamtk`
--

-- --------------------------------------------------------

--
-- Table structure for table `mm_media`
--

CREATE TABLE IF NOT EXISTS `mm_media` (
  `mediaID` int(9) NOT NULL,
  `mediaTitle` text NOT NULL,
  `mediaType` text NOT NULL,
  `mediaOwner` int(9) NOT NULL,
  `mediaAlbum` int(9) NOT NULL,
  `mediaDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mediaUrl` text NOT NULL,
  `mediaThumb` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mm_media`
--

INSERT INTO `mm_media` (`mediaID`, `mediaTitle`, `mediaType`, `mediaOwner`, `mediaAlbum`, `mediaDate`, `mediaUrl`, `mediaThumb`) VALUES
(71, 'Picture 1', 'image/jpeg', 2, 16, '2016-11-16 20:47:25', '71_file000132701536.jpg', '71_file000132701536.jpg'),
(72, 'Picture 2', 'image/jpeg', 2, 16, '2016-11-16 20:47:48', '72_file0001706961259.jpg', '72_file0001706961259.jpg'),
(73, 'Picture 3', 'image/jpeg', 2, 17, '2016-11-16 20:50:59', '73_file000267804564.jpg', '73_file000267804564.jpg'),
(74, 'Picture 4', 'image/jpeg', 2, 17, '2016-11-16 20:51:23', '74_file0001601969844.jpg', '74_file0001601969844.jpg'),
(75, 'Picture 5', 'image/jpeg', 2, 17, '2016-11-16 20:51:52', '75_file000693070568.jpg', '75_file000693070568.jpg'),
(76, 'Picture 6', 'image/jpeg', 2, 16, '2016-11-16 20:52:14', '76_file000741141463.jpg', '76_file000741141463.jpg'),
(77, 'Picture 7', 'image/jpeg', 2, 16, '2016-11-16 20:52:37', '77_file0001116000079.jpg', '77_file0001116000079.jpg'),
(80, 'Picture 8', 'image/jpeg', 2, 16, '2016-11-16 21:01:35', '80_file0001966720664.jpg', '80_file0001966720664.jpg'),
(81, 'Picture 9', 'image/jpeg', 2, 16, '2016-11-16 21:03:21', '81_file0001608482449.jpg', '81_file0001608482449.jpg'),
(83, 'Picture 10', 'image/jpeg', 2, 16, '2016-11-16 21:06:22', '83_file000466623310.jpg', '83_file000466623310.jpg'),
(84, 'Picture 11', 'image/jpeg', 2, 16, '2016-11-16 21:07:00', '84_file0001316404158.jpg', '84_file0001316404158.jpg'),
(85, 'Picture 12', 'image/jpeg', 2, 17, '2016-11-16 21:07:21', '85_file0001176452626.jpg', '85_file0001176452626.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mm_media`
--
ALTER TABLE `mm_media`
  ADD PRIMARY KEY (`mediaID`),
  ADD KEY `mediaOwner` (`mediaOwner`),
  ADD KEY `mediaAlbum` (`mediaAlbum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mm_media`
--
ALTER TABLE `mm_media`
  MODIFY `mediaID` int(9) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=86;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `mm_media`
--
ALTER TABLE `mm_media`
  ADD CONSTRAINT `mm_media_ibfk_1` FOREIGN KEY (`mediaOwner`) REFERENCES `mm_user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mm_media_ibfk_2` FOREIGN KEY (`mediaAlbum`) REFERENCES `mm_album` (`albumID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
