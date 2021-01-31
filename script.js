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

  //Contact form

  $(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "deine Name bitte!",
                minlength: "die Name muss länger sein!"
            },
            email: {
                required: "keine E-mail, keine Nachricht",
                email: "bitte gültige E-mail eingeben"
            },
            message: {
                required: "bitte Text eingeben",
                minlength: "der Text muss länger sein"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                dataType: "json",
                url:"https://formspree.io/f/xbjpbldy",
                success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( "slow", 1, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#successMessage').css('visibility','visible');
                    })
                },
                error: function() {
                    $('#contactForm').fadeTo( "slow", 1, function() {
                        $('#errorMessage').css('visibility','visible');
                       
                    })
                }
            })
        }
    })
})
   

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