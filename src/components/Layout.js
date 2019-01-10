import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
             <div className="App Site">
                        <Header />
                        {this.props.children}
                       <Footer  />
            </div>
        )
    }
}
export default Layout;