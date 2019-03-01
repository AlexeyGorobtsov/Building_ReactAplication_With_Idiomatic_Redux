import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodolist';

const App = ({ match }) => (
    <div>
        <AddTodo />
        <VisibleTodoList
            filter={match.params.filter || 'all'}
        />
        <Footer />
    </div>
);

export default App;


