import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GB from "./GB"
import US from "./US"
import Header from "./Header"

import "./css/bootstrap.min.css"
import "./css/font-awesome.min.css"
import "./css/style.css"

import WebFont from "webfontloader"
import Category from "./Category"
import Sportcategory from "./SportCategory"
import HealthCategory from "./HealthCategory"
import EntertainmentCategory from "./EntertainmentCategory"
import GeneralCategory from "./GeneralCategory"
import ScienceCategory from "./ScienceCategory"

WebFont.load({
  google: {
    families: ["Karla", "Lato", "Open Sans", "Roboto", "sans-serif"],
  },
})

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/GB" exact component={GB} />
            <Route path="/US" exact component={US} />
            <Route path="/categories" exact component={Category} />
            <Route path="/sport" exact component={Sportcategory} />
            <Route path="/health" exact component={HealthCategory} />
            <Route path="/general" exact component={GeneralCategory} />
            <Route path="/science" exact component={ScienceCategory} />
            <Route path="/entertainment" exact component={EntertainmentCategory} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
