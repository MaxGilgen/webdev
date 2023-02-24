import './../scss/style.scss';

const images = document.querySelectorAll('.image');
const wrapper = document.querySelector('.wrapper');
const imagesAndChilds = [];

let position = 0;

wrapper.addEventListener(
	'wheel',
	($event) => {
		$event.preventDefault();
		if ($event.deltaY > 0) {
			position++;
		} else {
			position--;
		}
		imagesAndChilds.forEach((element, index) => {
			setTransfrom(element.parent, baseRotation * (index + position));
		});
	},
	{ passive: false }
);

images.forEach((parent) => {
	const child = parent.querySelector('img');
	imagesAndChilds.push({ parent, child });
});

const baseRotation = 360 / imagesAndChilds.length;

imagesAndChilds.forEach((element, index) => {
	setTransfrom(element.parent, baseRotation * index);
});

function setTransfrom(element, deg) {
	element.style.transform = `rotate(${deg}deg)`;
}
