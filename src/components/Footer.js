import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter='all'>
            ALL
        </FilterLink>
        {', '}
        <FilterLink filter=''>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter='completed'>
            Completed
        </FilterLink>
    </p>
);

export default Footer;