import { Component } from "react";
import { auth, onAuthStateChanged } from "../../../init-firebase";

class AuthProtector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            user: null,
        };
    }

    justLoggedUsersRedirect = (link) => {
        //se não está autenticado será redirecionado para outro componente
        if (this.props.link !== null && this.props.link !== undefined) {
            link = this.props.link;
        }

        if (link !== null && link !== undefined) {
            onAuthStateChanged(auth, (user) => {
                if (user && user !== null && user !== undefined) {
                    this.setState({
                        isAuthenticated: true,
                        user: user,
                    });
                } else {
                    this.setState({
                        isAuthenticated: false,
                        user: null,
                    });
                    if (window !== undefined) {
                        return (window.location.href = link);
                    }
                }
            });
        }
    };

    render() {
        return;
    }
}
export default AuthProtector;
