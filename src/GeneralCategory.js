import React from "react"
import "./App.css"
import axios from "axios"
import Article from "./Article"

const url = "https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=790e07422bf2463f8d0b5c6c6c5688d3"

class GeneralCategory extends React.Component {
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

  componentDidMount() {
    this.fetchData()
  }
  render() {
    return (
      <div className="container">
        {" "}
        <div className="row">
          {this.state.isLoaded ? (
            this.state.dataToShow.splice(0, 5).map((item) => {
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

export default GeneralCategory
