
var Resident_num = '9212151885522'

var BDY = Resident_num.substring(0,2);
var BDM = Resident_num.substring(2,4);
var BDD = Resident_num.substring(4,6);
var R_num = Resident_num.substring(6);

var BDFullYear 
if(R_num.substring(0,1)=='1' || R_num.substring(0,1)=='2'){
    BDFullYear = 1900 + Number(BDY);
} else if(R_num.substring(0,1)=='3' || R_num.substring(0,1)=='4'){
    BDFullYear = 2000 + Number(BDY);
}

var today = new Date();
var birthdate = new Date(BDFullYear,BDM,BDD);
var age = today.getFullYear() - birthdate.getFullYear();

var m = today.getMonth() - birthdate.getMonth();        //만 나이 구하기
if (m < 0 || (m == 0 && today.getDate() < birthdate.getDate())){
    age--;
}

// console.log(age);



var sentence = "1992년생인데 가입하려고요"

var BDM = 0;
var BDD = 0;
var sen_wording = /([0-9\,\.]+)년생/g;
var sen_num = sentence.match(sen_wording)[0]

var BDFullYear = /([0-9\,\.]+)/g;
if (sen_num.match(BDFullYear)) {
    BDFullYear = Number(sen_num.match(BDFullYear)[0])
}

var today = new Date();
var birthdate = new Date(BDFullYear, BDM, BDD);     //따로 설정 안하면 그냥 해당년도 1월 1일 기준으로
var age = today.getFullYear() - birthdate.getFullYear();

// console.log(age);