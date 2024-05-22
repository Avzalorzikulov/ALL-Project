/* ------------------------------
 * JS not needed for the style
 * this is just here so you can change the value of data-rating
------------------------------ */
const ratingDisplay = document.querySelector(".rating-display"),
	valueDisplay = document.querySelector(".value-display"),
	range = document.querySelector("#rating-value");

range.addEventListener("input", () => {
	setValue(range);
});

setValue(range);

function setValue(range) {
	const val = range.value;
	valueDisplay.innerHTML = val;
	ratingDisplay.style.setProperty("--data-rating", val);
}