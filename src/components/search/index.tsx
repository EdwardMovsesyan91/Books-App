import React from "react";

export class Search extends React.Component<any, any>{

    render() {

        const { hebrewBook, searchValue, searchOperation, categories, cat, } = this.props

        return (
            <div>
                <div>
                    <input placeholder="Write here book title" value={searchValue} onChange={(e) => {
                        const search = e.target.value;
                        searchOperation(search, hebrewBook, cat);

                    }} />
                </div>

                
                <div>
                    Looking for Hebrew book? =>
            <input type="checkbox" onChange={(e) => {
                        const hebrewBook = e.target.checked;
                        searchOperation(searchValue, hebrewBook, cat);
                    }} />
                </div>

                <div>
                    Language Category:
                   <select value={this.props.cat} onChange={
                        (e) => {
                            const cat = e.target.value;
                            searchOperation(searchValue, hebrewBook, cat);
                        }
                    }>
                        {categories.map((item: any) => <option>  {item} </option>)}
                    </select>
                </div>


            </div>
        )
    }
}

