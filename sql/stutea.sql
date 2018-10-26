/*
Navicat MySQL Data Transfer

Source Server         : caiming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-23 21:28:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `stutea`
-- ----------------------------
DROP TABLE IF EXISTS `stutea`;
CREATE TABLE `stutea` (
  `stuId` varchar(12) NOT NULL,
  `teaId` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stutea
-- ----------------------------
