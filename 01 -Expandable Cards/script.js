// bring all the panels to change the classe to active

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // function to remove the classe before injecting a new one
    removeActiviteClasses()
    panel.classList.add('actvite')
  })
})

function removeActiviteClasses() {
  // loop all the panels
  panels.forEach((panel) => {
    panel.classList.remove('actvite')
  })
}
