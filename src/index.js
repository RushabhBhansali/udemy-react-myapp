//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
 return "click me now";
};


//create react component
const App = function () {
    return (
        <div>
            <label className="label" htmlFor="name">Enter name: </label>
            <input type="text" id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}> {getButtonText()}</button>
        </div>
    );
};

//Take the react component and show it to screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
