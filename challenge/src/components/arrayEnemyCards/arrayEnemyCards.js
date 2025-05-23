import useArray from '../../hooks/useArray';
import enemyCard from '../../resources/img/enemyCard.png'
import empty from '../../resources/img/neon3.png'

const ArrayEnemyCard = () => {

    const defaultArr = [enemyCard, enemyCard, enemyCard, enemyCard,
                        enemyCard, enemyCard, enemyCard, enemyCard,
                        enemyCard, enemyCard, enemyCard, enemyCard
                        ]

    const { array, set, update} = useArray(defaultArr);


    const reloadEnemyCards = () => {
        set(defaultArr);   
    }

    const enemyPlay = () => {
        const modArray = array.map((img, value) => (img !== empty ? value : -1))
            .filter(img => img !== -1);
        if (modArray.length > 0) {
            const randomIndex = modArray[Math.floor(Math.random() * modArray.length)];
            update(randomIndex, empty);
        }
    }
    return {
        reloadEnemyCards,
        enemyPlay,
        array
    }
}


export default ArrayEnemyCard;