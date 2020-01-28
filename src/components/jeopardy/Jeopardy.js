import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: {Answer: ""}

        }
    }

    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })

        let tempScore = this.state.score
        if (this.state.data.answer === this.state.formData.Answer) {
            tempScore = tempScore + this.state.data.value

        } else {
            tempScore = tempScore - this.state.data.value
        }
        this.setState({
            score: tempScore,
formData: {Answer: ""}
        })


        this.getNewQuestion(); 
    }


    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }
    //display the results on the screen
    render() {
        let categoryElement
        if (this.state.data.category === undefined) {
            categoryElement = <div>no category</div>
        } else {
            categoryElement = <div>Category: {this.state.data.category.title}</div>
        }


        return (
            <div>
                <p>  Score: {this.state.score}        </p>
                <p> Value: {(this.state.data.value)} </p>
                <p> Question:  {(this.state.data.question)} </p>
                {categoryElement}

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Answer</label>
                        <input type="text" name="Answer" onChange={this.handleChange} value={this.state.formData.Answer} />
                    </div>

                    <button>Submit</button> <br />
                </form>


            </div>
        )
    }
}
// ////////////contact{/* <button>Submit Form</button */} ?//////////////
// constructor(props) {
//     super(props);
//     this.state = {
//         submitted: false,
//         formData: {
//           firstName: '',
//           lastName: ''
//         }<input type="text" name="firstName" value={this.state.formData.firstName} />
//         ...
//         <input type="text" name="lastName" value={this.state.formData.lastName} />
//       };


//         );handleChange = (event) => {
//             const formData = {...this.state.formData};
//           }
//     }formData[event.target.name]
// }
// ?












export default Jeopardy;