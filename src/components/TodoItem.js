import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      margin: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button></p>
      </div>
    )
  }
}
// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

//const styles = {
//  backgroundColor:'#f4f4f4'
//}
const btnStyle = {
  backgroundColor: 'red',
  float: 'right',
  cursor: 'pointer',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '50%'
}
