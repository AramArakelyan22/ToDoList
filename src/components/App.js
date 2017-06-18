import * as React from "react";
import {connect} from "react-redux";
import {addReminder} from "../actions/actions"

 class App extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: " "
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text)
    }

    renderReminders() {
        const {reminders} = this.props;
        return(
            <ul className="list-group col-sm-4">
                {
                    reminders.map((reminder, i) => {
                        return (
                            <li key={i}>{reminder.text}</li>
                        )
                    })
                }
            </ul>
        )
    }

    render(){
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input type="text" className="form-control" onChange = {(e) =>{this.setState({text: e.target.value})}} placeholder="I have to..."/>
                    </div>
                    <button className="btn btn-success" onClick={()=> {this.addReminder()}} type="button">Add reminder</button>
                </div>
                {this.renderReminders()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder})(App)

