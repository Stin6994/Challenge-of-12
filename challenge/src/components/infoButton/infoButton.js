import './infoButton.css';
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

export default InfoButton;