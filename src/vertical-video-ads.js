/*! vertical-video-ads | (c) David Mann | github.com/davidmann4/vertical-video-ads */

//usage: <script src="vertical-video-ads.js"/><div class="vertical-video-ad" data-ad-src="PATH-TO-MP4"/>


(function($){
  $( document ).ready(function() {
    $(".vertical-video-ad").each(function(){
      wrapper = $("<div>").addClass("vertical-video-ad-wrapper");
      video = $("<video>").attr("id", "vertical-video-ad000");
      video.append($("<source>").attr("type", "video/mp4").attr("src", $(this).attr("data-ad-src")))
      $(this).append($(wrapper).append(video));  
      video.get(0).play();  

      //.vertical-video-ad video

      $(window).scroll(function() {
      	calculatedOffset = $(window).scrollTop() - $('#vertical-video-ad000').parent().offset().top;
      	if (calculatedOffset < 0) {
      		$("#vertical-video-ad000").css("top",calculatedOffset);
      	}      	
      });
    });
  });
})(jQuery);

