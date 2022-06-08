/* <div>
<a href="https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past" target="_blank">
    <img src="./assets/images/map-search.png" alt="Map Search" class="project">
</a>

<h3>Map Search Using APIs</h3>
</div> */

var projectsEl = document.querySelector('#project-section');

var projectArray = [
    {
        href: 'https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past',
        src: './assets/images/map-search.png',
        alt: 'Map Search',
        title: 'Map Search Using APIs',
    },
    {
        href: 'https://github.com/mycancel/password-generator',
        src: './assets/images/password-generator.png',
        alt: 'Password Generator',
        title: 'Password Generator',
    },
]

function init() {
    for (var project of projectArray) {
        var divEl = document.createElement('div');

        var imgEl = document.createElement('img');
        imgEl.src = project.src;
        imgEl.alt = project.alt;
        imgEl.classList = 'project';

        var aEl = document.createElement('a');
        aEl.href = project.href;
        aEl.append(imgEl);
        
        var h3El = document.createElement('h3');
        h3El.textContent = project.title;

        divEl.append(aEl, h3El);
        projectsEl.append(divEl);
    }
}

init()