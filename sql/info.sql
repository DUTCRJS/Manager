/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-19 21:45:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `info`
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `infoId` int(6) NOT NULL,
  `title` varchar(40) NOT NULL,
  `pubTime` date DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`infoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES ('7', '辅导员的通知', '2018-10-19', '2018-10-19 11:39:27', '2018-10-19 11:39:27', '123465');
INSERT INTO `info` VALUES ('8', '辅导员的通知', '2018-10-19', '2018-10-19 11:39:38', '2018-10-19 11:39:38', '123465');
INSERT INTO `info` VALUES ('9', '辅导员的通知', '2018-10-19', '2018-10-19 11:50:54', '2018-10-19 11:50:54', '123465');
INSERT INTO `info` VALUES ('10', '辅导员的通知', '2018-10-19', '2018-10-19 11:50:58', '2018-10-19 11:50:58', '123465');
INSERT INTO `info` VALUES ('11', '辅导员的通知', '2018-10-19', '2018-10-19 11:57:52', '2018-10-19 11:57:52', '123465');
INSERT INTO `info` VALUES ('12', '辅导员的通知', '2018-10-19', '2018-10-19 11:58:28', '2018-10-19 11:58:28', '123465');
