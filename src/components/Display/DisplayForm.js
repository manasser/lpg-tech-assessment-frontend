import React, {Component} from "react"


// TODO: transform this class comopnent into a functional component with Hooks
class DisplayForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            categoryName: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="mainContainer">
                <h1>If you would like to create a new Product, please fill in the details below. Please ensure that
                the category you are inputting is one of the available ones.</h1>
                {/* TODO: retrieve the list of categories from a separate API call */}
                <h1>These are: Kitchen, Power Tools, Furniture, Electric, Washroom, Textiles, Misc.</h1>

                {/* TODO: create validation so that each field is required and the category name is one of those listed */}
                <form>
                    <input className = "input"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Product Name"
                    />
                    <br />

                    <input className = "input"
                        name="categoryName"
                        value={this.state.categoryName}
                        onChange={this.handleChange}
                        placeholder="Product category name"
                    />
                    <br />

                    <input className = "input"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Product description"
                    />
                    <br />

                    <button className="button" onClick={(e) => {
                        this.props.handleSubmit(e, this.state.name, this.state.categoryName, this.state.description)}}>
                        Create Product
                    </button>
                </form>
            </div>
        )
    }
}

export default DisplayForm