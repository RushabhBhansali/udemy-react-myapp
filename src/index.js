//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//create react component
const App = function () {
    return (
        <div>
            <label classs="label" htmlFor="name">Enter name: </label>
            <input type="text" id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}> Submit</button>
        </div>
    );
};

//Take the react component and show it to screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
