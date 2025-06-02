const buttons = document.querySelectorAll(".btnscard button");
const filterbutton = document.querySelectorAll(".filterbtn button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active")); // hammasidan `active` olib tashla
    button.classList.add("active"); // faqat bosilganga qo‘sh
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const clothingBtn = document.querySelector(".btnscard button:nth-child(1)");
  const shoesBtn = document.querySelector(".btnscard button:nth-child(2)");
  const clothingParent = document.querySelector(".clothingparent");
  const shoesParent = document.querySelector(".shoesparent");

  // Boshida ikkala blokni ham yashiramiz
  clothingParent.style.display = "none";
  shoesParent.style.display = "none";

  // Foydali funksiya: barcha tugmalardan active klassini olib tashlaydi
  function removeActive() {
    clothingBtn.classList.remove("active");
    shoesBtn.classList.remove("active");
  }

  clothingBtn.addEventListener("click", () => {
    removeActive();
    clothingBtn.classList.add("active");
    clothingParent.style.display = "block";
    shoesParent.style.display = "none";
  });

  shoesBtn.addEventListener("click", () => {
    removeActive();
    shoesBtn.classList.add("active");
    clothingParent.style.display = "none";
    shoesParent.style.display = "block";
  });
});

// DOM elementlarni tanlab olish
const seeMoreBtn = document.querySelector('.seecloth');
const clothingParent = document.querySelector('.clothingparent');
const allClothingParent = document.querySelector('.allclothingparent');
const backBtn = document.querySelector('.homelogo');
const homeparent = document.querySelector('.homeparent')
const firstboxparent = document.querySelector('.firstboxparent')
const secondboxparent = document.querySelector('.secondboxparent')
const thirdboxparent = document.querySelector('.thirdboxparent')
const fourthboxparent = document.querySelector('.fourthboxparent')
const fifthboparent = document.querySelector('.fifthboxparent')

// Dastlab allClothingParent ni yashirish
allClothingParent.style.display = 'none';

// Sahifa yuklanganda localStorage'dan holatni tekshirish
if (localStorage.getItem('allClothingOpen') === 'true') {
  clothingParent.style.display = 'none';
  homeparent.style.display = 'none';
  firstboxparent.style.display = 'none';
  secondboxparent.style.display = 'none';
  thirdboxparent.style.display = 'none';
  fourthboxparent.style.display = 'none';
  fifthboparent.style.display = 'none';
  allClothingParent.style.display = 'block';
}

// "See more +" tugmasi bosilganda
seeMoreBtn.addEventListener('click', () => {
  clothingParent.style.display = 'none';
  homeparent.style.display = 'none';
  firstboxparent.style.display = 'none';
  secondboxparent.style.display = 'none';
  thirdboxparent.style.display = 'none';
  fourthboxparent.style.display = 'none';
  fifthboparent.style.display = 'none';
  allClothingParent.style.display = 'block';
  // Holatni saqlash
  localStorage.setItem('allClothingOpen', 'true');
});

// "Orqaga" tugmasi bosilganda
backBtn.addEventListener('click', () => {
  allClothingParent.style.display = 'none';
  clothingParent.style.display = 'block';
  homeparent.style.display = 'block';
  firstboxparent.style.display = 'block';
  secondboxparent.style.display = 'block';
  thirdboxparent.style.display = 'block';
  fourthboxparent.style.display = 'block';
  fifthboparent.style.display = 'block';
  // Holatni tiklash
  localStorage.setItem('allClothingOpen', 'false');
});
let totalLikes = 0;
const likecha = document.querySelector('.likecha');
likecha.setAttribute('data-count', '0');

const likes = document.querySelectorAll('.like');  // barcha .like larni olamiz

likes.forEach(like => {
  like.addEventListener('click', (e) => {
    e.stopPropagation();

    if (like.classList.contains('liked')) {
      like.classList.remove('liked');
      totalLikes = Math.max(0, totalLikes - 1);
    } else {
      like.classList.add('liked');
      totalLikes++;
    }

    likecha.setAttribute('data-count', totalLikes);
  });
});
let likeBtns = document.querySelectorAll('.like'); // Har bir card ichidagi like

let likedCards = new Set(); // Tanlangan cardlar

likeBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      likedCards.delete(index);
    } else {
      btn.classList.add('active');
      likedCards.add(index);
    }

    likecha.setAttribute('data-count', likedCards.size);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(" .add img");
  const shop = document.querySelector(".shop");
  const homelogo = document.querySelector(".homelogo");

  const sectionsToHide = [
    ".homeparent",
    ".firstboxparent",
    ".secondboxparent",
    ".thirdboxparent",
    ".fourthboxparent",
    ".fifthboxparent",
    ".allclothingparent"
  ];

  addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Yashirish kerak bo'lganlarni yashiramiz
      sectionsToHide.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.add("hidden");
      });
      clothingParent.style.display = 'none';
      homeparent.style.display = 'none';
      firstboxparent.style.display = 'none';
      secondboxparent.style.display = 'none';
      thirdboxparent.style.display = 'none';
      fourthboxparent.style.display = 'none';
      fifthboparent.style.display = 'none';
      allClothingParent.style.display = 'none';
      shop.style.display = 'none'
      // Shop oynasini ko'rsatamiz
      shop.style.display = "flex"; // yoki "block"
    });
  });

  homelogo.addEventListener("click", () => {
    // Hammasini avvalgi holatga qaytaramiz
    sectionsToHide.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.classList.remove("hidden");
    });

    // Shop oynasini yashiramiz
    shop.style.display = "none";
    shoppingBag.style.display = 'none'
  });
});
// JavaScript kodining yangilangan versiyasi:

// --- Elementlarni tanlab olish ---
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const qtyDisplay = document.querySelector(".butbox h6");
const addToCartBtn = document.querySelector(".addtocard");
const cartIcon = document.querySelector(".savat");
const cartCount = document.querySelector(".likecha"); // data-count uchun
const cartBadge = document.querySelector(".cart-count"); // mahsulot soni uchun badge
const shoppingBag = document.querySelector(".shoppingbag");
const leftBox = document.querySelector(".leftbox");
const subtotalEl = document.querySelector(".subtotal p");
const totalEl = document.querySelector(".total p");
const summaryCount = document.querySelector(".content");
const shopping = document.querySelector('.shop')
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateQtyDisplay(qty) {
  qtyDisplay.textContent = qty;
}

function updateCartCount() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  cartCount.setAttribute("data-count", count);
  if (cartBadge) {
    cartBadge.innerText = count;
  }
}

function renderCart() {
  leftBox.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    leftBox.innerHTML = `<p style="padding: 20px; font-size: 18px">Savat bo'sh</p>`;
    subtotalEl.textContent = "0.00 USD";
    totalEl.textContent = "0.00 USD";
    summaryCount.textContent = "(0 items)";
    updateCartCount();
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("article");
    itemDiv.classList.add("leftchilds");
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="">
      <article class="description">
          <h3>${item.title} <span class="narxi">${(item.price * item.qty).toFixed(2)} USD</span></h3>
          <p>${item.desc}</p>
      </article>
      <h6 class="remove" data-index="${index}">Remove</h6>
    `;
    leftBox.appendChild(itemDiv);
    subtotal += item.price * item.qty;
  });

  subtotalEl.textContent = `${subtotal.toFixed(2)} USD`;
  totalEl.textContent = `${subtotal.toFixed(2)} USD`;
  summaryCount.textContent = `(${cart.reduce((acc, item) => acc + item.qty, 0)} items)`;
  updateCartCount();
  localStorage.setItem("cart", JSON.stringify(cart));
}

let qty = 1;
updateQtyDisplay(qty);

plusBtn.addEventListener("click", () => {
  qty++;
  updateQtyDisplay(qty);
});

minusBtn.addEventListener("click", () => {
  if (qty > 1) {
    qty--;
    updateQtyDisplay(qty);
  }
});

addToCartBtn.addEventListener("click", () => {
  const product = {
    title: "Black shirt",
    desc: "Description",
    img: "./img/Shirt mockup concept with plain clothing.png",
    price: 9.50,
    qty: qty
  };

  const existing = cart.find(item => item.title === product.title);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push(product);
  }
  qty = 1;
  updateQtyDisplay(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
});

// Savat oynasini boshida yashirish
shoppingBag.style.display = "none";

// Faqat savat ikonkasini bosganda ochiladi
cartIcon.addEventListener("click", () => {
  
  if (shoppingBag.style.display === "none") {
    shoppingBag.style.display = "block";
    clothingParent.style.display = 'none';
      homeparent.style.display = 'none';
      firstboxparent.style.display = 'none';
      secondboxparent.style.display = 'none';
      thirdboxparent.style.display = 'none';
      fourthboxparent.style.display = 'none';
      fifthboparent.style.display = 'none';
      allClothingParent.style.display = 'none';
      shopping.style.display='none'
  } else {
    shoppingBag.style.display = "none";
  }
});

// Remove tugmasi ishlashi uchun delegation
leftBox.addEventListener("click", e => {
  if (e.target.classList.contains("remove")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

// Sahifa yuklanganda ham cart holatini tiklash
window.addEventListener("load", renderCart);
