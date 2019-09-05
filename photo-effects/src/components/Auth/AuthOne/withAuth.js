import React from 'react'
import {withRouter } from 'react-router-dom'

function withAuth(Component) {
    const Auth =(props) => {
        const isAuth = Boolean(localStorage.getItem('access_token'));

        if (!isAuth) {
            props.history.push('/')
        }

        return isAuth ? <Component {...props} /> : <div>you are not authorized</div>
        
    }
    return withRouter(Auth)
}

export default withAuth