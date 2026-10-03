let foodRecords = JSON.parse(localStorage.getItem('foodRecords')) || [];
let insulinRecords = JSON.parse(localStorage.getItem('insulinRecords')) || [];

document.getElementById('currentDate').textContent =
  new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });

document.getElementById('foodForm').addEventListener('submit', (e) => {
  e.preventDefault();
  foodRecords.push({
    id: Date.now(),
    name: document.getElementById('foodName').value.trim(),
    carbs: parseFloat(document.getElementById('foodCarbs').value),
    time: document.getElementById('foodTime').value,
    date: new Date().toISOString().slice(0, 10)
  });
  saveAndRender();
  e.target.reset();
});

document.getElementById('insulinForm').addEventListener('submit', (e) => {
  e.preventDefault();
  insulinRecords.push({
    id: Date.now(),
    type: document.getElementById('insulinType').value,
    dose: parseFloat(document.getElementById('insulinDose').value),
    time: document.getElementById('insulinTime').value,
    date: new Date().toISOString().slice(0, 10)
  });
  saveAndRender();
  e.target.reset();
});

function deleteFood(id) {
  foodRecords = foodRecords.filter(r => r.id !== id);
  saveAndRender();
}
function deleteInsulin(id) {
  insulinRecords = insulinRecords.filter(r => r.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('foodRecords', JSON.stringify(foodRecords));
  localStorage.setItem('insulinRecords', JSON.stringify(insulinRecords));
  render();
}

function render() {
  const today = new Date().toISOString().slice(0, 10);
  const foodList = document.getElementById('foodList');
  const insulinList = document.getElementById('insulinList');
  foodList.innerHTML = '';
  insulinList.innerHTML = '';

  const todayFood = foodRecords.filter(r => r.date === today).sort((a,b) => a.time.localeCompare(b.time));
  const todayInsulin = insulinRecords.filter(r => r.date === today).sort((a,b) => a.time.localeCompare(b.time));

  if (todayFood.length === 0) {
    foodList.innerHTML = '<li class="empty">Пока нет записей</li>';
  } else {
    todayFood.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = `<span><b>${r.time}</b> · ${r.name} — ${r.carbs} г</span>`;
      const btn = document.createElement('button');
      btn.className = 'del';
      btn.textContent = '×';
      btn.onclick = () => deleteFood(r.id);
      li.appendChild(btn);
      foodList.appendChild(li);
    });
  }

  if (todayInsulin.length === 0) {
    insulinList.innerHTML = '<li class="empty">Пока нет записей</li>';
  } else {
    todayInsulin.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = `<span><b>${r.time}</b> · ${r.type} — ${r.dose} ЕД</span>`;
      const btn = document.createElement('button');
      btn.className = 'del';
      btn.textContent = '×';
      btn.onclick = () => deleteInsulin(r.id);
      li.appendChild(btn);
      insulinList.appendChild(li);
    });
  }

  const totalCarbs = todayFood.reduce((s, r) => s + r.carbs, 0);
  const totalInsulin = todayInsulin.reduce((s, r) => s + r.dose, 0);
  document.getElementById('totalCarbs').textContent = totalCarbs.toFixed(1) + ' г';
  document.getElementById('totalInsulin').textContent = totalInsulin.toFixed(1) + ' ЕД';
}

render();