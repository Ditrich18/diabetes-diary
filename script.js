/* ============================================================
   ДНЕВНИК ДИАБЕТИКА — логика приложения
   ============================================================ */

/* ---------- НАСТРОЙКИ ПО УМОЛЧАНИЮ ---------- */
const DEFAULT_SETTINGS = { uk: 10, kch: 2, target: 6.0 };

/* ---------- БАЗА ПРОДУКТОВ (БЖУ на 100 г) ---------- */
const DEFAULT_PRODUCTS = [
  // Хлеб, крупы, макароны
  { name: "Хлеб белый", carbs: 49, protein: 8, fat: 3, kcal: 265 },
  { name: "Хлеб чёрный", carbs: 40, protein: 7, fat: 2, kcal: 210 },
  { name: "Батон", carbs: 51, protein: 8, fat: 2, kcal: 260 },
  { name: "Рис белый варёный", carbs: 25, protein: 2.5, fat: 0.5, kcal: 116 },
  { name: "Рис бурый варёный", carbs: 23, protein: 2.6, fat: 0.9, kcal: 110 },
  { name: "Гречка варёная", carbs: 20, protein: 4, fat: 1, kcal: 110 },
  { name: "Макароны варёные", carbs: 25, protein: 5, fat: 1, kcal: 130 },
  { name: "Картофель варёный", carbs: 17, protein: 2, fat: 0.1, kcal: 82 },
  { name: "Картофель жареный", carbs: 30, protein: 3, fat: 10, kcal: 220 },
  { name: "Овсянка на воде", carbs: 15, protein: 3, fat: 1.5, kcal: 88 },
  { name: "Пшено варёное", carbs: 26, protein: 4.5, fat: 1, kcal: 135 },
  { name: "Перловка варёная", carbs: 22, protein: 3, fat: 0.4, kcal: 106 },

  // Мясо, рыба
  { name: "Курица отварная", carbs: 0, protein: 25, fat: 7, kcal: 165 },
  { name: "Курица жареная", carbs: 0, protein: 27, fat: 15, kcal: 240 },
  { name: "Говядина отварная", carbs: 0, protein: 26, fat: 16, kcal: 250 },
  { name: "Свинина жареная", carbs: 0, protein: 22, fat: 30, kcal: 350 },
  { name: "Рыба отварная", carbs: 0, protein: 20, fat: 5, kcal: 130 },
  { name: "Рыба жареная", carbs: 5, protein: 20, fat: 12, kcal: 200 },
  { name: "Колбаса варёная", carbs: 2, protein: 13, fat: 22, kcal: 260 },
  { name: "Сосиски", carbs: 2, protein: 11, fat: 24, kcal: 270 },

  // Молочные
  { name: "Молоко 3.2%", carbs: 4.7, protein: 3, fat: 3.2, kcal: 60 },
  { name: "Кефир 2.5%", carbs: 4, protein: 3, fat: 2.5, kcal: 51 },
  { name: "Йогурт натуральный", carbs: 5, protein: 4, fat: 2, kcal: 60 },
  { name: "Йогурт сладкий", carbs: 15, protein: 3, fat: 2, kcal: 100 },
  { name: "Творог 5%", carbs: 3, protein: 17, fat: 5, kcal: 121 },
  { name: "Сыр твёрдый", carbs: 0, protein: 25, fat: 30, kcal: 370 },
  { name: "Сметана 20%", carbs: 3, protein: 2.5, fat: 20, kcal: 206 },

  // Овощи
  { name: "Огурец", carbs: 3, protein: 1, fat: 0.1, kcal: 15 },
  { name: "Помидор", carbs: 4, protein: 1, fat: 0.2, kcal: 20 },
  { name: "Капуста", carbs: 5, protein: 1.8, fat: 0.1, kcal: 27 },
  { name: "Морковь", carbs: 7, protein: 1.3, fat: 0.1, kcal: 35 },
  { name: "Свекла", carbs: 9, protein: 1.5, fat: 0.1, kcal: 42 },
  { name: "Лук", carbs: 10, protein: 1.4, fat: 0.1, kcal: 41 },
  { name: "Кабачок", carbs: 3, protein: 0.6, fat: 0.3, kcal: 24 },
  { name: "Баклажан", carbs: 6, protein: 1.2, fat: 0.1, kcal: 24 },
  { name: "Перец болгарский", carbs: 5, protein: 1.3, fat: 0.1, kcal: 27 },
  { name: "Брокколи", carbs: 4, protein: 3, fat: 0.4, kcal: 34 },

  // Фрукты и ягоды
  { name: "Яблоко", carbs: 11, protein: 0.4, fat: 0.4, kcal: 52 },
  { name: "Груша", carbs: 11, protein: 0.4, fat: 0.3, kcal: 57 },
  { name: "Банан", carbs: 22, protein: 1.5, fat: 0.2, kcal: 96 },
  { name: "Апельсин", carbs: 9, protein: 0.9, fat: 0.2, kcal: 47 },
  { name: "Мандарин", carbs: 9, protein: 0.8, fat: 0.2, kcal: 40 },
  { name: "Виноград", carbs: 16, protein: 0.6, fat: 0.2, kcal: 72 },
  { name: "Клубника", carbs: 7, protein: 0.8, fat: 0.4, kcal: 33 },
  { name: "Малина", carbs: 9, protein: 0.8, fat: 0.5, kcal: 46 },
  { name: "Черника", carbs: 11, protein: 1.1, fat: 0.4, kcal: 44 },
  { name: "Арбуз", carbs: 8, protein: 0.6, fat: 0.1, kcal: 27 },
  { name: "Дыня", carbs: 8, protein: 0.6, fat: 0.3, kcal: 35 },
  { name: "Персик", carbs: 10, protein: 0.9, fat: 0.3, kcal: 46 },

  // Сладости
  { name: "Сахар", carbs: 100, protein: 0, fat: 0, kcal: 400 },
  { name: "Мёд", carbs: 80, protein: 0.3, fat: 0, kcal: 320 },
  { name: "Шоколад молочный", carbs: 55, protein: 6, fat: 30, kcal: 550 },
  { name: "Шоколад тёмный 70%", carbs: 35, protein: 8, fat: 40, kcal: 550 },
  { name: "Печенье", carbs: 70, protein: 6, fat: 20, kcal: 480 },
  { name: "Пирожное", carbs: 55, protein: 5, fat: 25, kcal: 450 },
  { name: "Мороженое", carbs: 30, protein: 3.5, fat: 12, kcal: 220 },

  // Напитки
  { name: "Кока-кола", carbs: 10.6, protein: 0, fat: 0, kcal: 42 },
  { name: "Сок апельсиновый", carbs: 13, protein: 0.7, fat: 0.2, kcal: 60 },
  { name: "Сок яблочный", carbs: 11, protein: 0.5, fat: 0.1, kcal: 46 },
  { name: "Чай без сахара", carbs: 0, protein: 0, fat: 0, kcal: 0 },
  { name: "Кофе без сахара", carbs: 0, protein: 0.2, fat: 0, kcal: 2 },

  // Прочее
  { name: "Яйцо куриное", carbs: 0.7, protein: 13, fat: 11, kcal: 155 },
  { name: "Масло сливочное", carbs: 0.8, protein: 0.5, fat: 82, kcal: 748 },
  { name: "Масло растительное", carbs: 0, protein: 0, fat: 100, kcal: 900 },
  { name: "Орехи грецкие", carbs: 12, protein: 15, fat: 65, kcal: 650 },
  { name: "Орехи миндаль", carbs: 13, protein: 21, fat: 50, kcal: 580 },
  { name: "Пицца", carbs: 30, protein: 11, fat: 12, kcal: 280 },
  { name: "Бургер", carbs: 30, protein: 15, fat: 15, kcal: 300 },
  { name: "Суши (ролл)", carbs: 25, protein: 6, fat: 5, kcal: 180 },
];

