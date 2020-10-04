
$('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });
 
  $("button").click(function (omonge) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    omonge.preventDefault();
  });
 
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });
 
  $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });