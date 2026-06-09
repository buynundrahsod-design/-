const petals = ['🌸','💕','❤️','🌷','✨','💖'];
for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = 9 + Math.random() * 12 + 's';
    p.style.animationDelay = Math.random() * 12 + 's';
    p.style.fontSize = 0.8 + Math.random() * 1.2 + 'rem';
    document.body.appendChild(p);
}

function burst() {
    const c = document.getElementById('conf-wrap');
    const emojis = ['🌸','💖','✨','💕','🎊','⭐','🌷'];
    const colors = ['#ff4d6d','#ffd93d','#6bcb77','#4d94ff','#ff6f61','#c77dff','#ffb3c6'];
    for (let i = 0; i < 70; i++) {
        const el = document.createElement('div');
        el.className = 'conf';
        if (Math.random() > 0.5) {
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.fontSize = 0.8 + Math.random() * 0.9 + 'rem';
            el.style.background = 'none';
        } else {
            el.style.width = 6 + Math.random() * 8 + 'px';
            el.style.height = 6 + Math.random() * 8 + 'px';
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        el.style.left = Math.random() * window.innerWidth + 'px';
        el.style.animationDuration = 2.5 + Math.random() * 2.5 + 's';
        el.style.animationDelay = Math.random() * 0.8 + 's';
        c.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
    }
}

let opened = false;
document.getElementById('envWrap').addEventListener('click', () => {
    if (opened) return;
    opened = true;
    document.getElementById('envWrap').classList.add('open');
    document.getElementById('hint').style.opacity = '0';
    setTimeout(burst, 600);
    setTimeout(() => {
        document.getElementById('giftLeft').classList.add('show');
        document.getElementById('giftRight').classList.add('show');
    }, 1200);
});

const gifts = [
    { img: 'gift1.jpg', text: '🎁 Ягаан Stitch ээ аваагүй байгаа бздээ хха ууг нь илүү гоёийг ольё гэсэн чин энэнээс царайлаг нь байгаагүймаа тэхдээ энэ kimono г нь тайлчихаж болдог юм шиг байна лээ бас чам шиг ичимхий нөхөр нүүрээ дараад. Муур нь аягуу хөөрхөн харагдаад байсан юм тэгээд сонгож чадахгүй 2лангийн авсан. Нэг нь цүнхний тоглоом байсан байх нөгөөх нь зүгээр толгойгоо дохиодл байдаг одооноос дээр яриад байсан 1%-ийн дэмжлэг хэрэг гаруул тэрийг энэ муур мнимй өмнөөс намайг завгүй байхад хэлж өгж байна за хха. Тоглоом нь болхоороо чамайг SPY x FAMILY үзэж байсан гэхээр нь авсан юм өөр уугнь баахан anime ийн юм байсанлдаа тэхдээ энэ нь гоё байх юм болуу гэж бодсон юм' },
    { img: 'gift2.jpg', text: '🎁 энэ QR яаг одоо ажиллах эсэхийг нь сайн хэлж мэдэхгүйл юм. Ажилж байвал yeeey хха' }
];

document.getElementById('giftLeft').addEventListener('click', () => {
    document.getElementById('modalImg').src = gifts[0].img;
    document.querySelector('.modal-text').innerHTML = `<p>${gifts[0].text}</p>`;
    document.getElementById('giftModal').classList.add('show');
});

document.getElementById('giftRight').addEventListener('click', () => {
    document.getElementById('modalImg').src = gifts[1].img;
    document.querySelector('.modal-text').innerHTML = `<p>${gifts[1].text}</p>`;
    document.getElementById('giftModal').classList.add('show');
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('giftModal').classList.remove('show');
});

document.getElementById('giftModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('giftModal')) {
        document.getElementById('giftModal').classList.remove('show');
    }
});