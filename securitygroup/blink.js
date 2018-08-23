 var blink = (function () {
  var elems;

  function blink() {
    for (var i = 0; i < elems.length; i++) {
      var visible = elems[i].style.visibility === 'visible';
      elems[i].style.visibility = visible ? 'hidden' : 'visible';
    }
  }

  this.start = function () {
    elems = document.getElementsByClassName('blink');
    setInterval(blink,750);
  };

  return { start: start };
}());

addEventListener('load', blink.start);
