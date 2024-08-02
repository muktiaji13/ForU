setInterval(() => {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    const second = String(time.getSeconds()).padStart(2, '0');
    const day = time.getDate();
    const daysname = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const dayname = daysname[time.getDay()];
    const month = time.getMonth() + 1;
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const monthname = months[time.getMonth()];
    const year = time.getFullYear();
    const clock = hour + ':' + minute + ':' + second;
    const date = dayname + ", " + day + " " + monthname + " " + year;
    

    document.querySelector('.board').textContent = clock;
    document.querySelector('.year').textContent = date;
}, 1000);

document.getElementById('button').addEventListener('click', function() {
    document.getElementById('text').innerHTML = 'iya, kamu!<br>ayo ke halaman selanjutnya';
    
    this.innerHTML = 'Ayo!';
    
    this.addEventListener('click', function() {
        window.location.href = 'flower-index.html';
    });
});