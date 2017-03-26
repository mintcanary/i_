$(document).ready(function() {
  // open selection
  $("h1 span").click(function(){
    $( "body" ).addClass( "select" );
  })

  // change selection
  $(".selection li").click(function(){
    $( "body" ).removeClass();
  })
  $(".selection li.heart").click(function(){
    $( "body" ).addClass( "heart" );
  })
  $(".selection li.rage").click(function(){
    $( "body" ).addClass( "rage" );
  })
  $(".selection li.cry").click(function(){
    $( "body" ).addClass( "cry" );
  })
  $(".selection li.draw").click(function(){
    $( "body" ).addClass( "draw" );
  })
  $(".selection li.party").click(function(){
    $( "body" ).addClass( "party" );
  })
});
