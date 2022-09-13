export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx27b1d64fe71885bd",
    // 公众号appSecret
    appSecret: "ae1d69185b53112cda5670c2b86834a8",
    // 模板消息id
    templateId: "qD3dgR7Ujg3n3j7I8toeR3gWnx6MS89Q2Ny5iV3JKw8",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oIhbX5vECiYMY6uk30cFVZwNDrcE"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "黑龙江",
    // 所在城市
    city: "哈尔滨",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小何", "year": "2001", "date": "05-31", "type": 'new'},
      {"name": "小张", "year": "2001", "date": "06-13", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2017-04-25",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
