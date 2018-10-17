/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-17 22:38:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `stuadd`
-- ----------------------------
DROP TABLE IF EXISTS `stuadd`;
CREATE TABLE `stuadd` (
  `stuId` char(12) NOT NULL,
  `infoId` varchar(6) NOT NULL,
  PRIMARY KEY (`stuId`,`infoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stuadd
-- ----------------------------
INSERT INTO `stuadd` VALUES ('201692077', '3');
