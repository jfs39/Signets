let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.logo',3,{y:-300})
.to('.bg1',3,{y:50},"-=3")

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration:"100%",
    triggerHook:0
})
.setTween(timeline)
.setPin("section")
.addTo(controller);