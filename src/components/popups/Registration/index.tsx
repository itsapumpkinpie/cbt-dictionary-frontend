import React from 'react';
import PopupLayout from "../../../layouts/Popup";

import styles from "./Registration.module.scss";



const Registration = () => {

    const sendRegistration = () => {
        console.log("Регистрация")
    }

    return (
        <PopupLayout
            buttonProperty={{name: "Регистрация", className: styles.buttonRegistration } }
            NamePopup={"Регистрация"}
            conformButton={sendRegistration}
        >
            Вот так вот
        </PopupLayout>
    );
};

export default Registration;
