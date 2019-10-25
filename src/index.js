import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './index.css';
const { render } = ReactDOM;


const isActiveFunc = (match) => {
    console.log(match,'contact');
    return match;
};

const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeStyle={{color: 'green', fontWeight: 'bold'}} to={{pathname: '/about'}}>About</NavLink>
        <NavLink
            isActive={isActiveFunc}
            activeClassName="active"
            to="/contact">Contact</NavLink>
    </nav>
)

const App = () => (
    <BrowserRouter basename={'/zhou'}>
        <div>
            <AddressBar/>

            <Links />

            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
        </div>
    </BrowserRouter>
)

/* 为了展示URL的变化的组件 请无视我*/
const AddressBar = () => (
    <Route render={({ location, history}) => (
        <div className="address-bar">
            <div>
                <button
                    className="ab-button"
                    onClick={history.goBack}
                >◀︎</button>
            </div>
            <div>
                <button
                    className="ab-button"
                    onClick={history.goForward}
                >▶</button>
            </div>
            <div className="url">URL: {location.pathname}</div>
        </div>
    )}/>
)


render(<App/>, document.getElementById('root'))
