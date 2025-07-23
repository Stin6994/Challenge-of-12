import './cardCollection.css';
import rockImg from '../../resources/img/rock.png';
import scissorsImg from '../../resources/img/scissors.png';
import paperImg from '../../resources/img/paper.png';

const PlayedCardsCollection = ({ playedCards }) => {
    // Группируем карты по типам
    const rocks = playedCards.filter(card => card.type === 'rock');
    const scissors = playedCards.filter(card => card.type === 'scissors');
    const papers = playedCards.filter(card => card.type === 'paper');

    // Создаем ячейки для каждого типа
    const renderCells = (cards, type) => {
        const cells = [];
        const cardImages = {
            rock: rockImg,
            scissors: scissorsImg,
            paper: paperImg
        };

        // Заполняем сыгранными картами
        for (let i = 0; i < cards.length && i < 8; i++) {
            cells.push(
                <div key={`${type}-${i}`} className="played-card">
                    <img src={cardImages[type]} alt={type} />
                </div>
            );
        }

        // Заполняем оставшиеся пустые ячейки
        for (let i = cells.length; i < 8; i++) {
            cells.push(<div key={`empty-${type}-${i}`} className="empty-card"></div>);
        }

        return cells;
    };

    return (
        <div className="played-cards-container">
            <div className="played-cards-row">
                {renderCells(rocks, 'rock')}
            </div>
            <div className="played-cards-row">
                {renderCells(scissors, 'scissors')}
            </div>
            <div className="played-cards-row">
                {renderCells(papers, 'paper')}
            </div>
        </div>
    );
};

export default PlayedCardsCollection;