// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		document.getElementById(targetId).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

// Typing animation for the full text
const fullText = `Hello! I'm Musfira Ansari, a beginner UI/UX Designer passionate about creating user-centered designs.\nMy journey started with a fascination for how digital products function and look,\nand I am constantly learning to improve my skills. I focus on simplicity, usability, and aesthetics.\nLet’s design something beautiful together!`;

const typingAnimationElement = document.querySelector('.typing-animation');

let index = 0;
function type() {
	if (index < fullText.length) {
		const char = fullText.charAt(index);
		typingAnimationElement.innerHTML += char === '\n' ? '<br>' : char; // Handle line breaks
		index++;
		setTimeout(type, 50); // Adjust typing speed here (50 milliseconds)
	}
}

// Start typing animation on page load
window.onload = function () {
	type();
};
