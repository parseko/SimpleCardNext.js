import styles from '../styles/Card.module.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useState } from 'react'

const Card = () => {
    const [like, setLike] = useState(false);

    const onPress = () => {
        setLike(!like)
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src='./art-abstract.jpg' />
                <div onClick={onPress} className={styles.cardLike}>
                    {like ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
            </div>
            <div className={styles.cardText}>
                <h1>Art-abstract<br/>@parseko</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}
export default Card