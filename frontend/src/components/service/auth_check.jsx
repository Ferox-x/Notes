import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import urls from '../../urls'
import {createNoticeServices} from './notifications_services'

function AuthCheck({component, create, ...props}) {

    const isAuth = useSelector(state => state.user.isAuth)

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            createNoticeServices(
                create,
                'Пожалуйста войдите или зарегистрируйтесь.'
            )
            navigate(urls.LOGIN)
        }
    })

    return (component)
}

export default AuthCheck
