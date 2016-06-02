
$(function(){
  $(".study-btn").hover(function(){
    $(this).find("div").animate({left: -66}, 300);
  }, function(){
    $(this).find("div").animate({left: 0}, 300);
  });
/*
  $(".img").hover(function(){ //.find("img")
    $(this).animate({height: 196}, 150, function(){
      $(this ).animate({height: 163}, 200, function(){
        $(this ).animate({height: 216}, 100)
      })
    });
  }, function(){
    $(this).animate({height: 135}, 300 ).stop();
  })*/
});

