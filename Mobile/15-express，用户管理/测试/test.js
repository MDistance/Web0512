var express = require('express');

var app = express();

app.set('view engine','ejs');
app.set('views', './views');

var data = {
    "reason": "成功的返回", "result": {
        "stat": "1",
        "data": [{
            "uniquekey": "c2bf875d492e2d4a79ea02e3ee9a2dd0",
            "title": "《国学小名士》战况升级挑战“回文诗” 巴蜀文化花式上线引期待",
            "date": "2019-11-29 07:52",
            "category": "头条",
            "author_name": "娱里娱外",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129075201981.html",
            "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20191129\/2019112822_a59102e4f67b4165af92b3aa36eaed16_5856_cover_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/01imgmini.eastday.com\/mobile\/20191129\/2019112822_4cbe0e7b02264d8191c4123939f4d819_9470_cover_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/01imgmini.eastday.com\/mobile\/20191129\/2019112822_5693bcff33a44ad3bffec776b57c344d_4277_cover_mwpm_03200403.jpg"
        }, {
            "uniquekey": "4ec7e08860192b1f5f4eba591418a892",
            "title": "刘超元方与京东方科技集团董事长陈炎顺会谈",
            "date": "2019-11-29 07:50",
            "category": "头条",
            "author_name": "绵阳日报",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129075001779.html",
            "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/20191129075001_ab94e59895c760eec0574c7abb0b7e69_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "9c22b3d91277236eeab53f086b811f00",
            "title": "视界 | 伊朗霍尔木兹岛风情",
            "date": "2019-11-29 07:47",
            "category": "头条",
            "author_name": "北青网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129074717302.html",
            "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129074717_425cffaefc0adddd4e3011c1471efa15_1_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129074717_425cffaefc0adddd4e3011c1471efa15_4_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129074717_425cffaefc0adddd4e3011c1471efa15_5_mwpm_03200403.jpg"
        }, {
            "uniquekey": "87d73d12ea145d06d1f74be732190a3a",
            "title": "惊呆！他打开捡来的包一看：79个户口本16个出生证",
            "date": "2019-11-29 07:45",
            "category": "头条",
            "author_name": "西部网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129074525370.html",
            "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129074525_d8c9811152c150fecefd3dcaf8d14798_1_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129074525_d8c9811152c150fecefd3dcaf8d14798_2_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129074525_d8c9811152c150fecefd3dcaf8d14798_3_mwpm_03200403.jpg"
        }, {
            "uniquekey": "d52ed6d345b2dd98072f0343656d6f19",
            "title": "路德商学院｜寒冬给了有梦想的年轻人逆袭机会",
            "date": "2019-11-29 07:42",
            "category": "头条",
            "author_name": "路德商学院",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129074203067.html",
            "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129074203_995e8a95b6b8eff6f34cdd930945e428_2_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129074203_995e8a95b6b8eff6f34cdd930945e428_4_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129074203_995e8a95b6b8eff6f34cdd930945e428_3_mwpm_03200403.jpg"
        }, {
            "uniquekey": "b9e2ad41aba9ed8a51d0c60ba6c706df",
            "title": "投入不到20万元帮助11户贫困户脱贫，他们的奥秘何在？",
            "date": "2019-11-29 07:41",
            "category": "头条",
            "author_name": "中国军网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129074120445.html",
            "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/20191129074120_487c80648967459d8f9f6d0d9cd1691d_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "7991ca75afccb4531af1fc43d6aa6837",
            "title": "山东男篮爆发内讧！哈德森顶撞巩晓彬被弃用，老哈要离开CBA？",
            "date": "2019-11-29 07:38",
            "category": "头条",
            "author_name": "篮球资讯快递",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129073810464.html",
            "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/2019112907_1529aba0e42b4b50a5774fe145d5b69c_0517_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/2019112907_a0a8578f22c84f848756a1743d1a24b9_2091_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/2019112907_20fa5b1d828546b1b1809808f32328ae_4919_mwpm_03200403.jpg"
        }, {
            "uniquekey": "a84346b674a9f9cdc48a68ca22666a6a",
            "title": "甜瓜：昨晚和保罗吃了饭，怀念这种美好的小事情",
            "date": "2019-11-29 07:34",
            "category": "头条",
            "author_name": "ZAKER网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129073425367.html",
            "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129073425_6342c66cfb091eb0bc30aff07c195c84_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "bb2903f7863a5e77b4e3db5ff562c598",
            "title": "王者荣耀鲁班大师出装及打法思路分享 最强鲁班大师玩法攻略",
            "date": "2019-11-29 07:32",
            "category": "头条",
            "author_name": "好玩的手游",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129073243208.html",
            "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129073243_b8b7bfeae900db18396dbc9d35ef6d94_1_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129073243_b8b7bfeae900db18396dbc9d35ef6d94_3_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129073243_b8b7bfeae900db18396dbc9d35ef6d94_2_mwpm_03200403.jpg"
        }, {
            "uniquekey": "03127dc3f611b5c4e5321fa170ef8326",
            "title": "王者荣耀：7位英雄被调整｜甄姬废了遭大“削”",
            "date": "2019-11-29 07:32",
            "category": "头条",
            "author_name": "迅游手游加速器",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129073239657.html",
            "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129073239_8c027576cebec60c7dcb560c50f0d0f0_11_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129073239_8c027576cebec60c7dcb560c50f0d0f0_8_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129073239_8c027576cebec60c7dcb560c50f0d0f0_10_mwpm_03200403.jpg"
        }, {
            "uniquekey": "412217b18f8e16ad2f94f86f37490e30",
            "title": "唐朝军队下辖16个卫，一个右威卫能有十万大军？",
            "date": "2019-11-29 07:28",
            "category": "头条",
            "author_name": "那些年那人那事",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129072840442.html",
            "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129072840_a2395e8dcae529f966d603549de164ad_5_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129072840_a2395e8dcae529f966d603549de164ad_2_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129072840_a2395e8dcae529f966d603549de164ad_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "18e283e89b7aaacd29e316a03a1837a1",
            "title": "93岁英女王或将于2021年退休，长子查尔斯摄政",
            "date": "2019-11-29 07:24",
            "category": "头条",
            "author_name": "澎湃新闻网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129072435246.html",
            "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129072435_08aeef8abfdb50d900b57c947e58e5f5_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "55ea7cde58bf47edf0aa78611e408c67",
            "title": "前有王宝强, 后有赵丽颖, 今有朱一龙和刘宇宁, 娱乐圈怎么了?",
            "date": "2019-11-29 07:18",
            "category": "头条",
            "author_name": "忆忘者",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129071812081.html",
            "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/20191129071812_5d77406dcad99c1176ed779de58fa27e_3_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/20191129071812_5d77406dcad99c1176ed779de58fa27e_1_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20191129\/20191129071812_5d77406dcad99c1176ed779de58fa27e_2_mwpm_03200403.jpg"
        }, {
            "uniquekey": "90cb55b500efe0aab1e9e3183704d67d",
            "title": "新发现！年轻人创业屡见不鲜，怎样才能站稳脚跟？",
            "date": "2019-11-29 07:15",
            "category": "头条",
            "author_name": "创业招商邦",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129071553708.html",
            "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129071553_583c8ccc59aecd0a3bf4636b345ace5d_3_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129071553_583c8ccc59aecd0a3bf4636b345ace5d_6_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129071553_583c8ccc59aecd0a3bf4636b345ace5d_7_mwpm_03200403.jpg"
        }, {
            "uniquekey": "122421f428c86baa4bc473763328e3c8",
            "title": "《追我吧》砸钱，高以翔拚命，真人秀还能再来？",
            "date": "2019-11-29 07:07",
            "category": "头条",
            "author_name": "a股工兵营",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070719651.html",
            "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129070719_e61b85e2134b898a936917b0cb96042c_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "95eb18edaf7aa1661951a3524094ccdc",
            "title": "越南女子就为了一部iPhone11，竟欣然同意把亲侄女卖给陌生网友",
            "date": "2019-11-29 07:06",
            "category": "头条",
            "author_name": "星姐情感",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070610694.html",
            "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129070610_36fa267d15443fb5590e8966a92041e1_3_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129070610_36fa267d15443fb5590e8966a92041e1_2_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129070610_36fa267d15443fb5590e8966a92041e1_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "c8754c0a77c224844a740da1dcbf321e",
            "title": "12星座专属“魔幻音乐盒”，水瓶座自由摩天轮，双子座直爽热气球",
            "date": "2019-11-29 07:06",
            "category": "头条",
            "author_name": "上了年纪的老阿姨吖",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070601259.html",
            "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129070601_4aa183568277a3c2568d3d10cebf6b4d_9_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129070601_4aa183568277a3c2568d3d10cebf6b4d_6_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129070601_4aa183568277a3c2568d3d10cebf6b4d_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "ec6b64ed825b0453abda9f294a9778f0",
            "title": "水瓶座喜欢一个人，又偏偏假装不在乎，喜欢说反话",
            "date": "2019-11-29 07:05",
            "category": "头条",
            "author_name": "双子座",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070558905.html",
            "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20191129\/20191129070558_d72500e8cd9a3335f1e1d4130fb91f76_2_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20191129\/20191129070558_d72500e8cd9a3335f1e1d4130fb91f76_1_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20191129\/20191129070558_d72500e8cd9a3335f1e1d4130fb91f76_3_mwpm_03200403.jpg"
        }, {
            "uniquekey": "1eb5b96519157462308df82ea6c2d425",
            "title": "PDD变成预言大师？盘点这些年PDD说过成真的故事",
            "date": "2019-11-29 07:04",
            "category": "头条",
            "author_name": "贪玩仔说电竞",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070455880.html",
            "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129070455_727f9c28446ed2ec4659c09efc4623ca_9_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129070455_727f9c28446ed2ec4659c09efc4623ca_2_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20191129\/20191129070455_727f9c28446ed2ec4659c09efc4623ca_6_mwpm_03200403.jpg"
        }, {
            "uniquekey": "5314cc2b94e4b136147fc0c2994c53ec",
            "title": "中国男篮落选赛最佳阵容",
            "date": "2019-11-29 07:03",
            "category": "头条",
            "author_name": "阳光撒进心灵",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070352279.html",
            "thumbnail_pic_s": "http:\/\/09imgmini.eastday.com\/mobile\/20191129\/20191129070352_0de95e72a9f1f90e9f96a61553a072e2_2_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/09imgmini.eastday.com\/mobile\/20191129\/20191129070352_0de95e72a9f1f90e9f96a61553a072e2_3_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/09imgmini.eastday.com\/mobile\/20191129\/20191129070352_0de95e72a9f1f90e9f96a61553a072e2_4_mwpm_03200403.jpg"
        }, {
            "uniquekey": "dc553709ae8828bb02fbf4a7ccc9d94a",
            "title": "斗鱼KPL资讯：AG、eStarPro对决将开启，后者将完胜",
            "date": "2019-11-29 07:02",
            "category": "头条",
            "author_name": "游戏的使者",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070223819.html",
            "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129070223_3ebd3ce1c46f47d21ae5cf971aac48ac_4_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129070223_3ebd3ce1c46f47d21ae5cf971aac48ac_3_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129070223_3ebd3ce1c46f47d21ae5cf971aac48ac_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "7b07aa5b2ddb80c385121883b87affa8",
            "title": "安东尼16年我行我素难驯服 错误时间在错误球队搞垮人设",
            "date": "2019-11-29 07:01",
            "category": "头条",
            "author_name": "nba广角",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070159773.html",
            "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129070159_1b2fdeaf974f9ad007c9df1a7ea040b2_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "4a89154b7662661d6a5369093e8c83c1",
            "title": "长城吉利销量同创历史新高：龙头车企是否迎来拐点？",
            "date": "2019-11-29 07:01",
            "category": "头条",
            "author_name": "ZAKER网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129070126778.html",
            "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20191129\/20191129073525_8e4ec39205a39d27bd0b3d4cf822a3fd_1_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20191129\/20191129073525_8e4ec39205a39d27bd0b3d4cf822a3fd_2_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20191129\/20191129073525_8e4ec39205a39d27bd0b3d4cf822a3fd_7_mwpm_03200403.jpg"
        }, {
            "uniquekey": "ac4c8e5e9708024995d5339b1443f17b",
            "title": "缤纷多彩长三角——冬日的上海崇明长江入海口",
            "date": "2019-11-29 06:59",
            "category": "头条",
            "author_name": "人民网",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129065932458.html",
            "thumbnail_pic_s": "http:\/\/08imgmini.eastday.com\/mobile\/20191129\/20191129065932_67df2d297166415c86bd54af5e16e44c_3_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/08imgmini.eastday.com\/mobile\/20191129\/20191129065932_67df2d297166415c86bd54af5e16e44c_1_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/08imgmini.eastday.com\/mobile\/20191129\/20191129065932_67df2d297166415c86bd54af5e16e44c_2_mwpm_03200403.jpg"
        }, {
            "uniquekey": "b640f8ee36864086293c78a915d59a90",
            "title": "中超新一轮角逐落下帷幕",
            "date": "2019-11-29 06:57",
            "category": "头条",
            "author_name": "乌龟评球",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129065724572.html",
            "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129065724_c2ff885f1325f5339ff73fb19fa8ff44_2_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129065724_c2ff885f1325f5339ff73fb19fa8ff44_1_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20191129\/20191129065724_c2ff885f1325f5339ff73fb19fa8ff44_3_mwpm_03200403.jpg"
        }, {
            "uniquekey": "1257f213d385962b7f72ddae71d8302a",
            "title": "敲黑板划重点了 冬季自驾出行注意事项",
            "date": "2019-11-29 06:57",
            "category": "头条",
            "author_name": "车智驾",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129065707318.html",
            "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129065707_128891ccbf3cbb6c76eb99d12ec772b5_1_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129065707_128891ccbf3cbb6c76eb99d12ec772b5_12_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20191129\/20191129065707_128891ccbf3cbb6c76eb99d12ec772b5_3_mwpm_03200403.jpg"
        }, {
            "uniquekey": "4a14a33a57533d13b7e5ca8a3bd8e337",
            "title": "3名90后网友相约自杀，警方紧急出动",
            "date": "2019-11-29 06:52",
            "category": "头条",
            "author_name": "看三水",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129065257099.html",
            "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20191129\/20191129065257_cfc0288168a27aeeffaf4b4f8bb10f03_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "2787ec079d0af44747d80ece39d425f6",
            "title": "为什么瑞典所得税很高，公民却很幸福？",
            "date": "2019-11-29 06:46",
            "category": "头条",
            "author_name": "熊猫出国",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129064630233.html",
            "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20191129\/20191129064630_e3cfa46adba5f80c0057e62a3c288689_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "b2a959ad55bec05168753bb969af75d5",
            "title": "关于宇宙细思极恐的四个猜想，每一个都让人背脊发凉",
            "date": "2019-11-29 06:46",
            "category": "头条",
            "author_name": "量子旅行者",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129064619999.html",
            "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129064619_e8c4604af595c9a1e381f7032a568584_2_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129064619_e8c4604af595c9a1e381f7032a568584_3_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129064619_e8c4604af595c9a1e381f7032a568584_1_mwpm_03200403.jpg"
        }, {
            "uniquekey": "3839b2774a85ae4c2569d74c2951c553",
            "title": "「治安」法国破获珠宝盗窃转售大案 涉欧洲多国",
            "date": "2019-11-29 06:44",
            "category": "头条",
            "author_name": "旅法华人战报",
            "url": "http:\/\/mini.eastday.com\/mobile\/191129064447919.html",
            "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129064447_d887e1dbbca757ea442e1d24aa42f4e9_3_mwpm_03200403.jpg",
            "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129064447_d887e1dbbca757ea442e1d24aa42f4e9_2_mwpm_03200403.jpg",
            "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20191129\/20191129064447_d887e1dbbca757ea442e1d24aa42f4e9_1_mwpm_03200403.jpg"
        }]
    }, "error_code": 0
};

app.get('/news', function (req, res) {
    // 返回一个 ul li 的结构
    console.log(data.result.data);
    var body = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <h2>新闻列表</h2><ul>`;

    for(var i=0;i<data.result.data.length;i++){
        body += `<li><a target="_blank" href="${data.result.data[i].url}">${data.result.data[i].title}</a></li>`;
    }

    body += '</ul>';
    res.send(body);
});

app.listen(8080, function () {
    console.log('8080 listening.....');
});