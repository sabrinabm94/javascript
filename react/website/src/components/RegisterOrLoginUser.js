import React, { Component } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../init-firebase";

class RegisterOrLoginUser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.registerOrLoginUser(this.props.action, this.props.id, this.props.email, this.props.password, this.props.button);
    }

    registerOrLoginUser(action, formClassname, emailClassname, passwordClassname, buttonClassname) {
        let buttonElement = document.querySelector("#" + buttonClassname);

        if (buttonElement && buttonElement !== undefined) {
            buttonElement.addEventListener("click", function () {
                //console.log("submit authentication");

                let loginFormElement = document.querySelector("#" + formClassname);

                if (loginFormElement) {
                    let authObject = {
                        email: null,
                        password: null
                    };
                    let loginEmailElement = loginFormElement.querySelector("#" + emailClassname);
                    let loginPasswordElement = loginFormElement.querySelector("#" + passwordClassname);

                    if (loginEmailElement && loginEmailElement !== undefined) {
                        authObject.email = loginEmailElement.value;
                    }

                    if (
                        loginPasswordElement &&
                        loginPasswordElement !== undefined
                    ) {
                        authObject.password = loginPasswordElement.value;
                    }

                    if (authObject
                        && ((authObject.email !== null && authObject.email !== undefined && authObject.email !== ""))
                        && (authObject.password !== null && authObject.password !== undefined && authObject.password !== "")) {

                        if (action == "login") {
                            signInWithEmailAndPassword(auth, authObject.email, authObject.password)
                                .then((userCredential) => {
                                    const user = {
                                        id: userCredential.user.uid,
                                        token: userCredential.user.accessToken,
                                        name: userCredential.user.displayName,
                                        email: userCredential.user.email,
                                        emailVerified: userCredential.user.emailVerified,
                                        phone: userCredential.user.phoneNumber,
                                        photoUrl: userCredential.user.photoURL
                                    };
                                    return window.location.href = "/admin/";
                                })
                                .catch((error) => {
                                    return error;
                                });
                        }

                        if (action == "register") {
                            createUserWithEmailAndPassword(auth, authObject.email, authObject.password)
                                .then((userCredential) => {
                                    const user = {
                                        id: userCredential.user.uid,
                                        token: userCredential.user.accessToken,
                                        name: userCredential.user.displayName,
                                        email: userCredential.user.email,
                                        emailVerified: userCredential.user.emailVerified,
                                        phone: userCredential.user.phoneNumber,
                                        photoUrl: userCredential.user.photoURL
                                    };
                                    return window.location.href = "/admin/";
                                })
                                .catch((error) => {
                                    return error;
                                });

                        }
                    }
                }
            });
        }
    }

    render() {
        return (
            <form className={this.props.className} id={this.props.id}>{this.props.children}</form>
        );
    }
}
export default RegisterOrLoginUser;
