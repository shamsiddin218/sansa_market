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
  const addButtons = document.querySelectorAll(".add img");
  const shop = document.querySelector(".shop");
  const homelogo = document.querySelector(".homelogo");
  const mainImg = document.querySelector(".homeimgbox img");

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
    btn.addEventListener("click", (e) => {
      const clothingCard = e.target.closest(".clothingcard");
      const clothImg = clothingCard.querySelector(".cloth").getAttribute("src");

      // Show selected product in shop image
      if (mainImg) {
        mainImg.setAttribute("src", clothImg);
      }

      // Yashirish
      sectionsToHide.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.add("hidden");
      });
      fifthboparent.style.display = 'none'
      firstboxparent.style.display = 'none'
      homeparent.style.display = 'none'
      secondboxparent.style.display = 'none'
      thirdboxparent.style.display = 'none'
      fourthboxparent.style.display = 'none'
      allClothingParent.style.display = 'none'
      shop.style.display = "flex";
    });
  });

  homelogo.addEventListener("click", () => {
    sectionsToHide.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.classList.remove("hidden");
    });

    shop.style.display = "none";
    shoppingBag.style.display = "none";
    
  });
  
});

// --- Cart funksionalligi ---
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const qtyDisplay = document.querySelector(".butbox h6");
const addToCartBtn = document.querySelector(".addtocard");
const cartIcon = document.querySelector(".savat");
const cartCount = document.querySelector(".likecha");
const cartBadge = document.querySelector(".cart-count");
const shoppingBag = document.querySelector(".shoppingbag");
const leftBox = document.querySelector(".leftbox");
const subtotalEl = document.querySelector(".subtotal p");
const totalEl = document.querySelector(".total p");
const summaryCount = document.querySelector(".content");
const shopping = document.querySelector('.shop');
const mainImg = document.querySelector(".homeimgbox img");

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
    img: mainImg.getAttribute("src"),
    price: 9.50,
    qty: qty
  };

  const existing = cart.find(item => item.title === product.title && item.img === product.img);
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

shoppingBag.style.display = "none";

cartIcon.addEventListener("click", () => {
  if (shoppingBag.style.display === "none") {
    shoppingBag.style.display = "block";
    document.querySelectorAll(".homeparent, .firstboxparent, .secondboxparent, .thirdboxparent, .fourthboxparent, .fifthboxparent, .allclothingparent, .modal").forEach(el => el.style.display = 'none');
    shopping.style.display = 'none';
  } else {
    shoppingBag.style.display = "none";
  }
});

leftBox.addEventListener("click", e => {
  if (e.target.classList.contains("remove")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

window.addEventListener("load", renderCart);

document.addEventListener('DOMContentLoaded', () => {
  const shoppingBag = document.querySelector('.shoppingbag');
  const shoppingBagCard = document.querySelector('.shoppingbagcard');
  const continueBtn = shoppingBag.querySelector('button');
  const continueWithBtn = shoppingBagCard.querySelector('.countinue');
  const logo = document.querySelector('.homelogo')
  const prcode = shoppingBag  .querySelector('.promo')
  // Modal elementlarini olamiz
  const modalbox = document.querySelector('.modal');
  const closeModalBtn = modalbox.querySelector('.close-modal');

  const shoppingBagSummary = shoppingBag.querySelector('.rightbox');
  const shoppingBagCardSummary = shoppingBagCard.querySelector('.rightbox');
  const cardsChildren = shoppingBagCard.querySelectorAll('.cardschild');

  // Summaryni ko‘chirish funksiyasi
  function copySummary() {
    shoppingBagCardSummary.innerHTML = shoppingBagSummary.innerHTML;
  }

  // Radio buttonlar faqat bittasi tanlansin
  cardsChildren.forEach(child => {
    const input = child.querySelector('input[type="radio"]');
    input.name = "payment-method";
    input.addEventListener('change', () => {
      cardsChildren.forEach(c => c.classList.remove('active'));
      if (input.checked) {
        child.classList.add('active');
        const payName = child.querySelector('p').textContent.trim();
        continueWithBtn.textContent = `Continue with ${payName}`;
      }
    });
  });

  // Boshlang'ich tanlov
  if (cardsChildren.length > 0) {
    const firstInput = cardsChildren[0].querySelector('input[type="radio"]');
    firstInput.checked = true;
    cardsChildren[0].classList.add('active');
    const firstPayName = cardsChildren[0].querySelector('p').textContent.trim();
    continueWithBtn.textContent = `Continue with ${firstPayName}`;
  }

  // Continue tugmasi bosilganda
  continueBtn.addEventListener('click', () => {
    copySummary();
    prcode.style.display = 'none'


    shoppingBag.style.display = 'none';
    shoppingBagCard.style.display = 'block';

    // Boshqa sahifalarni yashirish
    fifthboparent.style.display = 'none';
    firstboxparent.style.display = 'none';
    homeparent.style.display = 'none';
    secondboxparent.style.display = 'none';
    thirdboxparent.style.display = 'none';
    fourthboxparent.style.display = 'none';
    allClothingParent.style.display = 'none';
    prcode.style.display = 'none'
  });
  function copySummary() {
    const summaryContent = shoppingBagSummary.cloneNode(true);
    // promo input va statusIconni olib tashlaymiz
    const promo = summaryContent.querySelector('.promo');
    const status = summaryContent.querySelector('.status-icon');
    if (promo) promo.remove();
    if (status) status.remove();

    shoppingBagCardSummary.innerHTML = '';
    shoppingBagCardSummary.appendChild(summaryContent);
}

  logo.addEventListener('click',()=>{
     shoppingBagCard.style.display = 'none';
  })

  // Continue with tugmasi bosilganda modal ko‘rsatilsin
  continueWithBtn.addEventListener('click', () => {
    copySummary();
    modalbox.style.display = 'flex'; // ayno ochiladi
  });

  // Close tugmasi bosilganda modal yopilsin
  closeModalBtn.addEventListener('click', () => {
    modalbox.style.display = 'none';
  });
  
});
const promoInput = document.querySelector('.promo');
    const statusIcon = document.querySelector('.status-icon');

    const subtotalElement = document.querySelector('.subtotal p');
    const totalElement = document.querySelector('.total p');

    let originalPrice = null;

    // Narxni yuklangandan keyin saqlab olish (bir martalik)
    function loadOriginalPrice() {
        const rawText = subtotalElement.textContent.trim();
        const price = parseFloat(rawText);

        if (!isNaN(price)) {
            originalPrice = price;
        }
    }

    loadOriginalPrice(); // Sahifa yuklanganda chaqiramiz

    promoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            // Agar hali narx olinmagan bo‘lsa, qayta olamiz
            if (originalPrice === null) {
                loadOriginalPrice();
            }

            const enteredCode = promoInput.value.trim();

            if (enteredCode === "shamsiddin09") {
                const discountedPrice = (originalPrice * 0.8).toFixed(2); // 20% chegirma

                subtotalElement.textContent = discountedPrice + " USD";
                totalElement.textContent = discountedPrice + " USD";

                statusIcon.textContent = "Sizning kodingiz tug'ri";
                statusIcon.classList.add("success");
                statusIcon.classList.remove("error");
            } else {
                subtotalElement.textContent = originalPrice.toFixed(2) + " USD";
                totalElement.textContent = originalPrice.toFixed(2) + " USD";

                statusIcon.textContent = "Uzr sizga chegirma yo'q";
                statusIcon.classList.add("error");
                statusIcon.classList.remove("success");
            }
        }
    });

    promoInput.addEventListener('input', () => {
        statusIcon.textContent = "";
    });