import React from 'react'

import styles from "./WrapperLayout.module.scss"

type Props = {
    children?: React.ReactNode
}

export const WrapperLayout: React.FC<Props> = ({children} ) => {
    return(
        <div className={styles.WrapperLayout}>
            { children }
        </div>
    )
}