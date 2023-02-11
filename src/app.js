import React from 'react';
import Ab from './Ab';

import styles from  './app.scss';

const app = () => {
    return (
        <>
        <h1 className={styles.heading}>Learn WebPack!</h1>
        <Ab />
        </>
    )
}

export default app;