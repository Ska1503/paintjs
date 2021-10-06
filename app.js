const canvas = document.getElementById('jsCanvas')
let painting = false

function stopPaining() {
  painting = false
}

function onMouseMove(e) {
  x = e.offsetX
  y = e.offsetY

}

function onMouseDown(e) {
  painting = true
}

function onMouseUp(e) {
  stopPaining()
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', onMouseDown)
  canvas.addEventListener('mouseup', onMouseUp)
  canvas.addEventListener('mouseleave', stopPaining)
}