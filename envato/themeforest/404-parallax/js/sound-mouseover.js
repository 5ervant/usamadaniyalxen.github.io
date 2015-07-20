/* ==============================================================

   Author: UDX
   Author URL: http://themeforest.net/user/UDX
   Template: Glamour - Barbie's Fashion Stylist
   Template URL: #
   Version: 1.0

   ============================================================== */

function playclip() {
if (navigator.appName == "Microsoft Internet Explorer") {
if (document.all)
 {
  document.all.sound.src = "../audio/click.wav";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}