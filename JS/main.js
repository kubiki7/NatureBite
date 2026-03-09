// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Находим все блоки с вопросами
    const questionBlocks = document.querySelectorAll('.question-block');
    
    // Добавляем обработчик клика на каждый блок
    questionBlocks.forEach(block => {
        
        // При клике на блок (включая заголовок и текст)
        block.addEventListener('click', function() {
            
            // Проверяем, активен ли текущий блок
            const isActive = this.classList.contains('active');
            
            // Закрываем все блоки
            questionBlocks.forEach(item => {
                item.classList.remove('active');
            });
            
            // Если блок не был активен - открываем его
            if (!isActive) {
                this.classList.add('active');
            }
            // Если был активен - оставляем все закрытыми (ничего не делаем)
        });
    });
});