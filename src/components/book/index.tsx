import React from "react";


export class Book extends React.Component<any, any>{
    onChangeInput = (e: any) => {
        this.setState({ quantity: e.target.value || 1 })
    }
    render() {


        const { author, country, imageLink, language, link, pages, title, year, addToCart, deleteButton } = this.props

        const alt = "Book Image"
        return (
            <div>
                <table style={{ width: "1000px", margin: "auto" }}>
                    <tr>
                        <th><img alt={alt} width="75" src={imageLink} /></th>
                        <th>{title}</th>
                        <th>{author}</th>
                        <th>{year}</th>
                        <th>{country}</th>
                        <th>{language}</th>
                        <th><a href={link}>Wikipedia Link</a></th>
                        <th>{pages}</th>
                        <th>{addToCart && <div>quantity<input onChange={this.onChangeInput} type="number" /></div>}</th>
                        <th>{addToCart && <button onClick={() => { addToCart({ ...this.props, addToCart: false, deleteButton: true })}}>Buy</button>}</th>
                        <th>{deleteButton && <button onClick={() => { }}>Delete</button>}</th>
                    </tr>
                </table>
            </div>)
    }
}

