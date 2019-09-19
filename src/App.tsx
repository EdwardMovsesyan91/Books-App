import React from 'react';
import './App.css';
import { BookList } from './components/bookList/index'
// import { Book } from './components/book/index';
import { bookData } from './images/index'


class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props)

    this.state = { filteredBookList: bookData, fullBookList: bookData }
    console.log(this)
  }

  render() {
    const { fullBookList, filteredBookList } = this.state;
    console.log(this)
    return (
      <div className="App" >


        <div>
          <input placeholder="Write book title" onChange={(e) => {
            const searchValue = e.target.value.toLowerCase();
            const filteredData = fullBookList.filter((product: any) => { return product.title.toLowerCase().includes(searchValue) })
            console.log(filteredData)
            this.setState({ filteredBookList: filteredData })
          }} />
        </div>

        <span> Find Hebrew only</span>



        {filteredBookList.length ? <BookList books={filteredBookList} /> : <h1> There is no title with that name, please make sure you write the title name correctly...</h1>}
        {/* <Book {...fullBookList[0]} /> */}
      </div >
    );
  }
}

export default App;
