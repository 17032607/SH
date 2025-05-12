// База данных десертов
const desserts = [
  {
    id: 1,
    name: "Бенто торт\"Динозаврик\"",
    category: "cakes",
    price: 3200,
    pricePerKg: 1500,
    weight: 2200,
    image: "/cake/бенто/1G945meWcpg.jpg",
    description: {
      biscuit: "Ванильный",
      cream: "Сливочный крем-чиз",
      filling: "Банан, Клубника",
      decoration: "Кремовый рисунок",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 2, 
    name: "Бенто торт \"23 февраля\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "/cake/бенто/pgtrLXhUako.jpg", 
    description: {
      biscuit: "Ванильный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Кремовая надпись",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 3, 
    name: "Бенто торт \"День рождения\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "/cake/бенто/VzuuQqw77jU.jpg", 
    description: {
      biscuit: "Ванильный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Кремовая надпись",
      soaking: "Сахарный сироп"
    }
  },

  {
    id: 4, 
    name: "Торт \"Молния Макуин\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/детские/VBsRNidjE-U.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 5, 
    name: "Торт \"Зайка\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/детские/hkfuVPdY_1Q.jpg", 
    description: {
      biscuit: "Ванильный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Шоколадные фигурки",
      soaking: "Сахарный сироп"
    }
  },{
    id: 6, 
    name: "Торт \"Соник\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/детские/HAJ_cwXyDk0.jpg", 
    description: {
      biscuit: "Банановый",
      cream: "Сливочный крем-чиз",
      filling: "Банан",
      decoration: "Леденцы, сладкая печать",
      soaking: "Сахарный сироп"
    }
  },{
    id: 7, 
    name: "Торт \"Пикачу\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/детские/bcZ3eGAYyK0.jpg", 
    description: {
      biscuit: "Банановый",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Безе, сладкая печать",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 8, 
    name: "Торт \"Майнкрафт\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/детские/iCaZskt2g5M.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 9, 
    name: "Торт \"Динозаврик\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/детские/5kxyMvBKgHk.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 10, 
    name: "Торт \"Игра в кальмара\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/праздник/mffoSOLdNhk.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 11, 
    name: "Торт \"Авангард\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/праздник/KeZWvnK37KM.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 12, 
    name: "Торт \"Денежный\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/праздник/UpVQJcquPEw.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 13, 
    name: "Торт \"Розовый бантик\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/праздник/V9etxf0nmzQ.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 14, 
    name: "Торт \"Двухъярусная мечта\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/праздник/xzvGEa-aelQ.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 15, 
    name: "Торт \"8 марта\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/праздник/eYAl2D7XRYQ.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 16, 
    name: "Торт \"Золотой юбилей\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/день рождения/3Dh-oSJe2Qk.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 17, 
    name: "Торт \"Гендер пати\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/день рождения/5xZuUeI7-jw.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 18, 
    name: "Торт \"Ягодное цунами\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/день рождения/DvXTpxgAR-A.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 19, 
    name: "Торт \"Бантики розовые\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/день рождения/mS9VuIXVCYE.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 20, 
    name: "Торт \"Строгий юбилей\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/день рождения/N2WsweSd8D8.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 21, 
    name: "Торт \"14 лет\"",
    category: "cakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "cake/день рождения/vhlI4hR91AQ.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники, орехи",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 22, 
    name: "Трайфлы \"Нежность\"",
    category: "traifles",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "traifl/1.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Шапочка крем-чиз",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 23, 
    name: "Трайфлы \"Любовь\"",
    category: "traifles",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "traifl/5.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Пряники",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 24, 
    name: "Трайфлы \"Ягодные\"",
    category: "traifles",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "traifl/6.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Ягоды",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 25, 
    name: "Капкейки \"Поздравление\"",
    category: "cupcakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "/cupcake/1.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Ягоды",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 26, 
    name: "Капкейки \"Ягодные\"",
    category: "cupcakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "/cupcake/2.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Ягоды",
      soaking: "Сахарный сироп"
    }
  },
  {
    id: 27, 
    name: "Капкейки \"Детские\"",
    category: "cupcakes",
    price: 4500,
    pricePerKg: 2500,
    weight: 1800,
    image: "/cupcake/cyk7kOBFSX4.jpg", 
    description: {
      biscuit: "Шоколадный",
      cream: "Сливочный крем-чиз",
      filling: "Прослойка из ягод",
      decoration: "Ягоды",
      soaking: "Сахарный сироп"
    }
  },

];

// Массив для хранения заказов
let orders = [];

// Функция для получения десерта по ID
function getDessertById(id) {
  return desserts.find(dessert => dessert.id === id);
}

// Функция для сохранения заказа
function saveOrder(orderData) {
  orders.push(orderData);
  
  // Отправка уведомления на указанный email
  const emailBody = `Новый заказ!\n\nИмя: ${orderData.name}\nТелефон: ${orderData.phone}\nEmail: ${orderData.email}\nДата: ${orderData.date}\nАдрес: ${orderData.location}\nКомментарий: ${orderData.comment}\nДесерт: ${orderData.dessertName}`;
  window.location.href = `mailto:ketrin.alex04@gmail.com?subject=Новый заказ&body=${encodeURIComponent(emailBody)}`;
  
  return true;
}

// Функция для добавления нового десерта (для админки)
function addDessert(dessertData) {
  const newId = Math.max(...desserts.map(d => d.id)) + 1;
  desserts.push({id: newId, ...dessertData});
  return newId;
}

// Экспорт функций и массива desserts
export { getDessertById, saveOrder, addDessert, desserts };