const games = [
    // TOP 7 ESSENCIAIS
    { n: "The Witcher 3: Wild Hunt", p: "pc", t: "TV", r: "Médio", c: "TOP 7 ESSENCIAIS" },
    { n: "Hollow Knight", p: "pc", t: "Monitor", r: "Smooth", c: "TOP 7 ESSENCIAIS" },
    { n: "Nioh: Complete Edition", p: "pc", t: "Monitor", r: "Médio", c: "TOP 7 ESSENCIAIS" },
    { n: "Resident Evil 4 Remake", p: "pc", t: "Monitor", r: "Médio", c: "TOP 7 ESSENCIAIS" },
    { n: "BioShock Infinite", p: "pc", t: "TV", r: "Smooth", c: "TOP 7 ESSENCIAIS" },
    { n: "God of War (2018)", p: "pc", t: "TV", r: "Médio", c: "TOP 7 ESSENCIAIS" },
    { n: "Persona 4 Golden", p: "pc", t: "Monitor", r: "Smooth", c: "TOP 7 ESSENCIAIS" },

    // METROIDVANIA
    { n: "Bloodstained: Ritual of the Night", p: "pc", t: "Monitor", r: "Smooth", c: "METROIDVANIA" },
    { n: "Ori and the Will of the Wisps", p: "pc", t: "TV", r: "Smooth", c: "METROIDVANIA" },
    { n: "Blasphemous 1 & 2", p: "pc", t: "Monitor", r: "Smooth", c: "METROIDVANIA" },
    { n: "GRIME", p: "pc", t: "Monitor", r: "Smooth", c: "METROIDVANIA" },
    { n: "F.I.S.T.: Forged In Shadow Torch", p: "pc", t: "Monitor", r: "Smooth", c: "METROIDVANIA" },
    { n: "Castlevania: Symphony of the Night", p: "emu", t: "TV", r: "Smooth", c: "METROIDVANIA" },
    { n: "Metroid Dread", p: "emu", t: "Monitor", r: "Médio", c: "METROIDVANIA" },
    { n: "Dead Cells", p: "pc", t: "Monitor", r: "Smooth", c: "METROIDVANIA" },
    { n: "Celeste", p: "pc", t: "Monitor", r: "Smooth", c: "METROIDVANIA" },

    // SOULSLIKE
    { n: "Dark Souls Remastered", p: "pc", t: "Monitor", r: "Smooth", c: "SOULSLIKE" },
    { n: "Dark Souls II: Scholar of the First Sin", p: "pc", t: "Monitor", r: "Smooth", c: "SOULSLIKE" },
    { n: "Dark Souls III", p: "pc", t: "Monitor", r: "Médio", c: "SOULSLIKE" },
    { n: "Elden Ring", p: "pc", t: "TV", r: "Médio", c: "SOULSLIKE" },
    { n: "Sekiro: Shadows Die Twice", p: "pc", t: "Monitor", r: "Médio", c: "SOULSLIKE" },
    { n: "Lies of P", p: "pc", t: "Monitor", r: "Médio", c: "SOULSLIKE" },
    { n: "Mortal Shell", p: "pc", t: "Monitor", r: "Smooth", c: "SOULSLIKE" },

    // FPS / AÇÃO
    { n: "DOOM Eternal", p: "pc", t: "Monitor", r: "Smooth", c: "FPS / AÇÃO" },
    { n: "Wolfenstein: The New Order", p: "pc", t: "TV", r: "Smooth", c: "FPS / AÇÃO" },
    { n: "Metro Exodus", p: "pc", t: "TV", r: "Médio", c: "FPS / AÇÃO" },
    { n: "Titanfall 2", p: "pc", t: "Monitor", r: "Smooth", c: "FPS / AÇÃO" },
    { n: "Cyberpunk 2077", p: "pc", t: "TV", r: "Médio", c: "FPS / AÇÃO" },
    { n: "Devil May Cry 5", p: "pc", t: "Monitor", r: "Médio", c: "FPS / AÇÃO" },

    // RPG / OPEN WORLD
    { n: "Red Dead Redemption 2", p: "pc", t: "TV", r: "Médio", c: "RPG / OPEN WORLD" },
    { n: "Baldur's Gate 3", p: "pc", t: "Monitor", r: "Médio", c: "RPG / OPEN WORLD" },
    { n: "Horizon Zero Dawn", p: "pc", t: "TV", r: "Médio", c: "RPG / OPEN WORLD" },
    { n: "Mass Effect Legendary Edition", p: "pc", t: "TV", r: "Smooth", c: "RPG / OPEN WORLD" },
    { n: "Fallout 4", p: "pc", t: "Monitor", r: "Smooth", c: "RPG / OPEN WORLD" },

    // CLÁSSICOS (EMU)
    { n: "God of War: Chains of Olympus", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "God of War I", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "God of War: Ghost of Sparta", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "God of War II", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "God of War III", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "Metal Gear Solid 3: Snake Eater", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "Shadow of the Colossus", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "Silent Hill 2", p: "emu", t: "Monitor", r: "Smooth", c: "CLÁSSICOS" },
    { n: "Resident Evil 4 (Original)", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "The legend of Zelda: Ocarina of Time", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "The legend of Zelda: Wind Waker", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "Bully", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },
    { n: "Need for Speed Most Wanted (2005)", p: "emu", t: "TV", r: "Smooth", c: "CLÁSSICOS" },

    // INDIES
    { n: "Vampire Survivors", p: "pc", t: "Monitor", r: "Smooth", c: "INDIES" },
    { n: "Hades", p: "pc", t: "Monitor", r: "Smooth", c: "INDIES" },
    { n: "Katana ZERO", p: "pc", t: "Monitor", r: "Smooth", c: "INDIES" },
    { n: "Outer Wilds", p: "pc", t: "TV", r: "Smooth", c: "INDIES" },
    { n: "DAVE THE DIVER", p: "pc", t: "Monitor", r: "Smooth", c: "INDIES" }
];

