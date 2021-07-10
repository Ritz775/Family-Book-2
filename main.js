var names = [
  "Ritvik Adusumilli",
  "Praneel Adusumilli",
  "Sirisha Inapuri",
  "Ravi Adusumilli",
  "Me and Praneel",
  "Me and Mom",
  "Me and Dad",
  "Our Family",
];
var images = [
  "me.jpg",
  "brother.jpg",
  "mom.jpg",
  "dad.jpg",
  "me and praneel.jpg",
  "me and mom.jpg",
  "me and daad.jpg",
  "family.jpg",
];
var i = 0;

function nextslide() {
  if (i == 8) {
    i = 0;
  }
  document.getElementById("names").innerHTML = names[i];
  document.getElementById("album").src = images[i];
  i++;
}
