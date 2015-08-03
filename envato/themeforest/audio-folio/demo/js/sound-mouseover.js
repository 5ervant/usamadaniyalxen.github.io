function playclip() {
if (navigator.appName == "Microsoft Internet Explorer") {
if (document.all)
 {
  document.all.sound.src = "../audio/buy-now.wav";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}