/* ========= ДАННЫЕ ПО УМОЛЧАНИЮ ========= */
const DEF_SET = { uk: 10, kch: 2, target: 6.0 };
const DEF_PROD = [
  {name:"Хлеб белый",carbs:49,protein:8,fat:3,kcal:265},
  {name:"Хлеб чёрный",carbs:40,protein:7,fat:2,kcal:210},
  {name:"Рис варёный",carbs:25,protein:2.5,fat:0.5,kcal:116},
  {name:"Гречка варёная",carbs:20,protein:4,fat:1,kcal:110},
  {name:"Макароны варёные",carbs:25,protein:5,fat:1,kcal:130},
  {name:"Картофель варёный",carbs:17,protein:2,fat:0.1,kcal:82},
  {name:"Картофель жареный",carbs:30,protein:3,fat:10,kcal:220},
  {name:"Овсянка на воде",carbs:15,protein:3,fat:1.5,kcal:88},
  {name:"Курица отварная",carbs:0,protein:25,fat:7,kcal:165},
  {name:"Курица жареная",carbs:0,protein:27,fat:15,kcal:240},
  {name:"Говядина отварная",carbs:0,protein:26,fat:16,kcal:250},
  {name:"Свинина жареная",carbs:0,protein:22,fat:30,kcal:350},
  {name:"Рыба отварная",carbs:0,protein:20,fat:5,kcal:130},
  {name:"Рыба жареная",carbs:5,protein:20,fat:12,kcal:200},
  {name:"Колбаса варёная",carbs:2,protein:13,fat:22,kcal:260},
  {name:"Сосиски",carbs:2,protein:11,fat:24,kcal:270},
  {name:"Молоко 3.2%",carbs:4.7,protein:3,fat:3.2,kcal:60},
  {name:"Кефир 2.5%",carbs:4,protein:3,fat:2.5,kcal:51},
  {name:"Йогурт натуральный",carbs:5,protein:4,fat:2,kcal:60},
  {name:"Йогурт сладкий",carbs:15,protein:3,fat:2,kcal:100},
  {name:"Творог 5%",carbs:3,protein:17,fat:5,kcal:121},
  {name:"Сыр твёрдый",carbs:0,protein:25,fat:30,kcal:370},
  {name:"Сметана 20%",carbs:3,protein:2.5,fat:20,kcal:206},
  {name:"Огурец",carbs:3,protein:1,fat:0.1,kcal:15},
  {name:"Помидор",carbs:4,protein:1,fat:0.2,kcal:20},
  {name:"Капуста",carbs:5,protein:1.8,fat:0.1,kcal:27},
  {name:"Морковь",carbs:7,protein:1.3,fat:0.1,kcal:35},
  {name:"Свекла",carbs:9,protein:1.5,fat:0.1,kcal:42},
  {name:"Лук",carbs:10,protein:1.4,fat:0.1,kcal:41},
  {name:"Кабачок",carbs:3,protein:0.6,fat:0.3,kcal:24},
  {name:"Перец болгарский",carbs:5,protein:1.3,fat:0.1,kcal:27},
  {name:"Брокколи",carbs:4,protein:3,fat:0.4,kcal:34},
  {name:"Яблоко",carbs:11,protein:0.4,fat:0.4,kcal:52},
  {name:"Груша",carbs:11,protein:0.4,fat:0.3,kcal:57},
  {name:"Банан",carbs:22,protein:1.5,fat:0.2,kcal:96},
  {name:"Апельсин",carbs:9,protein:0.9,fat:0.2,kcal:47},
  {name:"Мандарин",carbs:9,protein:0.8,fat:0.2,kcal:40},
  {name:"Виноград",carbs:16,protein:0.6,fat:0.2,kcal:72},
  {name:"Клубника",carbs:7,protein:0.8,fat:0.4,kcal:33},
  {name:"Малина",carbs:9,protein:0.8,fat:0.5,kcal:46},
  {name:"Черника",carbs:11,protein:1.1,fat:0.4,kcal:44},
  {name:"Арбуз",carbs:8,protein:0.6,fat:0.1,kcal:27},
  {name:"Дыня",carbs:8,protein:0.6,fat:0.3,kcal:35},
  {name:"Персик",carbs:10,protein:0.9,fat:0.3,kcal:46},
  {name:"Сахар",carbs:100,protein:0,fat:0,kcal:400},
  {name:"Мёд",carbs:80,protein:0.3,fat:0,kcal:320},
  {name:"Шоколад молочный",carbs:55,protein:6,fat:30,kcal:550},
  {name:"Шоколад тёмный",carbs:35,protein:8,fat:40,kcal:550},
  {name:"Печенье",carbs:70,protein:6,fat:20,kcal:480},
  {name:"Пирожное",carbs:55,protein:5,fat:25,kcal:450},
  {name:"Мороженое",carbs:30,protein:3.5,fat:12,kcal:220},
  {name:"Кока-кола",carbs:10.6,protein:0,fat:0,kcal:42},
  {name:"Сок апельсиновый",carbs:13,protein:0.7,fat:0.2,kcal:60},
  {name:"Сок яблочный",carbs:11,protein:0.5,fat:0.1,kcal:46},
  {name:"Чай без сахара",carbs:0,protein:0,fat:0,kcal:0},
  {name:"Кофе без сахара",carbs:0,protein:0.2,fat:0,kcal:2},
  {name:"Яйцо куриное",carbs:0.7,protein:13,fat:11,kcal:155},
  {name:"Масло сливочное",carbs:0.8,protein:0.5,fat:82,kcal:748},
  {name:"Масло растительное",carbs:0,protein:0,fat:100,kcal:900},
  {name:"Орехи грецкие",carbs:12,protein:15,fat:65,kcal:650},
  {name:"Миндаль",carbs:13,protein:21,fat:50,kcal:580},
  {name:"Пицца",carbs:30,protein:11,fat:12,kcal:280},
  {name:"Бургер",carbs:30,protein:15,fat:15,kcal:300},
  {name:"Суши ролл",carbs:25,protein:6,fat:5,kcal:180},
  {name:"Пельмени",carbs:28,protein:12,fat:14,kcal:280},
  {name:"Плов",carbs:25,protein:8,fat:10,kcal:220},
  {name:"Борщ",carbs:8,protein:3,fat:4,kcal:80},
  {name:"Суп куриный",carbs:5,protein:4,fat:3,kcal:60},
];
const DEF_INS = [
  {id:"novorapid",name:"Новорапид (быстрый)",start:15,peak:90,end:240},
  {id:"humalog",name:"Хумалог (быстрый)",start:15,peak:75,end:240},
  {id:"apidra",name:"Апидра (быстрый)",start:15,peak:60,end:240},
  {id:"fiasp",name:"Фиасп (быстрый)",start:6,peak:60,end:180},
  {id:"lantus",name:"Лантус (продлённый)",start:60,peak:240,end:1440},
  {id:"levemir",name:"Левемир (продлённый)",start:60,peak:300,end:1440},
  {id:"tresiba",name:"Тресиба (продлённый)",start:60,peak:480,end:2400},
];

