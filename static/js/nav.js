$(function () {
    var tr_length = $("#select-table thead").children().last().children().eq(1).text();
    console.log(tr_length);
    if(parseInt(tr_length) >= 4){
        alert("课程最多只能选四门！");
    }
});