const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal_visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
		modalOverlay.classList.add('modal-overlay_visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay_visible');
		modals.forEach((el) => {
			el.classList.remove('modal_visible');
		});
	}
});
