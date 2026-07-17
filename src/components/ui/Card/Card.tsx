import styles from './Card.module.css'

interface CardProps {
    color: boolean;
}

export function Card({children,color}:React.PropsWithChildren<CardProps>){
    return (
        <h1>This a Card</h1>
    )
}