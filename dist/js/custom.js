"use strict";$(document).ready(function(){$("a").hover(function(){var t=$(this).attr("title"),o=$(this).data("bg");$(this).data("titulo",t).removeAttr("title"),$('<spam class="tooltip"></spam>').text(t).css("background-color",o).appendTo("body").fadeIn("slow")},function(){$(this).attr("title",$(this).data("titulo")),$(".tooltip").remove()}).mousemove(function(t){var o=t.pageX+20,a=t.pageY+10;$(".tooltip").css({top:a,left:o})})});
//# sourceMappingURL=custom.js.map
