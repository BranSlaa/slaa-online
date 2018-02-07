import React from "react";
import ReactDOM from "react";

class Pxtoremform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pxValue: 0, remValue: 0.0 };

        this.incrementNumber = this.incrementNumber.bind(this);
        this.copyTextToClipboard = this.copyTextToClipboard.bind(this);
    }

    incrementNumber(event) {
        const newValue = this.state.pxValue + 1;
        this.setState({ pxValue: parseInt(newValue) });
        this.setState({ remValue: newValue / 16.0 });
    }

    copyTextToClipboard() {
        document.getElementById("remVal").select();
        // event.target.select();
        document.execCommand("copy");
    }

    render() {
        return (
            <div>
                <input type="submit" value="+" onClick={this.incrementNumber} />
                <input
                    type="number"
                    onChange={this.incrementNumber}
                    value={this.state.pxValue}
                />
                <input id="remVal" type="number" value={this.state.remValue} />
                <input
                    type="submit"
                    value="Copy Value"
                    onClick={this.copyTextToClipboard}
                />
            </div>
        );
    }
}

export default Pxtoremform;
