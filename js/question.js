let des1 = document.getElementById('des1');
let des2 = document.getElementById('des2');
let des3 = document.getElementById('des3');
let des4 = document.getElementById('des4');
function arrow1() {
  let arrow1 = document.getElementById('arrow1');
  if (des1.style.display != 'none') {
    des1.style.display = 'none';
  } else {
    des1.style.display = 'block';
    des2.style.display = 'none';
    des3.style.display = 'none';
    des4.style.display = 'none';
  }
}
function arrow2() {
  let arrow2 = document.getElementById('arrow2');
  if (des2.style.display != 'none') {
    des2.style.display = 'none';
  } else {
    des2.style.display = 'block';
    des1.style.display = 'none';
    des3.style.display = 'none';
    des4.style.display = 'none';
  }
}
function arrow3() {
  let arrow3 = document.getElementById('arrow3');
  if (des3.style.display != 'none') {
    des3.style.display = 'none';
  } else {
    des3.style.display = 'block';
    des1.style.display = 'none';
    des2.style.display = 'none';
    des4.style.display = 'none';
  }
}
function arrow4() {
  let arrow4 = document.getElementById('arrow4');
  if (des4.style.display != 'none') {
    des4.style.display = 'none';
  } else {
    des4.style.display = 'block';
    des1.style.display = 'none';
    des2.style.display = 'none';
    des3.style.display = 'none';
  }
}
