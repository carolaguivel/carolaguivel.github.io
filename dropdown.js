$(".dropbtn").click(function () {

    $dropbtn = $(this);
    
    $dropdowncontent = $dropbtn.next();
    
    $dropdowncontent.slideToggle(680, function () {
    });

    $dropdowncontent.toggleClass("opened")

});

