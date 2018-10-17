/*
Navicat MySQL Data Transfer

Source Server         : liyunhao
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-10-17 22:38:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `stuId` varchar(12) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gender` varchar(2) DEFAULT NULL,
  `phoneNum` varchar(11) DEFAULT NULL,
  `field` varchar(15) DEFAULT NULL,
  `class` varchar(7) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`stuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('201692077', '李云皓', '男', '18742593080', '软件开发与测试', '软件1602', '13');
INSERT INTO `student` VALUES ('201692078', 'dddd', '男', '13847771111', 'ruanjian', '软1602', '123465');
INSERT INTO `student` VALUES ('201692088', 'dddd', '男', '13847771111', 'ruanjian', '软1602', '123');
INSERT INTO `student` VALUES ('201692089', 'dddd', '男', '13847771111', 'ruanjian', '软1602', '123465');
