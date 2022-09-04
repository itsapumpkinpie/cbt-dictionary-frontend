import React from 'react';
import styles from './PopupLayout.module.scss'


interface PopupInterface {
    children?: React.ReactNode
    buttonProperty: {
        name: string;
        className: string;
    }
}

const PopupLayout: React.FC<PopupInterface> = ({
    children,
    buttonProperty
}) => {

    const [visible, setVisible] = React.useState(false)

    const buttonPopup = () => {
        setVisible(true)
        document.body.style.overflow = "hidden";
        console.log(document.body.style.overflow)
        //добавить отступ после проподания скрола
        setTimeout(() => {
            setVisible(false)
            document.body.style.overflow = "visible";
        }, 3000)
    }

    return (
        <>
            <button className={buttonProperty.className}
                    onClick={ buttonPopup }
            >
                { buttonProperty.name }
            </button>
            {
                (visible)
                ?<div className={styles.PopupWrapperLayout}>
                    { children }
                </div>

                :<></>
            }
        </>
    );
};

export default PopupLayout;
