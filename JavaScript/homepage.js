const cards = document.querySelectorAll(".card");
const avatarsDiv = document.querySelector(".avatars");

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
