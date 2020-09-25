const panel = document.querySelectorAll('.panel');

panel.forEach(item => {

  item.addEventListener('mouseover', () => {

    item.classList.add('open-panel');

  })

  item.addEventListener('mouseout', () => {

    item.classList.remove('open-panel');

  })

}) 