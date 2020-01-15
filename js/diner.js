document.getElementById("text").onclick = function () {
    var ok = true;

     if (ok === true) {
          var div = document.createElement('div');

          div.className = 'new-rect';
            //div.style.backgroundColor = "black";

       document.getElementsByTagName('body')[0].appendChild(div);
    }
};
