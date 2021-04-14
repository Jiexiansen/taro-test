import { Component } from 'react'
import './app.less'

export enum CONTENT_TYPE {
  name,
  age,
  gender
}

console.log('CONTENT_TYPE', CONTENT_TYPE)

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
