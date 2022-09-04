import React from 'react';
import PopupLayout from "../../../layouts/Popup";

import styles from "./Registration.module.scss";



const Registration = () => {
    return (
        <PopupLayout
            buttonProperty={{name: "Регистрация", className: styles.buttonRegistration } }
        >
            Вот так вот
        </PopupLayout>
    );
};

export default Registration;
