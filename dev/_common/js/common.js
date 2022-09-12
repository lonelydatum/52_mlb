import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	percentGoBack: 2.5,
	betOnNFL: 2.2, 
	njasb: 2,
	losingBy: 2.5
}

const {w, h} = bannerSize



function fader(el, time){
	const tl = new TimelineMax()
	tl.from(el, {duration:.3, opacity:0}, "+=.2")
	tl.to(el, {duration:.3, opacity:0}, `+=${time}`)
	return tl
}

function ender(){
	const tl = new TimelineMax()
	tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer", ".cta"], {duration:.3, opacity:0}, "+=.5")
	tl.add(olg())
	return tl	
}


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}




function slider(read=2){	
	const tl = new TimelineMax()
	

	tl.add("t1")
	tl.from(".t1a", {duration:.26, x:"-=100", y:"+=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.26, x:"+=100", y:"-=30", opacity:0}, "t1+=.6")
	
	
	return tl
}

function standard(phoneDuration=.29){	
	const tl = init()	
	// return
	tl.add("phone", "+=1")
	tl.to(".logo1", {duration:phoneDuration*.8, opacity:0}, "phone")
	tl.to(".phone", {duration:phoneDuration, y:0, x:0}, "phone")
	tl.to(".phone_dark", {duration:phoneDuration, opacity:0})
	tl.add(slider(), "+=.1")
	tl.to(".f1", {duration:.26, opacity:0}, "+=1.4")

	tl.add(fader(".t2", read.betOnNFL))
	

	tl.add(ender())

	return tl
}

function b_970x250(){
	standard(.4)
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_1000x700(){	
	standard(.4)
}

function b_970x70(){
	const tl = new TimelineMax()
	tl.add("t1")
	tl.from(".t1a", {duration:.11, y:"-=50"}, "t1")
	b_728x90(tl)
}

function b_320x50(phoneDuration=.29){	
	const tl = init()

	// tl.add("phone", "+=1")
	// tl.to(".logo1", {duration:.4, opacity:0}, "phone")
	// tl.to(".phone", {duration:.4, y:0, x:0}, "phone")

	tl.add("phone", "+=1")
	tl.to(".logo1", {duration:phoneDuration*.8, opacity:0}, "phone")
	tl.to(".phone", {duration:phoneDuration, y:0, x:0}, "phone")
	tl.to(".phone_dark", {duration:phoneDuration, opacity:0})

	

	tl.from(".t1a", {duration:.4, opacity:0}, "phone+=.2")


	
	
	tl.to(".f1", {duration:.26, opacity:0}, "+=1.4")

	tl.add(fader(".t2", 2.8))
	tl.add(fader(".t3", 3.8))
	

	tl.from(".f4", {duration:.3, opacity:0}, "+=.2")
	
	tl.add(olg())

}

function b_728x90(text1){	
	standard(.4)
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin }