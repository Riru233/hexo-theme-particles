var createRipple=function (event) {
  const button = event.currentTarget;
  const rippleSize = Math.max(button.clientWidth, button.clientHeight)
  const moved = rippleSize / 2;
  const circle = document.createElement("span")
  circle.style.width = circle.style.height = `${rippleSize}px`
  circle.style.top = `${event.clientY - button.offsetTop - moved}px`
  circle.style.left = `${event.clientX - button.offsetLeft - moved}px`
  circle.classList.add("ripple")
  const isExist = button.getElementsByClassName("ripple")[0]
  if (isExist) {
      isExist.remove()
  }
  button.append(circle)
}
document.getElementById("ripple").addEventListener("click",createRipple)
function submit(){
  console.log("按钮被点击")
}