/* ========= ХРАНИЛИЩЕ ========= */
const load = (k,f) => { try { const v=localStorage.getItem(k); if(!v) return Array.isArray(f)?[...f]:{...f}; const p=JSON.parse(v); return Array.isArray(f)?(Array.isArray(p)?p:[...f]):{...f,...p}; } catch { return Array.isArray(f)?[...f]:{...f}; } };
let S = {
  settings: load('settings', DEF_SET),
  products: load('products', DEF_PROD),
  insulins: load('insulins', DEF_INS),
  food: load('foodRecords', []),
  ins: load('insulinRecords', []),
  sugar: load('sugarRecords', []),
  curSugar: load('currentSugar', null),
  meal: [],
};
const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));
const persist = () => { save('settings',S.settings); save('products',S.products); save('insulins',S.insulins); save('foodRecords',S.food); save('insulinRecords',S.ins); save('sugarRecords',S.sugar); save('currentSugar',S.curSugar); };

/* ========= УТИЛИТЫ ========= */
const $ = id => document.getElementById(id);
const today = () => new Date().toISOString().slice(0,10);
const nowT = () => new Date().toTimeString().slice(0,5);
const clear = n => { while(n.firstChild) n.removeChild(n.firstChild); };

/* ========= ВКЛАДКИ ========= */
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  $('tab-' + t.dataset.tab).classList.add('active');
}));

