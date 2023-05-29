const cards = document.querySelectorAll(".card");
const avatarsDiv = document.querySelector(".avatars");
const categoryDiv = document.querySelector(".categories");
const discoverDiv = document.querySelector(".discoverCards");
const infoDiv = document.querySelector(".infoCards");
const signUpBtn = document.querySelector("#signUp");
const clock = document.querySelectorAll("#highLightM h3");
console.log(clock);
let j = 1;
setInterval(clockCal, 1000);
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
const infoCards = [
  {
    img: "..\\Images\\Trendings\\howItWork1.png",
    head: "Setup Your wallet",
    info: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: "..\\Images\\Trendings\\howItWork2.png",
    head: "Create Collection",
    info: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: "..\\Images\\Trendings\\howItWork3.png",
    head: "Start Earning",
    info: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];
const mediaTablet = window.matchMedia("(max-width: 1050px)");
const mediaPhone = window.matchMedia("(max-width: 690px)");
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
  const a = document.createElement("a");
  a.href = "./artistpage.html";
  div.className = "avatar";
  div.innerHTML = `<p class="number"><span>${j}</span></p><img src="..\\Images\\Avatars\\${avatar}.png" alt="">
  <div class="text"><h5>${avatar}</h5><div><p>Total Sales:</p><p>34.53 ETH</p></div></div>`;
  a.append(div);
  avatarsDiv.append(a);
  j++;
});
const avatarDivAll = document.querySelectorAll(".avatar");
avatarDivAll.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    const img = ".." + avatar.children[1].src.split("0")[4];
    const name = avatar.querySelector("h5").textContent;
    localStorage.setItem(
      "avatar",
      JSON.stringify({
        img: img,
        name: name,
      })
    );
  });
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
infoCards.forEach((data) => {
  const div = document.createElement("div");
  div.className = "infoCard";
  div.innerHTML = `<img src="${data.img}">
  <div class="text"><h5>${data.head}</h5>
  <p>${data.info}</p></div>`;
  infoDiv.append(div);
});

function clockCal() {
  let second = Number(clock[3].textContent);
  let minute = Number(clock[2].textContent);
  let hour = Number(clock[1].textContent);
  second--;
  if (second == 0) {
    minute--;
    second = 59;
  }
  if (minute == 0) {
    hour--;
    minute = 59;
  }
  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  console.log(second);
  clock[6].textContent = second;
  clock[5].textContent = minute;
  clock[4].textContent = hour;
  clock[3].textContent = second;
  clock[2].textContent = minute;
  clock[1].textContent = hour;
}
