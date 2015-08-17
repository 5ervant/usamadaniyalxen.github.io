/* ==============================================================

   Author: UDX
   Author URL: http://themeforest.net/user/UDX
   Template: Aline Dental Treatment - HTML5 Template
   Template URL: http://themeforest.net/item/x/12394553
   Version: 1.0

   ============================================================== */

function playclip() {
if (navigator.appName == "Microsoft Internet Explorer") {
if (document.all)
 {
  document.all.sound.src = "#"; // If you wanted to change hover effect sound and you want to play hover effect
 }                              // sound on all browser you will have to convert your sound in three format
}                               // mp3, wav and oog because every broswer not run mp3 or other formats
                                // so you can add your audio link here if you have convert your mp3
else {                          // to wav beacause of internet explorer.
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}


