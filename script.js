const people = document.getElementById('people');
const peopleLess = document.getElementById('people__less');
const peopleMore = document.getElementById('people__more');

let people__index = 4;

peopleLess.addEventListener('click', () => {
  people__index -= 1;

  if(people__index <= 0){
    people__index = 1;
    people.value = people__index + " People";
  }else{
    people.value = people__index + " People";
  }
});

peopleMore.addEventListener('click', () => {
  people__index += 1;

  if(people__index >= 4){
    people__index = 4;
    people.value = people__index + " People";
  }else{
    people.value = people__index + " People";
  }
});




const checkinData = document.getElementById('checkin__data');
const checkin = document.getElementById('checkin');

const checkoutData = document.getElementById('checkout__data');
const checkout = document.getElementById('checkout');


checkin.addEventListener('change', () => {
    let checkin__value = checkin.value;
    //console.log(checkin__value);

    let dates = new Date(checkin__value);
    let dates2 = new Date();
    
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     let day = week[dates.getDay()];
     //console.log(day);

     let date = checkin__value.slice(8,10);
     //console.log(date);
      
     let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     let month = months[dates.getMonth()];
     //console.log(month);

     if(dates < dates2){
        console.log("no date");
     }else{
       checkinData.innerText = day + ', ' + date + ', ' + month;
     }
});

checkout.addEventListener('change', () => {
  let checkout__value = checkout.value;
  let checkin__value = checkin.value;
  //console.log(checkin__value);

  let dates = new Date(checkout__value);
  let dates2 = new Date(checkin__value);
  
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   let day = week[dates.getDay()];
   //console.log(day);

   let date = dates.getDate();
   //console.log(date);
    
   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   let month = months[dates.getMonth()];
   //console.log(month);

   if(dates < dates2){
      console.log("no date");
   }else{
     checkoutData.innerText = day + ', ' + date + ', ' + month;
   }
});



let checkinMore = document.getElementById('checkin__more');
let checkinLess = document.getElementById('checkin__less');
let checkoutLess = document.getElementById('checkout__less');
let checkoutMore = document.getElementById('checkout__more');

checkinMore.addEventListener('click', () => {
   const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

   let today = new Date();
   let tomorrow = new Date(today);
   //console.log(tomorrow.getDate());
   tomorrow.setDate(tomorrow.getDate() + 1);

   let day = week[tomorrow.getDay()];
   let date = tomorrow.getDate();
   let month = months[tomorrow.getMonth()];

   checkinData.innerText = day + ', ' + date + ', ' + month;

});

checkinLess.addEventListener('click', () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let today = new Date();

  let day = week[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];

  checkinData.innerText = day + ', ' + date + ', ' + month;
  
});


checkoutMore.addEventListener('click', () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let today = new Date();
  let tomorrow = new Date(today);
  //console.log(tomorrow.getDate());
  tomorrow.setDate(tomorrow.getDate() + 2);

  let day = week[tomorrow.getDay()];
  let date = tomorrow.getDate();
  let month = months[tomorrow.getMonth()];

  checkoutData.innerText = day + ', ' + date + ', ' + month;

});

checkoutLess.addEventListener('click', () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let today = new Date();
  let tomorrow = new Date(today);
  //console.log(tomorrow.getDate());
  tomorrow.setDate(tomorrow.getDate() + 1);

  let day = week[tomorrow.getDay()];
  let date = tomorrow.getDate();
  let month = months[tomorrow.getMonth()];

  checkoutData.innerText = day + ', ' + date + ', ' + month;

});


const images = [
       "url(img/house__profile.jpg) no-repeat center/cover",
       "url(img/my_home.jpg) no-repeat center/cover",
       "url(img/house_home.jpg) no-repeat center/cover"
];

let index = 1;

let h6 = document.getElementById('h6');

h6.innerText = "+" + images.length;

let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let style = document.getElementsByClassName('header__content')[0].style;
console.log(style);


btnLeft.addEventListener('click', () => {
  index -= 1;
  if(index < 0){
     index = (images.length) - 1;
  }
  style.setProperty('--background', images[index]);
})

btnRight.addEventListener('click', () => {
  index++;
  if(index > (images.length) - 1){
     index = 0;
  }
  style.setProperty('--background', images[index]);
})