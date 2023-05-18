
// let red = document.getElementById('red');
// let black = document.getElementById('black');
// let orange = document.getElementById('orange');
// let btnColor = document.querySelector('.buy-btn');
//   let productImage = document.querySelector('.prodImg');

// red.addEventListener('click', () => {
//   productImage.setAttribute('src', 'https://i.postimg.cc/fb9LsZk2/image2.png');
//   btnColor.style.backgroundColor = '#E6404D';
// });

// orange.addEventListener('click', () => {

//   productImage.setAttribute('src', 'https://i.postimg.cc/J0P7xzdn/image3.png');
//   btnColor.style.backgroundColor = '#FE7427';
// });

// black.addEventListener('click', () => {

//   productImage.setAttribute('src', 'https://i.postimg.cc/m2fSW2Dq/pngwing.png');
//   btnColor.style.backgroundColor = 'black';
// });



let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');
toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});

let searchBar = document.getElementById('search-bar');
let searchIcon = document.getElementById('search-icon');
let searchBox = document.getElementsByTagName('input')[0];

searchBox.addEventListener('focus', () => {
  searchBar.style.width = '100%';
});

searchBox.addEventListener('keydown', () => {
  searchIcon.style.display = 'none';
});

searchBox.addEventListener('blur', () => {
  searchBar.style.width = '150px';
  searchIcon.style.display = 'inline-block';
});







let year = document.getElementById('year');
let dynamicYear = new Date().getFullYear();
year.innerHTML = dynamicYear;

