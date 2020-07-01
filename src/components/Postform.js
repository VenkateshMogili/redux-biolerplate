import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props)

    this.state = {
       title:'',
       body:''
    };
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();

    const post={
      title: this.state.title,
      body: this.state.body
    }
    //call action
    this.props.createPost(post);
    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //   method:'POST',
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(response=>response.json())
    // .then(data=> console.log(data))
  }


  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
          </div>
          <div>
            <label>Body: </label><br/>
            <textarea name="body" value={this.state.body} onChange={this.onChange}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
}
export default connect(null,{createPost})(Postform);