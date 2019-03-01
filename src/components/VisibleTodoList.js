import {connect} from 'react-redux';
import {withRouter} from 'react-router'

import {toggleTodo} from "../actions";
import TodoList from './TodoList';

import {getVisibleTodos} from "../redusers";

const mapStateToProps = (state, {match}) => ({
    todos: getVisibleTodos(state.todos, match.params.filter || 'all')
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;