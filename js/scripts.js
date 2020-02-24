
$(document).ready(function() {
$(".abuu").click(function() {
$(".wilder").show();
$(".abo").click(function() {
$(".aguero").show();
$(".semi").click(function() {
$(".silva").show();
});
});
});
});
function submitContactForm(){
var name = document.querySelector("#name").value;
const data = {
user: 'example',
from_email: '',
subject: '',

};
alert("Thank you " + name + " for contacting us. We have recieved your message");
}
