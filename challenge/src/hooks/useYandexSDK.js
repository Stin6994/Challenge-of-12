// src/hooks/useYandexSDK.js
import { useState, useEffect } from 'react';

const useYandexSDK = () => {
  const [ysdk, setYsdk] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        console.log('Initializing Yandex SDK...');
        
        if (typeof YaGames === 'undefined') {
          throw new Error('Yandex SDK not found');
        }

        const sdkInstance = await YaGames.init();
        setYsdk(sdkInstance);
        setIsLoading(false);
        
        console.log('✅ Yandex SDK initialized successfully', sdkInstance);
        
      } catch (err) {
        console.error('❌ Failed to initialize Yandex SDK:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    initializeSDK();
  }, []);

  return { ysdk, isLoading, error };
};

export default useYandexSDK;