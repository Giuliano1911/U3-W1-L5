import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import Settings from './components/Settings'
import Profile from './components/Profile'
import { Component } from 'react'

class App extends Component {
  state = {
    isMain: true,
    isSettings: false,
    isProfile: false,
  }

  setMain = () => {
    this.setState({
      isMain: true,
      isSettings: false,
      isProfile: false,
    })
  }
  setSettings = () => {
    this.setState({
      isMain: false,
      isSettings: true,
      isProfile: false,
    })
  }
  setProfile = () => {
    this.setState({
      isMain: false,
      isSettings: false,
      isProfile: true,
    })
  }

  render() {
    return (
      <>
        <header>
          <MyNav
            toMain={this.setMain}
            toSettings={this.setSettings}
            toProfile={this.setProfile}
          />
        </header>
        <main>
          {this.state.isMain && <MainContent />}
          {this.state.isSettings && <Settings />}
          {this.state.isProfile && <Profile />}
        </main>
        <footer>
          <MyFooter />
        </footer>
      </>
    )
  }
}

export default App
