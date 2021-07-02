
    function randColor() {
      var r = Math.round(Math.random() * 240 + 16);
      var g = Math.round(Math.random() * 240 + 16);
      var b = Math.round(Math.random() * 240 + 16);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    }

    function draw(e){
      var canvas = document.getElementById("imgCanvas");
      var ctx = canvas.getContext("2d");
      var rect = canvas.getBoundingClientRect();
      var posx = e.clientX - rect.left;
      var posy = e.clientY - rect.top;
      ctx.fillStyle = randColor() + "33";
      ctx.beginPath();
      ctx.arc(posx, posy, 50, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(posx, posy, 50, 0, Math.PI * 2);
      
    }