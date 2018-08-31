$(".dropbtn").click(function () {

    $dropbtn = $(this);
    
    $dropdowncontent = $dropbtn.next();
    
    $dropdowncontent.slideToggle(900, function () {
    });

    $dropdowncontent.toggleClass("opened")

});


$(".dropbtn").click(function() {
  $('.transform').toggleClass('transform-active');
});