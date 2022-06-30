var str = "이거저거: , 하는것들: , 문자열만들기: , 한도구분코드:1";

var result = str.substring(str.lastIndexOf(":") +1);

console.log(result);