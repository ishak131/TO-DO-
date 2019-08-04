class Write extends React.Component {

    state = {
        messons: ""
    }
    Add = (event) => {
        this.setState({
            messons: event.target.value
        })
    }

    render() {
        let input = document.getElementById("input")

        return (
            <div className="Dady-div">
                <input value={this.state.messons}
                    onChange={this.Add} id="input" className="inner-input" />
                 <Memory insert={this.state.messons} />
            </div>
        )
    }

}
var x = []
class Memory extends React.Component {

    state = {
        ClassNameOfMessonNotDone: []
    }
  
    pushTodo = () => {
        if (input.value != "") {
            x.push(this.props.insert)
            this.state.ClassNameOfMessonNotDone.push("NotDone")
            input.value = "";
            this.setState({
                ClassNameOfMessonNotDone: this.state.ClassNameOfMessonNotDone
            })
        }
    }
    
    render() {
  
        return (
  
            <div className="inner">
                <button onClick={this.pushTodo} className="left" ><strong>Add</strong></button>
                <Output NewState={this.state.ClassNameOfMessonNotDone} />
            </div>
        )
    }
  
  
  }



class Output extends React.Component {

    state = {
        ClassNameOfMesson: this.props.NewState
    }


    done = (i, q) => {
        if (q == true) {
            let arr = this.state.ClassNameOfMesson
            arr[i] = "Done"
            this.setState({
                ClassNameOfMesson: arr
            })
        } else if (q == false) {
            let arr = this.state.ClassNameOfMesson
            arr[i] = "NotDone"
            this.setState({
                ClassNameOfMesson: arr
            })
        }

    }

    remove = (ind) => {
        let arr2 = this.state.ClassNameOfMesson;
        arr2.splice(ind, 1);
        x.splice(ind, 1);
        this.setState({
            ClassNameOfMesson: arr2
        })
        
    }
    delete = () => {
        x = [];
        this.setState({
            ClassNameOfMesson: []
        })
    }
    render() {
        var tag = [];
        for (let i = 0; i < x.length; i++) {
            tag.push(

                <div key={i}>
                    <li>
                        <input id={i}
                            type="checkbox"
                            onChange={() => this.done(i, document.getElementById(i).checked)}
                        />
                       
                        <span className={this.state.ClassNameOfMesson[i]} >
                            {x[i]}
                        </span>
                        :
                        <span className="right" >
                            {this.state.ClassNameOfMesson[i]}
                        </span>
                            <br />
                        <button className="get-away-from-here-button"  onClick={() => this.remove(i)} > delete</button>
                    </li>
                </div>

            )
        }

        return (
            <div>
                <ol>
                    {tag}
                </ol>
                <button onClick={this.delete}  className="Delete-button" ><strong>Delete</strong></button>
            </div>
        )
    }
}  
  ReactDOM.render(<Write />, document.getElementById("click"))