/* ---------- БАЗА ИНСУЛИНОВ (минуты действия) ---------- */
const DEFAULT_INSULINS = [
  { id: "novorapid",  name: "Новорапид (быстрый)",  start: 15, peak: 90,  end: 240 },
  { id: "humalog",    name: "Хумалог (быстрый)",    start: 15, peak: 75,  end: 240 },
  { id: "apidra",     name: "Апидра (быстрый)",     start: 15, peak: 60,  end: 240 },
  { id: "fiasp",      name: "Фиасп (быстрый)",      start: 6,  peak: 60,  end: 180 },
  { id: "lantus",     name: "Лантус (продлённый)",  start: 60, peak: 240, end: 1440 },
  { id: "levemir",    name: "Левемир (продлённый)", start: 60, peak: 300, end: 1440 },
  { id: "tresiba",    name: "Тресиба (продлённый)", start: 60, peak: 480, end: 2400 },
  { id: "tujeo",      name: "Туджео (продлённый)",  start: 60, peak: 300, end: 1440 },
];

/* ============================================================
   ХРАНИЛИЩЕ
   ============================================================ */
let state = {
  settings: load('settings', DEFAULT_SETTINGS),
  products: load('products', DEFAULT_PRODUCTS),
  insulins: load('insulins', DEFAULT_INSULINS),
  foodRecords: load('foodRecords', []),
  insulinRecords: load('insulinRecords', []),
  sugarRecords: load('sugarRecords', []),
  currentSugar: load('currentSugar', null),
  mealItems: [],
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return Array.isArray(fallback) ? [...fallback] : { ...fallback };
    const parsed = JSON.parse(raw);
    return Array.isArray(fallback)
      ? (Array.isArray(parsed) ? parsed : [...fallback])
      : { ...fallback, ...parsed };
  } catch (e) {
    return Array.isArray(fallback) ? [...fallback] : { ...fallback };
  }
}
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function persist() {
  save('settings', state.settings);
  save('products', state.products);
  save('insulins', state.insulins);
  save('foodRecords', state.foodRecords);
  save('insulinRecords', state.insulinRecords);
  save('sugarRecords', state.sugarRecords);
  save('currentSugar', state.currentSugar);
}

