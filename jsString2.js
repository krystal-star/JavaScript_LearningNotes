/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";

    // do something
    var start = 0, end = 0;
    for(var i=0; i<str.length; i++){
        if(str.charCodeAt(i) != 32 && str.charCodeAt(i) != 12288){  //全角半角空格的unicode分别是12288，32
            start = i; 
            break;
        }
    }

    for(var j=0; j<str.length ; j++){
        if(str.charCodeAt(str.length-j-1) != 32 && str.charCodeAt(str.length-j-1) != 12288){
            end = str.length-j; 
            break;
        }
    }

    result = str.slice(start,end);
    return result
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    // do something
    if(str.length <= 1) result = str;
    else{
        result += str[0];
        for(var i=1;i<str.length; i++){
            var tmp = str[i];
            if(result.lastIndexOf(tmp) != result.length-1){
                result += tmp;
            }
        }
    }
    
    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc