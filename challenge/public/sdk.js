// public/sdk.js - Заглушка Яндекс SDK для локальной разработки
console.log('Yandex Games SDK Stub loaded');

window.YaGames = {
  init: function() {
    console.log('Yandex SDK initialized (stub)');
    
    return Promise.resolve({
      // Игрок
      getPlayer: function() {
        return Promise.resolve({
          getUniqueID: function() { return 'test_user_' + Date.now(); },
          getName: function() { return 'Test Player'; },
          getPhoto: function() { return 'small'; },
          getMode: function() { return 'lite'; }
        });
      },
      
      // Реклама
      adv: {
        showFullscreenAdv: function(params) {
          console.log('Fullscreen ad would be shown now', params);
          
          // Эмулируем поведение рекламы
          if (params && params.callbacks) {
            // Вызываем onOpen сразу
            setTimeout(() => {
              if (params.callbacks.onOpen) params.callbacks.onOpen();
              
              // Эмулируем закрытие рекламы через 2 секунды
              setTimeout(() => {
                if (params.callbacks.onClose) params.callbacks.onClose(true);
              }, 2000);
            }, 100);
          }
          
          return Promise.resolve();
        },
        
        showRewardedVideo: function(params) {
          console.log('Rewarded video would be shown now', params);
          
          if (params && params.callbacks) {
            setTimeout(() => {
              if (params.callbacks.onOpen) params.callbacks.onOpen();
              
              setTimeout(() => {
                // Эмулируем успешный просмотр
                if (params.callbacks.onRewarded) params.callbacks.onRewarded();
                if (params.callbacks.onClose) params.callbacks.onClose(true);
              }, 3000);
            }, 100);
          }
          
          return Promise.resolve();
        }
      },
      
      // Другие возможности SDK
      features: {
        LoadingAPI: {
          ready: function() { 
            console.log('LoadingAPI.ready() called');
          }
        }
      },
      
      // Окружение
      environment: {
        getPayload: function() {
          return Promise.resolve(null);
        }
      }
    });
  }
};