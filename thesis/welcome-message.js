// $(function(){
// 	$("#welcome-message").typed({
// 		strings: ["Welcome to your Home Portal","PHE-3064"],
// 		stringsElement: null,
// 		typeSpeed: 80,
// 		startDelay: 1200,
// 		backSpeed: 60,
// 		backDelay: 800,
// 		loop: true,
// 		// loopCount: 20,
// 		showCursor: false,
// 		cursorChar: "|",
// 		attr: null,
// 		contentType: 'html',
// 		callback: function() {},
// 		preStringTyped: function() {},
// 		onStringTyped: function() {},
// 		resetCallback: function() {}
// 	});
// });

var typed = new Typed('.element', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  });