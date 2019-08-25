
$(document).ready(function () {
        // Menu.
    var $menu = $('#menu');
    var $body = $('body');

    $menu.wrapInner('<div class="inner"></div>');

    $menu._locked = false;

    $menu._lock = function() {

        if ($menu._locked)
            return false;

        $menu._locked = true;

        window.setTimeout(function() {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function() {

        if ($menu._lock())
            $body.addClass('is-menu-visible');

    };

    $menu._hide = function() {

        if ($menu._lock())
            $body.removeClass('is-menu-visible');

    };

    $menu._toggle = function() {

        if ($menu._lock())
            $body.toggleClass('is-menu-visible');

    };

    $menu
        .appendTo($body)
        .on('click', function(event) {
            event.stopPropagation();
        })
        .on('click', 'a', function(event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
                $menu._hide();

            // Redirect.
                if (href == '#menu')
                    return;

                window.setTimeout(function() {
                    window.location.href = href;
                }, 350);

        })
        .append('<a class="close" href="#menu">Close</a>');

    $body
        .on('click', 'a[href="#menu"]', function(event) {

            event.stopPropagation();
            event.preventDefault();

            // Toggle.
                $menu._toggle();

        })
        .on('click', function(event) {

            // Hide.
                $menu._hide();

        })
        .on('keydown', function(event) {

            // Hide on escape.
                if (event.keyCode == 27)
                    $menu._hide();

        });

//----- Testimonial Start ------

    $("#testimonial").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        center: true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true
    });

//----- Header Slide Start ------

    $("#header_slide").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true
    });
	

});

//----- Popup Start ------

$('.inline-popup').magnificPopup({
  type:'inline',
  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  gallery:{
    enabled:true
  }
  
});

/*var slideIndex = 1;
showBald(slideIndex);

function plusBald(n) {
  showBald(slideIndex += n);
}

function showBald(n) {
  var i;
  var x = document.getElementsByName("BaldSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

slideIndex = 1;
showMed(slideIndex);

function plusMed(n) {
  showMed(slideIndex += n);
}

function showMed(n) {
  var i;
  var x = document.getElementsByName("MedSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

slideIndex = 1;
showMed2(slideIndex);

function plusMed2(n) {
  showMed2(slideIndex += n);
}

function showMed2(n) {
  var i;
  var x = document.getElementsByName("Med2Slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

slideIndex = 1;
showEarnest(slideIndex);

function plusEarnest(n) {
  showEarnest(slideIndex += n);
}

function showEarnest(n) {
  var i;
  var x = document.getElementsByName("EarnestSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

slideIndex = 1;
showWit(slideIndex);

function plusWit(n) {
  showWit(slideIndex += n);
}

function showWit(n) {
  var i;
  var x = document.getElementsByName("WitSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

slideIndex = 1;
showWit2(slideIndex);

function plusWit2(n) {
  showWit2(slideIndex += n);
}

function showWit2(n) {
  var i;
  var x = document.getElementsByName("Wit2Slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
*/
/*$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
*/