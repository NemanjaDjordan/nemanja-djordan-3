var $body=$("body"),$header=$(".header"),$loop=$(".loop"),timeoutId=0,timeOut=0,holdTime=1e3,$holdTrigger=$(".header .simple-wrap"),doc=window.document,context=doc.querySelector(".js-loop"),clones=context.querySelectorAll(".is-clone"),disableScroll=!1,scrollHeight=0,scrollPos=0,clonesHeight=0,i=0,$buffer=$(".buffer"),$inerCircle=$(".iner-circle"),$navbarItem=$(".navbar-item"),$botomText=$(".header .bottom-text"),$burger=$(".burger"),$navbarMenu=$(".navbar"),$navbar=$(".navbar"),$sectionIntro=$(".section-intro"),$sectionAbout=$(".section-about"),$educationWrap=$(".education .simple-wrap"),$sectionTechnology=$(".section-technology"),$education=$(".education"),$btnEdukation=$(".btn-education"),$text=$(".text"),$listItem=$(".list-item"),$navSlideDown=$(".nav-slide-down");function menToggle(){$header.fadeOut(),$loop.add($navbar).css("visibility","visible").hide().fadeIn("slow")}function getScrollPos(){return(context.pageYOffset||context.scrollTop)-(context.clientTop||0)}function setScrollPos(e){context.scrollTop=e}function getClonesHeight(){for(i=clonesHeight=0;i<clones.length;i+=1)clonesHeight+=clones[i].offsetHeight;return clonesHeight}function reCalc(){scrollPos=getScrollPos(),scrollHeight=context.scrollHeight,clonesHeight=getClonesHeight(),scrollPos<=0&&setScrollPos(1)}function scrollUpdate(){disableScroll||(scrollPos=getScrollPos(),scrollHeight<=clonesHeight+scrollPos?(setScrollPos(1),disableScroll=!0):scrollPos<=0&&(setScrollPos(scrollHeight-clonesHeight),disableScroll=!0)),disableScroll&&window.setTimeout(function(){disableScroll=!1},40)}function init(){reCalc(),context.addEventListener("scroll",function(){window.requestAnimationFrame(scrollUpdate)},!1),window.addEventListener("resize",function(){window.requestAnimationFrame(reCalc)},!1)}$holdTrigger.on("mousedown touchstart",function(){timeoutId=setTimeout(menToggle,holdTime)}).bind("mouseup mouseleave",function(){clearTimeout(timeoutId)}),$holdTrigger.on("mousedown",function(){$body.addClass("active")}).bind("mouseup mouseleave",function(){$body.removeClass("active"),clearInterval(timeOut)}),"loading"!==document.readyState?init():doc.addEventListener("DOMContentLoaded",init,!1),$burger.on("click tap",function(){$navbarMenu.toggleClass("navbar-active"),$navbar.toggleClass("burger-animation"),$(this).toggleClass("burger-pre-animation")}),$loop.on("click touchstart",function(){$navbarMenu.removeClass("navbar-active"),$navbar.removeClass("burger-animation"),$burger.addClass("burger-pre-animation")}),$sectionIntro.on("click touchstart mouseover",function(){$sectionIntro.addClass("section-intro-animation")}),$sectionAbout.on("click touchstart mouseover",function(){$(this).addClass("section-about-animation")}),$(document).on("ready resize",function(){$text.each(function(){$(this).parent().css({height:$(this).outerHeight(),width:$(this).outerwidth()})}).css({height:"100%",width:"100%"})}),$btnEdukation.on("click touchstart",function(){$educationWrap.animate({left:"0"},500),$(this).animate({left:"0%",opacity:"0"},500),$education.css({overflow:"visible"},500)}),$sectionTechnology.on("click touchstart mouseover",function(){$listItem.each(function(e){delay=250*e,setTimeout(function(e){e.addClass("slide-bottom-technology").removeClass("pre-animation-item")},delay,$(this))})});