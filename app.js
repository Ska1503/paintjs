const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')

canvas.height = 500
canvas.width = 900

ctx.lineWidth = 2.5
ctx.strokeStyle = '#2c2c2c'
let painting = false

function startPainting() {
  painting = true
}

function stopPaining() {
  painting = false
}

function onMouseMove(e) {
  x = e.offsetX
  y = e.offsetY
  if (!painting) {
    ctx.beginPath()
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }

}

function onMouseDown(e) {
  painting = true
}


if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', onMouseDown)
  canvas.addEventListener('mouseup', stopPaining)
  canvas.addEventListener('mouseleave', stopPaining)
}