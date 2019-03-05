import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

import * as actions from "../actions";
import TodoList from './TodoList';
import {getVisibleTodos} from "../redusers";

import {fetchTodos} from "../api";

class VisibleTodoList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps);
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, receiveTodos} = this.props;
        fetchTodos(filter).then(todos =>
            receiveTodos(todos)
        );
    }

    render() {
        const { toggleTodo, ...rest } = this.props;
        return <TodoList
            onTodoClick={ toggleTodo }
            { ...rest }
        />
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
    actions,
)(VisibleTodoList));

export default VisibleTodoList;