/*
zhitiao app unlocks pro

QX
^https:\/\/app1\.zuowenzhitiao\.com\/user\/member\/details url script-response-body https://raw.githubusercontent.com/vinsean/DOCMENT/edit/master/JS/zhitiao2.js

Surge & QX Mitm = app1.zuowenzhitiao.com
*/
let obj = JSON.parse($response.body);
obj.data = {"status":"1", "endTime":"1694188800000", "userId":"65795493", "type":"1"};
$done({body: JSON.stringify(obj)});
