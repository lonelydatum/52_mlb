import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	t1: 5,
	t1b: 2,
	t2: 1.8,
}

const {w, h} = bannerSize




function init(){	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	return tl
}



function standard(heros){	
	const tl = init()	
	tl.from(".t1", {duration:.5, opacity:0}, "+=.5")
	tl.to(".t1", {duration:.3, opacity:0}, `+=${read.t1}`)
	tl.from(".t1b", {duration:.5, opacity:0}, "+=.1")
	tl.from(".bg-news", {duration:.3, opacity:0}, `+=${read.t1b}`)
	tl.from(".hero", {duration:.5, opacity:0}, "+=.1")
	
	if(heros){
		tl.add(heros)
	}
	tl.from(".t2", {duration:.3, opacity:0}, "+=.5")
	tl.to(".t2", {duration:.3, opacity:0}, `+=${read.t2}`)
	tl.from([".tint", ".end"], {duration:.3, opacity:0}, "+=.2")
	
	return tl
}

function withHeros(){
	const tl = new TimelineMax()
	tl.from(".hero-0", {duration:.3, opacity:0}, "+=.1")
	tl.from(".hero-1", {duration:.3, opacity:0}, "+=.1")
	standard(tl)
}

function b_970x250(){
	withHeros()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	withHeros()
	
}

function b_300x600(){		
	withHeros()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){
	standard()
}

function b_320x50(phoneDuration=.29){	
	withHeros()

}

function b_728x90(text1){	
	withHeros()
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin }