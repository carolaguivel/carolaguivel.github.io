// sidenav
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}
// sidenav end

var myFunction = function(input){}

function randomInt(low, high){
	var random = parseInt(Math.random()*(high-low) + low);
	return random;
}

var border1 = 0;
var border2 = 0;
var borderleft = 0;
var borderright = 0;
var direction = false;
var classname = ''; 

//triangle loop
for (var i = 0; i < 6039; i++) {

	var container = document.createElement("div");
	container.className = "container";

	var color = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

	if(i % 2 == 0){
		border1 = 5
        border2 = 0
		borderleft = 3
		borderright = 3
		zindex = 1
		redclass = "red"
		greenclass ="green"
		blueclass = "blue"
    }else{
		border1 = 0
		border2 = 5
		borderleft = 3
		borderright = 3
		zindex = -1
		redclass = "red"
		greenclass ="green"
		blueclass = "blue"
	}

	if(i % 15 == 0){
		border1 = 0
		border2 = 10
		borderleft = 7
		borderright = 7
		color = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";
		zindex = -1
		redclass = "red15"
		greenclass ="green15"
		blueclass = "blue15"
        classname = "triangle15"
	}else if(i % 22 == 0){
		border1 = 0
		border2 = 7
		borderleft = 5
		borderright = 5
		color = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";
		zindex = -1
		redclass = "red22"
		greenclass ="green22"
		blueclass = "blue22"
	}else if(i % 43 == 0){
		border1 = 0
		border2 = 7
		borderleft = 5
		borderright = 5
		color = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";
		zindex = -1
		redclass = "red43"
		greenclass ="green43"
		blueclass = "blue43"
	}


    container.innerHTML = `
	<div style="border-left:${borderleft}vw solid transparent; border-right:${borderright}vw solid transparent; border-bottom:${border1}vw solid ${color}; border-top:${border2}vw solid ${color}; z-index: ${zindex};" class="triangle ${redclass} ${greenclass} ${blueclass} ${classname}" data-border1="${border1}" data-border2="${border2}"></div>
	`				
			
	document.getElementById("wrapper").appendChild(container)

}
//triangle loop end

//color hover
$(document).ready(function(){

    $(".triangle").mouseover(function(){
        $(this).css({"z-index" : randomInt(-2,1)});
    })
})

$(document).ready(function(){

    $(".container").mouseover(function(){
        $(this).css({"z-index" : randomInt(-2,1)});
    })
})

$(document).ready(function(){

    $(".green").mouseover(function(){

        lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

        var border1 = $(this).attr("data-border1");
        var border2 = $(this).attr("data-border2");

        $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                      "border-top" : border2 + "vw solid "+ lightgreen})
    })
})

$(document).ready(function(){

    $(".green15").mouseover(function(){

        lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

        var border1 = $(this).attr("data-border1");
        var border2 = $(this).attr("data-border2");

        $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                      "border-top" : border2 + "vw solid "+ lightgreen})
        
    })
})

$(document).ready(function(){

    $(".green22").mouseover(function(){

        lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

        var border1 = $(this).attr("data-border1");
        var border2 = $(this).attr("data-border2");

        $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                      "border-top" : border2 + "vw solid "+ lightgreen})
        
    })
})

$(document).ready(function(){

    $(".green43").mouseover(function(){

        lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

        var border1 = $(this).attr("data-border1");
        var border2 = $(this).attr("data-border2");

        $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                      "border-top" : border2 + "vw solid "+ lightgreen})
        
    })
})
//color hover end

//onclick functions
function redFunction() {
    document.getElementById("closebtn").style.color = "red";
    document.getElementById("opennavtext").style.color = "red";
    document.getElementById("redtoggle").style.color = "red";
    document.getElementById("greentoggle").style.color = "red";
    document.getElementById("bluetoggle").style.color = "red";
    document.getElementById("text1").style.color = "red";
    document.getElementById("text2").style.color = "red";
    document.getElementById("text3").style.color = "red";
    document.getElementById("text4").style.color = "red";
    document.getElementById("text5").style.color = "red";
    document.getElementById("text6").style.color = "red";
    document.getElementById("text7").style.color = "red";

    $(document).ready(function(){
        $("#bluetoggle").hover(function(){
            $(this).css("color", "blue");
            }, function(){
            $(this).css("color", "red");
    	});
	});

	$(document).ready(function(){
        $("#greentoggle").hover(function(){
            $(this).css("color", "green");
            }, function(){
            $(this).css("color", "red");
    	});
	});

	$(document).ready(function(){
        $("#redtoggle").hover(function(){
            $(this).css("color", "red");
            }, function(){
            $(this).css("color", "red");
    	});
	});

	$(".red").each(function(){

    	var red = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ red,
    				  "border-top" : border2 + "vw solid "+ red})
    });

    $(".red15").each(function(){

    	var red = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ red,
    				  "border-top" : border2 + "vw solid "+ red})
    });

    $(".red22").each(function(){

    	var red = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ red,
    				  "border-top" : border2 + "vw solid "+ red})
    });

    $(".red43").each(function(){

    	var red = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ red,
    				  "border-top" : border2 + "vw solid "+ red})
    });

    $(document).ready(function(){

            $(".red").mouseover(function(){

            lightgreen = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
            })
    });

    $(document).ready(function(){

        $(".red15").mouseover(function(){

            lightgreen = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        })
    });

    $(document).ready(function(){

        $(".red22").mouseover(function(){

            lightgreen = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        })
    });

    $(document).ready(function(){

            $(".red43").mouseover(function(){

            lightgreen = "hsl(" + randomInt(0,20) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})     
        })
    })
}

