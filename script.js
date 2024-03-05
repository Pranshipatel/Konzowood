function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco()

function loaderAnimation(){
  var tl = gsap.timeline()
  tl.from("#page1  h2",{
    y:"-40%",
    opacity:0,
    duration:0.9,
    delay:0.3,
    ease:"expo.out",
  },"a")
  tl.from("#page1  h1",{
    opacity:0,
    duration:0.9,
    delay:0.3,
    ease:"expo.out"
  },"a")
  tl.from("#page1  button",{
    opacity:0,
    y:"40",
    duration:0.9,
    delay:0.3,
    ease:"expo.out"
  },"a")

  var btn = document.querySelector("#page1 button");
  var loader = document.querySelector("#page1")
  btn.addEventListener('click',function(){
    var tl2 = gsap.timeline()
    tl2.to("#page1 button",{
      x:"-5%",
      opacity:0
    })
    tl2.to("#page1 h2",{
      
      opacity:0
    },"b")
    tl2.to("#page1 h1",{
      opacity:0
    },"b")
    tl2.to("#page1",{
        display:"none",
      })
    tl2.from("#page2 #slide",{
      x:"-100%",
      duration:2,
      ease:"expo.out",

    },"a")
    tl2.to("#page2 #slide",{
      opacity:1
    },"a")
    tl2.from("#page2-card",{
      scale:1.15,
      ease: "power1.out",
      duration:0.9
    },"a")
    tl2.to("#page2-card",{
      opacity:1
    },"a")
  })

}
loaderAnimation()


function page3Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      // markers:true,
      start:"top 0%",
      end:"start -90%",
      scrub:2,
      pin:true
    }
  })
  tl.to("#page3 h2",{
    opacity:0,
    y:"-40%",
    delay:0.1
  },"a")
  tl.to("#page3 #video",{
    scale:6.9,
    delay:0.2
  },"a")
  tl.to("#page3 #video svg",{
    display:"none",
    delay:-0.9,
    opacity:0,
  })
}
page3Animation()

function page4Animation(){
  var h1 = document.querySelector("#page4 h1")
  var h1Text = h1.textContent;
  var textSplit = h1Text.split("")
  var clutter =""
  textSplit.forEach(function(elem){
    clutter += `<span>${elem}</span>`
    console.log(elem)
  })
  h1.innerHTML = clutter
 
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      // markers:true,
      start:"top 30%",
      end:"top -55%",
      scrub:2
    }
  })
  tl.to("#page4 h1 span",{
    color:"#3E362E",
    stagger:0.3,
  })
}
page4Animation()

function page5Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      // markers:true,
      start:"top 68%",
      end:"top -60%",
      scrub:2
    }
  });
  tl.to("#page5 #page5-side",{
    x:-290
  },"a")
  tl.to("#page6 .page6-side",{
    x:290
  },"a")
  
}
page5Animation()


function page7Animation(){
  var h1 = document.querySelector("#page7 h1")
  var h1Text = h1.textContent;
  var textSplit = h1Text.split("")
  var clutter =""
  textSplit.forEach(function(elem){
    clutter += `<span>${elem}</span>`
    console.log(elem)
  })
  h1.innerHTML = clutter
 
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page7",
      scroller:"#main",
      // markers:true,
      start:"top 30%",
      end:"top -55%",
      scrub:2
    }
  })
  tl.to("#page7 h1 span",{
    color:"#3E362E",
    stagger:0.5,
  })
}
page7Animation()


function page8Animation(){
var b = document.querySelector("#page8 .part1")
b.addEventListener("mouseenter",function(){
b.style.width = "68%"
})
b.addEventListener("mouseleave",function(){
  b.style.width = "50%"
})

var a = document.querySelector("#page8 .part2")
a.addEventListener("mouseenter",function(){
a.style.width = "68%"
})
a.addEventListener("mouseleave",function(){
  a.style.width = "50%"
})

}
page8Animation()