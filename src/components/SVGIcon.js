import React from 'react';

class SVGIcon extends React.Component {
    render() {
        return (
            <span> <img onClick={this.props.onClick} src={this.props.icon} style={(this.props.width) ? {width: this.props.width} : {width: "25px"}} alt={this.props.alt} /> </span>
        )
    }
}

export default SVGIcon;