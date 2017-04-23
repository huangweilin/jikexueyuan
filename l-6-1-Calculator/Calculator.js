var temp1 = 0; //第一个数值
var numshow = 0; //屏幕显示的数值，也作为第二数值参与计算
var result; //计算结果
var operate = 0; //输入运算符后，使(str="")的判断 
var calcul = 0; //判断获得的计算符1+;2-;3*;4/
var quit = 0; //防止重复按运算符，1为已有运算符

function num(x) {
    var str = document.getElementById("show").innerHTML; //获得当前显示数据
    // str=str.trim();
    // console.log(str);
    str = (operate == 0) ? str : ""; //输入运算符后str默认值
    str = (str != "0") ? str : ""; //清除数字开头的0
    str += x; //给当前值追加字符 
    // console.log(str+"p");
    document.getElementById("show").innerHTML = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志 
    // console.log("str:" + str);
}

function point() { //小数点
    var str = document.getElementById("show").innerHTML; //获得当前显示数据
    // console.log(str);
    str = (operate == 0) ? str : ""; //输入运算符后str默认值
    if (str == "") {
        str = "0.";
    } else {
        for (var i = 0; i < str.length; i++) {
            if (str.substr(i, 1) == ".") {
                return false;
            }
        }
        str += ".";
    }
    // console.log(str);
    document.getElementById("show").innerHTML = str; //刷新显示 
    operate = 0; //重置输入状态 
}

function calculator() { //计算方式
    var str = document.getElementById("show").innerHTML; //获得当前显示数据
    // console.log(str);
    numshow = Number(str);
    if (temp1 != 0 && quit != 1) {
        // if (quit != 1) {
        switch (calcul) {
            case 1:
            result = temp1 + numshow;
                // result = parseFloat((temp1 + numshow).toFixed(8));
                break;
            case 2:
                result = temp1 - numshow;
                // result = parseFloat((temp1 - numshow).toFixed(8));
                break;
            case 3:
                result = temp1 * numshow;
                // result = parseFloat((temp1 * numshow).toFixed(8));
                break;
            case 4:
                if (numshow != 0) {
                    // result = parseFloat((result = temp1 / numshow).toFixed(13));
                    result = temp1 / numshow;
                } else {
                    alert("计算错误：被除数不能为0！")
                        // result = "NaN";
                }
                break;
            default:
                return "error";
        }
        quit = 1; //避免重复按键 
    } else {
        result = numshow;
    }
    numshow = reserveDigit(result);
    document.getElementById("show").innerHTML = numshow;
    temp1 = Number(result);
    // console.log("numshowa:" + numshow);
    // console.log("temp1a:" + temp1);
    // console.log("str:" + str);
}

function plus() { // 四则运算 +
    calculator();
    quit = 1;
    operate = 1;
    calcul = 1;
}

function minus() { // 四则运算 -
    calculator();
    quit = 1;
    operate = 1;
    calcul = 2;
}

function times() { // 四则运算 ×
    calculator();
    quit = 1;
    operate = 1;
    calcul = 3;
}

function divide() { // 四则运算 ÷
    calculator();
    quit = 1;
    operate = 1;
    calcul = 4;
}

function equal() { // 运算结果 =
    calculator();
    operate = 1;
    temp1 = 0;
    // result = 0;
    // numshow = "0";
}

function clearShow() { //重置 ==>C
    document.getElementById("show").innerHTML = "0";
    temp1 = 0;
    result1 = 0;
    numshow = "0";
}

function del() { //后退   ==> ←
    var str = document.getElementById("show").innerHTML; //获得当前显示数据
    str = str.substr(0, str.length - 1);
    if (str.substr(0, 1) == "-") {
        if (str.length == 1) {
            str = "0";
        } else if (str.length == 3 && str.substr(1, 2) == "0.") { str = "0"; }
    } else if (str == "") {
        str = "0";
    }
    document.getElementById("show").innerHTML = str;
}

function negative() { //正负值
    var str = document.getElementById("show").innerHTML; //获得当前显示数据
    // var str="-2";
    if (str == "0") {

    } else if (str.substr(0, 1) == "-") {
        str = str.substring(1);
    } else {
        str = "-" + str;
    }
    // console.log(str);
    document.getElementById("show").innerHTML = str;
}

function cal(x) { //函数
    var str = document.getElementById("show").innerHTML; //获得当前显示数据
    switch (x) {
        case 1:
            str = Math.sin(str);
            break;
        case 2:
            str = Math.cos(str);
            break;
        case 3:
            str = Math.tan(str);
            break;
        case 4:
            str = (str == "0") ? str : 1 / str;
            break;
        case 5:
            str = str * str;
            break;
        case 6:
            if (str.substr(0, 1) == "-") {
                alert("计算错误：负数不能开平方！")
                    // str = "-" + Math.sqrt(str.substr(1));
            } else {
                str = Math.sqrt(str);
            }
            break;
        default:
            return "error";
    }
    str = reserveDigit(str);
    document.getElementById("show").innerHTML = str;
}

function reserveDigit(dig) { //除不尽时保留位数
    // console.log(typeof(dig));
    // console.log(dig);
    var digit = parseFloat((dig).toFixed(11));
    return digit;
}
