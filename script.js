// Данные о номинациях и претендентах
const nominations = [
    {
        id: 1,
        title: "Неслэйск Кинг 🤴",
        description: "Выберите Главного короля Твича",
        candidates: [
            { id: 1, name: "JesusAVGN*", description: "Главный Драмаслопер, бурмалда на кик", image: "https://gvakamole.com/v2/files/MYbhdi", twitch: "https://www.twitch.tv/jesusavgn" },
            { id: 2, name: "DeadP47", description: "Ютубер, русофоб, стример", image: "https://i.playground.ru/e/FFuwRuT6cjpmT1PT48zMPQ.png", twitch: "https://www.twitch.tv/deadp47_" },
            { id: 3, name: "Маргинал", description: "Хз но он делал коспл", image: "https://steamuserimages-a.akamaihd.net/ugc/1692773056645524911/78305AA164E2E3166C85FD05F8266D9B0716A971/?imw=512&amp;imh=257&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true", twitch: "https://kick.com/uebmarginal" },
            { id: 4, name: "Хованский", description: "Водолаз", image: "https://avatars.mds.yandex.net/i?id=fb3fade9b87e3cb6b0378409f8a196312d79d150-5734541-images-thumbs&n=13", twitch: "https://kick.com/khovanskytoday" },
            { id: 5, name: "5opka", description: "Главный 42 братуха! Ха-ха-ха!", image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_69146a66b142c63fb3cce51d_69146a66b142c63fb3cce51e/scale_1200", twitch: "https://www.twitch.tv/5opka" },
            { id: 6, name: "kussia88", description: "Каша, это же 88! 88 - мем!", image: "https://i.ytimg.com/vi/JevilT9dMLc/maxresdefault.jpg", twitch: "https://www.twitch.tv/kussia88" }



        ]
    },
    {
        id: 2,
        title: "Неслэйск Кингуха 💁‍♀️",
        description: "Выберите королеву Твича",
        candidates: [
            { id: 1, name: "Алина Ви", description: "Главная роль в драме", image: "https://i.ytimg.com/vi/X_rYxmogrV0/maxresdefault.jpg", twitch: "https://www.twitch.tv/alinaavii" },
            { id: 2, name: "Генсукса", description: "Роль второго плана", image: "https://avatars.mds.yandex.net/i?id=2a0000019a69a2e5d8fa9636f460f2575ac4-1344262-fast-images&n=13", twitch: "https://www.twitch.tv/gensyxa" },
            { id: 3, name: "Какая-то женищна которая с Медом в мафию играла", description: "Комедийная роль", image: "https://i.ytimg.com/vi/ByhRzxg9yAg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgQihKMA8=&amp;rs=AOn4CLDbVSSk2nKsh0EZ1NqSSt-zP-WWGA", youtube: "" },
            { id: 4, name: "Алина Рин", description: "Хз на твиче", image: "https://avatars.mds.yandex.net/i?id=3b4e5cc606f5c42e5af4e56e141c4ee04cc3256a-4888343-images-thumbs&n=13", twitch: "https://www.twitch.tv/alinarinrin" },
            { id: 5, name: "Сонасхека", description: "Гёрла пятерки", image: "https://pic.rutubelist.ru/video/f1/ba/f1ba309ec7a23c1c37728d1fc7ef7e80.jpg", twitch: "https://www.twitch.tv/sonasheka" },
            { id: 6, name: "Лакшери Герл", description: "Включил Стрим! Стоп, ха-ха, я же где то уже её видел? А, точно, она же снималась в п??? ", image: "https://avatars.mds.yandex.net/get-shedevrum/13310193/cropped_original_e16f097d48b911ef8bedc2dc86c35f57/orig", twitch: "https://www.twitch.tv/luxgrl" }
        ]
    },
    {
        id: 3,
        title: "Король Just Chatting 🔊",
        description: "Тот, кто тупа просто пажилой чаттер! Он не Чаттинг, он Джаст-Чаттинг, ха-ха-ха!",
        candidates: [
            { id: 1, name: "JesusAVGN*", description: "Дебютный фильм", image: "https://i.pinimg.com/736x/7e/f9/c7/7ef9c74b482dffc2a41fc612a91d93a5.jpg", twitch: "https://www.twitch.tv/jesusavgn" },
            { id: 2, name: "Хованский", description: "Ветеран кино", image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_678c338dfd59350cc941c4fa_678c3390fd59350cc941c563/scale_1200", twitch: "https://kick.com/khovanskytoday" },
            { id: 3, name: "Мэддисон", description: "Инновационный подход", image: "https://avatars.mds.yandex.net/i?id=e5b5730d9582e29112e8bbbd59206a0b12eafbaf-4902600-images-thumbs&n=13", twitch: "https://www.twitch.tv/honeymad" },
            { id: 4, name: "Зубарев", description: "Ютубер", image: "https://n1s1.hsmedia.ru/a0/84/5a/a0845aee004cfd7964efe4804e225dcd/600x600_1_581d0b9c658640c62c96c3410c184e0c@1000x1000_0xwQK1n2e0_8437800055194759568.png.webp", twitch: "https://www.twitch.tv/zubarefff" },
            { id: 5, name: "Лагода", description: "Стример", image: "https://cdn.gvakfiles.space/v2/files/vgnd3G", twitch: "https://www.twitch.tv/lagoda1337" },
            { id: 6, name: "Мафаня", description: "Стример", image: "https://i.pinimg.com/736x/be/6c/ce/be6cced7ffb171e9b1742589067907be.jpg", twitch: "https://www.twitch.tv/mafanyaking" }
        ]
    },
    {
        id: 4,
        title: "Конфликт Года 💀",
        description: "Выберите лучший сценарий",
        candidates: [
            { id: 1, name: "Драмаслоп с Юзей", description: "Странные действия Юзи", image: "https://avatars.mds.yandex.net/i?id=2a0000019a782722c4214afc7bc61a2f93e6-904041-fast-images&n=13", youtube: "https://www.youtube.com/watch?v=5cG51ILHflE" },
            { id: 2, name: "Серия конфликтов Счастливы Джубами", description: "Противостояние сторон", image: "https://avatars.mds.yandex.net/i?id=78d67a2b3e30254912b6e5768dbb27547ff944d8-5086883-images-thumbs&n=13", youtube: "https://www.youtube.com/playlist?list=PL8dc99DKRhZDamwnDnx6tG3_cJvYs4T7z" },
            { id: 3, name: "Драмаслоп Олеша VS Каша + Мафаня", description: "ОлешаСлопыч", image: "https://cdn.gvakfiles.space/v2/files/T1yIaT", youtube: "https://www.youtube.com/watch?v=HclGX52Z8yc" },
            { id: 4, name: "Замай VS Букер", description: "Замай против Букера из за Наоми", image: "http://avatars.mds.yandex.net/get-vthumb/3802758/4bc3f8969afa6ff4abe9baeeec80d4ec/800x450", youtube: "https://www.youtube.com/watch?v=aBIFTbDHlkk" },
            { id: 5, name: "5opka VS SLAY", description: "Целая организация против стрэмера", image: "https://cdn.gvakfiles.space/v2/files/dYfWFu" },
            { id: 6, name: "Стинт VS Бустеренко", description: "Главарь против блохи стриминга! медиамолекулы!", image: "https://cdn.gvakfiles.space/v2/files/PcccGK", youtube: "https://www.youtube.com/watch?v=fTSEa4KgWcs" }
        ]
    },
    {
        id: 5,
        title: "Трек Года 🎵",
        description: "Выберите лучшую музыку",
        candidates: [
            { id: 1, name: "mafanya & yaicafonk - Гимн Фрикленда", description: "Оригинально и необычно", image: "https://avatars.yandex.net/get-music-content/14662984/8c16f049.a.37696878-1/m1000x1000", youtube: "https://www.youtube.com/watch?v=7D-F73h05Fs" },
            { id: 2, name: "Генсукса - ЧЗБ", description: "Классическая музыка", image: "https://avatars.yandex.net/get-music-content/14304155/afaedfd8.a.37769674-1/m1000x1000", youtube: "https://www.youtube.com/watch?v=uE2fd_zjpCg" },
            { id: 3, name: "sonasheka - Я девочка пикми", description: "Современные ритмы", image: "https://avatars.yandex.net/get-music-content/15317937/11dcd4d5.a.38393719-1/m1000x1000", youtube: "https://www.youtube.com/watch?v=mbHZiaOLJx4" },
            { id: 4, name: "ivanzolo2004 - Вайперр", description: "Иван золо рил вайпер! Или нет?", image: "https://avatars.yandex.net/get-music-content/13043189/f65cfeba.a.38794414-1/m1000x1000", youtube: "https://www.youtube.com/watch?v=qabPo3UHAQM" },
            { id: 5, name: "5opka & Mellsher - Попа XXL", description: "Нудна её попа икс икс эль! Или Ж???", image: "https://avatars.yandex.net/get-music-content/15134515/6fa4448e.a.37445326-1/m1000x1000", youtube: "http://www.youtube.com/watch?v=-j7rTgFoJBA" },
            { id: 6, name: "JesusAVGN & JDFLAG - БLЯ Я В SLOП SИTИ", description: "Утерянная композиция", image: "https://avatars.yandex.net/get-music-content/14304155/d32da6c0.a.38887995-1/m1000x1000", youtube: "http://www.youtube.com/watch?v=ht-7aCqnQ3A" }
        ]
    },
    {
        id: 6,
        title: "Завоз Года 😂",
        description: "Проделал работу и не зря! Ну завоз! W!",
        candidates: [
            { id: 1, name: "Хованский кушает конфетку Риттерспорт (Lost Media) ", description: "Визуальные эффекты", image: "https://avatars.mds.yandex.net/get-shedevrum/11917197/img_66bdf82f179211ef935b0a0d9f74bed2/orig", youtube: "https://www.youtube.com/watch?v=PeWzZWCOilI" },
            { id: 2, name: "Восхождение на какую то гору leva2k (хуня)", description: "Натуральное освещение", image: "https://th-i.thgim.com/public/news/international/cdwnbd/article33595351.ece/alternates/FREE_1200/17THPTIK2", youtube: "https://www.youtube.com/playlist?list=PLTaqF2QEYrDAl6CF1FS6qpj2tjpKnv82d" },
            { id: 3, name: "Даблю Танец сасавота", description: "Инновационные ракурсы", image: "https://media1.tenor.com/m/aRysMyFgU5AAAAAC/sasavot-kishki.gif", youtube: "https://www.youtube.com/watch?v=d6l0B0bEPbo" },
            { id: 4, name: "Война Мафани на Фрикленде", description: "Война", image: "https://avatars.mds.yandex.net/get-vthumb/3039727/1158a489c01a573f6981216e625f4c84/564x318_1", youtube: "http://www.youtube.com/watch?v=5OgEAe5cgKE" },
            { id: 5, name: "Максос - темки со скуфами", description: "Скуфск", image: "https://avatars.mds.yandex.net/i?id=ba57d82b147f17828ecb54498ad7fda26b5e6766-3510839-images-thumbs&n=13", youtube: "http://www.youtube.com/watch?v=FJPa5zay1l0" },
            { id: 6, name: "Маргинал - косплей Фредди Крюгера", description: "Косплау", image: "https://i.ytimg.com/vi/4g2ZzB5WYMI/maxresdefault.jpg", youtube: "https://www.youtube.com/watch?v=VU2sESCbkq0" }
        ]
    },
    {
        id: 7,
        title: "Проект Года ❤️‍🔥",
        description: "Выберите лучший проект! Запомнился в сердцах навсегда!",
        candidates: [
            { id: 1, name: "Фрикленд", description: "Динамичный монтаж", image: "https://avatars.mds.yandex.net/i?id=6ff9c15f0bbc37258b4650e4b880427908a16b3f-5858707-images-thumbs&n=13", youtube: "https://www.youtube.com/playlist?list=PL65-a1i5faGbU8GG1E8H7yQUlODh3kkQY  " },
            { id: 2, name: "Изоляция", description: "Классический стиль", image: "https://yandex-images.clstorage.net/w5Vk6N129/9ce76bLwI/N_6fzW9Hbu2XcSYOs77_B6rkQ96key8gmfZHsQUHA1GKwYiWF1M9ieTXzfh99y53pvHW_kMZIp2ETXSWzIjgcXrmktBeSnqE6jQOU4KO4yO6mW-rhHozUdHaG90Ea0dxqvWQiuLy9FF0Oih0yAuSy8-osvZOJVf0ifzRh6F93ew7ets100_nQYd9q3JzpkOjasFvYnziD4015tp5NEuCvYtIGU5OMhC1LMrU2GA76qsHhLb27tTLRIEEdEMxbcV4I7qHtTcLv_Wr1Ts-N3r3RxJRS7ZYSs8pSTbyUSjDGt0HKI0eQjLM2RT2zACszw7nAyDCfgoc12jtRDy_wfE99B8eC0EzK_uZd83f7s-a5_eyqWPi6HJbJdnOSlW8PxqVX6gJSl7e5MlI0qz4QHP-J8N4TtIWoCMYNRj0i4XVrRQv7o-1u2tvHXsJ715TCoNT4hHTsghuU6mpes792Aei0cOMCVY6CujNOIpc-ExfIrNjmJo6OtwjTMkwJA8xTTFgCw6rmTevt1nzwe_-N4JT27rt77qYrpfJxZ6ejURLxlUfhIUGsrZsHUD6OIg4Ow7LP4w-qvZYOwgBIOBvQU1BuCsWO7H7A8vJP8XXBstijwd-rZM2mDovnd3qUmWk8yK9n6CZwkKSfD1kDrAkOI96f_-8KkI61H8YWUjoAyWR6ZwvljtN_29LdS9RJ6IP8ocP9m1zdrj2p81dfoZ1BPvKuTM8NSIW3qRB8HJMLLgTOjtrTFKOEng_VLnYSK-Jren0Z-Y_kUNvKw2bLdP2syqjW56pX7p4DpuheZaWgVzDCtVHKGFqSiIskdiatOA8g55Tv4A6ppLoP0jBqDArbfnBrPv6HxXHQ0c9t4k_LmduX98WVed6BI77XUFWvnG02651J8TtYpZKvIU4ksAUpEMOV28YTrZi8E-IeZR0V1VNRQinKi8tV1eP-XOlx64HBqMTmoFbxmyOv9k9jv7lsAek", youtube: "https://www.youtube.com/watch?v=i398yiZUJTo" },
            { id: 3, name: "Тюрьма (Футбол) Стинта", description: "Экспериментальный подход", image: "https://ricktube.ru/thumbnail/dszTxt8Mad4/hq720.jpg", youtube: "https://www.youtube.com/watch?v=0B6dJvxaZPg" },
            { id: 4, name: "Ебл*н Хата", description: "Ебл*ны на хате. стрижка", image: "https://i.ytimg.com/vi/4TYrD_yz_J0/maxresdefault.jpg", youtube: "https://www.youtube.com/watch?v=eucVqaj4d38" },
            { id: 5, name: "Мафия Мэддисона", description: "Мафия", image: "https://i.ytimg.com/vi/9ekm_wdXEoA/maxresdefault.jpg", youtube: "http://www.youtube.com/watch?v=fp1L0_L2rhs" },
            { id: 6, name: "Анар и майотик с 163онманек", description: "Лютая трап тусовка", image: "https://avatars.mds.yandex.net/i?id=129c027fb729c25629d946a58d6d69eca0c19d6f-5354397-images-thumbs&n=13", youtube: "https://www.youtube.com/watch?v=E1p1UmdhcIM" }
        ]
    },
    {
        id: 8,
        title: "Прорыв Года ⛏️",
        description: "Разорвали Медиа! Новички ворвались в индустрию!",
        candidates: [
            { id: 1, name: "Ханов", description: "CGI эффекты", image: "https://i.pinimg.com/736x/a2/f5/de/a2f5de92b93da20fc0be7dd5fbd641c1.jpg", twitch: "https://www.twitch.tv/xah0b" },
            { id: 2, name: "Архангел", description: "Практические эффекты", image: "https://yt3.ggpht.com/ytc/AAUvwnhh52rra3KLEDPICMJ9oVustNZXi52ZUTy8YBjB=s900-c-k-c0x00ffffff-no-rj", twitch: "https://www.twitch.tv/archangel_hs" },
            { id: 3, name: "Юзя", description: "Комбинированные эффекты", image: "https://sun9-50.userapi.com/c3EpQNEEJAVkD6YyPf_1b08WNNJmrBMBwbKzSA/xBpPMeQBCWE.jpg", twitch: "https://www.twitch.tv/uzya" },
            { id: 4, name: "Mellsher", description: "Подстилка пятерки. Или самостоятельная личность?", image: "https://avatars.yandex.net/get-music-content/14304155/b3128024.p.13963001/m1000x1000", twitch: "https://www.twitch.tv/mellsher" },
            { id: 5, name: "Замай", description: "Рэпер а теперь и твичер", image: "https://avatars.yandex.net/get-music-content/7548376/1010aa80.p.4594680/m1000x1000?webp=false", twitch: "https://www.twitch.tv/zamay000" },
            { id: 6, name: "Няшненькая Морфилиночка Моя заенька", description: "Или можете сопоставть лакшори герл", image: "https://avatars.mds.yandex.net/i?id=ae0cf1fbc37891c96b8847044858bef9a62e5ab9-4901375-images-thumbs&n=13", twitch: "https://www.twitch.tv/morphilina" }
        ]
    }
];

// Функция для обертки букв в span элементы
function wrapLetters(element) {
    if (!element) return;
    
    const text = element.textContent;
    const wrappedText = text.split('').map((char, index) => {
        // Если это пробел или невидимый символ, оставляем как есть
        if (char.trim() === '') {
            return char;
        }
        // Обертываем каждую букву (и эмодзи) в span
        return `<span class="letter">${char}</span>`;
    }).join('');
    
    element.innerHTML = wrappedText;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderNominations();
    initializeModal();
    loadVotes();
    initializeWButton();
    
    // Обертываем буквы в заголовках header
    const headerTitle = document.querySelector('.header-title');
    const headerSubtitle = document.querySelector('.header-subtitle');
    
    if (headerTitle) {
        wrapLetters(headerTitle);
        initialize3DParallax(headerTitle);
        initializeHeaderClickEffect(headerTitle);
    }
    if (headerSubtitle) {
        wrapLetters(headerSubtitle);
    }
});

// Инициализация 3D паралакс эффекта для заголовка
function initialize3DParallax(element) {
    if (!element) return;
    
    const header = document.querySelector('header');
    if (!header) return;
    
    header.addEventListener('mousemove', function(e) {
        const rect = header.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const maxTilt = 15;
        const tiltX = (mouseY / (rect.height / 2)) * maxTilt;
        const tiltY = (mouseX / (rect.width / 2)) * maxTilt * -1;
        
        const depth = 50;
        const translateZ = Math.min(Math.abs(mouseX) + Math.abs(mouseY), depth) * 0.3;
        
        element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${translateZ}px)`;
    });
    
    header.addEventListener('mouseleave', function() {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
}

// Инициализация эффекта взрыва при клике на заголовок
function initializeHeaderClickEffect(element) {
    if (!element) return;
    
    element.addEventListener('click', function(e) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Создаем частицы взрыва
        createExplosionParticles(centerX, centerY);
        
        // Создаем анимацию (gif)
        createAnimationGif(centerX, centerY);
    });
}

// Создание частиц взрыва
function createExplosionParticles(x, y) {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'explosion-particles';
    particlesContainer.style.left = x + 'px';
    particlesContainer.style.top = y + 'px';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 30;
    const colors = ['#ffd93d', '#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa07a'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (6 + Math.random() * 6) + 'px';
        particle.style.height = particle.style.width;
        
        particlesContainer.appendChild(particle);
    }
    
    // Удаляем контейнер после анимации
    setTimeout(() => {
        particlesContainer.remove();
    }, 800);
}

// Создание анимации (gif) около текста
function createAnimationGif(x, y) {
    // Используем популярный URL для gif анимации или можно заменить на свой
    const gifUrl = 'https://media1.tenor.com/m/5aJlJQ6DJlgAAAAd/ai-slop-tung-tung-sahur.gif';
    
    const gifContainer = document.createElement('img');
    gifContainer.className = 'animation-gif';
    gifContainer.src = gifUrl;
    gifContainer.alt = 'Celebration';
    gifContainer.style.width = '150px';
    gifContainer.style.height = '150px';
    gifContainer.style.left = (x - 75) + 'px';
    gifContainer.style.top = (y - 75) + 'px';
    
    document.body.appendChild(gifContainer);
    
    // Удаляем анимацию через 2 секунды
    setTimeout(() => {
        gifContainer.style.opacity = '0';
        gifContainer.style.transform = 'scale(0) rotate(360deg)';
        setTimeout(() => {
            gifContainer.remove();
        }, 500);
    }, 2000);
}

// Инициализация кнопки W
function initializeWButton() {
    const wButton = document.getElementById('wButton');
    if (wButton) {
        wButton.addEventListener('click', function() {
            // Анимация нажатия
            wButton.classList.add('animate');
            
            // Воспроизведение звука
            const audio = new Audio('https://soundinstants.com/sound/w-sound');
            audio.play().catch(e => {
                console.log('Не удалось воспроизвести звук:', e);
            });
            
            // Удаление класса анимации после завершения
            setTimeout(() => {
                wButton.classList.remove('animate');
            }, 300);
        });
    }
}

// Отображение номинаций
function renderNominations() {
    const grid = document.getElementById('nominationsGrid');
    grid.innerHTML = '';
    
    nominations.forEach(nomination => {
        const card = document.createElement('div');
        card.className = 'nomination-card';
        
        // Проверяем, проголосовал ли пользователь за эту номинацию
        const userVote = getUserVote(nomination.id);
        
        if (userVote) {
            // Находим выбранного кандидата
            const selectedCandidate = nomination.candidates.find(c => c.id === userVote);
            
            if (selectedCandidate && selectedCandidate.image) {
                // Карточка с голосом - показываем имя кандидата и размытое изображение
                card.classList.add('voted-card');
                const imageUrl = selectedCandidate.image;
                card.innerHTML = `
                    <div class="card-blur-bg" style="background-image: url('${imageUrl}');"></div>
                    <div class="card-overlay"></div>
                    <h3>${nomination.title}</h3>
                    <p class="selected-candidate">${selectedCandidate.name}</p>
                `;
            } else {
                // Если кандидат не найден или нет изображения, показываем стандартное
                card.innerHTML = `
                    <h3>${nomination.title}</h3>
                    <p>${selectedCandidate ? selectedCandidate.name : nomination.description}</p>
                `;
            }
        } else {
            // Обычная карточка без голоса
            card.innerHTML = `
                <h3>${nomination.title}</h3>
                <p>${nomination.description}</p>
            `;
        }
        
        card.addEventListener('click', () => openVoteModal(nomination));
        grid.appendChild(card);
    });
}

// Открытие модального окна для голосования
function openVoteModal(nomination) {
    const modal = document.getElementById('voteModal');
    const modalTitle = document.getElementById('modalTitle');
    const candidatesList = document.getElementById('candidatesList');
    const voteResult = document.getElementById('voteResult');
    
    modalTitle.textContent = nomination.title;
    candidatesList.innerHTML = '';
    voteResult.classList.remove('show');
    
    // Получаем текущие голоса для этой номинации
    const votes = getVotes(nomination.id);
    const userVote = getUserVote(nomination.id);
    
    // Показываем плашку с информацией, если пользователь уже проголосовал
    const voteInfoBanner = document.getElementById('voteInfoBanner');
    if (userVote) {
        voteInfoBanner.style.display = 'flex';
    } else {
        voteInfoBanner.style.display = 'none';
    }
    
    nomination.candidates.forEach(candidate => {
        const candidateItem = document.createElement('div');
        candidateItem.className = 'candidate-item';
        
        if (userVote === candidate.id) {
            candidateItem.classList.add('voted');
        } else if (userVote) {
            // Если пользователь уже проголосовал, но не за этого кандидата - делаем карточку неактивной
            candidateItem.classList.add('disabled');
        }
        
        // Формируем HTML с изображением, если оно указано
        const imageHTML = candidate.image ? 
            `<div class="candidate-image" onclick="event.stopPropagation(); openImageModal('${candidate.image.replace(/'/g, "\\'")}', '${candidate.name.replace(/'/g, "\\'")}')">
                <img src="${candidate.image}" alt="${candidate.name}" onerror="this.style.display='none'">
            </div>` : '';
        
        // Формируем HTML для кнопки YouTube, если ссылка указана
        const youtubeButtonHTML = candidate.youtube ? 
            `<a href="${candidate.youtube}" target="_blank" class="youtube-button" onclick="event.stopPropagation();">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            </a>` : '';
        
        // Формируем HTML для кнопки Twitch, если ссылка указана
        const twitchButtonHTML = candidate.twitch ? 
            `<a href="${candidate.twitch}" target="_blank" class="twitch-button" onclick="event.stopPropagation();">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
            </a>` : '';

        
        // Показываем сообщение об успешной отправке и кнопку отмены, если пользователь проголосовал за этого кандидата
        const voteMessageHTML = userVote === candidate.id ? 
            `<div class="vote-success-message">
                <span class="success-icon">🎉</span>
                <span>Вы успешно отправили голос!</span>
                <button class="cancel-vote-button" onclick="event.stopPropagation(); cancelVote(${nomination.id}, ${candidate.id})" title="Отменить голос и переголосовать">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>` : '';
        
        candidateItem.innerHTML = `
            ${imageHTML}
            <div class="candidate-info">
                <div class="candidate-name">${candidate.name}</div>
                <div class="candidate-description">${candidate.description}</div>
            </div>
            <div class="candidate-actions">
                ${voteMessageHTML}
                ${twitchButtonHTML}
                ${youtubeButtonHTML}
            </div>
        `;
        
        candidateItem.addEventListener('click', () => {
            // Если пользователь уже проголосовал блокируем переголосование
            if (userVote && userVote !== candidate.id) {
                return; // Не позволяем переголосовать
            }
            
            // Если пользователь еще не проголосовал или кликает на уже выбранную карточку
            if (!userVote || userVote === candidate.id) {
                if (!userVote) {
                    // Первое голосование
                    voteForCandidate(nomination.id, candidate.id);
                    loadVotes();
                    renderNominations(); // Обновляем карточки номинаций
                    openVoteModal(nomination); // Обновляем модальное окно
                    showVoteResult(candidate.name);
                    createCelebrationEffects();
                }
                // Если уже проголосовал за эту карточку, ничего не делаем
            }
        });
        
        candidatesList.appendChild(candidateItem);
    });
    
    modal.classList.add('show');
}

// Голосование за кандидата
function voteForCandidate(nominationId, candidateId) {
    // Сохраняем голос пользователя
    const userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
    userVotes[nominationId] = candidateId;
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
    
    // Увеличиваем счетчик голосов
    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    if (!votes[nominationId]) {
        votes[nominationId] = {};
    }
    if (!votes[nominationId][candidateId]) {
        votes[nominationId][candidateId] = 0;
    }
    votes[nominationId][candidateId]++;
    localStorage.setItem('votes', JSON.stringify(votes));
}

// Получение голосов для номинации
function getVotes(nominationId) {
    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    return votes[nominationId] || {};
}

// Получение голоса пользователя для номинации
function getUserVote(nominationId) {
    const userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
    return userVotes[nominationId];
}

// Загрузка голосов (для обновления счетчиков)
function loadVotes() {
    // Эта функция может использоваться для обновления счетчиков на карточках номинаций
    // В текущей реализации счетчики обновляются при открытии модального окна
}

// Показ результата голосования
function showVoteResult(candidateName) {
    const voteResult = document.getElementById('voteResult');
    voteResult.innerHTML = `<span class="celebration-emoji">🎉</span> Спасибо! Вы проголосовали за "${candidateName}" <span class="celebration-emoji">🎉</span>`;
    voteResult.classList.add('show');
    
    setTimeout(() => {
        voteResult.classList.remove('show');
    }, 3000);
}

// Создание праздничных эффектов (конфетти)
function createCelebrationEffects() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const modal = document.getElementById('voteModal');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        modal.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Отмена голоса и возможность переголосовать
function cancelVote(nominationId, candidateId) {
    // Удаляем голос пользователя
    const userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
    delete userVotes[nominationId];
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
    
    // Уменьшаем счетчик голосов
    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    if (votes[nominationId] && votes[nominationId][candidateId]) {
        votes[nominationId][candidateId]--;
        if (votes[nominationId][candidateId] <= 0) {
            delete votes[nominationId][candidateId];
        }
        if (Object.keys(votes[nominationId]).length === 0) {
            delete votes[nominationId];
        }
        localStorage.setItem('votes', JSON.stringify(votes));
    }
    
    // Обновляем карточки номинаций
    renderNominations();
    
    // Находим текущую номинацию и обновляем модальное окно
    const currentNomination = nominations.find(n => n.id === nominationId);
    if (currentNomination) {
        openVoteModal(currentNomination);
    }
}

// Инициализация модального окна
function initializeModal() {
    const modal = document.getElementById('voteModal');
    const closeBtn = document.getElementById('closeModal');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Инициализация модального окна для изображений
    const imageModal = document.getElementById('imageModal');
    const imageClose = document.getElementById('imageClose');
    
    imageClose.addEventListener('click', () => {
        imageModal.classList.remove('show');
    });
    
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove('show');
        }
    });
}

// Открытие модального окна с увеличенным изображением
function openImageModal(imageSrc, candidateName) {
    const imageModal = document.getElementById('imageModal');
    const enlargedImage = document.getElementById('enlargedImage');
    
    enlargedImage.src = imageSrc;
    enlargedImage.alt = candidateName;
    imageModal.classList.add('show');
}

