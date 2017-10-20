app.directive("server",function(){
    return{
        rectrict:"EA",
        transclude:true,
        templateUrl:"content/view/server.html",
        link:function(scope,ele,attr,controller){
          //var scroller=new iScroll("main",{
          //  hScrollbar:false, vScrollbar:false
          //  });
            var mySwiper=new Swiper(".swiper-container",{
                autoplay:1000,
                loop:true,
                effect:"coverflow",
                slidesPerView:1
            });
             $("header a").on("click",function(){
                 var index=$(this).index();
                 //$(".line").css("left",index*12+50+"%");
                 $(this).css( "border-bottom","2px solid #007aff")
             });
            $(".reload").on("click",function(){
           $("#car").append("<dl><dt><img src="+'content/img/ban7.gif'+"></dt><dd><h5>上汽大众一全新路途L</h5><P>上汽大众一全新路途L享2年0利息</P> <h6><b>1元</b><u>1.44万</u></h6></dd></dl><dl><dt><img src="+'content/img/ban8.gif'+"></dt><dd><h5>上汽大众一全新路途L</h5><P>上汽大众一全新路途L享2年0利息</P> <h6><b>1元</b><u>1.44万</u></h6></dd></dl>")})
        },
        controller:"servercontroller"
    }
});