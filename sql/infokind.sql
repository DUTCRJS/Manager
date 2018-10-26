/*
Navicat MySQL Data Transfer

Source Server         : caiming
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : manager

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-26 22:12:59
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
INSERT INTO `infokind` VALUES ('1', '31');
INSERT INTO `infokind` VALUES ('1', '34');
INSERT INTO `infokind` VALUES ('2', '36');
INSERT INTO `infokind` VALUES ('3', '31');
INSERT INTO `infokind` VALUES ('4', '31');
INSERT INTO `infokind` VALUES ('4', '34');
INSERT INTO `infokind` VALUES ('5', '39');
INSERT INTO `infokind` VALUES ('6', '31');
INSERT INTO `infokind` VALUES ('6', '35');
INSERT INTO `infokind` VALUES ('7', '29');
INSERT INTO `infokind` VALUES ('8', '29');
INSERT INTO `infokind` VALUES ('9', '21');
INSERT INTO `infokind` VALUES ('10', '29');
INSERT INTO `infokind` VALUES ('11', '36');
INSERT INTO `infokind` VALUES ('12', '21');
INSERT INTO `infokind` VALUES ('12', '24');
INSERT INTO `infokind` VALUES ('13', '11');
INSERT INTO `infokind` VALUES ('14', '29');
INSERT INTO `infokind` VALUES ('15', '31');
INSERT INTO `infokind` VALUES ('16', '19');
INSERT INTO `infokind` VALUES ('17', '21');
INSERT INTO `infokind` VALUES ('18', '16');
INSERT INTO `infokind` VALUES ('19', '21');
INSERT INTO `infokind` VALUES ('19', '24');
INSERT INTO `infokind` VALUES ('20', '13');
INSERT INTO `infokind` VALUES ('21', '29');
INSERT INTO `infokind` VALUES ('22', '22');
INSERT INTO `infokind` VALUES ('23', '31');
INSERT INTO `infokind` VALUES ('24', '19');
INSERT INTO `infokind` VALUES ('25', '31');
INSERT INTO `infokind` VALUES ('26', '29');
INSERT INTO `infokind` VALUES ('27', '36');
INSERT INTO `infokind` VALUES ('28', '31');
INSERT INTO `infokind` VALUES ('29', '31');
INSERT INTO `infokind` VALUES ('30', '21');
INSERT INTO `infokind` VALUES ('31', '31');
INSERT INTO `infokind` VALUES ('32', '29');
INSERT INTO `infokind` VALUES ('33', '31');
INSERT INTO `infokind` VALUES ('33', '34');
INSERT INTO `infokind` VALUES ('34', '31');
INSERT INTO `infokind` VALUES ('35', '39');
INSERT INTO `infokind` VALUES ('36', '31');
INSERT INTO `infokind` VALUES ('37', '31');
INSERT INTO `infokind` VALUES ('37', '34');
INSERT INTO `infokind` VALUES ('37', '35');
INSERT INTO `infokind` VALUES ('38', '29');
INSERT INTO `infokind` VALUES ('39', '21');
INSERT INTO `infokind` VALUES ('40', '19');
INSERT INTO `infokind` VALUES ('41', '31');
INSERT INTO `infokind` VALUES ('42', '31');
INSERT INTO `infokind` VALUES ('42', '34');
INSERT INTO `infokind` VALUES ('43', '39');
INSERT INTO `infokind` VALUES ('44', '39');
INSERT INTO `infokind` VALUES ('45', '29');
INSERT INTO `infokind` VALUES ('46', '31');
INSERT INTO `infokind` VALUES ('47', '31');
INSERT INTO `infokind` VALUES ('48', '34');
INSERT INTO `infokind` VALUES ('49', '21');
INSERT INTO `infokind` VALUES ('50', '31');
INSERT INTO `infokind` VALUES ('50', '34');
INSERT INTO `infokind` VALUES ('51', '31');
INSERT INTO `infokind` VALUES ('51', '35');
INSERT INTO `infokind` VALUES ('52', '31');
INSERT INTO `infokind` VALUES ('52', '34');
INSERT INTO `infokind` VALUES ('53', '31');
INSERT INTO `infokind` VALUES ('54', '11');
INSERT INTO `infokind` VALUES ('55', '14');
INSERT INTO `infokind` VALUES ('56', '31');
INSERT INTO `infokind` VALUES ('56', '34');
INSERT INTO `infokind` VALUES ('57', '31');
INSERT INTO `infokind` VALUES ('58', '21');
INSERT INTO `infokind` VALUES ('58', '24');
INSERT INTO `infokind` VALUES ('59', '19');
INSERT INTO `infokind` VALUES ('60', '14');
INSERT INTO `infokind` VALUES ('61', '19');
INSERT INTO `infokind` VALUES ('62', '19');
INSERT INTO `infokind` VALUES ('63', '39');
INSERT INTO `infokind` VALUES ('64', '19');
INSERT INTO `infokind` VALUES ('65', '19');
INSERT INTO `infokind` VALUES ('66', '19');
INSERT INTO `infokind` VALUES ('67', '19');
INSERT INTO `infokind` VALUES ('68', '19');
INSERT INTO `infokind` VALUES ('69', '19');
INSERT INTO `infokind` VALUES ('70', '11');
INSERT INTO `infokind` VALUES ('71', '19');
INSERT INTO `infokind` VALUES ('72', '16');
INSERT INTO `infokind` VALUES ('73', '13');
INSERT INTO `infokind` VALUES ('73', '15');
INSERT INTO `infokind` VALUES ('74', '19');
INSERT INTO `infokind` VALUES ('75', '31');
INSERT INTO `infokind` VALUES ('76', '13');
INSERT INTO `infokind` VALUES ('76', '15');
INSERT INTO `infokind` VALUES ('77', '31');
INSERT INTO `infokind` VALUES ('77', '36');
INSERT INTO `infokind` VALUES ('78', '31');
INSERT INTO `infokind` VALUES ('78', '34');
INSERT INTO `infokind` VALUES ('79', '31');
INSERT INTO `infokind` VALUES ('80', '22');
INSERT INTO `infokind` VALUES ('81', '31');
INSERT INTO `infokind` VALUES ('82', '31');
INSERT INTO `infokind` VALUES ('83', '36');
INSERT INTO `infokind` VALUES ('84', '36');
INSERT INTO `infokind` VALUES ('85', '31');
INSERT INTO `infokind` VALUES ('86', '31');
INSERT INTO `infokind` VALUES ('87', '39');
INSERT INTO `infokind` VALUES ('88', '31');
INSERT INTO `infokind` VALUES ('89', '31');
INSERT INTO `infokind` VALUES ('90', '31');
INSERT INTO `infokind` VALUES ('91', '31');
INSERT INTO `infokind` VALUES ('92', '31');
INSERT INTO `infokind` VALUES ('93', '31');
