import useArray from '../../hooks/useArray';
import enemyCard from '../../resources/img/enemyCard.png'
import empty from '../../resources/img/neon3.png'

const ArrayEnemyCard = () => {
    const { array, set, update } = useArray(
        [enemyCard, enemyCard, empty, enemyCard]);

    /* function refresh() {
        set([enemyCard, enemyCard, enemyCard, enemyCard]);
    } */

        const refresh = () => {
            set([enemyCard, enemyCard, enemyCard, enemyCard]);
        }

    const pushtest = () => {
        /* event.preventDefault(); */
        const modArray = array.map((img, value) => (img !== empty ? value : -1))
            .filter(img => img !== -1);
        if (modArray.length > 0) {
            const randomIndex = modArray[Math.floor(Math.random() * modArray.length)];
            update(randomIndex, empty);
        }
    }
    return {
        refresh,
        pushtest, 
        array
    }
}

export default ArrayEnemyCard;