/* top menu */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-items a');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    menu.style.transition = 'all 0.1s ease-out';
    menu.style.left = '-500%';
  } else {
    ham.classList.add('active');
    menu.style.transition = 'all 0.3s ease-in';
    menu.style.left = '0';
  }
});

menuItem.forEach((link) => {
  if (ham.classList.contains('active')) {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.left = '-500%';
    });
  } else {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.left = '-500%';
    });
  }
});

/* speakers section */

const speakers = [
  {
    name: 'Bert Blevins',
    picture: './icons/11.jpeg',
    occupation: 'Successful student',
    description: 'Greetings to everyone at Blockchain Council! I recently completed my course on Blockchain from the council. I’m especially impressed with the quality of your content...',
  },
  {
    name: 'Ahmed Yousry AbouElDahab',
    picture: './icons/12.jpeg',
    occupation: 'Succesful student',
    description: 'I have to say that the Blockchain Council has some superb video tutorials on multiple topics which are a need of the hour It is challenging to learn..',
  },
  {
    name: 'Fernando Lombos Fernandez',
    picture: './icons/13.jpeg',
    occupation: 'Succesful student',
    description: 'Blockchain Council has provided me with some of my greatest skill sets. Being a learning manager, often it’s not easy to guide the team on a new concept..',
  },
  {
    name: 'Inger Andersen',
    picture: './icons/14.jpeg',
    occupation: 'Engineering Manager with 13+ years experience...',
    description: 'a succesful lecturer at blockchaincouncil',
  },
  {
    name: 'Bilal Hassan',
    picture: './icons/15.jpeg',
    occupation: ' Lead IT Auditor  United Arab Emirates ',
    description: 'Technology Expert Engineer, and Entrepreneur... ',
  },
  {
    name: 'Charles J Harman II',
    picture: './icons/16.jpeg',
    occupation: 'Business Analyst  USA',
    description: 'Technology professional for the last 18 years...',
  },
];

const section = document.createElement('section');
section.setAttribute('id', 'speakers');
const main = document.querySelector('main');
const divContainer = document.createElement('div');
divContainer.setAttribute('id', 'speaker-container');
const spkHeader = document.createElement('h2');
spkHeader.setAttribute('id', 'about-header1');
spkHeader.innerHTML = 'Featured Speakers';
const span1 = document.createElement('span');
span1.setAttribute('id', 'divider3');

for (let i = 0; i <= speakers.length; i += 1) {
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'name');
  h3.innerHTML += speakers[i].name;
  const p = document.createElement('p');
  p.setAttribute('class', 'occupation');
  p.innerHTML += speakers[i].occupation;
  const img = document.createElement('img');
  img.setAttribute('src', speakers[i].picture);
  img.setAttribute('alt', speakers[i].picture);
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'description');
  p1.innerHTML = speakers[i].description;
  const span = document.createElement('span');
  span.setAttribute('id', 'div1');

  const div = document.createElement('div');
  div.setAttribute('class', 'speaker-details');
  div.append(h3, p, span, p1);
  divContainer.append(img, div);
  section.append(spkHeader, span1, divContainer);
  main.append(section);
}
