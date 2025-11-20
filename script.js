// Mengambil elemen tombol toggle dan body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Cek preferensi tema pengguna sebelumnya di Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Event Listener untuk tombol klik
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Ubah ikon dan simpan preferensi
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Pesan sapaan di konsol
console.log("Halo! Selamat datang di CV Haaris Fathurrahman.");