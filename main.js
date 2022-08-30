var container = document.querySelector('#scroll');
    var graphic = document.querySelector('#scroll > .scroll__graphic'); //container.select('.scroll__graphic');
    var text = document.querySelector('#scroll > .scroll__text'); //container.select('.scroll__text');
    var step = document.querySelector('#scroll > .scroll__text > .step'); // text.selectAll('.step');
    var scroller = scrollama();

/*     let stepH = Math.floor(window.innerHeight * 0.9);
    $(".step").css('height', stepH + 'px'); */

function handleStepEnter(r) {  
   console.log(r.index) 
   if (r.index === 0 && r.direction === "up") {
        $(".pic").fadeTo(1500, 0);   
   } else if (r.index === 1 && r.direction === "down") {
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
        $("#pic_1").animate({left:"-25%", "opacity": 1}, 1500);
        $("#pic_2").animate({left:"40%"}, 1500);
      
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
        $("#pic_1").animate({left:"-25%", "opacity": 1}, 1500);
        $("#pic_2").animate({left:"40%"}, 1500); 
    } else if(r.index === 9 && r.direction === "down") {
        let src= $(r.element).data("src");
        $("#pic_1").attr("src", src); 
    } 

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
