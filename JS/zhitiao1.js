/*
zhitiao app unlocks pro

QX
^https:\/\/app1\.zuowenzhitiao\.com\/user\/common\/getPersonInfo url script-response-body https://raw.githubusercontent.com/vinsean/DOCMENT/master/JS/zhitiao1.js
^https:\/\/app1\.zuowenzhitiao\.com\/user\/extradata?pushSystemPermission=0 url script-response-body https://raw.githubusercontent.com/vinsean/DOCMENT/master/JS/zhitiao1.js

Surge & QX Mitm = app1.zuowenzhitiao.com
*/

let obj = JSON.parse($response.body);

obj.data = {
    "hasHonor" : 0,
    "isFocus" : -1,
    "picUrl" : "http://zt-cdn.zuowenzhitiao.com/user/avatar.jpg/zwzt_Avatar_Compress",
    "borders" : [

    ],
    "constellation" : "",
    "iskol" : 0,
    "signinNum" : 1,
    "member" : {
      "status" : 1,
      "endTime" : 1694188800000,
      "userId" : "65795493",
      "type" : 0
    },
    "signature" : "",
    "showName" : "小纸条reYeLE",
    "repairToolNum" : "6.0",
    "ipLocate" : "未知",
    "homePic" : "http://zt-cdn.zuowenzhitiao.com//home-pic/default.png",
    "gender" : 0,
    "department" : "",
    "grade" : "",
    "focusCount" : 0,
    "editNum" : 0,
    "overage" : "0.00",
    "checkStatus" : false,
    "praise" : 0,
    "followerCount" : 0,
    "userId" : "65795493"
  }
$done({body: JSON.stringify(obj)});
