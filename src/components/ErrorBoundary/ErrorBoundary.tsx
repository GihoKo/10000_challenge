"use client";

import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onReset: () => void;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error.message, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false });
        this.props.onReset();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>데이터를 불러오지 못했습니다...</h1>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
