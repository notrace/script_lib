$(".d_author").remove()
$(".left_section").css("width", "100%")
$(".l_post_bright").css("width", "100%")
$(".d_post_content_main").css("width", "100%")
$(".BDE_Image").css("max-width", "100%").css("width","100%").css("height", "auto")
$(".lzl_link_fold").click()
var pics = $(".BDE_Image");
for (var i = pics.length; i--;) {
  opts = pics[i].src.split("/");
  file_name = opts[opts.length - 1];
  file_path = "http://imgsrc.baidu.com/forum/pic/item/" + file_name;
  $(pics[i]).attr("src", file_path);
}
$(".tbui_aside_float_bar").remove()
$(".pb_footer").css("width", "800px")
$(".l_container").css("width", "100%")
$(".right_section").remove()
$(".l_container").css("width", "100%")
$(".content").css("width", "100%")
$(".thread_theme_5").css("width", "100%")
$(".pb_content").css("width", "100%")
$(".d_post_content_main").css("padding-left", "0px")
