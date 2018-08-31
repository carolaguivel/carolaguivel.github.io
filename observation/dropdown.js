$(".dropbtn").click(function () {

    $dropbtn = $(this);
    
    $dropdowncontent = $dropbtn.next();
    
    $dropdowncontent.slideToggle(680, function () {
    });

    $dropdowncontent.toggleClass("opened")

});


var openToggle = document.querySelector ('#open-toggle')

openToggle.addEventListener ('click', function () {

  var article = this.closest('article');

  var drawer = article.querySelector('.rect');
  drawer.classList.toggle('is-open');
  console.log(article.querySelector('.rect'));
});
