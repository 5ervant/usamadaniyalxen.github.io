$(document).ready(function(){var e=$("#loader");var t=e.find(".global-loader-stroke-right");var n=e.find(".global-loader-stroke-left");var r=function(){progressBar={countElmt:0,loadedElmt:0,init:function(){var e=this;var t=$("#body").find("img");this.countElmt=t.length;t.each(function(){$("<img/>").attr("src",$(this).attr("src")).on("load error",function(){e.loadedElmt++;e.updateGlobalLoader()})})},updateGlobalLoader:function(){var r=progressBar.loadedElmt/progressBar.countElmt*100;n.stop().animate({height:r+"%"},1500);t.stop().animate({height:r+"%"},1500,function(){if(progressBar.loadedElmt==progressBar.countElmt){e.addClass("leave");s();setTimeout(function(){e.remove()},1e3)}})}};progressBar.init()};r();"use strict";var i=document.all&&document.addEventListener&&!window.atob;var s=function(){function h(){f=$(window).outerHeight();l=$(window).outerWidth();c.css("height",f);if(l<960){c.css("height","inherit")}
v();s.removeClass("off")}
function v(){function u(){t.fillStyle="rgba(38,50,72,1)";t.fillRect(0,0,l,f)}
function c(){this.x=Math.random()*l;this.y=Math.random()*f;this.vx=(-1+Math.random()*2)*a;this.vy=(-1+Math.random()*2)*a;this.radius=1;this.draw=function(){t.fillStyle="#334156";t.beginPath();t.arc(this.x,this.y,this.radius,0,Math.PI*2,false);t.fill()}}
function h(){for(var e=0;e<n;e++){r.push(new c)}}
function d(){u();for(var e=0;e<r.length;e++){p=r[e];p.draw()}
v()}
function v(){for(var e=0;e<r.length;e++){p=r[e];p.x+=p.vx;p.y+=p.vy;if(p.x+p.radius>l)p.x=p.radius;else if(p.x-p.radius<0){p.x=l-p.radius}
if(p.y+p.radius>f)p.y=p.radius;else if(p.y-p.radius<0){p.y=f-p.radius}
for(var t=e+1;t<r.length;t++){p2=r[t];m(p,p2)}}}
function m(e,n){var r,i=e.x-n.x;dy=e.y-n.y;r=Math.sqrt(i*i+dy*dy);if(r<=s){t.beginPath();t.strokeStyle="rgba(81,101,134,"+(1-r/s)+")";t.moveTo(e.x,e.y);t.lineTo(n.x,n.y);t.stroke();t.closePath()}}
var e=document.getElementById("canvasParticles");var t=e.getContext("2d");e.width=l;e.height=f;var n=Math.round((l+f)/27),r=[],s=Math.round((l+f)/17),o;var a=.25;h();if(i==true){setInterval(d,1e3/60)}else{var g;function y(){d();g=requestAnimationFrame(y)}
function b(){cancelAnimationFrame(g)}
y();$(window).on("scroll",function(){var e=$(window).scrollTop();if(e==0){y()}else{b()}})}}
function _(){if(O==A-1){O=0}else{O=O+1}
$passionShuffleText.shuffleLetters({text:L[O],step:6,fps:30})}
function V(){dateNow=new Date((new Date).getTime()/1e3);dateBd=671511010;seconds=Math.floor(dateNow-dateBd);minutes=Math.floor(seconds/60);hours=Math.floor(minutes/60);days=Math.floor(hours/24);year=Math.floor(days/365.24);hours=hours-days*24;minutes=minutes-days*24*60-hours*60;seconds=seconds-days*24*60*60-hours*60*60-minutes*60;days=Math.floor(days-year*365.24);if(days<2){W.day="day"}else{W.day="days"}
if(hours<2){W.hour="hours"}else{W.hour="hours"}
if(minutes<2){W.minute="minute"}else{W.minute="minutes"}
if(seconds<2){W.second="second"}else{W.second="seconds"}
P.html(year);H.html(days);B.html(hours);j.html(minutes);F.html(seconds)}
function nt(){$loaderShowcase=Q.find("#loader-showcase");var t=$loaderShowcase.find("#work-stroke-tlb");var n=$loaderShowcase.find("#work-stroke-tls");var r=$loaderShowcase.find("#work-stroke-trb");var i=$loaderShowcase.find("#work-stroke-trs");var s=$loaderShowcase.find("#work-stroke-brb");var o=$loaderShowcase.find("#work-stroke-brs");var u=$loaderShowcase.find("#work-stroke-blb");var a=$loaderShowcase.find("#work-stroke-bls");progressBar={countElmt:0,loadedElmt:0,init:function(){var e=this;$showcaseImg=G.find("img");this.countElmt=$showcaseImg.length;$showcaseImg.each(function(){$("<img/>").attr("src",$(this).attr("src")).on("load error",function(){e.loadedElmt++;e.updateProgressBar()})})},updateProgressBar:function(){var f=progressBar.loadedElmt/progressBar.countElmt*100;t.stop().animate({left:f+"%"});n.stop().animate({left:f+"%"});r.stop().animate({top:f+"%"});i.stop().animate({top:f+"%"});s.stop().animate({right:f+"%"});o.stop().animate({right:f+"%"});u.stop().animate({bottom:f+"%"});a.stop().animate({bottom:f+"%"},function(){if(progressBar.loadedElmt==progressBar.countElmt){G.find("#img-loader-container").remove();G.focus().addClass("launch-showcase");e.addClass("showcase-mode").delay(1e3).queue(function(e){Y.addClass("fixed");K.children().removeClass("hover");e()})}})}};progressBar.init()}
function rt(){et=false;E.removeClass("showcase-scrolled");Y.removeClass("fixed");$loaderShowcase.remove();G.removeClass("launch-showcase");G.addClass("leave-showcase");e.removeClass("showcase-mode");e.addClass("leave-showcase-mode");K.children().removeClass("hover");setTimeout(function(){e.removeClass("leave-showcase-mode");G.remove();G=null;J=true},1e3)}
function it(){G.bind("mousewheel DOMMouseScroll",function(e){var t=null;if(e.type=="mousewheel"){t=e.originalEvent.wheelDelta*-1}else if(e.type=="DOMMouseScroll"){t=40*e.originalEvent.detail}
if(t){e.preventDefault();$(this).scrollTop(t+$(this).scrollTop())}})}
function st(){G.on("scroll",function(){var e=G.scrollTop();if(e>300){Y.addClass("showcase-scrolled");E.addClass("showcase-scrolled")}else{Y.removeClass("showcase-scrolled");E.removeClass("showcase-scrolled")}})}
function ot(){Y=G.find("#btn-leave-showcase");Y.on("click",rt);Z=G.find("#btn-sc-close");Z.on("click",rt);$btnScPrev=G.find("#btn-sc-prev");$btnScPrev.on("click",function(){rt();setTimeout(function(){K.eq(tt-1).trigger("click").children().addClass("hover")},1e3)});$btnScNext=G.find("#btn-sc-next");$btnScNext.on("click",function(){rt();setTimeout(function(){K.eq(tt+1).trigger("click").children().addClass("hover")},1e3)})}
var e=$("#body");var t=e.find(".full-size");var n=e.find("#main-container");var r=e.find("#accueil");var s=e.find("#canvasParticles");var o=e.find("#travaux");var u=o.find(".a-work");var a=r.find(".btn-scroll");e.addClass("loaded");r.addClass("ready").delay(1500).queue(function(e){a.removeClass("not-ready");e()});var f=$(window).outerHeight();var l=$(window).outerWidth();var c=$(".section-fs");h();var d;window.onresize=function(){clearTimeout(d);d=setTimeout(h,1e3)};v();$.easing.easeInOutQuart=function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n};$.localScroll.defaults.axis="y";$.localScroll({target:"body",duration:1e3,easing:"easeInOutQuart",hash:false});var m=$("#experiences");var g=$("#services");var y=$("#a-propos");var b=$(".btn-competences");var w=$("#main-nav");var E=w.find("#nav-pull");var S=w.find(".main-nav-content a");var x=$(".section-cc");x.waypoint({handler:function(e,t){var n;n=$(this);if(t==="up")n=n.prev();var r=w.find('a[href="#'+n.attr("id")+'"]');w.find(".active").removeClass("active");r.parent().addClass("active");if(r.hasClass("btn-xp")){m.addClass("active");g.removeClass("active");y.removeClass("active");clearInterval(M);clearInterval(X)}else if(r.hasClass("btn-services")){m.removeClass("active");g.addClass("active");y.removeClass("active");clearInterval(M);clearInterval(X)}else if(r.hasClass("btn-a-propos")){m.removeClass("active");g.removeClass("active");y.addClass("active");M=setInterval(function(){_()},3e3);X=setInterval(function(){V()},1e3)}else{m.removeClass("active");g.removeClass("active");y.removeClass("active");clearInterval(M);clearInterval(X)}},offset:"50%"});var T=m.find("#nav-xp");var N=$(".xp-container");var C=T.find("a");var k=T.find("#puce-active");C.on("mouseenter",function(){$(this).shuffleLetters({text:$(this).attr("data-title"),step:3,fps:30})}).on("click",function(){C.removeClass("active");$(this).addClass("active");var e=$(this).parent().index();k.removeClass().addClass("pos"+e);N.find("> .xp-part.active").addClass("leaving").removeClass("active");N.find("> .xp-part:eq("+e+")").removeClass("leaving").addClass("active")});$about=$("#a-propos");$passionShuffleText=$about.find("#passion-shuffle");var L=["the web","games","the design","unicorn ranching","HTML","CSS","the cats","UX/UI","video games"];var A=L.length;var O=0;var M="";var D=$("#about-date");var P=D.find("#date-year");var H=D.find("#date-day");var B=D.find("#date-hour");var j=D.find("#date-minute");var F=D.find("#date-second");var I=D.find("#date-span-year");var q=D.find("#date-span-day");var R=D.find("#date-span-hour");var U=D.find("#date-span-minute");var z=D.find("#date-span-second");var W={second:"seconds",minute:"minutes",hour:"hours",day:"days"};watch(W,"day",function(){q.shuffleLetters({text:W.day})});watch(W,"hour",function(){R.shuffleLetters({text:W.hour})});watch(W,"minute",function(){U.shuffleLetters({text:W.minute})});watch(W,"second",function(){z.shuffleLetters({text:W.second})});var X="";var J=true;var K=$(".work-btn");var Q=null;var G=null;var Y=null;var Z=null;var et=false;var tt=null;K.on("click",function(){if(J){et=true;J=false;var t=$(this);tt=t.index();Q=t;var n=t.html();var r=t.attr("data-tmpl");var i=new Date;var s='<div id="loader-showcase" class="quadri-stroke quadri-stroke-work"><span id="work-stroke-tlb"></span><span id="work-stroke-tls"></span><span id="work-stroke-trb"></span><span id="work-stroke-trs"></span><span id="work-stroke-brb"></span><span id="work-stroke-brs"></span><span id="work-stroke-blb"></span><span id="work-stroke-bls"></span></div>';t.children().append(s);$.get("tmpl/"+r+"?"+i).done(function(t){e.append(t);G=$("#showcase");G.find("#showcase-header").prepend(n);G.find(".showcase-none").remove();ot();it();st();setTimeout(nt,1e3)}).fail(function(){et=false;J=true;t.children().removeClass("hover")})}});e.on({mousewheel:function(e){if(et){e.preventDefault();e.stopPropagation()}}});S.on("click",function(){if(et){rt()}}).on("mouseenter",function(){$(this).shuffleLetters({step:6,fps:30})});var ut=w.find("#logo");ut.on("click",function(){if(et){rt()}})}})