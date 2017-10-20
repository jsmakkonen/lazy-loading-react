import React, { Component } from 'react'
import './Home.css'
import Button from '../NavButton/NavButton';

class Home extends Component {
    render () {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <h2 className="title">React Lazy Loading</h2>
                        <p className="text">A simple test app to demonstrate how lazy loading routes works in React.</p>
                        <section className="bottom">
                            <Button name="Go to About page" link="/about" />
                            <Button name="Go to Blog page" link="/blog" />
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;