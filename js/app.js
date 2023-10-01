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
const root = document.querySelector(':root')

// Animations
const followButton = document.querySelector('.fab-action-button')

const animationRight = document.querySelector('.text-right')
const mediaLeft = document.querySelector('.frame-media_left')

const hardSkillsLeft = document.querySelector('.hard_skills__left')
const hardSkillsRight = document.querySelector('.hard_skills__right')

const softSkillsLeft = document.querySelector('.soft-skills__left')
const softSkillsRight = document.querySelector('.soft-skills__right')



window.addEventListener("scroll", () => {
	if (window.scrollY >= 0) {

		const line = document.querySelector('.line')
		line.style.background = `linear-gradient(blueviolet 0 0) 0% 100% /100% 3px no-repeat`
		line.style.transition = `2s, background-size 2s 1.5s`
		setTimeout(() => {
			line.style.opacity = 0;
		}, 2000)

	}

	if (window.scrollY >= 100) {

		animationRight.classList.add('animation_right')
		mediaLeft.classList.add('animation_left')

		setTimeout(() => {
			const thick3 = document.querySelector('.thick-3')
			thick3.style.background = `linear-gradient(#E3C53A 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
			thick3.style.transition = `1s, background-position 1s 1s, color 1s 1s`
			thick3.style.backgroundPosition = `0% 0%`
			thick3.style.color = `#000`

			// root.style.setProperty('--color-follow__button', '#E3C53A');


		}, 1600)



	}


	if (window.scrollY >= 600) {

		hardSkillsLeft.classList.add('animation_left__hard-skills__left')
		hardSkillsRight.classList.add('animation_right__hard-skills__right')

		setTimeout(() => {
			const hardSkills = document.querySelector('.thick-3-hrd_skills')
			hardSkills.style.background = `linear-gradient(#1841F4 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
			hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
			hardSkills.style.backgroundPosition = `50% 0%`
			hardSkills.style.color = `#000`

			// root.style.setProperty('--color-follow__button', '#1841F4');

		}, 400)

	}

	if (window.scrollY >= 1100) {

		softSkillsLeft.classList.add('animation_left__soft-skills__left')
		softSkillsRight.classList.add('animation_right__soft-skills__right')

		setTimeout(() => {

			const hardSkills = document.querySelector('.thick-3-soft_skills')
			hardSkills.style.background = `linear-gradient(#804EF6 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
			hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
			hardSkills.style.backgroundPosition = `50% 0%`
			hardSkills.style.color = `#000`
		}, 1500)
	}
	if (window.scrollY >= 1600) {
		const hardSkills = document.querySelector('.thick-3-work_exp')
		hardSkills.style.background = `linear-gradient(#ED5A05 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		hardSkills.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		hardSkills.style.backgroundPosition = `50% 0%`
		hardSkills.style.color = `#000`
	}
	if (window.scrollY >= 2100) {
		const workExp = document.querySelector('.thick-3-work_exp-2')
		workExp.style.background = `linear-gradient(#FFC3A8 0 0) 0% calc(-3px - 100%) /100% 200% no-repeat`
		workExp.style.transition = `1s, background-position 1s 1s, color 1s 1s`
		workExp.style.backgroundPosition = `50% 0%`
		workExp.style.color = `#000`


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

	if (window.scrollY >= 3000) {
		const unexpected4 = document.querySelector('.unexpected-4')
		unexpected4.style.background = `linear-gradient(#E3C53A 0 0) 0% 100% /100% 2px no-repeat`
		unexpected4.style.transition = `2s, background-size 2s 1.5s`

	}
})

// Comets

const comets = document.querySelector('.comets')

const createComet = () => {
	console.log(comets.children.length)
	if (comets.children.length > 100) {
		comets.children[0].remove()
	}
	let cometX = Math.round(Math.random() * window.innerWidth)
	let cometY = Math.round(Math.random() * window.innerHeight)
	let comet = document.createElement('div')
	comet.setAttribute('class', 'comet')
	comet.style.left = cometX + 'px'
	comet.style.top = cometY + 'px'

	comets.append(comet)
}

setInterval(createComet, 1500)

// Starts
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
stars.style.boxShadow = multipleBoxShadow(1500);

// const starsAfter = document.querySelector('#stars:after')
// starsAfter.style.boxShadow = multipleBoxShadow(2000);

const stars2 = document.querySelector('#stars2')
stars2.style.boxShadow = multipleBoxShadow(130);

// const stars2After = document.querySelector('#stars2:after')
// stars2After.style.boxShadow = multipleBoxShadow(1000);

const stars3 = document.querySelector('#stars3')
stars3.style.boxShadow = multipleBoxShadow(200);

// const stars3After = document.querySelector('#stars3:after')
// starsAfter3.style.boxShadow = multipleBoxShadow(2000);


const scrollTop = (top, timer) => {
	setTimeout(() => {
		window.scrollBy({
			top,
			behavior: 'smooth',
			right: 200

		});
	}, timer)
}

// поменять на конкретные пиксели страницы
scrollTop(250, 22000)
scrollTop(400, 40000)
scrollTop(500, 51000)
scrollTop(500, 65000)
scrollTop(500, 70000)
scrollTop(500, 80000)
scrollTop(500, 90000)



const start = document.querySelector('.start')


start.addEventListener('click', () => {

	setTimeout(() => {
		window.scrollBy({
			top: 200,
			behavior: 'smooth'

		}, 10000);
	})

})