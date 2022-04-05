var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷",
    "迴圈",
    "函式"
];
var startDate = new Date();
// debugger;
function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
$("#submit").on("click",function(){
    var date=new Date($(this).val());
    var d=date.getDate();
    var m=date.getMonth()+1;
    setMonthAndDay(d,m);
});