/* ============================================================
   УТИЛИТЫ
   ============================================================ */
const todayStr = () => new Date().toISOString().slice(0, 10);
const nowTime = () => new Date().toTimeString().slice(0, 5);

function el(id) { return document.getElementById(id); }
function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

/* ============================================================
   ВКЛАДКИ
   ============================================================ */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    el('tab-' + tab.dataset.tab).classList.add('active');
  });
});

/* ============================================================
   ДАТА В ХЕДЕРЕ
   ============================================================ */
el('currentDate').textContent =
  new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });

/* ============================================================
   ТЕКУЩИЙ САХАР
   ============================================================ */
function setCurrentSugar(value) {
  state.currentSugar = { value: parseFloat(value), time: new Date().toISOString() };
  save('currentSugar', state.currentSugar);
  el('currentSugarDisplay').textContent = state.currentSugar.value.toFixed(1) + ' ммоль/л';
}
function refreshCurrentSugarDisplay() {
  if (state.currentSugar) {
    el('currentSugarDisplay').textContent = state.currentSugar.value.toFixed(1) + ' ммоль/л';
  } else {
    el('currentSugarDisplay').textContent = '— ммоль/л';
  }
}

el('sugarQuickForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const v = el('sugarQuick').value;
  setCurrentSugar(v);
  // также сохраняем в историю сахара
  state.sugarRecords.push({
    id: Date.now(),
    value: parseFloat(v),
    context: 'Текущий',
    time: nowTime(),
    date: todayStr(),
  });
  persist();
  renderSugarList();
  el('sugarQuick').value = '';
  alert('Сахар сохранён: ' + parseFloat(v).toFixed(1) + ' ммоль/л');
});

/* ============================================================
   БАЗА ПРОДУКТОВ — выпадающий список
   ============================================================ */
function fillProductSelect() {
  const sel = el('productSelect');
  clear(sel);
  const opt0 = document.createElement('option');
  opt0.value = '';
  opt0.textContent = '— Выбери продукт —';
  sel.appendChild(opt0);

  const sorted = [...state.products].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  sorted.forEach((p, i) => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = p.name;
    sel.appendChild(opt);
  });
}

function fillInsulinSelect() {
  const sel = el('insulinType');
  clear(sel);
  const opt0 = document.createElement('option');
  opt0.value = '';
  opt0.textContent = '— Выбери инсулин —';
  sel.appendChild(opt0);
  state.insulins.forEach(ins => {
    const opt = document.createElement('option');
    opt.value = ins.id;
    opt.textContent = ins.name;
    sel.appendChild(opt);
  });
}

/* ============================================================
   КОНСТРУКТОР ЕДЫ
   ============================================================ */
el('addMealItem').addEventListener('click', () => {
  const name = el('productSelect').value;
  const grams = parseFloat(el('productGrams').value);
  if (!name) { alert('Выбери продукт'); return; }
  if (!grams || grams <= 0) { alert('Укажи граммы'); return; }

  const product = state.products.find(p => p.name === name);
  if (!product) { alert('Продукт не найден'); return; }

  const factor = grams / 100;
  const item = {
    id: Date.now(),
    name: product.name,
    grams: grams,
    carbs: +(product.carbs * factor).toFixed(1),
    protein: +((product.protein || 0) * factor).toFixed(1),
    fat: +((product.fat || 0) * factor).toFixed(1),
    kcal: +((product.kcal || 0) * factor).toFixed(0),
  };
  state.mealItems.push(item);
  el('productGrams').value = '';
  el('productSelect').value = '';
  renderMealItems();
});

