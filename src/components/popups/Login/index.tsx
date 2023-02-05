import React from 'react';

import {PopupLayout} from "../../../layouts/Popup";
import styles from "./Login.module.scss";

export const Login = () => {

    const sendLogin = () => {
        console.log("Login")
    }

    return (
        <PopupLayout
            NamePopup={"Авторизация"}
            buttonProperty={{name: "Войти", className: "loginPopupButton" } }
            conformButton={sendLogin}
        >
            Login
        </PopupLayout>
    );
}