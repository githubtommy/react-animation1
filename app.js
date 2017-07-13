import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from './Home.jsx'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      name:'',
			lastChar: ''
    };
  }

  add(){
    var arr = this.state.data.slice();
    arr.push({'id':(new Date()).getTime(),'name':this.state.name})
    this.setState({data:arr})
  }

	remove() {
    var arr = this.state.data.slice();
		arr.pop();
		this.setState({data:arr})

	}

  handleChange(e){
    this.setState({name:e.target.value})
		this.setState({lastChar: e.target.value})
  }

	handleRemoveChange(event) {
		console.log("handleRemoveChange");
	}

  render() {

    return (
      <div>
				<p>Last Input: {this.state.lastChar}</p>
        Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
        <input onClick={this.remove} type="button" value="Remove" />
        <ul>
					<ReactCSSTransitionGroup
						transitionName="anim"
						transitionAppear={false}
						transitionEnterTimeout={2000}
						transitionEnter={true}
						transitionLeaveTimeout={2000}
						transitionLeave={true}>
							{
								this.state.data.map(function(player) {
									 return <li key={player.id}>{player.name}</li>
								})
							}
					</ReactCSSTransitionGroup>
        </ul>

      </div>
    )
  }
}

render(
    <App />,
    document.getElementById('app')
);
