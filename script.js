$(document).ready(function(){

 activeSetup();

  $('.myicon').click(function(e){
      $('#navbar ul').toggleClass('sm-screen');
  })

  function activeSetup(){
      var urlPath = window.location.pathname;
      console.log(urlPath);
      
      $('nav a').each(function(){
          var href = $(this).attr('href');
         // console.log("href: " + href);
         // console.log("url path length: " + urlPath.length);
         // console.log("href length: " + href.length);
         // console.log("substring pipikaka: " + urlPath.substring(urlPath.length - href.length,urlPath.length));
          if(href === urlPath.substring(urlPath.length - href.length, urlPath.length)){   
              console.log('match');
              $(this).closest('li').addClass('active');
          }
      })
  }

    })
    
    var imgArray = [
        'gallery/b1.JPG',
        'gallery/b2.JPG' ];
        curIndex = 0;
        imgDuration = 4000;
    
        function slideShow() {
            document.getElementById('slider').className += "fadeOut";
            setTimeout(function() {
                document.getElementById('slider').src = imgArray[curIndex];
                document.getElementById('slider').className = "";
            },100);
            curIndex++;
            if (curIndex == imgArray.length) { curIndex = 0; }
            setTimeout(slideShow, imgDuration);
        }
        slideShow();