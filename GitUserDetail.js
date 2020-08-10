import React, {Component} from 'react';

class GitUserDetail extends Component {

constructor(props){
    super(props);
    this.state = {
      path: this.props.path,
      user: null
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getData(this.state.path);
  }
  
  componentDidUpdate(prevProps, prevState) { 
    console.log('componentDidUpdate')   
    if (prevState.path !== this.state.path) {      
      this.setState({ ...this.state, path: this.state.path });      
      this.getData(this.state.path);
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps', nextProps)
    if(nextProps.path !== prevState.path) {
      return {path: nextProps.path};
    }
    return null;
  }

  getData = (username) => {
    fetch('https://api.github.com/users/' + username).then(res => res.json()).then((user) => {
      if (user) {        
        console.log('getData', user.name, user.following, user.followers);        
      }      
    })
  }

  render() {
    return (
      <div>
        <h1>Git User Detail</h1>
      </div>
    );
  } 
}

export default GitUserDetail;
