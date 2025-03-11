"use strict";

const modalTitle = document.querySelector("form__title");
const modalIdProduct = document.querySelector(".form__ID-product");
const modalBtnClose = document.querySelector(".form__close");
const modalForm = document.querySelector(".form");
const modalCheckbox = document.querySelector(".form__checkbox");
const modalCheckboxInput = document.querySelector(".form__discount-input");
const totalPrice = document.querySelector(".form__total_price");
const table = document.querySelector(".cms__table");
const modalOverlay = document.querySelector(".overlay");
const btnAdd = document.querySelector(".cms__btn-add");
const btnClose = document.querySelector(".form__close");
const footer = document.querySelector(".cms__footer");

const createRow = (obj) => {
  const row = document.createElement("tr");
  row.classList.add("cms__tr");

  const cellClasses = {
    id: "cms__th-one",
    title: "cms__name",
    category: "cms__category",
    units: "cms__module",
    count: "cms__quantity",
    price: "cms__price",
    total: "cms__total",
  };

  const keys = ["id", "title", "category", "units", "count", "price"];
  keys.forEach((key) => {
    const cell = document.createElement("td");
    cell.textContent = obj[key] || "";

    if (cellClasses[key]) {
      cell.classList.add(cellClasses[key]);
    }

    row.append(cell);
  });

  const totalCell = document.createElement("td");
  totalCell.textContent = `$${obj.price * obj.count}`;
  totalCell.classList.add("cms__total");
  row.append(totalCell);

  const iconCell = document.createElement("td");
  iconCell.classList.add("cms__icon");
  iconCell.innerHTML = `
        <div class="cms__icon-picture"></div>
        <div class="cms__icon-redact"></div>
        <div class="cms__icon-delete"></div>
    `;
  row.append(iconCell);

  footer.insertAdjacentElement("beforeBegin", row);
};

const renderGoods = () => {
  goods.map((obj) => {
    createRow(obj);
  });

  btnAdd.addEventListener("click", () => {
    modalOverlay.classList.add("overlay_active");
  });

  modalForm.addEventListener("click", event => {
    event.stopPropagation();
  });

  modalOverlay.addEventListener("click", () => {
    modalOverlay.classList.remove("overlay_active");
  });

  btnClose.addEventListener("click", () => {
    modalOverlay.classList.remove("overlay_active");
  });
};

const goods = [
  {
    id: 253842678,
    title: "Смартфон Xiaomi 11T 8/128GB",
    price: 27000,
    description:
      "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    category: "mobile-phone",
    discont: false,
    count: 3,
    units: "шт",
    images: {
      small: "img/smrtxiaomi11t-m.jpg",
      big: "img/smrtxiaomi11t-b.jpg",
    },
  },
  {
    id: 296378448,
    title: "Радиоуправляемый автомобиль Cheetan",
    price: 4000,
    description:
      "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    category: "toys",
    discont: 5,
    count: 1,
    units: "шт",
    images: {
      small: "img/cheetancar-m.jpg",
      big: "img/cheetancar-b.jpg",
    },
  },
  {
    id: 215796548,
    title: "ТВ приставка MECOOL KI",
    price: 12400,
    description:
      "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    category: "tv-box",
    discont: 15,
    count: 4,
    units: "шт",
    images: {
      small: "img/tvboxmecool-m.jpg",
      big: "img/tvboxmecool-b.jpg",
    },
  },
  {
    id: 246258248,
    title: "Витая пара PROConnect 01-0043-3-25",
    price: 22,
    description:
      "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    category: "cables",
    discont: false,
    count: 420,
    units: "v",
    images: {
      small: "img/lan_proconnect43-3-25.jpg",
      big: "img/lan_proconnect43-3-25-b.jpg",
    },
  },
];

renderGoods(goods);
