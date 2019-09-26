import React from "react";


export class Payment extends React.Component<any, any>{

    render() {


        const { } = this.props

        return (
            <div>
                <table style={{ width: "1000px", margin: "auto" }}>
                    <tr>
                        <th> Creditcard: <input type="text" /> </th>
                        <th> id number: <input type="number" /> </th>
                        <th> <button>Pay</button> </th>
                    </tr>
                </table>
            </div>)
    }
}

