-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2013 at 10:17 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hpv13gfs`
--

-- --------------------------------------------------------

--
-- Table structure for table `eventdata`
--

CREATE TABLE IF NOT EXISTS `eventdata` (
  `rowID` int(11) NOT NULL AUTO_INCREMENT,
  `metricMD5` char(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `playMD5` char(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `eventTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gameTime` double NOT NULL,
  `eventType` int(11) NOT NULL,
  `eventSubtype` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `z` int(11) NOT NULL,
  `magnitude` double NOT NULL,
  `extended` varchar(512) NOT NULL,
  PRIMARY KEY (`rowID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1414 ;

-- --------------------------------------------------------

--
-- Table structure for table `eventsubtypes`
--

CREATE TABLE IF NOT EXISTS `eventsubtypes` (
  `eventSubType` int(11) NOT NULL AUTO_INCREMENT,
  `eventSubString` varchar(512) NOT NULL,
  `validFor` varchar(512) NOT NULL,
  PRIMARY KEY (`eventSubType`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='These are the sub type string lookup table' AUTO_INCREMENT=4 ;

--
-- Dumping data for table `eventsubtypes`
--

INSERT INTO `eventsubtypes` (`eventSubType`, `eventSubString`, `validFor`) VALUES
(1, 'Save level', ''),
(2, 'Save muted', ''),
(3, 'Save language', '');

-- --------------------------------------------------------

--
-- Table structure for table `eventtypes`
--

CREATE TABLE IF NOT EXISTS `eventtypes` (
  `eventType` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary event ID',
  `eventString` varchar(512) NOT NULL,
  `validGames` varchar(512) NOT NULL,
  PRIMARY KEY (`eventType`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Table for understanding eventTypes' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `eventtypes`
--

INSERT INTO `eventtypes` (`eventType`, `eventString`, `validGames`) VALUES
(1, 'Save game', '');

-- --------------------------------------------------------

--
-- Table structure for table `highscore_all`
--

CREATE TABLE IF NOT EXISTS `highscore_all` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `highscore_daily`
--

CREATE TABLE IF NOT EXISTS `highscore_daily` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `highscore_monthly`
--

CREATE TABLE IF NOT EXISTS `highscore_monthly` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `highscore_weekly`
--

CREATE TABLE IF NOT EXISTS `highscore_weekly` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `metricsession`
--

CREATE TABLE IF NOT EXISTS `metricsession` (
  `rowID` int(11) NOT NULL AUTO_INCREMENT,
  `serialNumber` char(128) NOT NULL,
  `metricMD5` char(128) NOT NULL,
  `openTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `closeTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`rowID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=613 ;

--
-- Dumping data for table `metricsession`
--

INSERT INTO `metricsession` (`rowID`, `serialNumber`, `metricMD5`, `openTime`, `closeTime`) VALUES
(68, '0Chrome26Windows1', '248f173de81ca5b0b6e970f6d357f8dd', '2013-04-16 21:03:27', '2013-04-16 21:04:46'),
(69, '1Firefox20Windows1', '60b7678c703953b65bf560dd4574cd2d', '2013-04-17 10:33:27', '2013-04-17 10:34:00'),
(70, '1Firefox20Windows1', '9412ee828caf9f7b48a3d89313928ab0', '2013-04-17 10:34:05', '2013-04-17 10:34:47'),
(71, '1Firefox20Windows1', '636e7fc466ee1d9b2e7045a658b49351', '2013-04-17 10:34:52', '2013-04-17 10:35:18'),
(72, '1Firefox20Windows1', 'e576df602744939908b150e46c6c1e30', '2013-04-17 10:35:23', '2013-04-17 10:37:57'),
(73, '1Firefox20Windows1', '88431419c0d205d7e242f4d7d9fcdf38', '2013-04-17 10:38:02', '2013-04-17 10:38:12'),
(74, '1Firefox20Windows1', '5c290c5406f98095950787e218f620d6', '2013-04-17 10:38:17', '2013-04-17 10:38:28'),
(75, '1Firefox20Windows1', 'a9740735c808b125648186de431292ad', '2013-04-17 10:38:33', '2013-04-17 10:39:02'),
(76, '1Firefox20Windows1', '60a7beb9c2f6093d026f8627847a22d4', '2013-04-17 10:39:07', '2013-04-17 10:39:31'),
(77, '1Firefox20Windows1', 'b03fff04e31e913e05c9b57600d75bc2', '2013-04-17 10:39:36', '2013-04-17 10:41:16'),
(78, '1Firefox20Windows1', 'cb6148d823a18addff91d881b0667b78', '2013-04-17 10:41:21', '2013-04-17 10:41:40'),
(79, '1Firefox20Windows1', 'c9a58a588ebe6d130fee92dafba29a04', '2013-04-17 10:41:44', '2013-04-17 10:42:16'),
(80, '0Firefox20Windows1', '1ad7e75c40da92ddb3850385e0db43da', '2013-04-17 10:42:20', '2013-04-17 11:18:05'),
(81, '0Firefox20Windows1', '21c26e9543703c886476afd63404e3a2', '2013-04-17 11:18:09', '2013-04-17 11:19:02'),
(82, '0Firefox20Windows1', '3f05122236a7ef4877a9512a9d443766', '2013-04-17 11:19:06', '2013-04-17 11:20:23'),
(83, '0Firefox20Windows1', 'd4924f00481a9220a88ad3ee928d39c9', '2013-04-17 11:20:27', '2013-04-17 11:23:43'),
(84, '0Firefox20Windows1', '9760a281056929923af35fc12d1bdc20', '2013-04-17 11:25:07', '2013-04-17 11:25:18'),
(85, '0Firefox20Windows1', '0470d9ce262a7f92591445cc10459ad3', '2013-04-17 11:25:22', '2013-04-17 12:15:10'),
(86, '0Firefox20Windows1', 'de4c011cb67a5f326824d2fcd786b208', '2013-04-17 12:15:14', '2013-04-17 12:16:55'),
(87, '0Firefox20Windows1', '4011c2cbbb5e42f45115b43857cd0df9', '2013-04-17 12:16:59', '2013-04-17 12:17:37'),
(88, '1Firefox20Windows1', 'cfe7bd810bf5e3e04fbfb748739e97a3', '2013-04-17 12:17:42', '2013-04-17 12:26:38'),
(89, '1Firefox20Windows1', '7fdff3d9239ba05ef42807a4eec1e8d9', '2013-04-17 12:26:43', '2013-04-17 12:29:25'),
(90, '1Firefox20Windows1', '4ad8180f3f0f443413887f5cd3ea422e', '2013-04-17 12:29:31', '2013-04-17 13:48:07'),
(91, '1Chrome26Windows1', '8fae503110d8b27d919424d7e94251e5', '2013-04-17 12:31:55', '2013-04-17 12:34:35'),
(92, '1Chrome26Windows1', '98501adf59bb4936911a7693dc97289e', '2013-04-17 12:34:40', '2013-04-17 12:35:11'),
(93, '1Chrome26Windows1', 'b31589196a4ba7c6efcd2d134233c9b5', '2013-04-17 12:36:13', '2013-04-17 12:37:19'),
(94, '1Chrome26Windows1', 'c89734349f9af5dad3697c383c2dcbd1', '2013-04-17 12:37:23', '2013-04-17 12:39:47'),
(95, '1Chrome26Windows1', '6ea76f35ea6214c8ea811c3866a9c071', '2013-04-17 12:39:51', '2013-04-17 12:40:22'),
(96, '1Chrome26Windows1', '93ff0c466ae8fd2892dd60a4afebb6e7', '2013-04-17 12:40:27', '2013-04-17 12:48:28'),
(97, '1Chrome26Windows1', '595b1383a958efe259dfd6d7f9ce2405', '2013-04-17 12:48:32', '2013-04-17 12:49:08');

-- --------------------------------------------------------

--
-- Table structure for table `playsession`
--

CREATE TABLE IF NOT EXISTS `playsession` (
  `rowID` int(11) NOT NULL AUTO_INCREMENT,
  `metricMD5` char(128) NOT NULL,
  `playMD5` char(128) NOT NULL,
  `openTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `closeTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`rowID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=766 ;

--
-- Dumping data for table `playsession`
--

INSERT INTO `playsession` (`rowID`, `metricMD5`, `playMD5`, `openTime`, `closeTime`) VALUES
(3, '371908547d3f63d3b1ba4b27c259f3be', 'db49febe15ef2fe17652eb9b713d0153', '2013-04-16 17:16:06', '2013-04-16 17:19:48'),
(4, 'daae2b0a7e45bdaa6cdd6ad97bed89fd', 'fd87bf38e1f4ecd0bad0a0764e5812cc', '2013-04-16 17:20:02', '2013-04-16 17:23:59'),
(5, '07014392eb5189cabdd0874c9e249970', '510783534dffc5fad17bb5e4fd638fd4', '2013-04-16 17:24:17', '2013-04-16 17:24:27'),
(6, 'ed801e5271208356b0b0abbc8b117557', '8266830ee6a4221ba94825e09442b0d0', '2013-04-16 17:25:58', '2013-04-16 17:26:22'),
(7, '107f624804631a216127ec801e9dc38c', '29a37b54253128b2fc7b15e43c5476ab', '2013-04-16 17:26:28', '2013-04-16 17:26:48'),
(8, 'af32a08b74563333b93467ead60254ec', 'adc55137b046ac7b087516dae49fa8c2', '2013-04-16 17:26:53', '2013-04-16 17:27:06'),
(9, '14544f864dda837cd6a7d95c67123aa8', '736b77f7e9d6bb01d0ead1610fe50f94', '2013-04-16 17:27:12', '2013-04-16 17:27:21'),
(10, '14544f864dda837cd6a7d95c67123aa8', '2c294dce1a8399026c1ff48952f7e560', '2013-04-16 17:27:23', '2013-04-16 18:30:59'),
(11, '14544f864dda837cd6a7d95c67123aa8', 'a567e7eea2fd30d730c6685f2a3c5134', '2013-04-16 18:31:00', '2013-04-16 18:32:25'),
(12, 'ccb3b1b3257f68cc6b159289e57b6012', 'd124359d2ae7aec3cbb1c11f93e78d24', '2013-04-16 18:32:31', '2013-04-16 18:32:49'),
(13, 'f58d0277a9d3f7107af484365f13f655', 'ce5cdc798769e8bc8ed9374ee5ece875', '2013-04-16 18:32:54', '2013-04-16 18:33:20'),
(14, '79224721a12cfc09f454af29aab249f1', '35a4a573d36044dd535aa8bed8e8d157', '2013-04-16 18:33:25', '2013-04-16 18:35:08'),
(15, 'ed5d53e42de90763aa63ab4eb29a727c', '4474105a9f20cd7bed4105ed0ab76e7a', '2013-04-16 18:43:22', '2013-04-16 18:43:26'),
(16, '9af17438892b4bddb64fa41f1c3d6843', '1f7b0a254596c775aab60b828d2f4546', '2013-04-16 18:45:29', '2013-04-16 18:47:08'),
(17, '9af17438892b4bddb64fa41f1c3d6843', 'fa2a03cedb47df2532049abdac0b3aa7', '2013-04-16 18:47:09', '2013-04-16 20:33:40'),
(18, '979083e836f17c1c9d83a4bdd5de1368', 'a03896c3ff781021274ca5d9639f240b', '2013-04-16 20:33:44', '2013-04-16 20:34:00'),
(19, '0d9e6a23ce80c0f3568f0677718ec388', '8717566fe1e9023e4eb5b09b682031c4', '2013-04-16 20:34:05', '2013-04-16 20:34:06'),
(20, '0d9e6a23ce80c0f3568f0677718ec388', '5b40038859d036bdeee84eb6a766b1c7', '2013-04-16 20:34:08', '2013-04-16 20:34:20'),
(21, '0d9e6a23ce80c0f3568f0677718ec388', '7fdd959c07677e12cef8bb1e04b8033b', '2013-04-16 20:34:21', '2013-04-16 20:35:27'),
(22, '0d9e6a23ce80c0f3568f0677718ec388', '217f57328ef5bcf5a38de6347daed5c9', '2013-04-16 20:35:28', '2013-04-16 20:35:52'),
(23, '0d9e6a23ce80c0f3568f0677718ec388', 'eb3ed479be059a490008b7ce40907462', '2013-04-16 20:35:53', '2013-04-16 20:36:02'),
(24, '0d9e6a23ce80c0f3568f0677718ec388', '263fd623c7e0634cdf4acebc10b0c0f6', '2013-04-16 20:36:03', '2013-04-16 20:36:54'),
(25, 'ee3e94fc875c5f677cec25d0f4acf62f', '1afb56be49b1a9b8c3aaf072cd85fbba', '2013-04-16 20:36:58', '2013-04-16 20:37:08'),
(26, 'ee3e94fc875c5f677cec25d0f4acf62f', 'da45a5e2e0884380b7dc86c36b13443f', '2013-04-16 20:37:09', '2013-04-16 20:38:10'),
(27, 'c051ec4911aa85c33052e95007f0f5b0', 'd5607dc9d8171fcfae9d02483c7a459b', '2013-04-16 20:38:14', '2013-04-16 20:38:30'),
(28, '4a75b2e680ebe431ae04e118bd7de08d', '43ced62553fd633200123bdf0513d8df', '2013-04-16 20:38:34', '2013-04-16 20:38:47'),
(29, 'add874cc142ab5f8a3a200bf41026cdc', 'b4eaecad125076ddedf88b921bc77f70', '2013-04-16 20:38:51', '2013-04-16 20:39:00'),
(30, 'e4220eecacc95221e9aabee9b116ac74', '57a184fb8dafc10153bc6e0300c1c0cb', '2013-04-16 20:39:04', '2013-04-16 20:39:42'),
(31, 'b4d8899ae9cd136c1ddbe8aaa10ccdab', 'ec896365c4bd9b984e43edbdf0723729', '2013-04-16 20:39:46', '2013-04-16 20:41:44'),
(32, 'fcbe533dd367e89cc910cd2672b77d88', '740f4e5dc6b30f24daaa77da738b7d91', '2013-04-16 20:41:48', '2013-04-16 20:41:56');

-- --------------------------------------------------------

--
-- Table structure for table `saves`
--

CREATE TABLE IF NOT EXISTS `saves` (
  `uid` int(11) NOT NULL,
  `language` varchar(2) COLLATE utf8_bin NOT NULL DEFAULT 'NO',
  `level` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `pic` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'img/profile.png',
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
