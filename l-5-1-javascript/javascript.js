function score() {
    var i = document.getElementById("score").value;
    if (!i.trim()) {
        alert("输入为空，请输入0-100的分数");
    } else if (0 <= i && i <= 100) {
        result(i);
    } else {
        alert("输入错误，请输入0-100的分数");
    }
}

function result(i) {
    switch (true) {
        case i <= 100 && i >= 90:
            alert("该学生为1等生");
            break;
        case i < 90 && i >= 80:
            alert("该学生为2等生");
            break;
        case i < 80 && i >= 70:
            alert("该学生为3等生");
            break;
        case i < 70 && i >= 60:
            alert("该学生为4等生");
            break;
        case i < 60 && i >= 0:
            alert("该学生为差等生");
            break;
    }
}
