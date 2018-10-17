/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-17 22:39:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `teainfo`
-- ----------------------------
DROP TABLE IF EXISTS `teainfo`;
CREATE TABLE `teainfo` (
  `teaId` varchar(11) NOT NULL,
  `kind` varchar(6) NOT NULL,
  PRIMARY KEY (`teaId`,`kind`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teainfo
-- ----------------------------
