import React from 'react';

class SVGIcon extends React.Component {
    render() {
        return (
            <span> <img src={this.props.icon} style={(this.props.width) ? {width: this.props.width} : {width: "25px"}} /> </span>
        )
    }
}

export default SVGIcon;