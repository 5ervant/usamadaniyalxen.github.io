/*
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function(a){a.fn.fitVids=function(e){var b={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var f=document.head||document.getElementsByTagName("head")[0];var c=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+c+"</style>";f.appendChild(d.childNodes[1])}if(e){a.extend(b,e)}return this.each(function(){var h=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];if(b.customSelector){h.push(b.customSelector)}var i=".fitvidsignore";if(b.ignore){i=i+", "+b.ignore}var g=a(this).find(h.join(","));g=g.not("object object");g=g.not(i);g.each(function(){var j=a(this);if(j.parents(i).length>0){return}if(this.tagName.toLowerCase()==="embed"&&j.parent("object").length||j.parent(".fluid-width-video-wrapper").length){return}if((!j.css("height")&&!j.css("width"))&&(isNaN(j.attr("height"))||isNaN(j.attr("width")))){j.attr("height",9);j.attr("width",16)}var n=(this.tagName.toLowerCase()==="object"||(j.attr("height")&&!isNaN(parseInt(j.attr("height"),10))))?parseInt(j.attr("height"),10):j.height(),l=!isNaN(parseInt(j.attr("width"),10))?parseInt(j.attr("width"),10):j.width(),k=n/l;if(!j.attr("id")){var m="fitvid"+Math.floor(Math.random()*999999);j.attr("id",m)}j.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(k*100)+"%");j.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);