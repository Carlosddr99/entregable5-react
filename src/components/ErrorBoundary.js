
import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false };
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    componentDidCatch(error) {
    console.log(error);
    }

    render() {
        if (this.state.hasError) {
        return (
            <div>
                <p>Something went wrong 😭</p>
            </div>
            );
        }
            return this.props.children;
    }
}