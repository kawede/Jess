var small_images  = document.getElementsByClassName("small-image");
var show_image_popup  = document.getElementById("show_image_popup");
var large_image  = document.getElementById("large-image");
var close_btn = document.getElementById("close-btn");

for(var i=0; i< small_images.length; i++){

  small_images[i].addEventListener("click", function(){
    // remove active class from every images
    for(var j=0; j< small_images.length; j++){
      small_images[j].classList.remove('active');
    }
    // end
 
    this.classList.add('active'); // add active class to this image
    
    var src_val = this.src;
    large_image.src = src_val;
    showModal();
  });
}


function showModal(){
  show_image_popup.style.display = 'block';
}

close_btn.addEventListener("click", function(){
  // before colose the modal we need to remove active class
  for(var i=0; i< small_images.length; i++){
    small_images[i].classList.remove('active');
  }
  // end
  closeModal();
});

function closeModal(){
  show_image_popup.style.display = 'none';
}
//Fin Pop up Image
(function(){


//la partie de jquery et integration de partage

   var popupCenter = function(url, title, width, height){
       var popupWidth = width || 640;
       var popupHeight = height || 320;
       var windowLeft = window.screenLeft || window.screenX;
       var windowTop = window.screenTop || window.screenY;
       var windowWidth = window.innerWidth || document.documentElement.clientWidth;
       var windowHeight = window.innerHeight || document.documentElement.clientHeight;
       var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
       var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
       var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
       popup.focus();
       return true;
   };

   document.querySelector('.share_twitter').addEventListener('click', function(e){
       e.preventDefault();
       var url = this.getAttribute('data-url');
       var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
           "&via=Grafikart_fr" +
           "&url=" + encodeURIComponent(url);
       popupCenter(shareUrl, "Partager sur Twitter");
   });

   document.querySelector('.share_facebook').addEventListener('click', function(e){
       e.preventDefault();
       var url = this.getAttribute('data-url');
       var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
       popupCenter(shareUrl, "Partager sur facebook");
   });

   document.querySelector('.share_instagram').addEventListener('click', function(e){
       e.preventDefault();
       var url = this.getAttribute('data-url');
       var shareUrl = "https://instagram.com/share?url=" + encodeURIComponent(url);
       popupCenter(shareUrl, "Partager sur Instagram");
   });

   document.querySelector('.share_linkedin').addEventListener('click', function(e){
       e.preventDefault();
       var url = this.getAttribute('data-url');
       var shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
       popupCenter(shareUrl, "Partager sur Linkedin");
   });

})();

try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');
