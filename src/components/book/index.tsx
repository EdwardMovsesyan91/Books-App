import React from "react";


export class Book extends React.Component<any, any>{

    render() {


        const { author, country, imageLink, language, link, pages, title, year } = this.props
        const cardStyle = { marginTop: "20px" }
        const alt = "Book Image"
        return (
            <div className={"column"} style={cardStyle}>
                <div className="card">
                    <h3>Title: {title}</h3>
                    <p><img alt={alt} width="175" src={imageLink} /></p>
                    <h5>Author: {author}</h5>
                    <p>Year: {year}</p>
                    <p>Country: {country}</p>
                    <p >Language: {language}</p>
                    <p><a href={link}>Wikipedia Link</a></p>
                    <p>Pages: {pages}</p>
                </div>
            </div>)
    }
}

