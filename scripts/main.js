"use strict";!function(){function a(){$("html").show(),$("header").fadeIn("slow").addClass("animated fadeIn"),$(".menu-item").each(function(a,n){$(n).delay(800+600*a).fadeIn().addClass("animated slideInDown")}),$(".ref-icon").delay(3200).each(function(a,n){$(n).delay(600*a).fadeIn()})}!function(a){var n=new Image;n.onload=function(){a()},n.src="images/background-full.jpg"}(a),$(".ref-icon").hover(function(){$(this).addClass("animated pulse")},function(){$(this).removeClass("animated pulse")}),$(".title").click(function(){location.reload()}),$(".image-container").hover(function(){$(this).find(".overlay").animate({opacity:.2},600),$(this).find("h2").animate({opacity:0},600)},function(){$(this).find(".overlay").animate({opacity:.9},600),$(this).find("h2").animate({opacity:.9},600)}),$(".menu-item > a").click(function(){var a=$(this).attr("data-open");a&&($(".menu-item a").removeClass("active"),$(this).addClass("active"),$("body").removeClass("bg-main").addClass("bg-white"),$("section").hide(),$("section."+a).delay(400).fadeIn("slow"))})}();