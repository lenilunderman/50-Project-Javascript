const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// find the current index
let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  // do not let it passes the length of the node circles
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  console.log(currentActive)
  //function to update the dom
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  // do not let it passes the length of the node circles
  if (currentActive < 1) {
    currentActive = 1
  }
  console.log(currentActive)
  // function to update the dom
  update()
})

// update the dom
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
