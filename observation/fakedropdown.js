$(".dropbtn").click(function () {

    $dropbtn = $(this);
    
    $dropdowncontent = $dropbtn.next();
    
    $dropdowncontent.toggle(0, function () {
    });

    $dropdowncontent.toggleClass("opened")

});


$(".dropbtn").click(function() {
  $('.transform').toggleClass('transform-active');
});

