var repos =
[
  ["Kura","kura"],
  ["Ball","ball"],
  ["Wave","wave"],
  ["Ripples","ripple"],
  ["Rainbow Bubbles","rainbow-bubbles"],
  ["Bubbles","bubbles"],
  ["Point Wave","point-wave"],
  ["Cars","cars"],
  ["Bridge Rush","bridge"],
  ["Pipes Screensaver","pipes"],
  ["Web Wave","web"],
  ["Lines","lines"],
  ["Kaleidoscope","kaleidoscope"],
  ["Blooming Japan","blooming-japan"],
  ["Hexagons","hexagons"],
  ["Green Whirlpool","green-whirlpool"],
  ["Point Wave 2","pointwave"],
  ["Lazors","lazors"],
  ["Squares & Triangles","squares-and-triangles"],
  ["Attractor","attractor"],
  ["Gum Treater","gum"],
  ["Biliard","biliard"],
  ["Spirograph","spirograph"],
  ["Space Invaders","space-invaders"],
  ["Memory","memory"],
  ["Curve Fever","curve"],
  ["Firework Cannon","cannon"],
  ["Chess","chess"],
  ["Clock o' Clocks","clock"],
  ["Fireworks","fireworks"],
  ["Hypnosis","hypnotic"]
];

var html = "";

repos.forEach((e)=>
{
  html += `<div class="subsite"><a href="https://karpff.github.io/${e[1]}/"><img src="RES/${e[1]}.jpg"><span>${e[0]}</span></a></div>`;
});

window.onload = ()=>{ document.getElementsByTagName("body")[0].innerHTML = html;}
