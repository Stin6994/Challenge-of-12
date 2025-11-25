import { useState, useCallback } from 'react';

const useLeaderboard = (ysdk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [playerRank, setPlayerRank] = useState(null);

  // Отправка результата в лидерборд
  const submitScore = useCallback(async (score, leaderboardName = 'leaderboard_v1', extraData = null) => {
    if (!ysdk) {
      console.warn('Yandex SDK not available - score not submitted');
      return { success: false, rank: null };
    }

    setIsLoading(true);
    setError(null);

    try {
      const leaderboards = await ysdk.getLeaderboards();
      await leaderboards.setLeaderboardScore(leaderboardName, score, extraData);
      console.log(`Score ${score} submitted to leaderboard ${leaderboardName}`);
      
      // Получаем обновленный ранг игрока
      const entries = await leaderboards.getLeaderboardEntries(leaderboardName, { 
        includeUser: true, 
        quantity: 1 
      });
      
      const newRank = entries?.userRank || null;
      setPlayerRank(newRank);
      
      return { success: true, rank: newRank };
    } catch (err) {
      console.error('Failed to submit score to leaderboard:', err);
      setError(err.message);
      return { success: false, rank: null };
    } finally {
      setIsLoading(false);
    }
  }, [ysdk]);

  // Получение данных лидерборда
  const getLeaderboard = useCallback(async (leaderboardName = 'leaderboard_v1', options = {}) => {
    if (!ysdk) {
      console.warn('Yandex SDK not available - cannot get leaderboard');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const leaderboards = await ysdk.getLeaderboards();
      const entries = await leaderboards.getLeaderboardEntries(leaderboardName, {
        includeUser: true,
        quantity: 10,
        ...options
      });
      
      setPlayerRank(entries?.userRank || null);
      return entries;
    } catch (err) {
      console.error('Failed to get leaderboard:', err);
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [ysdk]);

  return {
    submitScore,
    getLeaderboard,
    playerRank,
    isLoading,
    error
  };
};

export default useLeaderboard;