$('currentDate').textContent = new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'});

/* ========= САХАР (шаг 1) ========= */
function setCurSugar(v) {
  S.curSugar = { value: parseFloat(v), time: new Date().toISOString() };
  save('currentSugar', S.curSugar);
  $('currentSugarDisplay').textContent = S.curSugar.value.toFixed(1) + ' ммоль/л';
}
if (S.curSugar) $('currentSugarDisplay').textContent = S.curSugar.value.toFixed(1) + ' ммоль/л';

$('sugarQuickForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('sugarQuick').value;
  setCurSugar(v);
  S.sugar.push({id:Date.now(), value:parseFloat(v), context:'Текущий', time:nowT(), date:today()});
  persist(); renderSugar();
  $('sugarQuick').value = '';
  alert('Сахар сохранён: ' + parseFloat(v).toFixed(1));
});

/* ========= СЕЛЕКТЫ ========= */
function fillProductSelect() {
  const s = $('productSelect'); clear(s);
  const o = document.createElement('option'); o.value=''; o.textContent='— Выбери продукт —'; s.appendChild(o);
  [...S.products].sort((a,b)=>a.name.localeCompare(b.name,'ru')).forEach(p => {
    const opt = document.createElement('option'); opt.value=p.name; opt.textContent=p.name; s.appendChild(opt);
  });
}
function fillInsulinSelect() {
  const s = $('insulinType'); clear(s);
  const o = document.createElement('option'); o.value=''; o.textContent='— Выбери инсулин —'; s.appendChild(o);
  S.insulins.forEach(i => { const opt=document.createElement('option'); opt.value=i.id; opt.textContent=i.name; s.appendChild(opt); });
}

/* ========= КОНСТРУКТОР ЕДЫ ========= */
$('addMealItem').addEventListener('click', () => {
  const name = $('productSelect').value;
  const g = parseFloat($('productGrams').value);
  if (!name) return alert('Выбери продукт');
  if (!g || g<=0) return alert('Укажи граммы');
  const p = S.products.find(x => x.name===name);
  if (!p) return alert('Не найден');
  const f = g/100;
  S.meal.push({ id:Date.now(), name:p.name, grams:g, carbs:+(p.carbs*f).toFixed(1), protein:+((p.protein||0)*f).toFixed(1), fat:+((p.fat||0)*f).toFixed(1), kcal:+((p.kcal||0)*f).toFixed(0) });
  $('productGrams').value=''; $('productSelect').value='';
  renderMeal();
});

function renderMeal() {
  const ul = $('mealList'); clear(ul);
  let tc=0,tp=0,tf=0,tk=0;
  S.meal.forEach(it => {
    tc+=it.carbs; tp+=it.protein; tf+=it.fat; tk+=it.kcal;
    const li=document.createElement('li');
    const sp=document.createElement('span'); sp.textContent = `${it.name} — ${it.grams} г (${it.carbs} г угл.)`;
    const b=document.createElement('button'); b.className='del'; b.textContent='×';
    b.onclick = () => { S.meal = S.meal.filter(x=>x.id!==it.id); renderMeal(); };
    li.appendChild(sp); li.appendChild(b); ul.appendChild(li);
  });
  $('mealCarbs').textContent = tc.toFixed(1);
  $('mealProtein').textContent = tp.toFixed(1);
  $('mealFat').textContent = tf.toFixed(1);
  $('mealKcal').textContent = tk.toFixed(0);
}

/* ========= IOB (активный инсулин) ========= */
function calcIOB() {
  const now = Date.now(); let t=0;
  S.ins.forEach(r => {
    if (r.date !== today()) return;
    const ins = S.insulins.find(x => x.id===r.typeId); if (!ins) return;
    const t0 = new Date(r.date+'T'+r.time).getTime();
    const min = (now - t0)/60000;
    if (min<0 || min>=ins.end) return;
    t += r.dose * Math.max(0, 1 - min/ins.end);
  });
  return +t.toFixed(1);
}
function refreshIOB() { $('iobDisplay').textContent = calcIOB().toFixed(1) + ' ЕД'; }

