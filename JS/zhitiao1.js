/*
zhitiao app unlocks pro

QX
^https:\/\/app1\.zuowenzhitiao\.com\/user\/common\/getPersonInfo url script-response-body https://raw.githubusercontent.com/vinsean/DOCMENT/master/JS/zhitiao1.js
^https:\/\/app1\.zuowenzhitiao\.com\/user\/extradata?pushSystemPermission=0 url script-response-body https://raw.githubusercontent.com/vinsean/DOCMENT/master/JS/zhitiao1.js

Surge & QX Mitm = app1.zuowenzhitiao.com
*/

let obj = JSON.parse($response.body);

/*
var s1 = '2023-09-09';
s1 = new Date(s1.replace(/-/g, "/"));
s2 = new Date();
var days = s1.getTime() - s2.getTime();
var experienceDays = parseInt(days / (1000 * 60 * 60 * 24));
*/
console.log(obj.data.member)
obj.data.member = {"status":"1", "endTime":"1694188800000", "userId":"65795493", "type":"1", "experienceDays":"123"};
$done({body: JSON.stringify(obj)});