function renderMealItems() {
  const ul = el('mealList');
  clear(ul);
  let tC = 0, tP = 0, tF = 0, tK = 0;

  state.mealItems.forEach(it => {
    tC += it.carbs; tP += it.protein; tF += it.fat; tK += it.kcal;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${it.name} — ${it.grams} г (${it.carbs} г угл.)`;
    const btn = document.createElement('button');
    btn.className = 'del';
    btn.textContent = '×';
    btn.onclick = () => {
      state.mealItems = state.mealItems.filter(x => x.id !== it.id);
      renderMealItems();
    };
    li.appendChild(span); li.appendChild(btn);
    ul.appendChild(li);
  });

  el('mealCarbs').textContent = tC.toFixed(1);
  el('mealProtein').textContent = tP.toFixed(1);
  el('mealFat').textContent = tF.toFixed(1);
  el('mealKcal').textContent = tK.toFixed(0);
}

/* ============================================================
   РАСЧЁТ АКТИВНОГО ИНСУЛИНА (IOB)
   Упрощённая модель: линейное убывание от пика к концу.
   ============================================================ */
function calculateIOB() {
  const now = Date.now();
  let totalIOB = 0;

  state.insulinRecords.forEach(rec => {
    if (rec.date !== todayStr()) return;
    const insulin = state.insulins.find(i => i.id === rec.typeId);
    if (!insulin) return;

    const doseTime = new Date(rec.date + 'T' + rec.time).getTime();
    const minutesPassed = (now - doseTime) / 60000;
    if (minutesPassed < 0) return; // в будущем — игнорируем
    if (minutesPassed >= insulin.end) return; // уже отработал

    // Упрощённо: линейное убывание от конца к пику (в упрощённом виде считаем,
    // что 100% активен в момент укола и 0% к концу действия).
    const remainingFraction = 1 - (minutesPassed / insulin.end);
    totalIOB += rec.dose * Math.max(0, remainingFraction);
  });

  return +totalIOB.toFixed(1);
}

function refreshIOBDisplay() {
  el('iobDisplay').textContent = calculateIOB().toFixed(1) + ' ЕД';
}

/* ============================================================
   КАЛЬКУЛЯТОР ДОЗЫ
   ============================================================ */
el('calculateBtn').addEventListener('click', () => {
  const { uk, kch, target } = state.settings;

  const mealCarbs = state.mealItems.reduce((s, i) => s + i.carbs, 0);
  const currentSugar = state.currentSugar ? state.currentSugar.value : null;
  const iob = calculateIOB();

  if (currentSugar === null) {
    alert('Сначала введи текущий сахар (Шаг 1)');
    return;
  }

  // 1. Доза на еду
  const doseFood = mealCarbs / uk;

  // 2. Коррекция на сахар
  let doseCorrection = 0;
  if (currentSugar > target) {
    doseCorrection = (currentSugar - target) / kch;
  }

  // 3. Вычитаем активный инсулин
  let total = doseFood + doseCorrection - iob;
  if (total < 0) total = 0;

  // 4. Прогноз сахара через 2 часа
  const sugarDropFromDose = (doseFood + doseCorrection) * kch;
  const sugarRiseFromFood = doseFood * kch; // условно: еда поднимает сахар
  const predictedSugar = +(currentSugar + sugarRiseFromFood - sugarDropFromDose).toFixed(1);

  // 5. Показываем
  const resultDiv = el('calcResult');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <h3>🧮 Расчёт дозы</h3>
    <div class="calc-row"><span>Углеводы в еде:</span><b>${mealCarbs.toFixed(1)} г</b></div>
    <div class="calc-row"><span>Текущий сахар:</span><b>${currentSugar.toFixed(1)} ммоль/л</b></div>
    <div class="calc-row"><span>Целевой сахар:</span><b>${target.toFixed(1)} ммоль/л</b></div>
    <div class="calc-row"><span>УК (1 ЕД на … г):</span><b>${uk}</b></div>
    <div class="calc-row"><span>КЧ (1 ЕД снижает на … ммоль):</span><b>${kch}</b></div>
    <hr style="margin:10px 0;border:none;border-top:1px dashed #c7d2fe;">
    <div class="calc-row"><span>Доза на еду:</span><b>${doseFood.toFixed(1)} ЕД</b></div>
    <div class="calc-row"><span>Коррекция сахара:</span><b>${doseCorrection.toFixed(1)} ЕД</b></div>
    <div class="calc-row"><span>Активный инсулин (IOB):</span><b>− ${iob.toFixed(1)} ЕД</b></div>

    <div class="calc-big">
      <span>Рекомендуемая доза</span>
      <span class="dose">${total.toFixed(1)} ЕД</span>
      <span style="font-size:0.85rem;color:#6b7280;">Новорапид или другой быстрый</span>
    </div>

    <div class="calc-row" style="margin-top:14px;"><span>Ожидаемый сахар через 2 ч:</span><b>≈ ${predictedSugar.toFixed(1)} ммоль/л</b></div>
    <div class="calc-row"><span>Начало действия:</span><b>через 15 минут</b></div>
    <div class="calc-row"><span>Пик действия:</span><b>≈ 1–1.5 часа</b></div>
    <div class="calc-row"><span>Окончание:</span><b>≈ 4 часа</b></div>

    <div class="calc-warning">
      ⚠️ <b>Это ПОДСКАЗКА, а не приказ.</b> Калькулятор не знает про твою активность,
      стресс, болезни, алкоголь и другие факторы. Первое время сверяйся с врачом.
      Никогда не укол больше, чем рекомендовано при сомнениях — лучше потом добавить.
    </div>
  `;

  // прокрутка к результату
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

/* ============================================================
   ФОРМА ИНСУЛИНА (на вкладке Калькулятор)
   ============================================================ */
el('insulinForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const typeId = el('insulinType').value;
  const dose = parseFloat(el('insulinDose').value);
  const time = el('insulinTime').value;
  if (!typeId || !dose || !time) return;

  state.insulinRecords.push({
    id: Date.now(),
    typeId: typeId,
    type: state.insulins.find(i => i.id === typeId).name,
    dose: dose,
    time: time,
    date: todayStr(),
  });
  persist();
  renderAll();
  el('insulinDose').value = '';
  el('insulinTime').value = nowTime();
  refreshIOBDisplay();
  alert('Укол записан: ' + dose + ' ЕД');
});

/* ============================================================
   ФОРМА САХАРА (вкладка Сахар)
   ============================================================ */
el('sugarForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const value = parseFloat(el('sugarValue').value);
  const context = el('sugarContext').value;
  const time = el('sugarTime').value;
  if (!value || !time) return;

  state.sugarRecords.push({
    id: Date.now(),
    value: value,
    context: context,
    time: time,
    date: todayStr(),
  });
  persist();
  setCurrentSugar(value);
  renderSugarList();
  el('sugarValue').value = '';
  el('sugarTime').value = nowTime();
});

function renderSugarList() {
  const ul = el('sugarList');
  clear(ul);
  const today = state.sugarRecords.filter(r => r.date === todayStr())
                                  .sort((a, b) => a.time.localeCompare(b.time));
  if (today.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'Пока нет замеров';
    ul.appendChild(li);
    return;
  }
  today.forEach(r => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    let emoji = '🟢';
    if (r.value < 3.9) emoji = '🔴';
    else if (r.value > 10) emoji = '🟡';
    span.innerHTML = `<b>${r.time}</b> · ${r.context} · ${emoji} <b>${r.value.toFixed(1)}</b> ммоль/л`;
    const btn = document.createElement('button');
    btn.className = 'del';
    btn.textContent = '×';
    btn.onclick = () => {
      state.sugarRecords = state.sugarRecords.filter(x => x.id !== r.id);
      persist();
      renderSugarList();
    };
    li.appendChild(span); li.appendChild(btn);
    ul.appendChild(li);
  });
}

