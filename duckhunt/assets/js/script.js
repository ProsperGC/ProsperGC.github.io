function showPage(e,t=null){let o="";switch(e){case 1:o+='<div id="duck1" onclick="raak(10,1)" style="top:225px; left:300px;" class="duck"></div>       <div id="duck2" onclick="raak(10,2)" style="top:350px; left:800px;" class="duck"></div>       <div id="duck3" onclick="raak(25,3)" style="top:150px; left:1100px;" class="duck"></div>       <div id="duck4" onclick="raak(50,4)" style="top:400px; left:400px;" class="duck"></div>     <div id="scoreboard"><div id="score"></div>SCORE<div id="highscore"></div>SCORE TO BEAT<div id="timer"></div>TIME LEFT';break;case 2:o+='<div id="container">       <img src="https://i.ibb.co/GTzrZb8/title.png" class="logo" alt="logo">       <h2>Welcome to duckhunt!, Shoot as many ducks as you can. Everytime you shoot there is cooldown of half a second. Good luck!<h2>       <button type="button" class="start" onclick="start()">Start</button>     </div>';break;case 3:o+='<div id="container">       <img src="https://i.ibb.co/GTzrZb8/title.png" class="logo" alt="logo">       <h2>Too bad! You didnt get enough points to get the coordinates! Try again!<h2>       <h2>Your last score: <div id="score">'+score+'</div> <h2>       <h2>Score to beat: <div id="highscore">'+scoretobeat+'</div> <h2>       <button type="button" class="start" onclick="start()">Restart</button>     </div>';break;case 4:o+='<div id="container">       <img src="https://i.ibb.co/GTzrZb8/title.png" class="logo" alt="logo">       <h2>Congratulations! You won!<h2>       <h2>These are the coordinates: N 52\xb006.913, E 004\xb054.009 <h2>       <h2> I hope you liked my game!<h2>       <button type="button" class="start" onclick="start()">Restart</button>     </div>'}document.body.innerHTML=o}showPage(2);var scoreboard,score=0,wait=0,scoretobeat=200;function moveDucks(e=.5*window.innerHeight){for(let t=1;t<5;t++){let o=window.innerHeight,s=window.innerWidth,i=Math.floor(Math.random()*e+.1*o),c=Math.floor(Math.random()*s*.8+.1*s),r=document.getElementById("duck"+t);r.style.top=i+"px",r.style.left=c+"px",c>s/2?r.style.transform="scaleX(1)":r.style.transform="scaleX(-1)"}}var moveDuckIntervalId=null,highscore=-1;function start(){showPage(1),score=0,scoreboard=document.getElementById("score"),wait=0,scoreboard.innerHTML=score,null===moveDuckIntervalId&&(moveDuckIntervalId=setInterval(moveDucks,1250)),new Audio("https://fi.zophar.net/soundfiles/nintendo-nes-nsf/duck-hunt/2%20-%20Duck%20Hunt%20Intro.mp3").play(),highscore=localStorage.getItem("highScore")?localStorage.getItem("highScore"):0,document.getElementById("highscore").innerHTML=scoretobeat;var e=30,t=document.getElementById("timer");function o(){0==e?score<scoretobeat?(clearTimeout(s),showPage(3,score),console.log("noob")):(clearTimeout(s),showPage(4,score),console.log("nice")):(t.innerHTML=e,e--)}var s=setInterval(o,1e3);o()}function updateHighScore(){score>highscore&&(highscore=score,document.getElementById("highscore").innerHTML=highscore,localStorage.setItem("highscore",highscore))}function wacht(){wait=0}let lastShotTime=0;function raak(e,t){let o=Date.now();!(o-lastShotTime<500)&&(lastShotTime=o,score+=e,scoreboard.innerHTML=score,score>highscore&&-1!=highscore&&(highscore=score,document.getElementById("highscore").innerHTML=scoretobeat,localStorage.setItem("highScore",highscore)),new Audio("https://fi.zophar.net/soundfiles/nintendo-nes-nsf/duck-hunt/10%20-%20SFX%20Gun%20Shot.mp3").play())}