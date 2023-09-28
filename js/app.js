// 3D Scroll

let zSpacing = -900,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

window.onscroll = function () {

	let top = document.documentElement.scrollTop,
		delta = lastPos - top

	lastPos = top

	frames.forEach(function (n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`,
			opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)

// Audio

let soundButton = document.querySelector('.soundbutton'),
	audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
	audio.pause()
}

// Animations


window.addEventListener("scroll", () => {
	if (window.scrollY >= 0) {
		const line = document.querySelector('.line')
		line.style.background = `linear-gradient(blueviolet 0 0) 0% 100% /100% 3px no-repeat`
		line.style.transition = `2s, background-size 2s 1.5s`

	}

	if (window.scrollY >= 100) {
		const thick3 = document.querySelector('.thick-3')
		thick3.style.background = `linear-gradient(#E3C53A 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		thick3.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		thick3.style.backgroundPosition = `0% 0%`
		thick3.style.color = `#000`
	}

	if (window.scrollY >= 600) {
		const hardSkills = document.querySelector('.thick-3-hrd_skills')
		hardSkills.style.background = `linear-gradient(#1841F4 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		hardSkills.style.backgroundPosition = `50% 0%`
		hardSkills.style.color = `#000`
	}

	if (window.scrollY >= 1200) {
		const hardSkills = document.querySelector('.thick-3-soft_skills')
		hardSkills.style.background = `linear-gradient(#804EF6 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		hardSkills.style.backgroundPosition = `50% 0%`
		hardSkills.style.color = `#000`
	}
	if (window.scrollY >= 1600) {
		const hardSkills = document.querySelector('.thick-3-work_exp')
		hardSkills.style.background = `linear-gradient(#ED5A05 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		hardSkills.style.backgroundPosition = `50% 0%`
		hardSkills.style.color = `#000`
	}
	if (window.scrollY >= 2200) {
		const hardSkills = document.querySelector('.thick-3-freelance')
		hardSkills.style.background = `linear-gradient(#F5707D 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		hardSkills.style.backgroundPosition = `50% 0%`
		hardSkills.style.color = `#000`
	}

	if (window.scrollY >= 2650) {
		const hardSkills = document.querySelector('.thick-3-about')
		hardSkills.style.background = `linear-gradient(#00B2DF 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		hardSkills.style.backgroundPosition = `50% 0%`
		hardSkills.style.color = `#000`
	}

	if (window.scrollY >= 3050) {
		const unexpected4 = document.querySelector('.unexpected-4')
		unexpected4.style.background = `linear-gradient(#E3C53A 0 0) 0% 100% /100% 2px no-repeat`
		unexpected4.style.transition = `2s, background-size 2s 1.5s`

	}
})


function multipleBoxShadow(numberOfShadows) {
	const shadows = [];
	for (let i = 0; i < numberOfShadows; i++) {
		const randomX = Math.floor(Math.random() * 2000);
		const randomY = Math.floor(Math.random() * 2000);
		shadows.push(`${randomX}px ${randomY}px #FFF`);
	}
	return shadows.join(', ');
}
// const smallShadows = multipleBoxShadow(700);
// const mediumShadows = multipleBoxShadow(200);
// const bigShadows = multipleBoxShadow(100);

const stars = document.querySelector('#stars')
stars.style.boxShadow = multipleBoxShadow(2000);

const starsAfter = document.querySelector('#stars:after')
starsAfter.style.boxShadow = multipleBoxShadow(2000);

const stars2 = document.querySelector('#stars2')
stars2.style.boxShadow = multipleBoxShadow(1000);

const stars2After = document.querySelector('#stars2:after')
stars2After.style.boxShadow = multipleBoxShadow(1000);

const stars3 = document.querySelector('#stars3')
stars3.style.boxShadow = multipleBoxShadow(2000);

const stars3After = document.querySelector('#stars3:after')
starsAfter3.style.boxShadow = multipleBoxShadow(2000);


// 

console.log(smallShadows);
console.log(mediumShadows);
console.log(bigShadows);