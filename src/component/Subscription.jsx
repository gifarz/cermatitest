import React from 'react';
import './js/script';

class Subscription extends React.Component {
  render() {
    return (
      <div className="subscription">
        <div className="subs-bg">
          <div className="subs-content">
            <h3 className="subs-content-h">Get latest updates in web technologies <span id="close-x" className="close">&times;</span> </h3>
            <p className="subs-content-p">I write articles related to web technologies, such as design trends, development
            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
            them all.</p>

            <div className="subs-bottom">
              <input type="text" placeholder="Email addres" className="subs-text"/>
              <button className="subs-btn">Count me in!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Subscription;