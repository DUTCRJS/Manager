/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-17 22:38:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `stuinfo`
-- ----------------------------
DROP TABLE IF EXISTS `stuinfo`;
CREATE TABLE `stuinfo` (
  `stuId` varchar(12) NOT NULL,
  `kind` varchar(6) NOT NULL,
  PRIMARY KEY (`stuId`,`kind`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stuinfo
-- ----------------------------
INSERT INTO `stuinfo` VALUES ('201692077', '11');
INSERT INTO `stuinfo` VALUES ('201692077', '12');
