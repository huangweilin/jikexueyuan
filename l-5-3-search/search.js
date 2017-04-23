var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]
var char = ""; //出现最多的字母
var count = 0; //出现次数
var grid = []; //出现坐标
for (var i = 0; i < arr.length; i++) {
    var p = 0; //临时次数
    var val = []; //临时位置
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            val[p] = j + 1;
            p++;
        }
    }
    if (count < p) { //判断出现次数
        count = p;
        char = arr[i];
        grid = val;
    }
}
document.write("原数组arr：" + arr + "</br>");
document.write("出现最多的字母为：" + char + "</br>");
document.write("出现次数：" + count + "</br>");
document.write("出现在：" + grid + "位置");
