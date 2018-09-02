// sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// sidenav end

// menu
$(".dropbtn").click(function () {

    $dropbtn = $(this);
    
    $dropdowncontent = $dropbtn.next();
    
    $dropdowncontent.slideToggle(680, function () {
    });

    $dropdowncontent.toggleClass("opened")

});
// menu end

// typed
$(function(){
	$(".typed").typed({
		strings: ["wash your face","with the tears of your enemies","exfoliate with glitter"],
		stringsElement: null,
		typeSpeed: 80,
		startDelay: 1200,
		backSpeed: 60,
		backDelay: 800,
		loop: true,
		loopCount: 20,
		showCursor: false,
		cursorChar: "|",
		attr: null,
		contentType: 'html',
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	});
});
// typed end

