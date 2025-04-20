/**
 * JavaScript file for project detail pages
 */

// Функция для анимации элементов при прокрутке
function handleScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  }
  
  // Инициализация анимаций при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      handleScrollAnimation();
    }, 100);
    
    // Добавляем обработчик прокрутки для анимаций
    window.addEventListener('scroll', handleScrollAnimation);
  });
  
  // Полноэкранный просмотр скриншотов
  function showFullScreen(imageSrc) {
    const fullscreenImage = document.getElementById('fullscreenImage');
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    
    fullscreenImage.src = imageSrc;
    fullscreenOverlay.style.display = 'flex';
    
    // Предотвращаем прокрутку когда открыт оверлей
    document.body.style.overflow = 'hidden';
  }
  
  function closeFullScreen() {
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    
    fullscreenOverlay.style.display = 'none';
    
    // Восстанавливаем прокрутку когда оверлей закрыт
    document.body.style.overflow = '';
  }
  
  // Закрытие при нажатии ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeFullScreen();
    }
  });
  
  // Добавление обработчиков событий после загрузки DOM
  document.addEventListener('DOMContentLoaded', function() {
    // Предотвращаем закрытие при клике на само изображение
    const fullscreenImage = document.getElementById('fullscreenImage');
    if (fullscreenImage) {
      fullscreenImage.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
    
    // Добавляем обработчик клика на оверлей
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    if (fullscreenOverlay) {
      fullscreenOverlay.addEventListener('click', closeFullScreen);
    }
    
    // Добавляем обработчик для кнопки закрытия
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeFullScreen();
      });
    }
    
    // Добавляем обработчики для всех скриншотов
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    screenshotItems.forEach(item => {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img && img.src) {
          showFullScreen(img.src);
        }
      });
    });
  });