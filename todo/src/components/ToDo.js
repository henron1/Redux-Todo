import React from 'react';
import {connect} from 'react-redux';
import { addNewTodo, toggleTodo, deleteTodo } from '../actions/Actions';

class TodoList extends React.Component {
    state ={
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    };

    deleteTodo = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index);
    };


    render() {
        return(
            <> 
                <h2>This is a todo list!!</h2>
                <div>
                    {this.props.todos.map((todo, index) => (
                        <>
                        <h4 onClick={e => this.toggleTodo(e, index)} key={index}>
                            {todo.value}
                        </h4>
                        <button onClick={this.deleteTodo}>
                            Delete Clicked Items
                        </button>
                        </>
                    ))}
                </div>
                <input type="text" value={this.state.newTodo} onChange={this.handleChanges} />
                <button onClick={this.addTodo}>
                        Add another goal you need to accomplish!
                </button>
                
            </>
        );
    } 
}

const mapStateToProps = state => ({
    todos:state.todos
});

export default connect (
    mapStateToProps, { addNewTodo, toggleTodo, deleteTodo })(TodoList);
