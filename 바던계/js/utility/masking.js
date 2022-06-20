//계좌번호 마스킹

var accountNum = "12312345612345";
var middleMask = accountNum.substring(3,8);
var middleLast = accountNum.substring(8,9);
var masking = "*****";

if(accountNum.length == 14){
    accountNum = accountNum.substring(0,3) + "-" 
    + accountNum.substring(3,8).replace(middleMask, masking) + middleLast + "-" 
    + accountNum.substring(9,14);
} else if(accountNum.length == 12) {
    accountNum = accountNum.substring(0,3) + "-" 
    + accountNum.substring(3,8).replace(middleMask, masking) + middleLast + "-" 
    + accountNum.substring(9,12);
} else{
    accountNum = accountNum
}

console.log(accountNum);