import React from 'react';
import './App.css';
import { BookList } from './components/bookList/index'
// import { Book } from './components/book/index';
import { bookData } from './components/jasonData/DATA'
import { Search } from './components/search/index';
import { CreateProduct } from './components/create-book/index'

class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props)

    this.state = {
      searchValue: "",
      hebrewBook: false,
      cat: "all",
      //why should I add onSale:false in the constrator? if its works exactly the same way without it?
      filteredBookList: bookData,
      fullBookList: bookData,
    }
    console.log(this)
  }

  searchOperation = (searchValue: string, hebrewBook: Boolean, cat?: string): void => {

    const { fullBookList } = this.state
    const filteredData = fullBookList.filter((book: any) => {
      const _hebreBook = hebrewBook ? book.language === 'Hebrew' : true;
      console.log(_hebreBook)
      const isCat = cat !== "all" ? book.language === cat : true
      return book.title.includes(searchValue) && _hebreBook && isCat
    })
    this.setState({ cat, filteredBookList: filteredData, searchValue: searchValue, hebrewBook })

  }

  render() {
    const { fullBookList, filteredBookList, hebrewBook, searchValue } = this.state;
    const searchProps = { cat: this.state.cat, categories: getCategories(fullBookList), searchOperation: this.searchOperation, hebrewBook, searchValue }
    console.log(this)
    return (
      <div className="App" >

        <CreateProduct addProductToList={(product: any) => {
          const newData = [...this.state.fullBookList, { ...product, onSale: true }];
          this.setState({ filteredBookList: newData, fullBookList: newData })
        }} />
        <span>Find your book.</span>
        <Search key={this.state.import} {...searchProps} />


        {filteredBookList.length ? <BookList books={filteredBookList} /> : <h1> There is no title with that name, please make sure you write the title name correctly...</h1>}
        {/* <Book {...fullBookList[0]} /> */}
      </div >
    );
  }
}
function getCategories(books: Array<any>) {
  return Object.keys(books.reduce((allCats, p: any) => {
    return { ...allCats, [p.language]: true }
  }, { "all": true }))

}
export default App;
