var container = document.querySelector('#scroll');
    var graphic = document.querySelector('#scroll > .scroll__graphic'); //container.select('.scroll__graphic');
    var text = document.querySelector('#scroll > .scroll__text'); //container.select('.scroll__text');
    var step = document.querySelector('#scroll > .scroll__text > .step'); // text.selectAll('.step');
    var scroller = scrollama();

function handleStepEnter(r) { 
    let preudoClass = $(r.element).data("class");  
    console.log(r.index);
    console.log(preudoClass);


    if(preudoClass === 'show-first-pic' && r.direction ==="down"){
        let src = $(r.element).data("src");
        
        d3.selectAll(".pic")
            .style("left", 0)
            .style("top", 0)
            .style("width", '100%') 

        d3.select("#pic_2")
            .style("opacity", 0);  
        
        d3.select("#pic_1")
            .style("opacity", 0)
            .attr("src", src)
            .transition()
            .duration(1000)
            .style("opacity", 1)

    } else if(preudoClass === 'show-second-pic' && r.direction ==="down"){
        let src= $(r.element).data("src");

        d3.select("#pic_1")        
            .transition()
            .duration(1000)
            .attr("opacity", 0)
       
        d3.select("#pic_2")
            .style("opacity", 0)
            .attr("src", src)
            .transition()
            .duration(1000)
            .style("opacity", 1)

    } else if(preudoClass === 'split' && r.direction ==="down"){
        let marginLeft_1 = $(r.element).data("left-f") ?? "-15%";
        let marginLeft_2 = $(r.element).data("left-s") ?? "40%";
        let marginTop_1 = $(r.element).data("top-f") ?? "0";
        let marginTop_2 = $(r.element).data("top-s") ?? '0';
        let picWidth = '80%';
        
        d3.select("#pic_1")
            .style("opacity", 1)
            .transition()
            .duration(1000)
            .style("left", marginLeft_1)
            .style("top", marginTop_1)
            .style("width", picWidth)            
            .on("end", function(){
                let src= $(r.element).data("src");           
                d3.select(this).attr("src", src);
            })

        d3.select("#pic_2")           
            .transition()
            .duration(1000)
            .style("left", marginLeft_2)
            .style("top", marginTop_2)
            .style("width", picWidth)
                

    } else if(preudoClass === 'show-red-lines' && r.direction ==="down"){
        let src= $(r.element).data("src");
        $("#pic_1").attr("src", src); 

    } else if(preudoClass === 'empty-slide' && r.direction ==="down"){
        let city= $(r.element).data("city");
        $("#city-marker").text(city)

        d3.selectAll(".pic")        
            .transition()
            .duration(1000)
            .style("opacity", 0)            
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
        offset: 0.8,
        debug: true
    })
        .onStepEnter(handleStepEnter);

        window.addEventListener('resize', handleResize);
}

init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