/* ========= КАЛЬКУЛЯТОР ДОЗЫ ========= */
$('calculateBtn').addEventListener('click', () => {
  const {uk,kch,target} = S.settings;
  const mealCarbs = S.meal.reduce((s,i)=>s+i.carbs,0);
  const cur = S.curSugar ? S.curSugar.value : null;
  const iob = calcIOB();
  if (cur === null) return alert('Сначала введи текущий сахар (Шаг 1)');

  const doseFood = mealCarbs / uk;
  const doseCorr = cur > target ? (cur - target)/kch : 0;
  let total = doseFood + doseCorr - iob;
  if (total < 0) total = 0;

  const predicted = +(cur + (doseFood*kch) - ((doseFood+doseCorr)*kch)).toFixed(1);

  const rd = $('calcResult'); rd.style.display='block';
  rd.innerHTML = `
    <h3>🧮 Расчёт дозы</h3>
    <div class="calc-row"><span>Углеводы в еде:</span><b>${mealCarbs.toFixed(1)} г</b></div>
    <div class="calc-row"><span>Текущий сахар:</span><b>${cur.toFixed(1)} ммоль/л</b></div>
    <div class="calc-row"><span>Целевой сахар:</span><b>${target.toFixed(1)} ммоль/л</b></div>
    <div class="calc-row"><span>УК (1 ЕД на … г):</span><b>${uk}</b></div>
    <div class="calc-row"><span>КЧ (1 ЕД снижает на …):</span><b>${kch}</b></div>
    <hr style="margin:10px 0;border:none;border-top:1px dashed #c7d2fe;">
    <div class="calc-row"><span>Доза на еду:</span><b>${doseFood.toFixed(1)} ЕД</b></div>
    <div class="calc-row"><span>Коррекция сахара:</span><b>${doseCorr.toFixed(1)} ЕД</b></div>
    <div class="calc-row"><span>Активный инсулин:</span><b>− ${iob.toFixed(1)} ЕД</b></div>
    <div class="calc-big">
      <span>Рекомендуемая доза</span>
      <span class="dose">${total.toFixed(1)} ЕД</span>
      <span style="font-size:0.85rem;color:#6b7280;">быстрый инсулин</span>
    </div>
    <div class="calc-row" style="margin-top:14px;"><span>Ожидаемый сахар через 2 ч:</span><b>≈ ${predicted.toFixed(1)} ммоль/л</b></div>
    <div class="calc-row"><span>Начало действия:</span><b>через 15 минут</b></div>
    <div class="calc-row"><span>Пик действия:</span><b>≈ 1–1.5 часа</b></div>
    <div class="calc-row"><span>Окончание:</span><b>≈ 4 часа</b></div>
    <div class="calc-warning">⚠️ <b>Это ПОДСКАЗКА, а не приказ.</b> Калькулятор не знает про твою активность, стресс, болезни, алкоголь. Первое время сверяйся с врачом.</div>`;
  rd.scrollIntoView({behavior:'smooth',block:'center'});
});

/* ========= ФОРМА ИНСУЛИНА ========= */
$('insulinForm').addEventListener('submit', e => {
  e.preventDefault();
  const id=$('insulinType').value, d=parseFloat($('insulinDose').value), t=$('insulinTime').value;
  if (!id||!d||!t) return;
  S.ins.push({ id:Date.now(), typeId:id, type:S.insulins.find(x=>x.id===id).name, dose:d, time:t, date:today() });
  persist(); renderAll(); refreshIOB();
  $('insulinDose').value=''; $('insulinTime').value=nowT();
  alert('Укол записан: ' + d + ' ЕД');
});

/* ========= ФОРМА САХАРА (вкладка) ========= */
$('sugarForm').addEventListener('submit', e => {
  e.preventDefault();
  const v=parseFloat($('sugarValue').value), c=$('sugarContext').value, t=$('sugarTime').value;
  if (!v||!t) return;
  S.sugar.push({id:Date.now(), value:v, context:c, time:t, date:today()});
  persist(); setCurSugar(v); renderSugar();
  $('sugarValue').value=''; $('sugarTime').value=nowT();
});

