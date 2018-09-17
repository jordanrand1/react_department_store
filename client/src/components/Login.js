import React, {Fragment} from 'react'
import { login } from '../fakeAuth'

const Login = ({history}) => (
  <Fragment>
    <h3>:ogin</h3>
    <button
      onClick={ () => {
        login()
        history.replaceState('/dashboard')
      }}>
      Login
    </button>
  </Fragment>
)


export default Login