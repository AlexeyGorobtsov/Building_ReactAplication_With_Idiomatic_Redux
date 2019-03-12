import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

import * as actions from "../actions";
import TodoList from './TodoList';
import {getVisibleTodos, getIsFetching, getErrorMessage} from "../redusers";
import {FetchError} from "./FetchError";

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
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter).then(() => console.log('done!'));
    }

    render() {
        const { isFetching, errorMessage, toggleTodo, todos } = this.props;
        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            )
        }

        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }

        return <TodoList
            todos={todos}
            onTodoClick={ toggleTodo }
        />
    }
}

const mapStateToProps = (state, {match}) => {
    const filter = match.params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter,
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions,
)(VisibleTodoList));

export default VisibleTodoList;