import React from 'React';

function Heading(props) {
    return(
        <div className="heading">
            <h1 className="heading__content">{props.content}</h1>
    );
}

export default Heading;
