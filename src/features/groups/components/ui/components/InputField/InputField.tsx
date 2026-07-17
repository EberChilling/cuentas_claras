import React from 'react';
import styles from './InputField.module.css'


interface InputFieldProps {
    label: string;
    error?: string;
}


export function InputField({children, label, error}:React.PropsWithChildren<InputFieldProps>){
    return(
        <>
        <div className={styles.container}>

            {/*Display the label from the Input Field */}
            <label className={styles.label}> {label} </label>

            {/* This is to show an error message if it exists */}
            { error && <span className={styles.error}>{error}</span>}

            {/* Show a Input or a TextArea Component */}
            {children}

        </div>
        
        </>

    );
}
