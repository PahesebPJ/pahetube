import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Sidebar from './components/sidebar'
import Navbar from './components/navbar/navbar'
import Explore from './components/explore'
import Subscriptions from './components/subscriptions'
import CardContainer from './components/CardContainer/CardContainer'

//Styles
import './App.css';

function App() {
    const [state, setstate] = useState(true);

    var moveMediaContainer = {
        width: state ? '100vw' : '100%',
        marginLeft: state ? '220px' : '60px',
    }

    const ref = useRef(null);

    const toggleSidebar = () => {
        ref.current.changeValue();
        state ? setstate(false) : setstate(true);
    }

    return (
        <Router>
            <div className="container-sticky-elements">
                <Navbar toggleS={toggleSidebar}></Navbar>
                <div className="flex-container">
                    <Sidebar ref={ref}></Sidebar>
                    <div style={moveMediaContainer} className="media-container">
                        <Route exact path="/" component={CardContainer} />
                        <Route path="/explore" component={Explore} />
                        <Route path="/subscriptions" component={Subscriptions} />
                    </div>
                </div>
            </div>
        </Router>
    );

}

export default App
