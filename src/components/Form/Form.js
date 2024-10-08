import { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    handleCancelSubmit(e) {
        e.preventDefault();
    }

    handleFormChange(event) {
        this.setState({
            query: event.target.value,
        });
    }

    handleFormSubmit() {
        this.props.history.push({
            pathname: "/search-results", 
            state: { query: this.state.query },
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleCancelSubmit(event)}>
                    <input
                        name="query"
                        onChange={(event) => this.handleFormChange(event)}
                        value={this.state.query}
                    />
                    <button type="button" onClick={() => this.handleFormSubmit()}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;