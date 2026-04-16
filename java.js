
/*function showGreeting(event) {
    event.preventDefault();

        const now = new Date();
    const hour = now.getHours();
    let greeting = "";

   
    if (hour < 12) {
        greeting = "Good Morning! ☀️";
    } else if (hour < 18) {
        greeting = "Good Afternoon! 🌤️";
    } else {
        greeting = "Good Evening! 🌙";
    }
    alert(greeting + " Welcome to HandCraft.");
}*/
let cart = [];
let total = 0;

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}
function addToCart(name, price){

cart.push({name,price});

total += price;

displayCart();

}

function displayCart(){

let cartItems = document.querySelector(".cart-items");

cartItems.innerHTML = "";

cart.forEach(item => {

cartItems.innerHTML +=
`<div class="cart-item">
${item.name} - $${item.price}
</div>`;

});

document.getElementById("total").innerText = total;

}

  // Get elements
  const signupModal = document.getElementById('signupModal');
  const closeBtn = document.getElementById('closeBtn');
  const signupLink = document.getElementById('signupLink'); // your SignUp button/link

  // Show modal when clicking SignUp
  signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.add('active');
  });

  // Hide modal when clicking X
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.classList.remove('active');
  });


const cartCount = document.getElementById('cartCount');
const addButtons = document.querySelectorAll('.car');
let count = 0;

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    cartCount.style.display = 'inline'; // show badge once items are added
  });
});


