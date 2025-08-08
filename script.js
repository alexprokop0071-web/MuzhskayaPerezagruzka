document.addEventListener('DOMContentLoaded', () => {
    // Инициализация приложения
    let exp = 0;
    let level = 1;
    
    // Навигация
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.nav-btn.active').classList.remove('active');
            btn.classList.add('active');
            
            document.querySelector('.content-section.active').classList.remove('active');
            document.getElementById(btn.dataset.section).classList.add('active');
        });
    });
    
    // Логика прогресса
    window.completeTask = (expReward = 10) => {
        exp += expReward;
        if (exp >= 100) {
            level++;
            exp = 0;
            alert(`🎉 Новый уровень: ${level}!`);
        }
        updateProgress();
    };
    
    function updateProgress() {
        document.getElementById('exp-bar').value = exp;
        document.getElementById('exp').textContent = exp;
        document.getElementById('level').textContent = level;
    }
});
