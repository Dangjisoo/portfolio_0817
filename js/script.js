$(document).ready(function () {
  // fullpage.js
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally : true,
    navigation : true,
		menu: '#menu',
    navigationTooltips: ['INTRO', 'ABOUT', 'WEB', 'UI/UX', 'DETAIL', 'CONTACT', 'END'],
    anchors: ['INTRO', 'ABOUT', 'WEB', 'UI/UX', 'DETAIL', 'CONTACT', 'END'],
    showActiveTooltip: true,
    navigationPosition : "right",
  });

  // sec03에 마우스를 올리면 너비가 넓어지는 클래스를 줌
  $(".sec06_list ul li").hover(function () {
    $(this).toggleClass("on");
    $(".sec06_list ul li").not(this).toggleClass("off");
  });

  //링크 클릭시 새창으로 열리기
  function applyTargetBlank() {
    var anchors = document.querySelectorAll('a');
    anchors.forEach((item) => {
      item.target = "_blank";
    });
  }

  window.addEventListener("load", applyTargetBlank);
});