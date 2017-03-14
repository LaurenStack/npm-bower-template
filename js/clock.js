function Clock() {

}

Clock.prototype.alarm = function() {

};

Clock.prototype.getSevenDays = function() {
  var days = [];
  for (var i = 0; i <= 7; i++){
    var day = moment().format("dddd") +", "+ moment().add(i, "days").format("LL");
    days.push(day.substring(0,day.length-6));
    // console.log(moment().add(i, "days").format("LL"))
  }
  return days;
}

Clock.prototype.getHour = function() {
  var hours = [];
  for (var i = 1; i <= 12; i++) {
    hours.push(i);
  }
  return hours;
};

Clock.prototype.getMin = function() {
  var minutes = [];
  for (var i = 0; i <= 55; i+=1) {
    var minute = i;
    if(minute.toString().length<2){
      minute = "0" + i;
    }
    minutes.push(minute);
  }
  return minutes;
};

exports.clockModule = Clock;
