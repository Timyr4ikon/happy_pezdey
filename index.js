'use strict';
const q = document.querySelector('.q');
const w = document.querySelector('.w');
const e = document.querySelector('.e');
const r = document.querySelector('.r');
const t = document.querySelector('.t');
const y = document.querySelector('.y');
const img = document.querySelector('.first-img');

q.addEventListener('click',(e)=>{
    w.classList.add('db');
    q.classList.add('opa');
})
w.addEventListener('click',(e)=>{
    t.classList.add('db');
    w.classList.add('opa');
})
t.addEventListener('click',(el=>
    {
    t.classList.add('opa');
    e.classList.add('db');
    }))
e.addEventListener('click',(el)=>{
    e.classList.remove('db');
    r.classList.add('db'); 
})
r.addEventListener('click',(el)=>{
    r.classList.add('opa');
    y.classList.add('db'); 
})
y.addEventListener('click',(el)=>{
    y.classList.add('opa');
    img.classList.add('db'); 
})