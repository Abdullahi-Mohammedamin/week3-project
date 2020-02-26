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
  $(".work4-image").hover(function(){
      $("#work4-overlay").toggle()
      $("#work4-img").toggle()
  });

  $(".work3-image").hover(function(){
      $("#work3-overlay").toggle()
      $("#work3-img").toggle()
  });

  $(".work2-image").hover(function(){
      $("#work2-overlay").toggle()
      $("#work2-img").toggle()
  });

  $(".work1-image").hover(function(){
      $("#work1-overlay").toggle()
      $("#work1-img").toggle()
  });

  $(".work5-image").hover(function(){
      $("#work5-overlay").toggle()
      $("#work5-img").toggle()
  });

  $(".work6-image").hover(function(){
      $("#work6-overlay").toggle()
      $("#work6-img").toggle()
  });

  $(".work7-image").hover(function(){
      $("#work7-overlay").toggle()
      $("#work7-img").toggle()
  });

  $(".work8-image").hover(function(){
      $("#work8-overlay").toggle()
      $("#work8-img").toggle()
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