function getID(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function render() {
    const listContainer = document.getElementById('game-list');
    if (!listContainer) return;

    const categories = [...new Set(games.map(g => g.c))];
    listContainer.innerHTML = '';

    categories.forEach(cat => {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.innerHTML = `<h2>${cat}</h2>`;

        games.filter(g => g.c === cat).forEach(game => {
            const id = getID(game.n);
            const isDone = localStorage.getItem(id) === 'true';
            
            const item = document.createElement('div');
            item.className = `game-item ${isDone ? 'completed' : ''}`;
            item.id = 'container-' + id;
            item.setAttribute('data-plat', game.p);
            item.setAttribute('data-name', game.n.toLowerCase());
            
            item.innerHTML = `
                <label class="cb-container">
                    ${game.n}
                    <input type="checkbox" id="${id}" ${isDone ? 'checked' : ''} onchange="toggle('${id}')">
                    <span class="checkmark"></span>
                </label>
                <div class="badge-group">
                    <span class="badge">${game.p.toUpperCase()}</span>
                    <span class="badge ${game.r.toLowerCase() === 'smooth' ? 'smooth' : ''}">${game.r}</span>
                    <span class="badge">${game.t}</span>
                </div>
            `;
            section.appendChild(item);
        });
        listContainer.appendChild(section);
    });
    updateStats();
}

function toggle(id) {
    const cb = document.getElementById(id);
    localStorage.setItem(id, cb.checked);
    const item = document.getElementById('container-' + id);
    if(item) item.classList.toggle('completed', cb.checked);
    updateStats();
}

function updateStats() {
    const total = games.length;
    const done = games.filter(g => localStorage.getItem(getID(g.n)) === 'true').length;
    const perc = Math.round((done / total) * 100);
    
    const bar = document.getElementById('total-progress');
    const txt = document.getElementById('progress-text');
    
    if(bar) bar.style.width = perc + '%';
    if(txt) txt.innerText = `${perc}% SYNCED (${done}/${total})`;
}

window.searchGame = function() {
    const term = document.getElementById('search-bar').value.toLowerCase();
    document.querySelectorAll('.game-item').forEach(el => {
        el.style.display = el.getAttribute('data-name').includes(term) ? 'flex' : 'none';
    });
}

window.filterPlatform = function(p) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.innerText.toLowerCase() === p));
    document.querySelectorAll('.game-item').forEach(el => {
        const plat = el.getAttribute('data-plat');
        el.style.display = (p === 'all' || plat === p) ? 'flex' : 'none';
    });
}

// Inicialização segura
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
} else {
    render();
}