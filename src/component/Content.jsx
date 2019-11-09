import React from 'react';
import Cards from './Cards';


class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <h1 className="content-h">How Can I Help You ?</h1>
                <p className="content-p">Our work then targeted, best practices outcomes social innovation synergy.
                Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                program areas scale.</p>
                <Cards/>
            </div>
        )
    }
}

export default Content;