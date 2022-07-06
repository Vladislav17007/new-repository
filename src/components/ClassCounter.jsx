import React from "react";

class ClassCounter extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }*/

    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return(
            <><h1>{this.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button></>
            /*
            <><head>
            <link rel="stylesheet" href="style.css" />
            </head>
            <div class="block_row">
            <div class="container">
            <div class="block_column block_column1">
            <div class="div_1">1</div>
            </div>
            <div class="block_column block_column2">
            <div class="div_2">2</div>
            </div>
            <div class="block_column block_column3">
            <div class="div_3">3</div>
            </div>
            <div class="block_column block_column4">
            <div class="div_4">4</div>
            </div>
            <div class="block_column block_column5">
            <div class="div_5">5</div>
            </div>
            <div class="block_column block_column6">
            <div class="div_6">6</div>
            </div>
            </div>
            </div></>
            */
            )
                                        }
                                        }

                                        export default ClassCounter;