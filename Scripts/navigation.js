// Opretter en variable, som indeholder en template med html tags til min burger-menu

let navTmpl = `
<div class="navigationHandle "><i class='fa-solid fa-bars-staggered'></i></div>
<div class="navigation">
    <div class="menus">
    <div class="navigation-links"></div>
</div>
</div>`

const navContainer = document.querySelector('#nav-container');
navContainer.insertAdjacentHTML('beforeend', navTmpl);



// Opretter et array, som indeholder mine menupunkter, og deres destination

let linksArr = [
    {
        link : '../index.html',
        title : 'Home'
    },
    {
        link : '../pages/bliv-medlem.html',
        title : 'Login'
    },
    {
        link : '../pages/medlem.html',
        title : 'Profil'
    },
    {
        link : '../pages/karakter-side.html',
        title : 'Karakter side'
    },
    {
        link : '../pages/til_forældre.html',
        title : 'Forældreinfo'
    },
    {
        link : '../pages/add-events.html',
        title : 'Tilføj Arrangementer'
    },
    {
        link : '../pages/add-news.html',
        title : 'Tilføj Nyheder'
    },
    {
        link : '../pages/administration.html',
        title : 'Administration'
    },
    {
        link : '../pages/galleri_1.html',
        title : 'Galleri'
    },
    {
        link : '../pages/enkel_nyhed.html',
        title : 'Nyhed'
    },
    {
        link : '../pages/enkel_arrenement.html',
        title : 'Arrangement'
    }
    
]


const linksContainer = document.querySelector('.navigation-links');

linksArr.forEach((linkObj) => {

    linksContainer.insertAdjacentHTML('beforeend', `<a href="${linkObj.link}">${linkObj.title}</a>`);



	// Sørger for at menuen lukker, efter der er blevet trykket på et menupunkt

    linksContainer.addEventListener('click', () => {
        const nav2 = document.querySelector('.navigation');
        nav2.classList.remove('active');
    })
})

const navHandle = document.querySelector('.navigationHandle');
navHandle.addEventListener('click', () => {

    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
})