/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-19 21:45:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `infokind`
-- ----------------------------
DROP TABLE IF EXISTS `infokind`;
CREATE TABLE `infokind` (
  `infoId` int(6) NOT NULL,
  `kind` varchar(6) NOT NULL,
  PRIMARY KEY (`infoId`,`kind`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of infokind
-- ----------------------------
INSERT INTO `infokind` VALUES ('12', '9');