function blueFunction() {
    document.getElementById("closebtn").style.color = "blue";
    document.getElementById("opennavtext").style.color = "blue";
    document.getElementById("redtoggle").style.color = "blue";
    document.getElementById("greentoggle").style.color = "blue";
    document.getElementById("bluetoggle").style.color = "blue";
    document.getElementById("text1").style.color = "blue";
    document.getElementById("text2").style.color = "blue";
    document.getElementById("text3").style.color = "blue";
    document.getElementById("text4").style.color = "blue";
    document.getElementById("text5").style.color = "blue";
    document.getElementById("text6").style.color = "blue";
    document.getElementById("text7").style.color = "blue";

    $(document).ready(function(){
        $("#greentoggle").hover(function(){
            $(this).css("color", "green");
            }, function(){
            $(this).css("color", "blue");
    	});
	});

	$(document).ready(function(){
        $("#redtoggle").hover(function(){
            $(this).css("color", "red");
            }, function(){
            $(this).css("color", "blue");
    	});
	});

	$(document).ready(function(){
        $("#bluetoggle").hover(function(){
            $(this).css("color", "blue");
            }, function(){
            $(this).css("color", "blue");
    	});
	});

    $(".blue").each(function(){

    	var blue = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ blue,
    				  "border-top" : border2 + "vw solid "+ blue})
    });

    $(".blue15").each(function(){

    	var blue = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ blue,
    				  "border-top" : border2 + "vw solid "+ blue})
    });

    $(".blue22").each(function(){

    	var blue = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ blue,
    				  "border-top" : border2 + "vw solid "+ blue})
    });

    $(".blue43").each(function(){

    	var blue = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ blue,
    				  "border-top" : border2 + "vw solid "+ blue})
    });

    $(document).ready(function(){

        $(".blue").mouseover(function(){

            lightgreen = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen}) 
        });
    });

    $(document).ready(function(){

        $(".blue15").mouseover(function(){

            lightgreen = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });

    $(document).ready(function(){

        $(".blue22").mouseover(function(){

            lightgreen = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });

    $(document).ready(function(){

        $(".blue43").mouseover(function(){

            lightgreen = "hsl(" + randomInt(220,250) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });
}

function greenFunction() {
    document.getElementById("closebtn").style.color = "green";
    document.getElementById("opennavtext").style.color = "green";
    document.getElementById("redtoggle").style.color = "green";
    document.getElementById("greentoggle").style.color = "green";
    document.getElementById("bluetoggle").style.color = "green";
    document.getElementById("text1").style.color = "green";
    document.getElementById("text2").style.color = "green";
    document.getElementById("text3").style.color = "green";
    document.getElementById("text4").style.color = "green";
    document.getElementById("text5").style.color = "green";
    document.getElementById("text6").style.color = "green";
    document.getElementById("text7").style.color = "green";

    $(document).ready(function(){
        $("#greentoggle").hover(function(){
            $(this).css("color", "green");
            }, function(){
            $(this).css("color", "green");
    	});
	});

	$(document).ready(function(){
        $("#redtoggle").hover(function(){
            $(this).css("color", "red");
            }, function(){
            $(this).css("color", "green");
    	});
	});

	$(document).ready(function(){
        $("#bluetoggle").hover(function(){
            $(this).css("color", "blue");
            }, function(){
            $(this).css("color", "green");
    	});
	});

    $(".green").each(function(){

    	var green = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ green,
    				  "border-top" : border2 + "vw solid "+ green})
    });

    $(".green15").each(function(){

    	var green = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ green,
    				  "border-top" : border2 + "vw solid "+ green})
    });

    $(".green22").each(function(){

    	var green = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ green,
    				  "border-top" : border2 + "vw solid "+ green})
    });

    $(".green43").each(function(){

    	var green = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

    	var border1 = $(this).attr("data-border1");
    	var border2 = $(this).attr("data-border2");

    	$(this).css({ "border-bottom" :  border1 + "vw solid "+ green,
    				  "border-top" : border2 + "vw solid "+ green})
    });

    $(document).ready(function(){

        $(".green").mouseover(function(){

            lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(0,20) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });

    $(document).ready(function(){

        $(".green15").mouseover(function(){

            lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,80) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });

    $(document).ready(function(){

        $(".green22").mouseover(function(){

            lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(10,30) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });

    $(document).ready(function(){

        $(".green43").mouseover(function(){

            lightgreen = "hsl(" + randomInt(105,130) +  "," + randomInt(80,100) + "%" + "," + randomInt(30,40) + "%" + ")";

            var border1 = $(this).attr("data-border1");
            var border2 = $(this).attr("data-border2");

            $(this).css({ "border-bottom" :  border1 + "vw solid "+ lightgreen,
                          "border-top" : border2 + "vw solid "+ lightgreen})
        
        });
    });
}
//onclick end