document.addEventListener('DOMContentLoaded', function() {
    // Identifikasi halaman saat ini
    const currentPage = window.location.pathname.split('/').pop();

    // Jalankan fungsi khusus untuk halaman yang relevan
    if (currentPage === 'index.html') {
        handleIndexPage();
    } else if (currentPage === 'profile.html') {
        handleProfilPage();
    } else if (currentPage === 'program.html') {
        handleProgramPage();
    } else if (currentPage === 'registration.html') {
        handleRegistrationPage();
    } else if (currentPage === 'login.html') {
        handleLoginPage();
    } else if (currentPage === 'my-account.html') {
        handleAccountPage();
    } else if (currentPage === 'news1.html' || currentPage === 'news2.html' || currentPage === 'news3.html' || currentPage === 'news4.html' ||
        currentPage === 'news5.html' || currentPage === 'news6.html' || currentPage === 'news7.html' || currentPage === 'news8.html' ||
        currentPage === 'news9.html' || currentPage === 'news10.html') {
        handleNewsPage();
    }
});

// Fungsi untuk memeriksa status pendaftaran dan mengatur visibilitas tombol
function checkRegistrationStatus() {
    // Mengambil status pendaftaran dari localStorage
    const isRegistered = localStorage.getItem('isRegistered'); // Ambil dari localStorage
    console.log('Status pendaftaran:', isRegistered);

    // Mendapatkan elemen tombol pendaftaran
    const signupButton = document.getElementById('signupButton');
    const userAccount = document.getElementById('user-account-nav');

    // Menyembunyikan tombol jika pengguna sudah terdaftar
    if (isRegistered === 'true') {
        // Tindakan jika pengguna terdaftar
        console.log('Pengguna sudah terdaftar');
        signupButton.style.display = 'none';
    } else {
        signupButton.style.display = 'block';
        userAccount.style.display = 'none';
        // Tindakan jika pengguna belum terdaftar
        console.log('Pengguna belum terdaftar');
    }
}

// Ambil data dari localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

function handleAccountPage() {
    if (userData && userData.username) {
        // Ambil elemen div user-username
        const myAccountUsername = document.getElementById('my-username');
        const myAccountEmail = document.getElementById('my-email');
    
        // Masukkan username ke dalam div
        myAccountUsername.textContent = userData.username;
        myAccountEmail.textContent = userData.email;
    }

    const signOut = document.getElementById('signOut');

    // Tambahkan event listener untuk klik pada elemen logo
    signOut.addEventListener('click', function () {
        // Set isRegistered ke false dan simpan di localStorage
        localStorage.setItem('isRegistered', 'false');

        // Hapus data pengguna dari localStorage
        localStorage.removeItem('userData');

        // Opsional: Tampilkan pesan untuk mengonfirmasi tindakan
        alert('Data pendaftaran telah direset.'); 
        
        // Debugging untuk memverifikasi bahwa data telah dihapus
        console.log('isRegistered:', localStorage.getItem('isRegistered'));
        console.log('userData:', localStorage.getItem('userData'));
        window.location.href = "../index.html"; 
    });
}