function renderSugar() {
  const ul=$('sugarList'); clear(ul);
  const list = S.sugar.filter(r=>r.date===today()).sort((a,b)=>a.time.localeCompare(b.time));
  if (!list.length) { const li=document.createElement('li'); li.className='empty'; li.textContent='Пока нет замеров'; ul.appendChild(li); return; }
  list.forEach(r => {
    const li=document.createElement('li');
    const sp=document.createElement('span');
    let e='🟢'; if (r.value<3.9) e='🔴'; else if (r.value>10) e='🟡';
    sp.innerHTML = `<b>${r.time}</b> · ${r.context} · ${e} <b>${r.value.toFixed(1)}</b> ммоль/л`;
    const b=document.createElement('button'); b.className='del'; b.textContent='×';
    b.onclick = () => { S.sugar = S.sugar.filter(x=>x.id!==r.id); persist(); renderSugar(); };
    li.appendChild(sp); li.appendChild(b); ul.appendChild(li);
  });
}

/* ========= СПИСКИ ЗАПИСЕЙ ========= */
function renderFood() {
  const ul=$('foodList'); clear(ul);
  const list = S.food.filter(r=>r.date===today()).sort((a,b)=>a.time.localeCompare(b.time));
  if (!list.length) { const li=document.createElement('li'); li.className='empty'; li.textContent='Пока нет записей'; ul.appendChild(li); }
  else list.forEach(r => {
    const li=document.createElement('li');
    const sp=document.createElement('span'); sp.innerHTML = `<b>${r.time}</b> · ${r.name} — ${r.carbs} г`;
    const b=document.createElement('button'); b.className='del'; b.textContent='×';
    b.onclick = () => { S.food = S.food.filter(x=>x.id!==r.id); persist(); renderAll(); };
    li.appendChild(sp); li.appendChild(b); ul.appendChild(li);
  });
  const t = S.food.filter(r=>r.date===today());
  $('totalCarbs').textContent = t.reduce((s,r)=>s+(r.carbs||0),0).toFixed(1);
  $('totalProtein').textContent = t.reduce((s,r)=>s+(r.protein||0),0).toFixed(1);
  $('totalFat').textContent = t.reduce((s,r)=>s+(r.fat||0),0).toFixed(1);
  $('totalKcal').textContent = t.reduce((s,r)=>s+(r.kcal||0),0).toFixed(0);
}

function renderInsulin() {
  const ul=$('insulinList'); clear(ul);
  const list = S.ins.filter(r=>r.date===today()).sort((a,b)=>a.time.localeCompare(b.time));
  if (!list.length) { const li=document.createElement('li'); li.className='empty'; li.textContent='Пока нет записей'; ul.appendChild(li); }
  else list.forEach(r => {
    const li=document.createElement('li');
    const sp=document.createElement('span'); sp.innerHTML = `<b>${r.time}</b> · ${r.type} — ${r.dose} ЕД`;
    const b=document.createElement('button'); b.className='del'; b.textContent='×';
    b.onclick = () => { S.ins = S.ins.filter(x=>x.id!==r.id); persist(); renderAll(); refreshIOB(); };
    li.appendChild(sp); li.appendChild(b); ul.appendChild(li);
  });
  $('totalInsulin').textContent = list.reduce((s,r)=>s+r.dose,0).toFixed(1);
}

/* ========= ПРОДУКТЫ ========= */
$('productForm').addEventListener('submit', e => {
  e.preventDefault();
  const name=$('newProductName').value.trim();
  const carbs=parseFloat($('newProductCarbs').value)||0;
  const protein=parseFloat($('newProductProtein').value)||0;
  const fat=parseFloat($('newProductFat').value)||0;
  const kcal=parseFloat($('newProductKcal').value)||0;
  if (!name) return;
  if (S.products.some(p=>p.name.toLowerCase()===name.toLowerCase())) return alert('Такой продукт уже есть');
  S.products.push({name,carbs,protein,fat,kcal});
  persist(); fillProductSelect(); renderProducts();
  $('productForm').reset();
});

