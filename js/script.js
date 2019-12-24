// window.onload = function() {
//   alert("This site isn't complete. Some screen sizes may not access site as intended.")
// }

(function() {
  let skills =  document.querySelectorAll('.skill');
  skills.forEach( skill => {
    let display1 = document.querySelector('.display1');
    let display2 = document.querySelector('.display2');
    skill.addEventListener('mouseover', function() {
      if ( skill.classList[2] == 1 ) {
        display1.innerHTML = `${skill.classList[1]}`
        display1.style.opacity = 1;
      } else {
        display2.innerHTML = `${skill.classList[1]}`
        display2.style.opacity = 1;
      }
    })
    skill.addEventListener('mouseout', function() {
      if ( skill.classList[2] == 1 ) {
        display1.innerHTML = ``
        display1.style.opacity = 0;
      } else {
        display2.innerHTML = ``
        display2.style.opacity = 0;
      }
    })
  })
}());

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.querySelector('.scroll-down-btn').style.opacity = 0;
    } else {
      document.querySelector('.scroll-down-btn').style.opacity = 1;
    }

    if (document.documentElement.clientWidth <= 600 && window.scrollY != 0) {
      document.querySelector('.icon-logo').style.opacity = 0;
      document.querySelector('.portfolio-links').style.opacity = 0;
      document.querySelector('.scroll-down-btn').style.opacity = 0;
    } else {
      document.querySelector('.icon-logo').style.opacity = 1;
      document.querySelector('.portfolio-links').style.opacity = 1;
      document.querySelector('.scroll-down-btn').style.opacity = 1;
    }
};


window.onresize = function() {
  if (document.documentElement.clientHeight < 500) {
    document.querySelector('.icon-logo').style.opacity = 0;
  } else {
    document.querySelector('.icon-logo').style.opacity = 1;
  };

}


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}