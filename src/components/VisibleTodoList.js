import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

import {toggleTodo} from "../actions";
import TodoList from './TodoList';
import {getVisibleTodos} from "../redusers";

import {fetchTodos} from "../api";

class VisibleTodoList extends Component {

    componentDidMount() {
        fetchTodos(this.props.filter).then(todos =>
            console.log(this.props.filter, todos)
        );
    }

    componentDidUpdate(prevProps) {
       // console.log(prevProps);
        if (this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then(todos =>
                console.log(this.props.filter, todos)
            )
        }
    }

    render() {
        return <TodoList {...this.props} />
    }
}

const mapStateToProps = (state, {match}) => {
    const filter = match.params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        filter,
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
)(VisibleTodoList));

export default VisibleTodoList;