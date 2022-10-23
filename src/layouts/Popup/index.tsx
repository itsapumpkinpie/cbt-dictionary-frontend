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

    const closeOutPopupEvent = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.className !== buttonProperty.className){
            outPopupNode(target as HTMLElement)
        }
    }

    const outPopupNode = (ParentNode: HTMLElement | null ) => {
        if (ParentNode === null) {
        } else if (ParentNode.id === "PopupWrapper" ) {
        } else if (ParentNode === document.body || ParentNode.id === "buttonClosePopup" ) {
            buttonClosePopup()
        } else {
            outPopupNode(ParentNode.parentNode as HTMLElement)
        }
    }

    const scrollWidth = () => {
        const div = document.createElement('div');
        div.style.overflowY = 'scroll';
        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return -scrollWidth/2
    }

    const buttonOpenPopup = () => {
        setVisible(true)
        document.body.style.overflow = "hidden";
        document.body.style.marginLeft = `${scrollWidth()}px`;
        document.addEventListener("click", closeOutPopupEvent)
    }

    const buttonClosePopup = () => {
        setVisible(false)
        document.body.style.overflow = "visible";
        document.body.style.marginLeft = "0";
        document.removeEventListener("click", closeOutPopupEvent)
    }

    return (
        <>
            <button
                    className={buttonProperty.className}
                    onClick={ buttonOpenPopup }
            >
                { buttonProperty.name }
            </button>
            {
                (visible)
                ?<div className={styles.PopupWrapperLayout}>
                    <div id={"PopupWrapper"} className={styles.PopupWrapper} >
                        <h2 className={styles.popupHeadName}>{ NamePopup }</h2>
                        { children }
                        <div className={styles.popupButtonForm}>
                            <button
                                onClick={conformButton}
                            >
                                { buttonProperty.name }
                            </button>
                            <button
                                id={"buttonClosePopup"}
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
