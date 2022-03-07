// TheCountDown

function TheCountDown(newDate) {

    // 「入力された日付」と「現在」のタイムスタンプ
    var newTime = new Date(newDate).getTime();
    var nowTime = new Date().getTime();

    // タイムスタンプの差
    var timeDiff = newTime - nowTime;

    // 過去の日付`が入力されたら・・・
    if (timeDiff < 0) {
        timeDiff = nowTime - newTime;
    }

    // 日　時間　分　秒　　※・・・改善できる見込み
    var dayDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    var hourDiff = Math.floor(timeDiff / 1000 / 60 / 60 % 24);
    var minDiff = Math.floor(timeDiff / 1000 / 60 / 60 % 24 % hourDiff * 60);
    var secDiff = Math.floor(timeDiff / 1000 / 60 / 60 % 24 % hourDiff * 60 % minDiff * 60);

    // divに書く
    oDay = document.getElementById("day");
    oDay.innerHTML = dayDiff + "日";

    oHour = document.getElementById("hour");
    oHour.innerHTML = hourDiff + "時間";

    oMin = document.getElementById("minute");
    oMin.innerHTML = minDiff + "分";

    oSec = document.getElementById("second");
    oSec.innerHTML = secDiff + "秒";

}



var state = false; // 日付が選ばれてない状態だと「2023年の正月までの時間」を提示する
if (state == false) {
    timer = setInterval(function () {
        TheCountDown("2023/01/01");
    }, 0, 1000)
}


var oBtn = document.getElementById("btn");
oBtn.onclick = function () {
    clearInterval(timer)
    state == true; // 日付が選ばれた状態　

    var oInputDate = document.getElementById("input-date").value;
    timer = setInterval(function () {
        TheCountDown(oInputDate);
    }, 0, 1000)


    //  提示文を変えるため
    var oInputText = document.getElementById("input-text").value;
    var oTextDisplayed = document.getElementById("displayed-text");

    //　時差もう一回計算　※・・・改善できる見込み
    var newTime = new Date(oInputDate).getTime();
    var nowTime = new Date().getTime();
    var timeDiff = newTime - nowTime;
    if (timeDiff >= 0) {
        oTextDisplayed.innerHTML = oInputText + "まではあと・・・";
    } else {
        oTextDisplayed.innerHTML = oInputText + "からはもう・・・";
    }


}