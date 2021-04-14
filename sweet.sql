-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 伺服器版本:                        10.5.8-MariaDB - mariadb.org binary distribution
-- 伺服器作業系統:                      Win64
-- HeidiSQL 版本:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 傾印 sweet 的資料庫結構
CREATE DATABASE IF NOT EXISTS `sweet` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sweet`;

-- 傾印  資料表 sweet.products 結構
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `price` int(10) unsigned zerofill NOT NULL,
  `quantity` int(10) unsigned zerofill NOT NULL,
  `picture` longtext DEFAULT 'data:image/png;base64,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',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- 取消選取資料匯出。

-- 傾印  資料表 sweet.sweet_tags 結構
CREATE TABLE IF NOT EXISTS `sweet_tags` (
  `product_id` int(11) NOT NULL,
  `tag` varchar(50) NOT NULL,
  PRIMARY KEY (`product_id`,`tag`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 取消選取資料匯出。

-- 傾印  資料表 sweet.tags 結構
CREATE TABLE IF NOT EXISTS `tags` (
  `tag` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 取消選取資料匯出。

-- 傾印  資料表 sweet.user 結構
CREATE TABLE IF NOT EXISTS `user` (
  `utoken` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` longtext DEFAULT NULL,
  PRIMARY KEY (`email`,`utoken`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 取消選取資料匯出。

-- 傾印  資料表 sweet.user-orders 結構
CREATE TABLE IF NOT EXISTS `user-orders` (
  `order_id` varchar(50) NOT NULL,
  `utoken` varchar(50) DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` text CHARACTER SET utf8 DEFAULT NULL,
  `order_time` datetime DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`content`)),
  `total` int(11) DEFAULT NULL,
  `tax_id` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 取消選取資料匯出。

-- 傾印  資料表 sweet.user-orders-tmp 結構
CREATE TABLE IF NOT EXISTS `user-orders-tmp` (
  `utoken` varchar(50) NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`content`)),
  PRIMARY KEY (`utoken`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 取消選取資料匯出。

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
