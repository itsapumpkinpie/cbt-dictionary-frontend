import React from 'react';

import {PopupLayout} from "../index";

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