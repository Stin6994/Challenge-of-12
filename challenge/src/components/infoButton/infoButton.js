/* import './infoButton.css';
import { useState } from 'react';

function InfoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className="neon-info-btn" onClick={toggleModal}>
        <span className="neon-icon">ℹ</span>
        <span className="neon-text">Info</span>
        <span className="neon-glow"></span>
      </button>

      {isModalOpen && (
        <div className="info-modal-overlay">
          <div className="info-modal">
            <div className="info-modal-content">
              <h2>Правила игры</h2>
              <p>
                Это игра "Камень-Ножницы-Бумага" с элементами стратегии. 
                Ваша цель - победить все карты противника или набрать максимальное количество очков.
              </p>
              <p>
                - Камень побеждает Ножницы<br />
                - Ножницы побеждают Бумагу<br />
                - Бумага побеждает Камень
              </p>
              <p>
                Используйте кнопки покупки для увеличения бонуса или восстановления здоровья.
              </p>
              <button 
                className="neon-close-btn" 
                onClick={toggleModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoButton; */


import './infoButton.css';
import { useState } from 'react';

function InfoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div className='info_butt_cont'>
      <button className="neon-info-btn" onClick={toggleModal}>
        <span className="neon-info-icon">ℹ</span>
        <span className="neon-info-text">Info</span>
        <span className="neon-info-glow"></span>
      </button>
              </div>

      {isModalOpen && (
        <div className="info-modal-overlay">
          <div className="info-modal">
            <div className="info-modal-content">
              <h2>Правила игры "Камень-Ножницы-Бумага: Выживание"</h2>
              
              <div className="rules-section">
                <h3>🎯 Цель игры</h3>
                <p>Продержаться 12 раундов, сохранив хотя бы 1 жизнь, и набрать максимальное количество баллов.</p>
              </div>

              <div className="rules-section">
                <h3>⚡ Основные правила</h3>
                <ul>
                  <li><strong>12 раундов</strong> максимум (по 4 карты каждого типа)</li>
                  <li><strong>3 жизни</strong> (звезды) в начале игры</li>
                  <li>Поражение в раунде = потеря 1 жизни</li>
                  <li>Ноль жизней = конец игры</li>
                </ul>
              </div>

              <div className="rules-section">
                <h3>💰 Система баллов</h3>
                <ul>
                  <li><strong>Базовая победа</strong>: 1000 баллов</li>
                  <li><strong>Динамический множитель</strong>: увеличивается при победах</li>
                  <li><strong>Стратегия</strong>: важна серия побед для максимального счета</li>
                </ul>
              </div>

              <div className="rules-section">
                <h3>🛠️ Управление ресурсами</h3>
                <ul>
                  <li><strong>Покупка/продажа жизней</strong> во время игры</li>
                  <li><strong>Динамические цены</strong>: зависят от текущего счета</li>
                  <li><strong>Коллекция отыгранных карт</strong>: анализируйте ходы противника</li>
                </ul>
              </div>

              <div className="rules-section">
                <h3>💡 Секрет победы</h3>
                <p>Никто еще не выиграл все 12 раундов подряд! Ключ к успеху — баланс между агрессией и сохранением жизней.</p>
                <p className="final-challenge"><strong>Ваша задача:</strong> выжить и побить рекорд! 🏆</p>
              </div>

              <button 
                className="neon-close-btn" 
                onClick={toggleModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoButton;