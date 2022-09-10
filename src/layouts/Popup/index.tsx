import React from 'react';
import styles from './PopupLayout.module.scss'


interface PopupInterface {
    children?: React.ReactNode
    buttonProperty: {
        name: string;
        className: string;
    }
    NamePopup: string;
    conformButton: () => void;
}

const PopupLayout: React.FC<PopupInterface> = ({
    children,
    buttonProperty,
    NamePopup,
    conformButton,
}) => {

    const [visible, setVisible] = React.useState(false)

    const buttonOpenPopup = () => {
        setVisible(true)
        document.body.style.overflow = "hidden";
        document.body.style.marginLeft = "-8px";
    }
    const buttonClosePopup = () => {
        setVisible(false)
        document.body.style.overflow = "visible";
        document.body.style.marginLeft = "0";
    }

    return (
        <>
            <button className={buttonProperty.className}
                    onClick={ buttonOpenPopup }
            >
                { buttonProperty.name }
            </button>
            {
                (visible)
                ?<div className={styles.PopupWrapperLayout}>
                    <div className={styles.PopupWrapper} >
                        <h2>{ NamePopup }</h2>
                        { children }
                        <div>
                            <button
                                onClick={conformButton}
                            >
                                { buttonProperty.name }
                            </button>
                            <button
                                onClick={buttonClosePopup}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>

                :<></>
            }
        </>
    );
};

export default PopupLayout;
