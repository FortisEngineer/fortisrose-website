export async function renderProjects(){
  const grid = document.getElementById('projects-grid');
  const catSel = document.getElementById('filter-category');
  const yearSel = document.getElementById('filter-year');
  try{
    const res = await fetch('/assets/data/projects.json');
    const data = await res.json();
    const years = new Set();
    const cats = new Set();
    data.projects.forEach(p=>{ years.add(String(p.year)); cats.add(p.category); });
    [...cats].sort().forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; catSel.appendChild(o); });
    [...years].sort((a,b)=>b.localeCompare(a)).forEach(y=>{ const o=document.createElement('option'); o.value=y; o.textContent=y; yearSel.appendChild(o); });

    function draw(){
      const c = catSel.value; const y = yearSel.value;
      grid.innerHTML = '';
      data.projects.filter(p=> (c==='all'||p.category===c) && (y==='all'|| String(p.year)===y)).forEach(p=>{
        const card = document.createElement('article');
        card.className = 'project-card';
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.alt = p.title + (p.location ? (', ' + p.location) : '');
        img.src = p.image || 'https://placehold.co/800x600?text=Project';
        const body = document.createElement('div'); body.className='project-body';
        const meta = document.createElement('div'); meta.className='project-meta'; meta.textContent = `${p.category} • ${p.year}${p.location? ' • ' + p.location: ''}`;
        const title = document.createElement('h3'); title.className='project-title'; title.textContent=p.title;
        const desc = document.createElement('p'); desc.textContent=p.description || '';
        const actions = document.createElement('div'); actions.className='project-actions';
        if(p.link){ const a=document.createElement('a'); a.href=p.link; a.target='_blank'; a.rel='noopener'; a.textContent='View details →'; actions.appendChild(a); }
        body.append(meta,title,desc);
        card.append(img, body, actions);
        grid.appendChild(card);
      });
    }
    catSel.addEventListener('change', draw);
    yearSel.addEventListener('change', draw);
    draw();
  }catch(e){
    grid.innerHTML = '<p>Unable to load projects right now.</p>';
    console.error(e);
  }
}
