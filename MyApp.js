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
        <Output insert={this.state.messons} />
      </div>
    )
  }

}
var x = []
class Output extends React.Component {

  state = {
    ClassNameOfMesson: []
  }
  //push messions;////////////////////////////////////////////////////////

  pushTodo = () => {
    if (input.value != "") {
      x.push(this.props.insert)
      this.state.ClassNameOfMesson.push("NotDone")
      input.value = "";
      this.setState({
        ClassNameOfMesson: this.state.ClassNameOfMesson
      })
    }
  }
// done messions/////////////////////////////////////////////////////////
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
// remove one mession ///////////////////////////////////////
  
  remove = (ind) =>
  {
    let arr = [];
    let arr2 = this.state.ClassNameOfMesson;
    arr2.splice(ind, 1);
    this.setState({
      ClassNameOfMesson: arr2
    })
    for (let i = 0; i < x.length; i++) {
      arr.push(document.getElementById(i).checked)
    }
    arr.splice(ind, 1);
    x.splice(ind, 1);
    for (let i = 0; i < x.length; i++) {
      
      document.getElementById(i).checked = arr[i];
    }
    
    }
  //delet all messions//////////////////////////////////////
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
            <button className="get-away-from-here-button" onClick={() => this.remove(i)} > delete</button>
          </li>
        </div>

      )
    }

    return (
      <div>
        <button onClick={this.pushTodo} className="left" ><strong>Add</strong></button>
        <ol>
          {tag}
        </ol>
        <button onClick={this.delete} className="Delete-button" ><strong>Delete</strong></button>
      </div>
    )
  }
}
ReactDOM.render(<Write />, document.getElementById("click"))