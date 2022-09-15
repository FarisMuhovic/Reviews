const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const title = document.getElementById("title");
const message = document.getElementById("message");

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

// array of objects
const people = [
  {
    avatar:
      "./Who-is-Andrew-Tate-Ex-Big-Brother-star-videoed-hitting-woman-with-belt-to-fight-Jake-Paul-1.jpg",
    name: "Andrew Tate",
    title: "TOP G",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi unde nostrum commodi ducimus id voluptas maiores dolor eius! Nesciunt ratione necessitatibus dolore dignissimos stop vaping distinctio velit, vape asperiores et.",
  },
  {
    avatar:
      "https://preview.redd.it/g8qohwjos2b81.jpg?width=640&crop=smart&auto=webp&s=9c9e199ae5efafca6a620d4fffc6b4568e31480a",
    name: "Kanye ye",
    title: "Web Developer",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo mollitia iste adipisci repellendus praesentium id eum delectus non temporibus error!",
  },
  {
    avatar:
      "https://i.kym-cdn.com/entries/icons/mobile/000/027/100/_103330503_musk3.jpg",
    name: "ELON MUSK",
    title: "Back end Developer",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo mollitia iste adipisci repellendus praesentium id eum delectus non temporibus error!",
  },
  {
    avatar: "https://m.media-amazon.com/images/I/61540ZYY4PL._AC_SL1500_.jpg",
    name: "John Xina",
    title: "Web Developer",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo mollitia iste adipisci repellendus praesentium id eum delectus non temporibus error!",
  },
  {
    avatar: "https://i.ytimg.com/vi/veKsxin7iRg/sddefault.jpg",
    name: "The Wok",
    title: "Web Developer",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo mollitia iste adipisci repellendus praesentium id eum delectus non temporibus error!",
  },
];

console.log(people);
let counter = 0;
nextBtn.addEventListener("click", function () {
  if (counter < people.length - 1) {
    counter++;
    avatar.src = people[counter].avatar;
    name.innerText = people[counter].name;
    title.innerText = people[counter].title;
    message.innerText = people[counter].message;
  } else {
    counter = 0;
    avatar.src = people[counter].avatar;
    name.innerText = people[counter].name;
    title.innerText = people[counter].title;
    message.innerText = people[counter].message;
  }
});
backBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = people.length - 1;
    avatar.src = people[counter].avatar;
    name.innerText = people[counter].name;
    title.innerText = people[counter].title;
    message.innerText = people[counter].message;
  } else {
    avatar.src = people[counter].avatar;
    name.innerText = people[counter].name;
    title.innerText = people[counter].title;
    message.innerText = people[counter].message;
  }
});
