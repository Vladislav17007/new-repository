
function logValue(id) {
    var el = document.getElementById(id);
    return el.value
  }
  
  function getValue(id) {
    var mal = document.getElementById(id);
    console.log(mal.value);
  }
  
  var firstNameId = 'first-name';
  var lastNameId = 'last-name';
  
  logValue(firstNameId);
  logValue(firstNameId);
  logValue(firstNameId);
  
  logValue(lastNameId);
  logValue(lastNameId);
  logValue(lastNameId);
  
  var value = getValue(firstNameId);
  window.alert(value);
  
  
  // slight change from the video, where I've set the eventListener
  // for the animationend to remove itself after the click
  
  const rippleButton = document.querySelector(".ripple-button");
  
  function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;
  
    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
  }
  
  rippleButton.addEventListener("click", (e) => {
    mousePositionToCustomProp(e, rippleButton);
    rippleButton.classList.add("pulse");
    rippleButton.addEventListener(
      "animationend",
      () => {
        rippleButton.classList.remove("pulse");
      },
      { once: true }
    );

  });