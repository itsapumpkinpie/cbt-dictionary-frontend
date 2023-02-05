import React from 'react';
import style from "./triangle.module.scss"

interface TriangleButtonInterface {
    hrefId: string
    titleNameUp?: string
    titleNameDown?: string
}

export const TriangleButton: React.FC<TriangleButtonInterface> = (
    { hrefId, titleNameUp, titleNameDown }: TriangleButtonInterface
    ) => {
    return (
        <div className={style.TriangleLayout}>
            <p>
                {titleNameUp}
            </p>
            <a
                className={style.Triangle}
                href={`#${hrefId}`}
                title={hrefId}
            >
                <div className={`${style.TriangleButton} ${(titleNameUp) ?style.Down : style.Up}`}/>
            </a>
            <p>
                {titleNameDown}
            </p>
        </div>
    );
};