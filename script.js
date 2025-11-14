// Данные о номинациях и претендентах
const nominations = [
    {
        id: 1,
        title: "Неслэйск Кинг 🤴",
        description: "Выберите Главного короля Твича",
        candidates: [
            { id: 1, name: "ДжесусАВГН*", description: "Главный Драмаслопер, бурмалда на кик", image: "https://i.pinimg.com/736x/7e/f9/c7/7ef9c74b482dffc2a41fc612a91d93a5.jpg", youtube: "https://www.youtube.com/@HESUSSTREAM" },
            { id: 2, name: "DeadP47", description: "Ютубер, русофоб, стример", image: "https://i.playground.ru/e/FFuwRuT6cjpmT1PT48zMPQ.png", youtube: "https://www.youtube.com/@DeadP47" },
            { id: 3, name: "Маргинал", description: "Хз но он делал коспл", image: "https://steamuserimages-a.akamaihd.net/ugc/1692773056645524911/78305AA164E2E3166C85FD05F8266D9B0716A971/?imw=512&amp;imh=257&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true", youtube: "https://www.youtube.com/@VideoKykech" },
            { id: 4, name: "Хованский", description: "Водолаз", image: "https://avatars.mds.yandex.net/i?id=fb3fade9b87e3cb6b0378409f8a196312d79d150-5734541-images-thumbs&n=13", youtube: "https://www.youtube.com/channel/UCnQBjLBbZ6TXMwM_D_iaXjQ" },
            { id: 5, name: "5opka", description: "Главный 42 братуха! Ха-ха-ха!", image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_69146a66b142c63fb3cce51d_69146a66b142c63fb3cce51e/scale_1200", youtube: "https://www.youtube.com/channel/UC8m4TCbkXXWOK2d1RSc_Etw" },
            { id: 6, name: "kussia88", description: "Каша, это же 88! 88 - мем!", image: "https://i.ytimg.com/vi/JevilT9dMLc/maxresdefault.jpg", youtube: "https://www.youtube.com/channel/UCq8ja_pFrBWwLyYusElh4xg" }



        ]
    },
    {
        id: 2,
        title: "Неслэйск Кингуха 💁‍♀️",
        description: "Выберите королеву Твича",
        candidates: [
            { id: 1, name: "Алина Ви W", description: "Главная роль в драме", image: "https://i.ytimg.com/vi/X_rYxmogrV0/maxresdefault.jpg", youtube: "https://www.youtube.com/channel/UCV2bFcdMjcFrkOIIpJhtyPw" },
            { id: 2, name: "Генсукса", description: "Роль второго плана", image: "https://avatars.mds.yandex.net/i?id=2a0000019a69a2e5d8fa9636f460f2575ac4-1344262-fast-images&n=13", youtube: "https://www.youtube.com/channel/UCidCStdwfDN-SXXOZUiPhxA" },
            { id: 3, name: "Какая то женищна которая с Медом в мафию играла", description: "Комедийная роль", image: "https://i.ytimg.com/vi/ByhRzxg9yAg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgQihKMA8=&amp;rs=AOn4CLDbVSSk2nKsh0EZ1NqSSt-zP-WWGA", youtube: "" },
            { id: 4, name: "Алина Рин", description: "Хз на твиче", image: "https://avatars.mds.yandex.net/i?id=3b4e5cc606f5c42e5af4e56e141c4ee04cc3256a-4888343-images-thumbs&n=13", youtube: "https://www.youtube.com/channel/UCtqv_K5xr-OSViDaFgsFbPQ" },
            { id: 5, name: "Сонасхека", description: "Гёрла пятерки", image: "https://pic.rutubelist.ru/video/f1/ba/f1ba309ec7a23c1c37728d1fc7ef7e80.jpg", youtube: "https://www.youtube.com/channel/UCTNQBHY6kUKNavKVawuaftQ" },
            { id: 6, name: "Лакшери Герл", description: "Включил Стрим! Стоп, ха-ха, я же где то уже её видел? А, точно, она же снималась в п??? ", image: "https://avatars.mds.yandex.net/get-shedevrum/13310193/cropped_original_e16f097d48b911ef8bedc2dc86c35f57/orig", youtube: "https://www.youtube.com/@LuxuryGirl" }
        ]
    },
    {
        id: 3,
        title: "Лучший в Just Chatting 🔊",
        description: "Тот, кто тупа просто пажилой чаттер! Он не Чаттинг, он Джаст-Чаттинг, ха-ха-ха!",
        candidates: [
            { id: 1, name: "Джесусян*", description: "Дебютный фильм", image: "https://i.pinimg.com/736x/7e/f9/c7/7ef9c74b482dffc2a41fc612a91d93a5.jpg", youtube: "" },
            { id: 2, name: "Хованский", description: "Ветеран кино", image: "https://avatars.mds.yandex.net/i?id=d535c709878d5b631f6d1f6f7bbe460bdec1620b-10638478-images-thumbs&n=13", youtube: "" },
            { id: 3, name: "Мэддисон", description: "Инновационный подход", image: "https://avatars.mds.yandex.net/i?id=e5b5730d9582e29112e8bbbd59206a0b12eafbaf-4902600-images-thumbs&n=13", youtube: "" },
            { id: 4, name: "Игорь Линк", description: "Ютубер", image: "https://images.cybersport.ru/images/og-jpg/plain/d9/d9a51f03bb704c1b8f9eeafcb7c873e8.jpg", youtube: "" },
            { id: 5, name: "Лагода", description: "Стример", image: "https://i.pinimg.com/736x/c9/a9/b9/c9a9b9b92659db01f3bc4fb389fc9ebe.jpg", youtube: "" },
            { id: 6, name: "Мафаня", description: "Стример", image: "https://i.pinimg.com/736x/be/6c/ce/be6cced7ffb171e9b1742589067907be.jpg", youtube: "" }
        ]
    },
    {
        id: 4,
        title: "Конфликт Года 💀",
        description: "Выберите лучший сценарий",
        candidates: [
            { id: 1, name: "Драмаслоп с Юзей", description: "Странные действия Юзи", image: "https://avatars.mds.yandex.net/i?id=2a0000019a782722c4214afc7bc61a2f93e6-904041-fast-images&n=13", youtube: "https://www.youtube.com/watch?v=5cG51ILHflE" },
            { id: 2, name: "Серия конфликтов Счастливы Джубами", description: "Противостояние сторон", image: "https://avatars.mds.yandex.net/i?id=78d67a2b3e30254912b6e5768dbb27547ff944d8-5086883-images-thumbs&n=13", youtube: "https://www.youtube.com/playlist?list=PL8dc99DKRhZDamwnDnx6tG3_cJvYs4T7z" },
            { id: 3, name: "Драмаслоп Олеша VS Каша + Мафаня", description: "ОлешаСлопыч", image: "https://yandex-images.clstorage.net/w5Vk6N129/9ce76bLwI/N_6fzW9Hbu2XcSYOs77_B6rkQ96key8gmfZHsRhTA3zG5MyXV1M03KGT0eEJzyJ68vnbrk8lP8GoUDnO0J2UVX7insheanqc8gAuf-Oe8xOikTbS4ApHMe2fTsE0Hmok5sWZOuKK9F0AelwY8DOOF6-UmvI7fEOwHf0sqzWZWTzv5jMlK8u38b-hL5LLPnPD-pH_Kng2m9XRXurxFNumBVtMXZYibhAF8IbwsMBL7t-DkJpSyuDzuOVY6Dslgc0kL7qzwW-TA90XMWPWF4qXu2q1Kw7Q9j-pAXbC7ZxDxok72A2aIrJ8PcyeKHw0r6LbJ-QStgL839SlEBTLuXlBGIs2R8VP128BD9WzLveaJxuSnX--6GIzOfnOxnlgQ47Ru1xZhs6abGHo_tCQiF9iG39ovqq-CK8M-dggj53poSh7srNND0PrDcvlA7Jn_oNLKi0vXvRqv0lNSm4dWPvKTZ9cReIalmgRsA7QnKSD9rufvFaGwgj78NEIpDsFddUMm5afwcubr4UD5aPW7y4LE9YRJ840rt8lqRoegRSfTpGX0BVqphK4acBqoOjAr47nixjGSkYQvzjBzMRLBQUNLIMGtw1n5z9JB91bKg_y19eWbavOoBaLPd3W9mGse6YRs8zRmoICmE004gzodNs6J7sMLobKVK9gqcSoL9mtKSgDBksJC2eDWZMt_-6f-t9fVo3r7mye271JAubBpJOivS9gMc7O2uTZSB4EaOibfrNLdOKuZhTjgDlkBIPlrUFgcwKXtQsH--3v2atSR96LN5KhJy6UoreZoRISmZxTzsk7NHmSMlI08aDmyOx4PxZnhxzKLvYU__hJHIBnsYUZ_G8iEzEna8vBSzVzhgMiD79uGedSFMJLoWE64nGE926p17hxTlrCIBGokjx0uK8Stx9o2t7uZD9AdVj8XwUBvaC_EiuhM6MPBWfN8-Zr3sMzuqVbOhSGz925enZ1WP_s", youtube: "https://www.youtube.com/watch?v=HclGX52Z8yc" },
            { id: 4, name: "Замай VS Букер", description: "Замай против Букера из за Наоми", image: "http://avatars.mds.yandex.net/get-vthumb/3802758/4bc3f8969afa6ff4abe9baeeec80d4ec/800x450", youtube: "https://www.youtube.com/watch?v=aBIFTbDHlkk" },
            { id: 5, name: "5opka VS SLAY", description: "Целая организация против стрэмера", image: "https://avatars.mds.yandex.net/i?id=829344b17184ad453fdfbc023633b8589430dad7-15286282-images-thumbs&n=13", youtube: "https://yandex-images.clstorage.net/w5Vk6N129/9ce76bLwI/N_6fzW9Hbu2XcSYOs77_B6rkQ96key8gmfZHsEhaR1zSwZSDegsRnK2PwfEtwns7oviC8lckapGpCDnbgIWJJQbj1vwuTnaUl3lveoaO4yO6mW-rqC4nRInrI4BMo_qZFwgpetaq7HFEopCEfINXS4fEdhtaaNeEOQjwxyV9wfCngoddL6s_URe1LyJTdg8LNlVPagweB4FFyp4JiA86ffNQ2YZ6AtwJJGq8gHwjptc3zI6-nvjHnK0QMJulmYWoE64vzWPv4-Xzzb8Gh1Kny5Ipn0IkAo8ZJUb-ndgDOqGfaOWeos4o7WhuGPT0x27LG6DO9mIIW2QhLJQXUZ2l7H9yNymzFwP1Q21HLtPin1-euWf6IJZzGW0efhmMH9aJjzTB_loilB2orkB4WNvSP2t4kj5WTH_0wRxkk6UV5Xj7fvMZA4uTkec9_56DAoNXEsnTfojyS6EpgloZkHsChYtEmQ5aLrjBPA6grLD3rj8_hLru0vjnaLU4hLeJmSGgv_Y7GaPvG0FvZQOii5JDk3KlNy74bgfFrV5SlcDzvgFbPOlqKlrc7URStAggOyone0yqKrKI5xhtGJwnoVWN3C86PyFbE_uds6FD3geS1ysmvUPiEI6_IUXedokEA5oRexgd4oZaaJnwkoQcyPemY2sUwiLe7DuwSRwcJ11R4VyTKqvR_9drlbspgz5Hshujdj3XNgAut8lBcuol5FfWyQeMYR6O2vTZtAZ0ZATfCiMn9FKCckAHsCFUbCOB7eE8657XJatrs7HvQUcSi3LjnxoZPyb0do8JLQb-cawLKkHXpInmQl5kfdzSuAwsX5ojO4wi-vakU5h5yHADBWnNUNuyc8lzv_dNa8m7qksOY__mIf8OBJ6XrY1mEv2k10LRw0SBkrbGpO3YAiB4PK-CU_s0Hr6KnOcc3ZSgMz352Zgfdl8x89-fsadFbxb3ZmO7Yl0nTpCaS6UNfhr9uANk" },
            { id: 6, name: "Стинт VS Бустеренко", description: "Главарь против блохи стриминга! медиамолекулы!", image: "https://i.pinimg.com/originals/62/52/e3/6252e3f3a4c06b34f94f040b46331bed.jpg", youtube: "https://www.youtube.com/watch?v=fTSEa4KgWcs" }
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
            { id: 2, name: "Восхождение на какую то гору лева2к(хуня)", description: "Натуральное освещение", image: "https://th-i.thgim.com/public/news/international/cdwnbd/article33595351.ece/alternates/FREE_1200/17THPTIK2", youtube: "https://www.youtube.com/playlist?list=PLTaqF2QEYrDAl6CF1FS6qpj2tjpKnv82d" },
            { id: 3, name: "Даблю Танец сасавота", description: "Инновационные ракурсы", image: "https://media1.tenor.com/m/aRysMyFgU5AAAAAC/sasavot-kishki.gif", youtube: "https://www.youtube.com/watch?v=d6l0B0bEPbo" },
            { id: 4, name: "Война Мафани на Фрикленде", description: "Война", image: "https://avatars.mds.yandex.net/get-vthumb/3039727/1158a489c01a573f6981216e625f4c84/564x318_1", youtube: "http://www.youtube.com/watch?v=5OgEAe5cgKE" },
            { id: 5, name: "Максос - темки со скуфами", description: "Скуфск", image: "https://avatars.mds.yandex.net/i?id=ba57d82b147f17828ecb54498ad7fda26b5e6766-3510839-images-thumbs&n=13", youtube: "http://www.youtube.com/watch?v=FJPa5zay1l0" },
            { id: 6, name: "УберМаргинал* - косплей фредди крюгера", description: "Косплау", image: "https://i.ytimg.com/vi/4g2ZzB5WYMI/maxresdefault.jpg", youtube: "http://www.youtube.com/watch?v=_mRnGXrbRXM" }
        ]
    },
    {
        id: 7,
        title: "Проект Года ❤️‍🔥",
        description: "Выберите лучший проект! Запомнился навсегда в сердцах!",
        candidates: [
            { id: 1, name: "Фрикленд", description: "Динамичный монтаж", image: "https://avatars.mds.yandex.net/i?id=6ff9c15f0bbc37258b4650e4b880427908a16b3f-5858707-images-thumbs&n=13", youtube: "https://www.youtube.com/playlist?list=PL65-a1i5faGbU8GG1E8H7yQUlODh3kkQY  " },
            { id: 2, name: "Изоляция", description: "Классический стиль", image: "https://yandex-images.clstorage.net/w5Vk6N129/9ce76bLwI/N_6fzW9Hbu2XcSYOs77_B6rkQ96key8gmfZHsQUHA1GKwYiWF1M9ieTXzfh99y53pvHW_kMZIp2ETXSWzIjgcXrmktBeSnqE6jQOU4KO4yO6mW-rhHozUdHaG90Ea0dxqvWQiuLy9FF0Oih0yAuSy8-osvZOJVf0ifzRh6F93ew7ets100_nQYd9q3JzpkOjasFvYnziD4015tp5NEuCvYtIGU5OMhC1LMrU2GA76qsHhLb27tTLRIEEdEMxbcV4I7qHtTcLv_Wr1Ts-N3r3RxJRS7ZYSs8pSTbyUSjDGt0HKI0eQjLM2RT2zACszw7nAyDCfgoc12jtRDy_wfE99B8eC0EzK_uZd83f7s-a5_eyqWPi6HJbJdnOSlW8PxqVX6gJSl7e5MlI0qz4QHP-J8N4TtIWoCMYNRj0i4XVrRQv7o-1u2tvHXsJ715TCoNT4hHTsghuU6mpes792Aei0cOMCVY6CujNOIpc-ExfIrNjmJo6OtwjTMkwJA8xTTFgCw6rmTevt1nzwe_-N4JT27rt77qYrpfJxZ6ejURLxlUfhIUGsrZsHUD6OIg4Ow7LP4w-qvZYOwgBIOBvQU1BuCsWO7H7A8vJP8XXBstijwd-rZM2mDovnd3qUmWk8yK9n6CZwkKSfD1kDrAkOI96f_-8KkI61H8YWUjoAyWR6ZwvljtN_29LdS9RJ6IP8ocP9m1zdrj2p81dfoZ1BPvKuTM8NSIW3qRB8HJMLLgTOjtrTFKOEng_VLnYSK-Jren0Z-Y_kUNvKw2bLdP2syqjW56pX7p4DpuheZaWgVzDCtVHKGFqSiIskdiatOA8g55Tv4A6ppLoP0jBqDArbfnBrPv6HxXHQ0c9t4k_LmduX98WVed6BI77XUFWvnG02651J8TtYpZKvIU4ksAUpEMOV28YTrZi8E-IeZR0V1VNRQinKi8tV1eP-XOlx64HBqMTmoFbxmyOv9k9jv7lsAek", youtube: "https://www.youtube.com/watch?v=i398yiZUJTo" },
            { id: 3, name: "Тюрьма (Футбол) Стинта", description: "Экспериментальный подход", image: "https://ricktube.ru/thumbnail/dszTxt8Mad4/hq720.jpg", youtube: "https://www.youtube.com/watch?v=0B6dJvxaZPg" },
            { id: 4, name: "Ебл*н Хата", description: "Ебл*ны на хате. стрижка", image: "https://i.ytimg.com/vi/4TYrD_yz_J0/maxresdefault.jpg", youtube: "https://www.youtube.com/watch?v=eucVqaj4d38" },
            { id: 5, name: "Мафия Мэддисона", description: "Мафия", image: "https://i.ytimg.com/vi/9ekm_wdXEoA/maxresdefault.jpg", youtube: "http://www.youtube.com/watch?v=fp1L0_L2rhs" },
            { id: 6, name: "анар и майотик и 163он манек", description: "трап тусовка", image: "https://avatars.mds.yandex.net/i?id=7165dbbb291538187cf5c20c0054404b69bd7829-16330339-images-thumbs&n=13", youtube: "http://www.youtube.com/watch?v=u4urzqqMC2A" }
        ]
    },
    {
        id: 8,
        title: "Прорыв Года ⛏️",
        description: "Разорвали Медиа! Новички ворвались в индустрию!",
        candidates: [
            { id: 1, name: "Ханов", description: "CGI эффекты", image: "https://i.pinimg.com/736x/a2/f5/de/a2f5de92b93da20fc0be7dd5fbd641c1.jpg", youtube: "https://www.youtube.com/@HAPE3HOECAMAPA" },
            { id: 2, name: "Cacto0o", description: "Практические эффекты", image: "https://yandex-images.clstorage.net/w5Vk6N129/9ce76bLwI/N_6fzW9Hbu2XcSYOs77_B6rkQ96key8gmfZHsQxOY1jflZSSD1cUzKTX8LUgny8i5unrqkMJKr2tCXXfgcmMVVbn_tReamKM9gAid-Oe8xOikTbS4ApHMe2fTvx1GkrhbwRRTuKyuHFgYizYaK8mZ8qUpo6muW_0WVz0j1GFKYxzYg-5d89ncb_l3-KTrkPbdpnzNoSmrzHxVvbdyJOOTa_gtRYSThTZUBpMEESrJsc7CBaGXhyrZElEYJeR2aloNzq7ld9fKzVjUTuaA4qX_95ZV0pUjoctec6WUagH3kGvPNkuLlbMFaT-ABTg364j8xQ66h5UV5TVvOyrNVVdbBd-10nHu_vNg0GLOvuiw0_mzVvarDaDuYXO3gkog4pdQxTJcgo2NPkYDsDUuFMCP0_gSjJCnGPQ8SwMm8XRqeRX6lNFA4tLURMlL2pDEpOv-sXXqhiyK929dpqVDIOWOZcYzQJSxjT1NNJUdFiH6hMz4B7OakznZGmweL8l9YVokzIXzcuL6zWb9acyvy6bPzoBt8b84ltB8RIeSQQPxrErnB16IqJEgVD-LChMI3rft_haBnqIhxRpwKCfPWWtpD9OhwHPsxPJeyl79v9SFz-uuePeiC6zoUn29skgEwJBD4w9XtYq6IHkipjofDeSEzu8Sl4SgOtwtWiEm71lUaBTzjsRW0O3Deshc34_slcfYjGzXhz6owFBHvJlvL_iFUNUQcqq1uABeMrcfIxPXjuX_Aa-giBH3Ilo7NPNYY0cU65DpSe347EzBScW-56b35oN33r06ldZed6eEajrqkm_3JHiQi4shehutKhAJ3a7B_waxvJYwzjdQLRP0UEJmH_Cc4mDWztld_mjngcmW6MabSNCNMKnsWF6PnFEZ6KV10yFAkpa2B0o_rB42FNmSx-M2n7OHL8AacQQEwFxMQhrCrdNr6O7BR8FbxLTmufLGimnPuyCM7W9cr5pTGe8", youtube: "https://www.youtube.com/@cactostreams" },
            { id: 3, name: "Юзя", description: "Комбинированные эффекты", image: "https://sun9-50.userapi.com/c3EpQNEEJAVkD6YyPf_1b08WNNJmrBMBwbKzSA/xBpPMeQBCWE.jpg", youtube: "https://www.youtube.com/watch?v=dL0_yNIXrAw" },
            { id: 4, name: "Mellsher", description: "Подстилка пятерки. Или самостоятельная личность?", image: "https://yandex-images.clstorage.net/w5Vk6N129/9ce76bLwI/N_6fzW9Hbu2XcSYOs77_B6rkQ96key8gmfZHsQRWVhTThYCnUgZkwKjX2fhgkn8_v6CC9k5cdr21EW3awJjMdDu_25BeXnaI9jwib-Oe8xOikTbS4ApHMe2fTsE0Hmok5sWZOuKK9F0AelwY8DOOF6-UmvI7fEOwHf0sqzWZWTzv5jMlK8u38b-hL5LLPnPD-pH_Kng2m9XRXurxFNumBVtMXZYibhAF8IbwsMBL7t-DkJpSyuDzuOVY6Dslgc0kL7qzwW-TA90XMWPWF4qXu2q1Kw7Q9j-pAXbC7ZxDxok72A2aIrJ8PcyeKHw0r6LbJ-QStgL839SlEBTLuXlBGIs2R8VP128BD9WzLveaJxuSnX--6GIzOfnOxnlgQ47Ru1xZhs6abGHo_tCQiF9iG39ovqq-CK8M-dggj53poSh7srNND0PrDcvlA7Jn_oNLKi0vXvRqv0lNSm4dWPvKTZ9cReIalmgRsA7QnKSD9rufvFaGwgj78NEIpDsFddUMm5afwcubr4UD5aPW7y4LE9YRJ840rt8lqRoegRSfTpGX0BVqphK4acBqoOjAr47nixjGSkYQvzjBzMRLBQUNLIMGtw1n5z9JB91bKg_y19eWbavOoBaLPd3W9mGse6YRs8zRmoICmE004gzodNs6J7sMLobKVK9gqcSoL9mtKSgDBksJC2eDWZMt_-6f-t9fVo3r7mye271JAubBpJOivS9gMc7O2uTZSB4EaOibfrNLdOKuZhTjgDlkBIPlrUFgcwKXtQsH--3v2atSR96LN5KhJy6UoreZoRISmZxTzsk7NHmSMlI08aDmyOx4PxZnhxzKLvYU__hJHIBnsYUZ_G8iEzEna8vBSzVzhgMiD79uGedSFMJLoWE64nGE926p17hxTlrCIBGokjx0uK8Stx9o2t7uZD9AdVj8XwUBvaC_EiuhM6MPBWfN8-Zr3sMzuqVbOhSGz925enZ1WP_s", youtube: "https://www.youtube.com/channel/UC-jvQ8iQYbdyW_biKdxp55Q" },
            { id: 5, name: "Замай", description: "Рэпер а теперь и твичер", image: "https://avatars.yandex.net/get-music-content/7548376/1010aa80.p.4594680/m1000x1000?webp=false", youtube: "https://www.youtube.com/channel/UCdyNrVrp4SRzzh9pL9qYHRw" },
            { id: 6, name: "няшненькая морфилиночка", description: "Или можете сопоставть лакшори герл", image: "https://avatars.mds.yandex.net/i?id=ae0cf1fbc37891c96b8847044858bef9a62e5ab9-4901375-images-thumbs&n=13", youtube: "https://www.youtube.com/channel/UCt_hVSKmhk7CAA7JpQhyDWQ" }
        ]
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderNominations();
    initializeModal();
    loadVotes();
});

// Отображение номинаций
function renderNominations() {
    const grid = document.getElementById('nominationsGrid');
    grid.innerHTML = '';
    
    nominations.forEach(nomination => {
        const card = document.createElement('div');
        card.className = 'nomination-card';
        card.innerHTML = `
            <h3>${nomination.title}</h3>
            <p>${nomination.description}</p>
        `;
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
                ${youtubeButtonHTML}
            </div>
        `;
        
        candidateItem.addEventListener('click', () => {
            // Если пользователь уже проголосовал, блокируем переголосование
            if (userVote && userVote !== candidate.id) {
                return; // Не позволяем переголосовать
            }
            
            // Если пользователь еще не проголосовал или кликает на уже выбранную карточку
            if (!userVote || userVote === candidate.id) {
                if (!userVote) {
                    // Первое голосование
                    voteForCandidate(nomination.id, candidate.id);
                    loadVotes();
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

