import React, { createContext, Component, ReactNode } from "react";

interface User {
    username: string;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
});

interface AuthProviderProps {
    children: ReactNode; // Thêm thuộc tính children
}

interface AuthProviderState {
    user: User | null;
}

export class AuthProvider extends Component<AuthProviderProps, AuthProviderState> {
    constructor(props: AuthProviderProps) {
        super(props);
        this.state = {
            user: null,
        };
    }

    setUser = (user: User | null) => {
        this.setState({ user });
    };

    render() {
        return (
            <AuthContext.Provider
                value={{
                    user: this.state.user,
                    setUser: this.setUser,
                }}
            >
                {this.props.children} {/* Hiển thị children */}
            </AuthContext.Provider>
        );
    }
}

export default AuthContext;
