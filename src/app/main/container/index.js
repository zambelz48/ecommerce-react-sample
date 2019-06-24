import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import AppView from './view'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const view = hot(module)(AppView)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(view)
