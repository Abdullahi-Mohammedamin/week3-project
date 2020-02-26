$(document).ready(function() {
  $(".abuu").click(function() {
    $(".abuu").toggle()
    $(".wilder").toggle();
  });
  $(".wilder").click(function() {
    $(".abuu").toggle()
    $(".wilder").toggle();
  });
  $(".abo").click(function() {
    $(".abo").toggle()
    $(".aguero").toggle();
  });
  $(".aguero").click(function() {
    $(".abo").toggle()
    $(".aguero").toggle();
  });
  $(".semi").click(function() {
    $(".semi").toggle()
    $(".silva").toggle();
  });
  $(".silva").click(function() {
    $(".semi").toggle()
    $(".silva").toggle();
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
