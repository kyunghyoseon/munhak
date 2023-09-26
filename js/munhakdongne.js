$(function(){
  
  //검색바
$("#search_trigger").click(function(){
  $("#search_input").toggleClass("search_input_open");
  $(".form_search_input").focus();
  });

  //맞춤별 도서추천
  $("ul.ppanel >li:not("+$("ul.pbtn li a.selected").attr("href")+")").hide();
  //=  ul.panel li:not("#tab1).hide(); 탭1빼고 다 숨겨라
$("ul.pbtn li a").click(function(){
  $("ul.pbtn li a").removeClass("selected");
  $(this).addClass("selected");
  $("ul.pbtn li a").css("background","none");
    $("ul.pbtn li a").css("color","#000");
    $("ul.pbtn li a").css("border-bottom","none");
    $("ul.pbtn li a").css("font-weight","normal");
  $(this).css("background","#none");
    $(this).css("color","#000FA0");
    $(this).css("border-bottom","2px solid");
    $(this).css("font-weight","bold");
$("ul.ppanel >li").hide();
  $($(this).attr("href")).show();
  return false; //본래의 a속성 막아주는 거 
 });

//top버튼
$("#top").click(function(){
  $("html,body").animate({scrollTop:0},"slow");
  return false;
  }); 

});
