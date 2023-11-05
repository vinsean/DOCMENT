
var ojbk = JSON.parse($response.body);

ojbk.data.is_vip = 1;
ojbk.data.cur_page_num = 999;
ojbk.data.other_remain_day = 999;
ojbk.data.remain_day = 999;
ojbk.data.other_is_vip = 1;

$done({body : JSON.stringify(ojbk)});
