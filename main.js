var container = document.querySelector('#scroll');
    var graphic = document.querySelector('#scroll > .scroll__graphic'); //container.select('.scroll__graphic');
    var text = document.querySelector('#scroll > .scroll__text'); //container.select('.scroll__text');
    var step = document.querySelector('#scroll > .scroll__text > .step'); // text.selectAll('.step');
    var scroller = scrollama();

function handleStepEnter(r) { 
    let preudoClass = $(r.element).data("class");      

    if(r.index === 0){
        $(".pic").attr("src", null);

    //step 1
    } else if(preudoClass === 'show-first-pic' && r.direction ==="down"){ 
        let city= $(r.element).data("city");
        $("#city-marker").text(city);

        let src = $(r.element).data("src");
        $("#pic_1")
            .css("opacity", 0).attr("src", src)
            .fadeTo(1000, 1)

        $("#pic_2").attr("src", null); 

    } else if(preudoClass === 'show-first-pic' && r.direction ==="up"){  
        let src = $(r.element).data("src"); 
        $("#pic_1")
            .attr("src", src)
            .css("opacity", 1)   

        $("#pic_2").fadeTo(1000, 0)  
         
    //step 2
    }  else if(preudoClass === 'show-second-pic' && r.direction ==="down"){       
        let src= $(r.element).data("src");
        $("#pic_1").fadeTo(1000, 0.2);
       
        $("#pic_2")   
            .css("opacity", 0)         
            .attr("src", src)            
            .fadeTo(1000, 1);

    } else if(preudoClass === 'show-second-pic' && r.direction ==="up"){             
            $("img.pic").animate({'left':0, "top": "50px", "width": "100%"}, 1000, function() {
                let src= $(r.element).data("src").replace("2", "1");
                $("#pic_1").attr("src", src);
       });       
            
    //step 3
    } else if(preudoClass === 'split' && r.direction ==="down"){
        let marginLeft_1 = $(r.element).data("left-f") ?? "-15%";
        let marginLeft_2 = $(r.element).data("left-s") ?? "40%";
        let marginTop_1 = $(r.element).data("top-f") ?? "50px";
        let marginTop_2 = $(r.element).data("top-s") ?? '50px"';
        let picWidth = '80%';


        $(".pic").fadeTo(100, 1);

        $("#pic_1")
            .animate({'left':marginLeft_1, "top":marginTop_1, "width": picWidth },
            1000, function() {
                let src= $(r.element).data("src");           
                $(this).attr("src", src);
            })

        $("#pic_2")
            .animate({'left':marginLeft_2, "top":marginTop_2, "width": picWidth},
            1000)       

               

    }  else if(preudoClass === 'split' && r.direction ==="up"){
        let marginLeft_1 = $(r.element).data("left-f") ?? "-15%";
        let marginLeft_2 = $(r.element).data("left-s") ?? "40%";
        let marginTop_1 = $(r.element).data("top-f") ?? "50px";
        let marginTop_2 = $(r.element).data("top-s") ?? '50px';
        let picWidth = '80%';

        let city= $(r.element).data("city");
        $("#city-marker").text(city);
        
        $("#pic_1").css("opacity", 1)
        .animate({'left':marginLeft_1, "top":marginTop_1, "width": picWidth},
         1000, function() {
            let src1= $(r.element).data("src"); 
            $('#pic_1').attr("src", src1);
        })

        $("#pic_2").css("opacity", 1)
            .animate({'left':marginLeft_2, "top":marginTop_2, "width": picWidth}, 
                1000, function() {
                let src2= $(r.element).data("src2"); 
                $('#pic_2').attr("src", src2);
            }) 
    }

    //step 4
    else if(preudoClass === 'empty-slide' && r.direction ==="down"){
        $("#city-marker").text('');

        $(".pic").animate({'opacity':  0},
            1000, function(){
                $(this).attr("src", null)
                .css("left",0)
                .css("top", "50px")
                .css("width", "100%")
            })
            
    } else if(preudoClass === 'empty-slide' && r.direction ==="up"){
        let city= $(r.element).data("city");
       
        $("#city-marker").text(city)
        $(".pic").attr("src", null)    
            
            
    } 

}


  function handleResize() {
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
        debug: false,
    })
        .onStepEnter(handleStepEnter)
        .offsetTrigger("100px")

        window.addEventListener('resize', handleResize);
}

init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