/* ============================================================
   СПИСКИ ЗАПИСЕЙ (вкладка Записи)
   ============================================================ */
function renderFoodList() {
  const ul = el('foodList');
  clear(ul);
  const today = state.foodRecords.filter(r => r.date === todayStr())
                                 .sort((a, b) => a.time.localeCompare(b.time));
  if (today.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'Пока нет записей';
    ul.appendChild(li);
  } else {
    today.forEach(r => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerHTML = `<b>${r.time}</b> · ${r.name} — ${r.carbs} г угл.`;
      const btn = document.createElement('button');
      btn.className = 'del';
      btn.textContent = '×';
      btn.onclick = () => {
        state.foodRecords = state.foodRecords.filter(x => x.id !== r.id);
        persist();
        renderAll();
      };
      li.appendChild(span); li.appendChild(btn);
      ul.appendChild(li);
    });
  }

  const todayFood = state.foodRecords.filter(r => r.date === todayStr());
  const tC = todayFood.reduce((s, r) => s + (r.carbs || 0), 0);
  const tP = todayFood.reduce((s, r) => s + (r.protein || 0), 0);
  const tF = todayFood.reduce((s, r) => s + (r.fat || 0), 0);
  const tK = todayFood.reduce((s, r) => s + (r.kcal || 0), 0);
  el('totalCarbs').textContent = tC.toFixed(1);
  el('totalProtein').textContent = tP.toFixed(1);
  el('totalFat').textContent = tF.toFixed(1);
  el('totalKcal').textContent = tK.toFixed(0);
}

