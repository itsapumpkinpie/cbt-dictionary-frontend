import React from 'react';
import style from "./triangle.module.scss"

interface TriangleButtonInterface {
    hrefId: string
    titleName: string
}

const TriangleButton: React.FC<TriangleButtonInterface> = (
    { hrefId, titleName }: TriangleButtonInterface
    ) => {
    return (
        <div className={style.TriangleLayout}>
            <p>
                {titleName}
            </p>
            <a
                className={style.Triangle}
                href={`#${hrefId}`}
                title={titleName}
            >
                <div className={style.TriangleButton}/>
            </a>
        </div>
    );
};

export default TriangleButton;
