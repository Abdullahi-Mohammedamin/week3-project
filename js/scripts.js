$(document).ready(function() {
$(".abuu").click(function() {
$(".wilder").hide();
$(".wilder").slideDown();
$(".wilder").toggle();
});
$(".abo").click(function(){
$(".aguero").hide();
$(".aguero").fadeIn()
$(".aguero").toggle();
});
$(".semi").click(function(){
$(".silva").hide();
$(".silva").fadeIn()
$(".silva").toggle();
});
});function submitContactForm(){
var name = document.querySelector("#name").value;
const data = {
user: 'example',
from_email: '',
subject: '',

};
alert("Thank you " + name + " for contacting us. We have recieved your message");
}
