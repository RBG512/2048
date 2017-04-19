var weeks=["日","一","二","三","四","五","六"];
var setTime=null;
function getDateTime(){
    if (setTime!=null){
        clearTimeout(setTime);
    }
    var dateTime=new Date();
    var year=dateTime.getFullYear();
    var month=dateTime.getMonth()+1;
    var date=dateTime.getDate();
    var week=dateTime.getDay();
    document.getElementById('dateTime').innerHTML=(year+'年'+changeTime(month)+'月'+changeTime(date)+'日' +'星期'+weeks[week]+'<br/>');
    var h=dateTime.getHours();
    var m=dateTime.getMinutes();
    var s=dateTime.getSeconds();
    document.getElementById("dateTime").innerHTML+=(changeTime(h)+":"+changeTime(m)+":"+changeTime(s));
    setTime= setTimeout(getDateTime,1000);
}
getDateTime();
function changeTime(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}
