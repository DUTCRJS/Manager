/*
Navicat MySQL Data Transfer

Source Server         : caiming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-26 21:52:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `infokind`
-- ----------------------------
DROP TABLE IF EXISTS `infokind`;
CREATE TABLE `infokind` (
  `infoId` int(6) NOT NULL,
  `kind` varchar(20) NOT NULL,
  PRIMARY KEY (`infoId`,`kind`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of infokind
-- ----------------------------
INSERT INTO `infokind` VALUES ('1', '16');
INSERT INTO `infokind` VALUES ('2', '11');
INSERT INTO `infokind` VALUES ('2', '14');
INSERT INTO `infokind` VALUES ('3', '11');
INSERT INTO `infokind` VALUES ('3', '14');
INSERT INTO `infokind` VALUES ('4', '11');
INSERT INTO `infokind` VALUES ('5', '11');
INSERT INTO `infokind` VALUES ('5', '14');
INSERT INTO `infokind` VALUES ('6', '11');
INSERT INTO `infokind` VALUES ('6', '15');
INSERT INTO `infokind` VALUES ('7', '11');
INSERT INTO `infokind` VALUES ('8', '11');
INSERT INTO `infokind` VALUES ('9', '11');
INSERT INTO `infokind` VALUES ('10', '1?');
INSERT INTO `infokind` VALUES ('11', '11');
INSERT INTO `infokind` VALUES ('12', '11');
INSERT INTO `infokind` VALUES ('13', '11');
INSERT INTO `infokind` VALUES ('14', '11');
INSERT INTO `infokind` VALUES ('14', '14');
INSERT INTO `infokind` VALUES ('15', '11');
INSERT INTO `infokind` VALUES ('16', '1?');
INSERT INTO `infokind` VALUES ('17', '1?');
INSERT INTO `infokind` VALUES ('18', '16');
INSERT INTO `infokind` VALUES ('19', '11');
INSERT INTO `infokind` VALUES ('20', '11');
INSERT INTO `infokind` VALUES ('21', '1?');
INSERT INTO `infokind` VALUES ('22', '11');
INSERT INTO `infokind` VALUES ('22', '14');
INSERT INTO `infokind` VALUES ('22', '15');
INSERT INTO `infokind` VALUES ('23', '11');
INSERT INTO `infokind` VALUES ('23', '16');
INSERT INTO `infokind` VALUES ('24', '11');
INSERT INTO `infokind` VALUES ('24', '14');
INSERT INTO `infokind` VALUES ('25', '14');
INSERT INTO `infokind` VALUES ('26', '11');
INSERT INTO `infokind` VALUES ('27', '1?');
INSERT INTO `infokind` VALUES ('28', '11');
INSERT INTO `infokind` VALUES ('29', '1?');
INSERT INTO `infokind` VALUES ('30', '11');
INSERT INTO `infokind` VALUES ('31', '11');
INSERT INTO `infokind` VALUES ('32', '16');
INSERT INTO `infokind` VALUES ('33', '11');
INSERT INTO `infokind` VALUES ('34', '16');
INSERT INTO `infokind` VALUES ('35', '11');
INSERT INTO `infokind` VALUES ('35', '14');
INSERT INTO `infokind` VALUES ('36', '11');
INSERT INTO `infokind` VALUES ('36', '14');
INSERT INTO `infokind` VALUES ('37', '11');
INSERT INTO `infokind` VALUES ('38', '11');
INSERT INTO `infokind` VALUES ('39', '11');
INSERT INTO `infokind` VALUES ('39', '14');
INSERT INTO `infokind` VALUES ('40', '11');
INSERT INTO `infokind` VALUES ('40', '15');
INSERT INTO `infokind` VALUES ('41', '11');
INSERT INTO `infokind` VALUES ('42', '11');
INSERT INTO `infokind` VALUES ('43', '11');
INSERT INTO `infokind` VALUES ('44', '11');
INSERT INTO `infokind` VALUES ('45', '11');
INSERT INTO `infokind` VALUES ('46', '11');
INSERT INTO `infokind` VALUES ('47', '11');
INSERT INTO `infokind` VALUES ('48', '11');
INSERT INTO `infokind` VALUES ('49', '11');
INSERT INTO `infokind` VALUES ('50', '1?');
INSERT INTO `infokind` VALUES ('51', '1?');
INSERT INTO `infokind` VALUES ('52', '16');
INSERT INTO `infokind` VALUES ('53', '16');
INSERT INTO `infokind` VALUES ('54', '11');
INSERT INTO `infokind` VALUES ('55', '1?');
INSERT INTO `infokind` VALUES ('56', '13');
INSERT INTO `infokind` VALUES ('57', '1?');
INSERT INTO `infokind` VALUES ('58', '14');
INSERT INTO `infokind` VALUES ('59', '11');
INSERT INTO `infokind` VALUES ('60', '14');
INSERT INTO `infokind` VALUES ('61', '1?');
INSERT INTO `infokind` VALUES ('62', '11');
INSERT INTO `infokind` VALUES ('63', '1?');
INSERT INTO `infokind` VALUES ('64', '13');
INSERT INTO `infokind` VALUES ('64', '15');
INSERT INTO `infokind` VALUES ('65', '1?');
INSERT INTO `infokind` VALUES ('66', '16');
INSERT INTO `infokind` VALUES ('67', '1?');
INSERT INTO `infokind` VALUES ('68', '1?');
INSERT INTO `infokind` VALUES ('69', '1?');
INSERT INTO `infokind` VALUES ('70', '1?');
INSERT INTO `infokind` VALUES ('71', '1?');
INSERT INTO `infokind` VALUES ('72', '13');
INSERT INTO `infokind` VALUES ('72', '15');
INSERT INTO `infokind` VALUES ('73', '1?');
INSERT INTO `infokind` VALUES ('74', '1?');
INSERT INTO `infokind` VALUES ('75', '1?');
INSERT INTO `infokind` VALUES ('76', '12');
INSERT INTO `infokind` VALUES ('77', '1?');
INSERT INTO `infokind` VALUES ('78', '11');
INSERT INTO `infokind` VALUES ('79', '11');
INSERT INTO `infokind` VALUES ('80', '11');
INSERT INTO `infokind` VALUES ('81', '1?');
INSERT INTO `infokind` VALUES ('82', '1?');
INSERT INTO `infokind` VALUES ('83', '1?');
INSERT INTO `infokind` VALUES ('84', '1?');
INSERT INTO `infokind` VALUES ('85', '11');
INSERT INTO `infokind` VALUES ('85', '14');
INSERT INTO `infokind` VALUES ('86', '11');
INSERT INTO `infokind` VALUES ('87', '12');
INSERT INTO `infokind` VALUES ('88', '1?');
INSERT INTO `infokind` VALUES ('89', '11');
INSERT INTO `infokind` VALUES ('89', '14');
INSERT INTO `infokind` VALUES ('90', '1?');
INSERT INTO `infokind` VALUES ('91', '11');
INSERT INTO `infokind` VALUES ('92', '1?');
INSERT INTO `infokind` VALUES ('93', '11');
INSERT INTO `infokind` VALUES ('93', '14');
