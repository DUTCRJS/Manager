/*
Navicat MySQL Data Transfer

Source Server         : caiming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-23 21:28:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `stulike`
-- ----------------------------
DROP TABLE IF EXISTS `stulike`;
CREATE TABLE `stulike` (
  `stuId` varchar(12) NOT NULL,
  `kind` varchar(6) NOT NULL,
  PRIMARY KEY (`stuId`,`kind`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stulike
-- ----------------------------
INSERT INTO `stulike` VALUES ('201692077', '11');
INSERT INTO `stulike` VALUES ('201692077', '12');
