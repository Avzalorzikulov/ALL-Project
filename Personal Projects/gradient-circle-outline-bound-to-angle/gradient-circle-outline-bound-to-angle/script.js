ng.oninput = e => {
  pie.style.setProperty('--ng', e.target.value + 'deg');
  ngval.textContent = e.target.value;
};