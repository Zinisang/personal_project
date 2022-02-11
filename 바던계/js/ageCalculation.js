let Resident_num = '921215-1885522'

let BDY = Resident_num.substring(0,2);
let BDM = Resident_num.substring(2,4);
let BDD = Resident_num.substring(4,6);
let R_num = Resident_num.substring(7);

let BDFullYear 
if(R_num.substring(0,1)=='1' || R_num.substring(0,1)=='2'){
    BDFullYear = 1900 + Number(BDY);
} else if(R_num.substring(0,1)=='3' || R_num.substring(0,1)=='4'){
    BDFullYear = 2000 + Number(BDY);
}

let today = new Date();
let birthdate = new Date(BDFullYear,BDM,BDD);

let age = today.getFullYear() - birthdate.getFullYear();
let m = today.getMonth() - birthdate.getMonth();
if (m < 0 || (m == 0 && today.getDate() < birthdate.getDate())){
    age--;
}




console.log(age);
