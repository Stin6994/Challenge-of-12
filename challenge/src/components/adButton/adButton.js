// src/components/AdButton.js
import React from 'react';
import { useYandexSDK } from '../hooks/useYandexSDK';

const AdButton = () => {
  const { ysdk, isLoading, error } = useYandexSDK();

  const handleShowAd = () => {
    if (!ysdk) {
      console.warn('SDK not ready yet');
      return;
    }

    console.log('Showing fullscreen ad...');
    
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onOpen: () => {
          console.log('🎬 Ad opened - game should pause now');
          // Здесь можно приостановить игру
        },
        onClose: (wasShown) => {
          console.log(`✅ Ad closed, was shown: ${wasShown}`);
          // Здесь можно возобновить игру
          if (wasShown) {
            alert('Реклама завершена! Игра продолжается.');
          }
        },
        onError: (error) => {
          console.error('❌ Ad error:', error);
          alert('Ошибка показа рекламы: ' + error);
        }
      }
    });
  };

  const handleShowRewardedAd = () => {
    if (!ysdk) {
      console.warn('SDK not ready yet');
      return;
    }

    console.log('Showing rewarded ad...');
    
    ysdk.adv.showRewardedVideo({
      callbacks: {
        onOpen: () => {
          console.log('🎬 Rewarded ad opened');
        },
        onRewarded: () => {
          console.log('💰 Reward granted!');
          alert('Вы получили награду!');
          // Здесь дать игроку награду
        },
        onClose: (wasShown) => {
          console.log(`✅ Rewarded ad closed, was shown: ${wasShown}`);
        },
        onError: (error) => {
          console.error('❌ Rewarded ad error:', error);
        }
      }
    });
  };

  if (isLoading) {
    return <div>Загрузка SDK...</div>;
  }

  if (error) {
    return (
      <div style={{ color: 'red' }}>
        Ошибка: {error}
        <br />
        <small>Это нормально в режиме разработки</small>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Тест Яндекс SDK</h3>
      <button 
        onClick={handleShowAd}
        style={{ 
          padding: '10px 20px', 
          margin: '10px',
          fontSize: '16px',
          backgroundColor: '#ffdb4d',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Показать полноэкранную рекламу
      </button>
      
      <button 
        onClick={handleShowRewardedAd}
        style={{ 
          padding: '10px 20px', 
          margin: '10px',
          fontSize: '16px',
          backgroundColor: '#4dff88',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Показать рекламу за награду
      </button>
      
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        Режим: {ysdk ? 'SDK подключен' : 'Локальная заглушка'}
        <br />
        Открой консоль браузера для просмотра логов
      </div>
    </div>
  );
};

export default AdButton;