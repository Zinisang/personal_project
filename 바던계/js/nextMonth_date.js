//다음달 자동이체일 확인
var start_date = '20210508'

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var fixed_date = start_date.substring(6,8);

if((parseInt(date)) > (parseInt(fixed_date)) ){
    month = (""+(parseInt(month)+1));
};

var next_month = new Date(year, month, (""+(parseInt(fixed_date)+1)));

console.log(next_month); // 2022-03-08 가 나온다