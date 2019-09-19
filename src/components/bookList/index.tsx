import React from 'react'
import { Book } from '../book/index'

export class BookList extends React.Component<any, any>{

    render() {
        const { books } = this.props;

        return (
            <div>
                {books.map((element: any, index: any) => <Book key={books[index].imageLink} {...element} />)}
            </div>
        )
    }
}

