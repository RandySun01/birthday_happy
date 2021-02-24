// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "王同学",  // 同上...
        "今天是你的生日 ʜᴀ͟ᴘ͟ᴘ͟ʏ ᴇᴠᴇʀʏᴅᴀʏ",
        "♡ ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ ᴛᴏ ᴍᴇ ◟̆◞̆ ♡ ",
        "故事进度条： ▓▓▓░░░░░░░░░░░░ 23%",
        "与所有美好的存在又多了一年的故事",
        "希望你可以",
        "像孩子一样快乐",
        "像星星一样努力发光",
        "像风一样自由",
        "奇妙的与你相遇第115天",
        "还记得第一点的外卖,真的是很香",
        "你是第一个为我点外卖的人",
        "心里真的好暖好暖......",
        "是你让我体验了深夜的快乐",
        "感动的要哭啦，尤其是点大盘鸡那次",
        "还惹你生气啦，当时心里又好难受",
        "悔恨至极",
        "最后祝王同学,吃好,玩好,开森,找一份满意的工作,嘿嘿嘿",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "王同学": "./imgs/wangtongxue.png",
        "今天是你的生日 ʜᴀ͟ᴘ͟ᴘ͟ʏ ᴇᴠᴇʀʏᴅᴀʏ": "./imgs/今天是你的生日.jpg",
        "YAMI~~": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
