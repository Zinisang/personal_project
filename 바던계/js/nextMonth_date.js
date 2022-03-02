//다음달 자동이체일 확인
var start_date = '20210105'

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var fixed_date = start_date.substring(6,8);

if((parseInt(date)) > (parseInt(fixed_date)) ){
    month = (""+(parseInt(month)+1));
};

var nm = new Date(year, month, fixed_date);

console.log(nm);