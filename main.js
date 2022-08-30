var container = document.querySelector('#scroll');
    var graphic = document.querySelector('#scroll > .scroll__graphic'); //container.select('.scroll__graphic');
    var text = document.querySelector('#scroll > .scroll__text'); //container.select('.scroll__text');
    var step = document.querySelector('#scroll > .scroll__text > .step'); // text.selectAll('.step');
    var scroller = scrollama();

/*     let stepH = Math.floor(window.innerHeight * 0.9);
    $(".step").css('height', stepH + 'px'); */

function handleStepEnter(r) { 
    let preudoClass = $(r.element).data("class");
    console.log(preudoClass)
    console.log(preudoClass)

    if(preudoClass === 'show-first-pic' && r.direction ==="down"){
        let src= $(r.element).data("src");
        $("#pic_1").css("opacity", 0).attr("src", src).fadeTo(1500, 1 );  

    } else if(preudoClass === 'show-second-pic' && r.direction ==="down"){
        let src= $(r.element).data("src");
        $("#pic_1").fadeTo(1500, 0 );
        $("#pic_2").attr("src", src).css("opacity", 0)
        $("#pic_2").fadeTo(1500, 1 ); 

    } else if(preudoClass === 'split' && r.direction ==="down"){
        let marginLeft = $(r.element).data("left");
        $(".pic").css("opacity", 1);
        $("#pic_1").animate({left:marginLeft, width:'80%', "opacity": 1}, 1500);
        $("#pic_2").animate({left:"40%", width:'80%'}, 1500);

    } else if(preudoClass === 'show-red-lines' && r.direction ==="down"){
        let src= $(r.element).data("src");
        $("#pic_1").attr("src", src); 

    } else if(preudoClass === 'empty-slide' && r.direction ==="down"){
        let city= $(r.element).data("city");
        $("#city-marker").text(city)
        $(".pic").animate({left:"0", width:'100%', "opacity": 0}, 1500);      
    }
    
  /*  console.log(r.index) 
   if (r.index === 0 && r.direction === "up") {
        $(".pic").fadeTo(1500, 0);   
   }  else if (r.index === 1 && r.direction === "down") {
        let src= $(r.element).data("src");
        $("#pic_1").css("opacity", 0).attr("src", src).fadeTo(1500, 1 );    

   } else if (r.index === 1 && r.direction === "up") {
        let src= $(r.element).data("src");       
        $("#pic_1").fadeTo(1500, 1 );  
        $("#pic_2").fadeTo(1500, 0 );   

   }
    else if(r.index === 2 && r.direction === "down"){
        let src= $(r.element).data("src");
        $("#pic_1").fadeTo(1500, 0 );
        $("#pic_2").attr("src", src).css("opacity", 0)
        $("#pic_2").fadeTo(1500, 1 );      
   } else if(r.index === 2 && r.direction === "up"){
        $("#pic_1").animate({left:"0", width:'100%', "opacity": 0}, 1500);
        $("#pic_2").animate({left:"0", width:'100%'}, 1500);
   }
   else if(r.index === 3 && r.direction === "down"){
        $(".pic").css("opacity", 1);
        $("#pic_1").animate({left:"-20%", width:'80%', "opacity": 1}, 1500);
        $("#pic_2").animate({left:"40%", width:'80%'}, 1500);
      
   } else if(r.index === 3 && r.direction === "up") {
        $(".pic").fadeTo(1500, 1);   
       
    } else if(r.index === 4 && r.direction === "down") {
        let src= $(r.element).data("src");
        $("#pic_1").attr("src", src); 
    } else if(r.index === 5 && r.direction === "down") {
        $(".pic").animate({left:"0", width:'100%', "opacity": 0}, 1500);      
        
       
    } else if(r.index === 6 && r.direction === "down") {
        let src= $(r.element).data("src");
        $("#pic_1").attr("src", src).fadeTo(1500, 1 );       
    } else if(r.index === 7 && r.direction === "down") {
        let src= $(r.element).data("src");
        $("#pic_1").fadeTo(1500, 0 );
        $("#pic_2").attr("src", src).fadeTo(1500, 1 );       
    } else if(r.index === 8 && r.direction === "down") {
        $(".pic").css("opacity", 1);
        $("#pic_1").animate({left:"-15%", width:'80%', "opacity": 1}, 1500);
        $("#pic_2").animate({left:"40%", width:'80%',}, 1500); 
    } else if(r.index === 9 && r.direction === "down") {
        let src= $(r.element).data("src");
        $("#pic_1").attr("src", src); 
    }  */

}

  // generic window resize listener event
  function handleResize() {
        // 1. update height of step elements
        let stepH = Math.floor(window.innerHeight * 1);
        $(step).css('height', stepH + 'px');
        
        scroller.resize();
      }


function init() {     
    handleResize();

    scroller.setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        offset: 0.5,
        debug: false
    })
        .onStepEnter(handleStepEnter);

        window.addEventListener('resize', handleResize);
}

init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
