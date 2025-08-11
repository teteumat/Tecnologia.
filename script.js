
document.addEventListener('mousemove', (e)=>{
  document.querySelectorAll('.tilt').forEach(card=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    card.style.transform = `rotateY(${dx*6}deg) rotateX(${-dy*6}deg)`;
  });
});
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mouseleave',()=> card.style.transform = 'rotateY(0) rotateX(0)');
});
const obs = new IntersectionObserver(entries=>{
  entries.forEach(el=>{ if(el.isIntersecting){ el.target.classList.add('is-visible'); } });
},{ threshold:.16 });
document.querySelectorAll('.reveal').forEach(el=> obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}) }
  });
});
document.getElementById('btn-buy').addEventListener('click',()=>{
  window.location.href = 'https://gumroad.com'; // troque pelo checkout real
});
document.getElementById('btn-demo').addEventListener('click',()=>{
  window.location.href = 'https://teteumat.github.io/Clinica/'; // troque pelo seu demo
});
document.getElementById('y').textContent = new Date().getFullYear();
