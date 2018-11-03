/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-30 20:54:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `stutea`
-- ----------------------------
DROP TABLE IF EXISTS `stutea`;
CREATE TABLE `stutea` (
  `stuId` varchar(12) NOT NULL,
  `teaId` varchar(12) NOT NULL,
  PRIMARY KEY (`stuId`,`teaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stutea
-- ----------------------------
INSERT INTO `stutea` VALUES ('201692077', '201692089');
