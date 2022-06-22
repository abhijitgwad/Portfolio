$("body").click(function(){
    if(!($("button").hasClass("collapsed"))){
        $("#navbarTogglerDemo03").removeClass("show");    
    }
})

function reveal() {
    var reveals1 = document.querySelectorAll(".qq");
    
    for (var i = 0; i < reveals1.length; i++) {

      var windowHeight = window.innerHeight;
      var elementTop = reveals1[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals1[i].classList.add("intro1");
      } else {
        reveals1[i].classList.remove("intro1");
      }
    }


    
  }
  
  window.addEventListener("scroll", reveal);




  var btns =
				$("#navigation .navbar-nav .nav-link");
            
                

			for (var i = 0; i < btns.length; i++) {
				btns[i].addEventListener("click",
									function () {
					var current = document
						.getElementsByClassName("active1");

					current[0].className = current[0]
						.className.replace(" active1", "");

					this.className += " active1";
				});
			}

			/* Code for changing active
			link on Scrolling */
			$(window).scroll(function () {
				var distance = $(window).scrollTop();
				$('.page-section').each(function (i) {

					if ($(this).position().top
						<= distance + 250) {
						
							$('.navbar-nav a.active1')
								.removeClass('active1');

							$('.navbar-nav a').eq(i)
								.addClass('active1');
					}
				});
			}).scroll();

