var year1 = document.querySelector('.date1');
var display = document.querySelector('.displayAge');
var submit = document.querySelector('.submit');
var message = document.querySelector('.message');
var mssg = document.querySelector('.mssg');

var todaysDate = new Date();
var currentYear = todaysDate.getFullYear();

function getAge() {
  var year1InputValue = new Date(year1.value);
  var calculate = currentYear - year1InputValue.getFullYear();
  return calculate;
};

submit.addEventListener('click', function() {
  var year1InputValue = new Date(year1.value);
  var days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];
  message.innerHTML = days[year1InputValue.getDay()];

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  mssg.innerHTML = months[year1InputValue.getMonth()];
  display.innerHTML = getAge();
});
