const projectsEl = document.querySelector('#project-section');
const modal = document.querySelector('#modal-content');

const projectArray = [
    {
        href: 'https://github.com/ntraugh/flower-shop',
        src: './assets/images/flower-shop.png',
        alt: 'Flower Shop',
        title: 'Flower Ecommerce Site', 
        deployed: 'https://bouquetnow.herokuapp.com/',
        description: 'The Bouquet Now flower shop is an ecommerce website that sells bouquets and arrangements by occasion (birthday, anniversary, congratulations, get well soon, romance, and thanks). This project was created in collaboration with GitHub users grilledcheeseplease, hreichgelt, and ntraugh. Users can make accounts when purchasing their arrangements, edit their carts, purchase the items in their carts, and log back into their accounts when they revisit the site. For this site our team used the following dependencies: React, Concurrently, Stripe payment platform, Apollo, Express, GraphQl, Jsonwebtoken (JWT), Formspree, MongoDb, Mongoose, Compass, Bcrypt and Nodemon.',
        contribution: [
            'Created seeds to populate the page with information',
            'Implemented Stripe checkout (with assistance from code by Anthony Cooper in the UNCC Bootcamp)',
            'Coded dynamically changing cart total in the heading and document titles',
            'Proposed the color pallete for approval',
            'Styled Signup, Login, Cart, and Success pages',
            'Styled the Featured Bouquet Component (with ntraugh)',
            'Assisted team members when they needed feedback or help'
        ]
    },
    {
        href: 'https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past',
        src: './assets/images/map-search.png',
        alt: 'Map Search',
        title: 'Map Search Using APIs',
        deployed: 'https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/',
        description: "This project— created in collaboration with GitHub users hreichgelt and ntraugh— searches for current and historical maps of a queried location using the Leaflet API and the Library of Congress API. Our team also used OpenWeather's Geocoding API to supplement LeafletJS because the current map requires longitude and latitude to display.",
        contribution: [
            'Populated historical map search using the Library of Congress API',
            'Supported Leaflet map with geolocation function returning latitude and longitude',
            'Organized and commented functionality of code',
            'Added Search History select form using Local Storage'
        ]
    },
    {
        href: 'https://github.com/mycancel/password-generator',
        src: './assets/images/password-generator.png',
        alt: 'Password Generator',
        title: 'Password Generator',
        deployed: 'https://mycancel.github.io/password-generator/',
        description: 'The password generator can be used to create a randomized password between 8 and 128 characters. Users can choose character types such as lowercase letters, uppercase letters, numbers, and special characters. When all data is collected from the user, a password is generated in the text box, ready to be copied. This project was created using starter code provided by the UNC Charlotte Bootcamp and Anthony Cooper.',
        contribution: [
            'Created confirmation prompts for each character type',
            'Coded JavaScript to check user input in order to make a collection of accepted characters',
            'Alerted users when errors occur',
            'Randomized accepted characters to create random password'
        ]
    },
    {
        href: 'https://github.com/mycancel/weather-dashboard',
        src: './assets/images/weather-dashboard.png',
        alt: 'Weather Dashboard',
        title: 'Weather Dashboard',
        deployed: 'https://mycancel.github.io/weather-dashboard/',
        description: 'The Weather Dashboard gets current weather and a five day forecast for the searched city using the Open Weather API, Moment.js date formatting, and Bootstrap styling. This application was an independent project to practice fetching from Third-party APIs information and saving search history to Local Storage.',
        contribution: [
            'Presented current and forecasted weather for searched city',
            'Added searched cities to search history list, accessible to be queried again',
            'Styled UV Index depending on whether conditions are favorable, moderate, or severe'
        ]
    },
    {
        href: 'https://github.com/mycancel/trailblazers',
        src: './assets/images/trailblazers.png',
        alt: 'Trailblazers NPS API Search',
        title: 'National Park Search Backend',
        deployed: 'https://intense-fjord-45584.herokuapp.com/',
        description: 'Trailblazers— created in collaboration with GitHub users justinstone2001, grilledcheeseplease, hreichgelt, and ntraugh— is a website to search for national parks according to state and activity using the National Park Service API. If they are logged in, users have the ability to favorite parks in order to see them on their user dashboards. For this site our team used the following dependencies: Axios, Bcrypt, Dotenv, Express, Express-Handlebars, Express-Session, Sequelize, and MySQL2.',
        contribution: [
            "Built Third-Party API requests with Axios for park information",
            "Developed system to favorite parks and add to user information in database",
            "Created dashboard to display favorite parks of logged in user"
        ]
    },
];

function init() {
    for (let project of projectArray) {
        const divEl = document.createElement('div');

        const imgEl = document.createElement('img');
        imgEl.src = project.src;
        imgEl.alt = project.alt;
        imgEl.classList = 'project';
        
        const h3El = document.createElement('h3');
        h3El.textContent = project.title;

        divEl.append(imgEl, h3El);
        projectsEl.append(divEl);
    }
};

init();

projectsEl.addEventListener('click', (event) => {
    const element = event.target;
    if (element.matches('img')) {
        console.log('img')
        // TODO: Create Function to populate information about project and buttons to outside links
    };
})