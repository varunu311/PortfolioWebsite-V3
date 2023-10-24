  
  var cursorinner = document.querySelector('.cursor2');
  var a = document.querySelectorAll('a');
  
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });
  
  document.addEventListener('mousedown', function(){
    cursorinner.classList.add('cursorinnerhover')
  });
  
  document.addEventListener('mouseup', function(){
    cursorinner.classList.remove('cursorinnerhover')
  });