/*! vertical-video-ads | (c) David Mann | github.com/davidmann4/vertical-video-ads */

//usage: <script src="vertical-video-ads.js"/><div class="vertical-video-ad" data-ad-src="PATH-TO-MP4"/>


(function($){
  $(".vertical-video-ad").each(function(){
    video = $("<video>")
    video.append($("<source>").attr("type", "video/mp4").attr("src", $(this).attr("data-ad-src")))
    $(this).append(video);    
  });
})(jQuery);

