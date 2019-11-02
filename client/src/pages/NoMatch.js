import React from 'react';

export default class NoMatch extends React.Component {

    render() {
        return (
            <div style={{ textAlign: "center", background: "yellow", marginLeft: "300px", marginRight: "300px", padding: "40px"}}>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            </div>
        )
    }
}



