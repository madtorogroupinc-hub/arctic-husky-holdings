const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.nav-menu');
const navLinks=document.querySelector('#navLinks');

const syncHeader=()=>header?.classList.toggle('scrolled',window.scrollY>20);
syncHeader();
window.addEventListener('scroll',syncHeader,{passive:true});

menuBtn?.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('menu-open',open);
});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));