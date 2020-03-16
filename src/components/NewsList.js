import React from 'React';
import Heading from './Heading.js';
import NewsList from './NewsList.js';

 function NewsList(props) {
    return (

        <div className="NewsList">
        <Heading content="News"/>
        <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
        </ul>
        </div>

    );
}

export default NewsList;