function handleIndexPage() {
    // Menjalankan fungsi untuk memeriksa status pendaftaran
    checkRegistrationStatus();

    // Pastikan userData ada dan memiliki properti username
    if (userData && userData.username) {
        // Ambil elemen div user-username
        const userUsernameDiv = document.getElementById('user-username');

        // Masukkan username ke dalam div
        userUsernameDiv.textContent = userData.username;
    }

    // Ambil elemen dengan id "logo"
    const logoElement = document.getElementById('logo');

    // Tambahkan event listener untuk klik pada elemen logo
    logoElement.addEventListener('click', function () {
        // Set isRegistered ke false dan simpan di localStorage
        localStorage.setItem('isRegistered', 'false');

        // Hapus data pengguna dari localStorage
        localStorage.removeItem('userData');

        // Opsional: Tampilkan pesan untuk mengonfirmasi tindakan
        alert('Data pendaftaran telah direset.'); 
        
        // Debugging untuk memverifikasi bahwa data telah dihapus
        console.log('isRegistered:', localStorage.getItem('isRegistered'));
        console.log('userData:', localStorage.getItem('userData'));
        window.location.href = "index.html"; 
    });

    document.getElementById('yearFilter').addEventListener('change', function() {
        const selectedYear = this.value;
        const articles = document.querySelectorAll('#berita-artikel .article-container');
    
        articles.forEach(article => {
            const articleYear = article.getAttribute('data-year');
            if (selectedYear === 'all' || articleYear === selectedYear) {
                article.style.display = 'block'; // Menampilkan artikel
            } else {
                article.style.display = 'none'; // Menyembunyikan artikel
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0; // Index untuk slide yang sedang aktif
    const slides = document.querySelectorAll('.slideshow-images img');
    const totalSlides = slides.length;

    function showSlides() {
        // Hapus slide aktif
        slides.forEach((img, index) => {
            img.style.display = 'none'; // Sembunyikan semua gambar
        });

        slideIndex++; // Naikkan indeks untuk slide berikutnya
        if (slideIndex > totalSlides) { 
            slideIndex = 1; // Kembali ke awal jika melebihi jumlah slide
        }

        slides[slideIndex - 1].style.display = 'block'; // Tampilkan slide aktif
        setTimeout(showSlides, 3000); // Tunda selama 3 detik untuk slide berikutnya
    }

    showSlides(); // Jalankan fungsi slideshow
});  

function handleProfilPage() {
    // Menjalankan fungsi untuk memeriksa status pendaftaran
    checkRegistrationStatus();

    // Pastikan userData ada dan memiliki properti username
    if (userData && userData.username) {
        // Ambil elemen div user-username
        const userUsernameDiv = document.getElementById('user-username');

        // Masukkan username ke dalam div
        userUsernameDiv.textContent = userData.username;
    }
}

function handleProgramPage() {
    // Tambahkan logika spesifik untuk halaman program di sini
    // Menjalankan fungsi untuk memeriksa status pendaftaran
    checkRegistrationStatus();

    // Pastikan userData ada dan memiliki properti username
    if (userData && userData.username) {
        // Ambil elemen div user-username
        const userUsernameDiv = document.getElementById('user-username');

        // Masukkan username ke dalam div
        userUsernameDiv.textContent = userData.username;
    }
}

function handleRegistrationPage() {
    // Set default isRegistered menjadi 'false' saat halaman registrasi dimuat
    localStorage.setItem('isRegistered', 'false'); // Simpan di localStorage
    console.log('Status pendaftaran: false');

    // Fungsi untuk menyimpan data sementara dan mengindikasikan apakah sudah terdaftar
    function registerUser(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Mendapatkan nilai input dari form
        const username = document.getElementById('signup-username-registration').value.trim();
        const email = document.getElementById('signup-email-registration').value.trim();
        const password = document.getElementById('signup-password-registration').value.trim();

        // Validasi input
        if (username === '' || email === '' || password === '') {
            alert('Semua bidang harus diisi!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Email tidak valid!');
            return;
        }

        if (password.length < 6) {
            alert('Password harus minimal 6 karakter!');
            return;
        }

        // Menyimpan data sementara
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Mengubah status pendaftaran menjadi true dan menyimpannya di localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isRegistered', 'true'); // Simpan di localStorage
        console.log('Data Pengguna Terdaftar:', userData);
        console.log('Status pendaftaran: true');

        // Menampilkan pesan sukses
        alert('Registrasi berhasil!');

        // Reset form setelah sukses
        document.getElementById('registration-form').reset();

        // Mengarahkan ke halaman index.html setelah berhasil registrasi
        window.location.href = "login.html";
    }

    // Fungsi untuk memvalidasi format email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Menambahkan event listener ke tombol dengan ID 'regis_submit'
    document.getElementById('regis_submit').addEventListener('click', registerUser);
}

function handleLoginPage() {
    // Menambahkan event listener ke tombol "Login"
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Mendapatkan nilai input dari form
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Validasi input
        if (username === '' || password === '') {
            alert('Semua bidang harus diisi!');
            return;
        }

        // Ambil data pengguna dari localStorage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        // Cek apakah pengguna terdaftar dan passwordnya sesuai
        if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
            // Login berhasil
            alert('Login berhasil! Selamat datang, ' + username);

            // Redirect ke halaman profil atau halaman lain setelah login berhasil
            window.location.href = "../index.html";
        } else {
            // Login gagal
            alert('Username atau password salah. Silakan coba lagi.');
        }
    });
}

function handleNewsPage() {
    // Menjalankan fungsi untuk memeriksa status pendaftaran
    checkRegistrationStatus();

    // Pastikan userData ada dan memiliki properti username
    if (userData && userData.username) {
        // Ambil elemen div user-username
        const userUsernameDiv = document.getElementById('user-username');

        // Masukkan username ke dalam div
        userUsernameDiv.textContent = userData.username;
    }
}

// Function to speak the text of a specific element by its ID
function speakText(elementId) {
    // Get the text content from the specified element
    const textToSpeak = document.getElementById(elementId).textContent;

    // Create a new SpeechSynthesisUtterance instance with the text
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Set some optional properties like language and pitch
    utterance.lang = 'id-ID'; // Indonesian language
    utterance.pitch = 1; // Normal pitch
    utterance.rate = 1; // Normal speaking rate

    // Use the speechSynthesis API to speak the text
    window.speechSynthesis.speak(utterance);
}

// Function to stop the ongoing speech
function stopSpeaking() {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
}

