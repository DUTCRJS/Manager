/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-17 22:38:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `info`
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `infoId` int(6) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `kind` varchar(6) NOT NULL,
  `pubTime` date DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`infoId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES ('1', 'dddd', '12', '2018-10-13', '2018-10-13 09:32:21', '0118-10-13 09:32:21', '内容');
INSERT INTO `info` VALUES ('2', 'dddd', '11', '2018-10-13', '2018-10-13 09:32:47', '0118-10-13 09:32:47', '内容');
INSERT INTO `info` VALUES ('3', 'dddd', '91', '2018-10-13', '2018-10-13 11:17:12', '0118-10-13 11:17:12', '内容');
INSERT INTO `info` VALUES ('4', 'dddd', '91', null, null, null, '内容');
