const panels = document.querySelectorAll('.panel');

panels.forEach(item => item.addEventListener('mouseover', togglePanelOpen));
panels.forEach(item => item.addEventListener('transitionend', togglePanelActive));

panels.forEach(item => item.addEventListener('mouseover', {

}));

panels.forEach(item => {
  item.addEventListener('mouseover', togglePanelOpen);
  item.addEventListener('mouseout', togglePanelClose);
})

function togglePanelOpen() {
  this.classList.add('open-panel');
}

function togglePanelClose() {
  this.classList.remove('open-panel');
}

function togglePanelActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
