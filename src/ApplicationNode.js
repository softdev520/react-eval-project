import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Switch, Route} from 'react-router-dom'
import history from 'services/history'
import App from './views/App'

export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {}

  render () {
    const {store} = this.props

    return (
      <div className='application-node'>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={App} />
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}
