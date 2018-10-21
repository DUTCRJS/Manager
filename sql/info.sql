/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-21 16:25:38
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
  `htmlContent` text,
  PRIMARY KEY (`infoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES ('3', '辅导员的通知1', '2018-10-19', '2018-10-19 11:39:27', '2018-10-19 11:39:27', '123465', null);
INSERT INTO `info` VALUES ('8', '辅导员的通知', '2018-10-19', '2018-10-19 11:39:38', '2018-10-19 11:39:38', '123465', null);
INSERT INTO `info` VALUES ('9', '辅导员的通知', '2018-10-19', '2018-10-19 11:50:54', '2018-10-19 11:50:54', '123465', null);
INSERT INTO `info` VALUES ('10', '辅导员的通知', '2018-10-19', '2018-10-19 11:50:58', '2018-10-19 11:50:58', '123465', null);
INSERT INTO `info` VALUES ('11', '辅导员的通知', '2018-10-19', '2018-10-19 11:57:52', '2018-10-19 11:57:52', '123465', null);
INSERT INTO `info` VALUES ('12', '辅导员的通知2', '2018-10-19', '2018-10-19 11:58:28', '2018-10-19 11:58:28', '123465', null);
INSERT INTO `info` VALUES ('13', '辅导员的通知3', '2018-10-21', '2018-10-21 06:26:15', '2018-10-21 06:26:15', '123465', null);
INSERT INTO `info` VALUES ('14', '学生自己的通知', '2018-10-19', '2018-10-19 11:39:27', '2018-10-19 11:39:27', '内容', null);
INSERT INTO `info` VALUES ('15', '辅导员的通知', '2018-10-21', '2018-10-21 08:05:31', '2018-10-21 08:05:31', '123465', null);
INSERT INTO `info` VALUES ('16', '1111', '2018-10-19', '2018-10-19 11:39:27', '2018-10-19 11:39:27', '12321212', '');
