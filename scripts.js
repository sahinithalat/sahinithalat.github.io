document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const darkThemeLink = 'styles-dark.css';
    const lightThemeLink = 'styles-light.css';
    const themeStylesheet = document.createElement('link');
    themeStylesheet.rel = 'stylesheet';
    themeStylesheet.id = 'theme-stylesheet';
    document.head.appendChild(themeStylesheet);

    // Sayfa yüklenirken mevcut temayı kontrol et
    function applyTheme(theme) {
        themeStylesheet.href = theme === 'dark' ? darkThemeLink : lightThemeLink;
    }

    // Tarayıcı saklanan temayı kontrol eder
    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
        // Güncel tema için değişkeni güncelle
        currentTheme = newTheme;
    });

    // Modal ile ilgili JavaScript kodu
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.product img').forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        };
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Müzik kontrolleri
    const audio = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume');
    const progressControl = document.getElementById('progress');

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Duraklat';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Oynat';
        }
    });

    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });

    progressControl.addEventListener('input', () => {
        audio.currentTime = (progressControl.value / 100) * audio.duration;
    });

    audio.addEventListener('timeupdate', () => {
        progressControl.value = (audio.currentTime / audio.duration) * 100;
    });
});
