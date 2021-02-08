import React, {Component} from "react"

import DisplayForm from ".././Display/DisplayForm";

class InputForm extends Component {
    constructor() {
        super()
        this.state = {
            formSubmitted: false,
            loading: false,
            requestFailed: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event, name, categoryName, description) {
        this.setState({
            formSubmitted: true
        })

        // TODO: create a new postFetch functional component to handle the POST request
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                categoryName: categoryName,
                description: description
            })
        }
        fetch('http://localhost:8080/products/create', requestOptions)
            .then(response => response.json())
             .catch((error) => {
                 console.log('error: ' + error);
                 this.setState({ requestFailed: true });
              });
    }

    render() {
        console.log("requestFailed: ", this.state.requestFailed)
        return (
            <div>
            {!this.state.requestFailed ?
                <DisplayForm handleSubmit={this.handleSubmit} />

                :

                [
                    <div className = "productsContainer">
                       <h1>Sorry! Something went wrong. Please refresh the page to restart.</h1>
                       <h1>If the issue persists, please try again later</h1>
                    </div>
                ]
            }
            </div>

        )
    }
}

export default InputForm