function renderInsulinList() {
  const ul = el('insulinList');
  clear(ul);
  const today = state.insulinRecords.filter(r => r.date === todayStr())
                                    .sort((a, b) => a.time.localeCompare(b.time));
  if (today.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'Пока нет записей';
    ul.appendChild(li);
  } else {
    today.forEach(r => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerHTML = `<b>${r.time}</b> · ${r.type} — ${r.dose} ЕД`;
      const btn = document.createElement('button');
      btn.className = 'del';
      btn.textContent = '×';
      btn.onclick = () => {
        state.insulinRecords = state.insulinRecords.filter(x => x.id !== r.id);
        persist();
        renderAll();
        refreshIOBDisplay();
      };
      li.appendChild(span); li.appendChild(btn);
      ul.appendChild(li);
    });
  }
  const total = today.reduce((s, r) => s + r.dose, 0);
  el('totalInsulin').textContent = total.toFixed(1);
}

/* ============================================================
   УПРАВЛЕНИЕ ПРОДУКТАМИ
   ============================================================ */
el('productForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = el('newProductName').value.trim();
  const carbs = parseFloat(el('newProductCarbs').value) || 0;
  const protein = parseFloat(el('newProductProtein').value) || 0;
  const fat = parseFloat(el('newProductFat').value) || 0;
  const kcal = parseFloat(el('newProductKcal').value) || 0;
  if (!name) return;
  if (state.products.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    alert('Такой продукт уже есть в базе');
    return;
  }
  state.products.push({ name, carbs, protein, fat, kcal });
  persist();
  fillProductSelect();
  renderProductsList();
  el('productForm').reset();
});

function renderProductsList() {
  const ul = el('productsList');
  clear(ul);
  const query = (el('productSearch').value || '').trim().toLowerCase();
  const list = state.products
    .filter(p => !query || p.name.toLowerCase().includes(query))
    .sort((a, b) => a.name.localeCompare(b.name, 'ru'));

  el('productsCount').textContent = list.length;

  if (list.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = 'Ничего не найдено';
    ul.appendChild(li);
    return;
  }

  list.forEach((p, idx) => {
    const li = document.createElement('li');
    const info = document.createElement('div');
    info.className = 'prod-info';
    const name = document.createElement('span');
    name.className = 'prod-name';
    name.textContent = p.name;
    const macros = document.createElement('span');
    macros.className = 'prod-macros';
    macros.textContent = `У: ${p.carbs} · Б: ${p.protein || 0} · Ж: ${p.fat || 0} · ${p.kcal || 0} ккал (на 100 г)`;
    info.appendChild(name); info.appendChild(macros);

    const btn = document.createElement('button');
    btn.className = 'del';
    btn.textContent = '×';
    btn.title = 'Удалить продукт';
    btn.onclick = () => {
      if (!confirm(`Удалить "${p.name}" из базы?`)) return;
      state.products = state.products.filter(x => x.name !== p.name);
      persist();
      fillProductSelect();
      renderProductsList();
    };
    li.appendChild(info); li.appendChild(btn);
    ul.appendChild(li);
  });
}

el('productSearch').addEventListener('input', renderProductsList);

/* ============================================================
   УПРАВЛЕНИЕ ИНСУЛИНАМИ
   ============================================================ */
el('insulinAddForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = el('newInsulinName').value.trim();
  const start = parseInt(el('newInsulinStart').value) || 15;
  const peak = parseInt(el('newInsulinPeak').value
