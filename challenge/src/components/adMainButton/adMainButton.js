import { useState } from 'react';
import './adMainButton.css';
import useYandexSDK from '../../hooks/useYandexSDK';

function AdMainButton({ life, setLife }) {
  const { ysdk, isLoading } = useYandexSDK();
  const [isAdLoading, setIsAdLoading] = useState(false);

  const handleShowFullscreenAd = () => {
    // Проверяем условия: нельзя нажать если реклама уже загружается или жизни полные
    if (!ysdk || isAdLoading || life >= 3) {
      console.warn('Ad cannot be shown:', { 
        hasSDK: !!ysdk, 
        isAdLoading, 
        life, 
        canShow: life < 3 
      });
      return;
    }

    console.log('Showing fullscreen ad...');
    
    // Блокируем кнопку сразу при нажатии
    setIsAdLoading(true);

    // Если это локальная заглушка (нет реального SDK)
    if (!ysdk.adv || !ysdk.adv.showFullscreenAdv) {
      console.log('Using local fullscreen ad simulation');
      
      // Эмулируем поведение полноэкранной рекламы
      setTimeout(() => {
        // Эмулируем успешный показ рекламы
        console.log('Fullscreen ad completed (simulation)');
        setLife(prev => Math.min(prev + 1, 3)); // Добавляем жизнь, но не больше 3
        setIsAdLoading(false);
      }, 3000);
      return;
    }

    // Реальный вызов SDK Яндекс Игр для полноэкранной рекламы
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onOpen: () => {
          console.log('🎬 Fullscreen ad opened');
          // Здесь можно приостановить игру если нужно
        },
        onClose: (wasShown) => {
          console.log(`✅ Fullscreen ad closed, was shown: ${wasShown}`);
          
          // Если реклама была показана (а не пропущена), даем награду
          if (wasShown && life < 3) {
            setLife(prev => Math.min(prev + 1, 3)); // Добавляем жизнь, но не больше 3
          }
          
          // Разблокируем кнопку после завершения
          setIsAdLoading(false);
        },
        onError: (error) => {
          console.error('❌ Fullscreen ad error:', error);
          // При ошибке тоже разблокируем кнопку
          setIsAdLoading(false);
        }
      }
    });
  };

  // Если SDK еще загружается, не показываем кнопку
  if (isLoading) {
    return null;
  }

  // Определяем состояние кнопки
  const isDisabled = isAdLoading || life >= 3;
  
  return (
    <div className='ad_bonus_cont'>
      <button 
        className={`neon-ad-btn ${isDisabled ? 'disabled' : ''}`} 
        onClick={handleShowFullscreenAd}
        disabled={isDisabled}
      >
        <span className="neon-icon">🎬</span>
        <span className="neon-text">
          {isAdLoading ? 'Loading...' : life >= 3 ? 'Full Health' : 'Get Life'}
        </span>
        <span className="neon-glow"></span>
      </button>
    </div>
  );
}

export default AdMainButton;