function renderProducts() {
  const ul=$('productsList'); clear(ul);
  const q = ($('productSearch').value||'').trim().toLowerCase();
  const list = S.products.filter(p=>!q||p.name.toLowerCase().includes(q)).sort((a,b)=>a.name.localeCompare(b.name,'ru'));
  $('productsCount').textContent = list.length;
  if (!list.length) { const li=document.createElement('li'); li.className='empty'; li.textContent='Ничего не найдено'; ul.appendChild(li); return; }
  list.forEach(p => {
    const li=document.createElement('li');
    const info=document.createElement('div'); info.className='prod-info';
    const n=document.createElement('span'); n.className='prod-name'; n.textContent=p.name;
    const m=document.createElement('span'); m.className='prod-macros';
    m.textContent = `У:${p.carbs} Б:${p.protein||0} Ж:${p.fat||0} · ${p.kcal||0} ккал (на 100 г)`;
    info.appendChild(n); info.appendChild(m);
    const b=document.createElement('button'); b.className='del'; b.textContent='×';
    b.onclick = () => { if (!confirm('Удалить "'+p.name+'"?')) return; S.products = S.products.filter(x=>x.name!==p.name); persist(); fillProductSelect(); renderProducts(); };
    li.appendChild(info); li.appendChild(b); ul.appendChild(li);
  });
}
$('productSearch').addEventListener('input', renderProducts);

/* ========= ИНСУЛИНЫ (настройка) ========= */
function renderInsulins() {
  const ul=$('insulinsList'); clear(ul);
  S.insulins.forEach(i => {
    const li=document.createElement('li');
    const info=document.createElement('div'); info.className='prod-info';
    const n=document.createElement('span'); n.className='prod-name'; n.textContent=i.name;
    const m=document.createElement('span'); m.className='prod-macros';
    m.textContent = `Начало: ${i.start} мин · Пик: ${i.peak} мин · Конец: ${i.end} мин`;
    info.appendChild(n); info.appendChild(m);
    const b=document.createElement('button'); b.className='del'; b.textContent='×';
    b.onclick = () => { S.insulins = S.insulins.filter(x=>x.id!==i.id); persist(); fillInsulinSelect(); renderInsulins(); };
    li.appendChild(info); li.appendChild(b); ul.appendChild(li);
  });
}

$('insulinAddForm').addEventListener('submit', e => {
  e.preventDefault();
  const name=$('newInsulinName').value.trim();
  const start=parseInt($('newInsulinStart').value)||15;
  const peak=parseInt($('newInsulinPeak').value)||90;
  const end=parseInt($('newInsulinEnd').value)||240;
  if (!name) return;
  S.insulins.push({id:'custom_'+Date.now(), name, start, peak, end});
  persist(); fillInsulinSelect(); renderInsulins();
  $('insulinAddForm').reset();
});

/* ========= НАСТРОЙКИ ========= */
function fillSettings() {
  $('setUK').value = S.settings.uk;
  $('setKCH').value = S.settings.kch;
  $('setTarget').value = S.settings.target;
}
$('settingsForm').addEventListener('submit', e => {
  e.preventDefault();
  S.settings.uk = parseFloat($('setUK').value);
  S.settings.kch = parseFloat($('setKCH').value);
  S.settings.target = parseFloat($('setTarget').value);
  persist();
  alert('Настройки сохранены!');
});

/* ========= ОЧИСТКА ========= */
$('clearAll').addEventListener('click', () => {
  if (!confirm('Удалить ВСЕ данные (продукты, записи, настройки)? Это нельзя отменить!')) return;
  ['settings','products','insulins','foodRecords','insulinRecords','sugarRecords','currentSugar'].forEach(k=>localStorage.removeItem(k));
  location.reload();
});

/* ========= ОБЩИЙ РЕНДЕР ========= */
function renderAll() { renderFood(); renderInsulin(); renderSugar(); }
function init() {
  fillProductSelect(); fillInsulinSelect(); fillSettings();
  renderMeal(); renderAll(); renderProducts(); renderInsulins();
  refreshIOB(); $('insulinTime').value = nowT(); $('sugarTime').value = nowT();
  setInterval(refreshIOB, 60000);
}
init();
