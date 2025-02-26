// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.getElementById("dp");
const pname = document.getElementById("name");
const profession = document.getElementById("profession");
const review = document.getElementById("review")
let currentPerson = 0;

document.addEventListener('DOMContentLoaded', function() {
  const value = reviews[currentPerson];
  img.src = value.img;
  pname.textContent = value.name;
  profession.textContent = value.job;
  review.textContent = value.text;

})

function next() {
  if (currentPerson == 4) {
    currentPerson = 0;
  }
  change(currentPerson);
  currentPerson++;
}

function change(person) {
  const item = reviews[person]
  img.src = item.img;
  pname.textContent = item.name;
  review.textContent = item.text;
  profession.textContent = item.job;
}

function prev() {
  if(currentPerson == -1) {
    currentPerson = 0;
  }
  change(currentPerson);
  currentPerson--;
}

function random() {
  currentPerson = Math.floor(Math.random()*reviews.length);
  change(currentPerson)
}