// Переключение темы с сохранением в localStorage
const themeBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const mode = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
});

// Добавление карточек "Показать еще"
const movieContainer = document.getElementById('movie-container');
const loadMoreBtn = document.getElementById('load-more');

const extraMovies = [
    { title: "Темный рыцарь", desc: "История противостояния Бэтмена и Джокера." },
    { title: "Матрица", desc: "Реальность — это лишь иллюзия." },
    { title: "Гладиатор", desc: "Генерал, ставший рабом. Раб, ставший гладиатором." }
];

loadMoreBtn.addEventListener('click', () => {
    extraMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-img">🎬</div>
            <h3>${movie.title}</h3>
            <p>${movie.desc}</p>
        `;
        movieContainer.appendChild(card);
    });
    loadMoreBtn.style.display = 'none'; // Скрываем кнопку после нажатия
});

// Обработка формы
const form = document.getElementById('feedback-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('message').value
    };
    console.log("Данные успешно собраны:", data);
    alert("Успешно! Все данные выведены в консоль (F12).");
    form.reset();
});
