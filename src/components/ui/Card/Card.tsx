import styles from './Card.module.css'

interface CardProps {

}

export function Card({children}:React.PropsWithChildren<CardProps>){
    return (
        <> 
            <div className={styles.card}>

                {children} 
            </div>
        </>
    )
}