/*
 Navicat Premium Data Transfer

 Source Server         : 前端
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : psychology

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 06/02/2021 20:09:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for boss
-- ----------------------------
DROP TABLE IF EXISTS `boss`;
CREATE TABLE `boss`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of boss
-- ----------------------------
INSERT INTO `boss` VALUES (1, '校长', '123456');

-- ----------------------------
-- Table structure for hf
-- ----------------------------
DROP TABLE IF EXISTS `hf`;
CREATE TABLE `hf`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `sj` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hf
-- ----------------------------
INSERT INTO `hf` VALUES (1, '老师', '2021年1月20日', '请联系我');
INSERT INTO `hf` VALUES (2, '老师', '2021年12月2', '这么多');
INSERT INTO `hf` VALUES (11, '王老师', '2021年2月4日', '打扎子,调皮了啊！！');

-- ----------------------------
-- Table structure for pinces
-- ----------------------------
DROP TABLE IF EXISTS `pinces`;
CREATE TABLE `pinces`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pinces
-- ----------------------------
INSERT INTO `pinces` VALUES (1, '12', '女');
INSERT INTO `pinces` VALUES (2, '12', '男');
INSERT INTO `pinces` VALUES (3, '小刚', '女');
INSERT INTO `pinces` VALUES (4, '12', '男');
INSERT INTO `pinces` VALUES (5, '1', '1');

-- ----------------------------
-- Table structure for pl
-- ----------------------------
DROP TABLE IF EXISTS `pl`;
CREATE TABLE `pl`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `sj` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pl
-- ----------------------------
INSERT INTO `pl` VALUES (1, '小刚', '2021年3月21日', '我感觉自己心里问题很严重');
INSERT INTO `pl` VALUES (2, '小红', '2021年12月21', '我也是');
INSERT INTO `pl` VALUES (4, '小红帽', '2021年2月3日', '你猜猜我是谁');
INSERT INTO `pl` VALUES (12, '打扎子', '2021年2月3日', '你key你擦');

-- ----------------------------
-- Table structure for shiti
-- ----------------------------
DROP TABLE IF EXISTS `shiti`;
CREATE TABLE `shiti`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `yes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `tes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `no` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 57 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shiti
-- ----------------------------
INSERT INTO `shiti` VALUES (1, '平时不知为什么总觉得心慌意乱，坐立不安', '2', '1', '0');
INSERT INTO `shiti` VALUES (2, '上床后，怎么也睡不着，即使睡着也容易惊醒。', '2', '1', '0');
INSERT INTO `shiti` VALUES (3, '经常做恶梦，惊恐不安，早晨醒来就感到倦怠无力、焦虑烦躁。', '2', '1', '0');
INSERT INTO `shiti` VALUES (4, '经常醒1-2小时，醒后很难再入睡。', '2', '1', '0');
INSERT INTO `shiti` VALUES (5, '学习常使自己感到非常烦躁，讨厌学习。', '2', '1', '0');
INSERT INTO `shiti` VALUES (6, '读书看报甚至在课堂上也不能专心一致，往往自己也搞不清在想什么', '2', '1', '0');
INSERT INTO `shiti` VALUES (7, '遇到不称心的事情便较长时间地沉默少言', '2', '1', '0');
INSERT INTO `shiti` VALUES (8, '感到很多事情不称心，无端发火。', '2', '1', '0');
INSERT INTO `shiti` VALUES (9, '哪怕是一件小事情，也总是很放不开，整日思索。', '2', '1', '0');
INSERT INTO `shiti` VALUES (10, '感到现实生活中没有什么事情能引起自己的乐趣，郁郁寡欢。', '2', '1', '0');
INSERT INTO `shiti` VALUES (11, '老师讲课，常常听不懂，有时懂得快忘得也快。', '2', '1', '0');
INSERT INTO `shiti` VALUES (12, '遇到问题常常举棋不定，迟疑再三。', '2', '1', '0');
INSERT INTO `shiti` VALUES (13, '经常与人争吵发火，过后又后悔不已。', '2', '1', '0');
INSERT INTO `shiti` VALUES (14, '经常追悔自己做过的事，有负疚感。', '2', '1', '0');
INSERT INTO `shiti` VALUES (15, '一遇到考试，即使有准备也紧张焦虑。', '2', '1', '0');
INSERT INTO `shiti` VALUES (16, '一遇挫折，便心灰意冷，丧失信心。', '2', '1', '0');
INSERT INTO `shiti` VALUES (17, '.非常害怕失败，行动前总是提心吊胆，畏首畏尾。', '2', '1', '0');
INSERT INTO `shiti` VALUES (18, '感情脆弱，稍不顺心，就暗自流泪。', '2', '1', '0');
INSERT INTO `shiti` VALUES (19, '自己瞧不起自己，觉得别人总在嘲笑自己。', '2', '1', '0');
INSERT INTO `shiti` VALUES (20, '喜欢跟自己年幼或能力不如自己的人一起玩或比赛', '2', '1', '0');
INSERT INTO `shiti` VALUES (21, '.感到没有人理解自己，烦闷时别人很难使自己高兴', '2', '1', '0');
INSERT INTO `shiti` VALUES (22, '发现别人在窃窃私语，便怀疑是在背后议论自己。', '2', '1', '0');
INSERT INTO `shiti` VALUES (23, '对别人取得的成绩和荣誉常常表示怀疑，甚至嫉妒。', '2', '1', '0');
INSERT INTO `shiti` VALUES (24, '缺乏安全感，总觉得别人要加害自己。', '2', '1', '0');
INSERT INTO `shiti` VALUES (25, '参加春游等集体活动时，总有孤独感。', '2', '1', '0');
INSERT INTO `shiti` VALUES (26, '害怕见陌生人，人多时说话就脸红。', '2', '1', '0');
INSERT INTO `shiti` VALUES (27, '在黑夜行走或独自在家有恐惧感。', '2', '1', '0');
INSERT INTO `shiti` VALUES (28, '一旦离开父母，心里就不踏实。', '2', '1', '0');
INSERT INTO `shiti` VALUES (29, '经常怀疑自己接触的东西不干净，反复洗手或换衣服，对清洁极端注意。', '2', '1', '0');
INSERT INTO `shiti` VALUES (30, '担心是否锁门和东西忘记拿，反复检查，经常躺在床上又起来确认，或刚一出门又返回检查。', '2', '1', '0');
INSERT INTO `shiti` VALUES (31, '站在沟边、楼顶、阳台上，有摇摇晃晃要掉下去的感觉。', '2', '1', '0');
INSERT INTO `shiti` VALUES (32, '对他人的疾病非常敏感，经常打听，深怕自己也身患相同的病。', '2', '1', '0');
INSERT INTO `shiti` VALUES (33, '对特定的事物、交通工具（如公共汽车）、尖状物及白色墙壁等稍微奇怪的东西有恐怖倾向。', '2', '1', '0');
INSERT INTO `shiti` VALUES (34, '经常怀疑自己发育不良。', '2', '1', '0');
INSERT INTO `shiti` VALUES (35, '一旦与异性往往就脸红心慌或想入非非。', '2', '1', '0');
INSERT INTO `shiti` VALUES (36, '对某个异伙伴的每一个细微行为都很注意。', '2', '1', '0');
INSERT INTO `shiti` VALUES (37, '怀疑自己患了严重不治之症，反复看医书或去医院检查。', '2', '1', '0');
INSERT INTO `shiti` VALUES (38, '有依赖止痛或镇静药的习惯。', '2', '1', '0');
INSERT INTO `shiti` VALUES (39, '经常有离家出走或脱离集体的想法。', '2', '1', '0');
INSERT INTO `shiti` VALUES (40, '感到内心痛苦无法解脱，只能自伤或自杀。 ', '2', '1', '0');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, '小蓝', '111', '男');
INSERT INTO `student` VALUES (2, '小强', '111', '男');
INSERT INTO `student` VALUES (18, '小红', '123456', '男');
INSERT INTO `student` VALUES (19, '小风', '12345', '男');
INSERT INTO `student` VALUES (25, '老师', '123456', '男');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES (1, '武志伟', 123456);
INSERT INTO `teacher` VALUES (3, '张三', 222211);
INSERT INTO `teacher` VALUES (4, '赵山三', 122);
INSERT INTO `teacher` VALUES (5, '张三搜索', 222211);
INSERT INTO `teacher` VALUES (6, '张三是是是', 222211);
INSERT INTO `teacher` VALUES (7, '杨白劳', 222211);
INSERT INTO `teacher` VALUES (8, '张三阿萨是的', 222211);
INSERT INTO `teacher` VALUES (9, '张三三生三世', 222211);
INSERT INTO `teacher` VALUES (10, '12', 12);
INSERT INTO `teacher` VALUES (11, '赵强', 123456);
INSERT INTO `teacher` VALUES (12, '赵强散', 123456);
INSERT INTO `teacher` VALUES (13, '1', 1);
INSERT INTO `teacher` VALUES (14, '张三大声道', 222211);
INSERT INTO `teacher` VALUES (15, '杜甫', 123);
INSERT INTO `teacher` VALUES (16, '1231', 123);

-- ----------------------------
-- Table structure for techengji
-- ----------------------------
DROP TABLE IF EXISTS `techengji`;
CREATE TABLE `techengji`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fuder` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of techengji
-- ----------------------------
INSERT INTO `techengji` VALUES (1, '12', '12', '12');
INSERT INTO `techengji` VALUES (2, '小兰', '女', '12');
INSERT INTO `techengji` VALUES (3, '1', '1', '1');
INSERT INTO `techengji` VALUES (4, '1', '1', '1');
INSERT INTO `techengji` VALUES (5, '111111111', '1', '1');
INSERT INTO `techengji` VALUES (6, '1', '1', '11');
INSERT INTO `techengji` VALUES (8, '小明', '女', '12');
INSERT INTO `techengji` VALUES (29, '小蓝', '男', '33');
INSERT INTO `techengji` VALUES (30, '小蓝', '请登录!', '80');
INSERT INTO `techengji` VALUES (31, '老师', '', '80');
INSERT INTO `techengji` VALUES (32, '小红', '男', '50');

SET FOREIGN_KEY_CHECKS = 1;
