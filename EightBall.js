document.getElementById("title").onclick = eightBall;

var eightBall = ["It is certain.", "Most likely.", "Signs point to yes.", "Ask again later.", "Cannot predict now.", "Don't count on it.", "Outlook not so good.", "Outlook not so good."];

for (var i = 0; i < eightBall.length; ++i) {
    console.log(eightBall[i]);
  }

var randomint = Math.floor(Math.random() * eightBall.length) 

console.log(eightBall[randomint]);


var element =  document.getElementById('p1')
var string = document.createTextNode(eightBall[randomint])
element.appendChild(string)


