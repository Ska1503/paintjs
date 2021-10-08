const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange')
const mode = document.getElementById('jsMode')

canvas.height = 500
canvas.width = 900

ctx.lineWidth = 2.5
ctx.strokeStyle = '#2c2c2c'
let painting = false
let filling = false

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

function handleColorClick(e) {
  const color = e.target.style.backgroundColor
  ctx.strokeStyle = color
  console.log(color);
}

function handleRangeChange(e) {
  const range = e.target.value
  ctx.lineWidth = range
}

function handleModeClick() {
  if (filling === true) {
    filling = false
    mode.innerText = 'Заливка'
  } else {
    filling = true
    mode.innerText = 'Рисование'
  }
}


Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))

if (range) {
  range.addEventListener('input', handleRangeChange)
}

if (mode) {
  mode.addEventListener('click', handleModeClick)
}