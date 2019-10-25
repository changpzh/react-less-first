import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
const { render } = ReactDOM;


/* replace 为true的时，点击链接后将使用新地址替换掉上一次访问的地址*/
const Links = () => (
    <nav>
        <Link to="/">主页</Link>
        <Link to="/about">About-页面</Link>
        <Link replace to="/contact">Contact-页面</Link>
        <Link to="/user">User</Link>
        <Link to="/nested">Nested-页面</Link>
    </nav>
);

const App = () => (
    <BrowserRouter>
        <div>
            <AddressBar/>
            <Links />
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
            <Route path="/user" render={UserNested} />
            <Route path="/nested" render={Nested} />
        </div>
    </BrowserRouter>
);
const UserNested = () => (
    <div>
        <Link to={"/user/zhou"}>zhou</Link>
        <Link to={"/user/chang"}>chang</Link>
        <Link to={"/user/ping"}>ping</Link>
        <Route path={"/user/:username"} render={({match}) => <h2>URL: {(match.params.username || "opos!").toUpperCase()}</h2> }/>
    </div>
);


const Nested = () => (
    <div>
        <Link to="/nested/one">One</Link>
        <Link to="/nested/two">Two</Link>
        <Link replace to="/nested/Three">Three</Link>
        <div>选择一个点击</div>
        <Route path="/nested/:minooo?" render={({match}) => <h2>URL: {match.params.minooo || 'minooo'}</h2>} />
    </div>
);



const User = ({ match }) => {
    console.log("zhoucpaing math:=%j", match);
    return <h1>Hello {match.params.username}!</h1>
};

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
);

render(<App/>, document.getElementById('root'))
