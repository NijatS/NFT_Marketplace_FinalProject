const cards = document.querySelectorAll(".card");
const avatarsDiv = document.querySelector(".avatars");
const categoryDiv = document.querySelector(".categories");
const discoverDiv = document.querySelector(".discoverCards");
let j = 1;
const cardName = ["DSGN Animals", "Magic Mushrooms", "Disco Machines"];
const cardAvatar = ["MrFox", "Shroomie", "BeKind2Robots"];
const topAvatar = [
  "Keepitreal",
  "DigiLab",
  "GravityOne",
  "Juanie",
  "BlueWhale",
  "MrFox",
  "Shroomie",
  "Robotica",
  "RustyRobot",
  "Animakid",
  "Dotgu",
  "Ghiblier",
];
const categories = [
  "Art",
  "Collectibles",
  "Music",
  "Photography",
  "Video",
  "Utility",
  "Sport",
  "Virtual Worlds",
];
const moreDiscover = [
  {
    img: "..\\Images\\Trendings\\Distant Galaxy.png",
    text: "Distant Galaxy",
    avatar: "..\\Images\\Avatars\\MoonDancer.png",
    avatarText: "MoonDancer",
  },
  {
    img: "..\\Images\\Trendings\\AstroFiction.png",
    text: "AstroFiction",
    avatar: "..\\Images\\Avatars\\Spaceone.png",
    avatarText: "Spaceone",
  },
  {
    img: "..\\Images\\Trendings\\Life On Edena.png",
    text: "Life On Edena",
    avatar: "..\\Images\\Avatars\\NebulaKid.png",
    avatarText: "NebulaKid",
  },
];
cards.forEach((card) => {
  const imgDiv = card.querySelector(".img");
  const infoHead = card.querySelector(".info ");
  for (let i = 3; i > 0; --i) {
    const img = document.createElement("img");
    img.src = `..\\Images\\Trendings\\${j}.${i}.png`;
    imgDiv.prepend(img);
  }
  infoHead.children[0].textContent = cardName[j - 1];
  infoHead.children[1].children[0].src = `..\\Images\\Avatars\\${
    cardAvatar[j - 1]
  }.png`;
  infoHead.children[1].children[1].textContent = cardAvatar[j - 1];
  j++;
});

j = 1;
topAvatar.forEach((avatar) => {
  const div = document.createElement("div");
  div.className = "avatar";
  div.innerHTML = `<p class="number"><span>${j}</span></p><img src="..\\Images\\Avatars\\${avatar}.png" alt="">
  <div class="text"><h5>${avatar}</h5><div><p>Total Sales:</p><p>34.53 ETH</p></div></div>`;
  avatarsDiv.append(div);
  j++;
});

categories.forEach((category) => {
  const div = document.createElement("div");
  div.className = "category";
  div.innerHTML = `<img src="..\\Images\\Categories\\${category}.png" alt="">
  <div class="text">${category}</div>`;
  categoryDiv.append(div);
});
moreDiscover.forEach((data) => {
  const div = document.createElement("div");
  console.log(data.img);
  div.className = "discoverCard";
  div.innerHTML = `<img src="${data.img}">
  <div class="text">
  <div class="top">
    <h5>${data.text}</h5> 
    <div class="info">
        <img src="${data.avatar}">
        <p>${data.avatarText}</p>
    </div>
  </div>
  <div class="bottom">
    <div class="bottom_left">
    <p>Price</p>
    <p>1.63 ETH</p>
    </div>
    <div class="bottom_right">
    <p>Highest Bid</p>
    <p>0.33 wETH</p>
    </div>
  </div>
  </div>`;
  discoverDiv.append(div);
});
