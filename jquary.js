
 
  

/*$("div.hanger").on("click", function(){

  $(this).closest("section").toggleClass("navv");
 
  $(this).closest("section").find(".navshow").slideToggle();
});*/




$("div.hanger a").on("click", function(e)
{
  e.preventDefault();


    $("section.nav").toggleClass("nb");
});

// console.log('hi')
$('.fi2').each(function(){
    
  let slideImgs = $(this).find('img'),
      slideImgsCount = slideImgs.length,
      currentIndex = 0;
  
  slideImgs.eq(currentIndex).fadeIn();
  
  setInterval(showNextSlide, 3000);
  
  function showNextSlide(){
      let nextIndex = (currentIndex + 1) % slideImgsCount;
      console.log(nextIndex)
      slideImgs.eq(currentIndex).fadeOut();
      slideImgs.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
  }
})