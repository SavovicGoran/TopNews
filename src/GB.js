import React from "react"
import "./App.css"
import axios from "axios"
import Article from "./Article"

const url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=790e07422bf2463f8d0b5c6c6c5688d3"

class GB extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataToShow: [],
      isLoaded: false,
      searchTerm: "",
    }
  }

  fetchData = () => {
    axios.get(url).then((response) => {
      const res = response.data
      console.log(res)

      const capture = res.articles

      this.setState({
        dataToShow: capture,
        isLoaded: true,
      })
    })
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  isSearched = (searchTerm) => (item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }

  componentDidMount() {
    this.fetchData()
  }
  render() {
    return (
      <div className="container">
        {" "}
        <Search onChange={this.onSearchChange}></Search>
        <div className="row">
          {this.state.isLoaded ? (
            this.state.dataToShow.filter(this.isSearched(this.state.searchTerm)).map((item) => {
              return <Article key={item} details={item} />
            })
          ) : (
            <div>
              <h2>Loading News from server...</h2>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const Search = (props) => {
  return (
    <form onSubmit={() => this.onSubmit}>
      <label>{props.children}</label>
      <input className="data" type="text" onChange={props.onChange} />
      <button type="submit">search</button>
    </form>
  )
}

export default GB
