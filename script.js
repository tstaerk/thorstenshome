document.getElementById('year').textContent=new Date().getFullYear();
const typer=document.getElementById('typewriter');const copy=typer.dataset.text;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){typer.textContent=copy}else{let n=0;typer.classList.add('typing');const type=()=>{typer.textContent=copy.slice(0,++n);if(n<copy.length)setTimeout(type,n<13?90:24);else typer.classList.remove('typing')};setTimeout(type,400)}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.project-tile,.tiles>a,.tutorials>a').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
