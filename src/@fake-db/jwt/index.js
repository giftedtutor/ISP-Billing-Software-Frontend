import mock from '../mock'
import jwt from 'jsonwebtoken'

// import {email, password} from '../../views/pages/authentication/Login'
 
const emaill = 'admin@demo.com'
const passwordd = 'admin'
 
      // fetch("http://thesfb.live/ISPBS_Backend/api/login", {
      //     method:"post",
      //     headers:{
      //         "Content-Type":"application/json"
      //     },
      //     body:JSON.stringify({
      //         email,
      //         password     
            
      //     })
      // }).then(res => res.json()).then(data => {
      //   console.log(data)
      // }).catch(err => {
      //     console.log(err)
      // })


const data = {
  users: [
    {
      id: 1,
      fullName: '',
      username: '',
      passwordd,
      avatar: require('@src/assets/images/portrait/small/avatar-s-12.jpg').default,
      emaill,
      role: 'admin',
      ability: [ 
        {
          action: 'manage',
          subject: 'all'
        }
      ],
      extras: {
        eCommerceCartItemsCount: 5
      }
    },
    {
      id: 2,
      fullName: 'J',
      username: 'j',
      password: 'client',
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      email: 'client@demo.com',
      role: 'client',
      ability: [
        {
          action: 'read',
          subject: 'ACL'
        },
        {
          action: 'read',
          subject: 'Auth'
        }
      ],
      extras: {
        eCommerceCartItemsCount: 5
      }
    }
  ]
}

// ! These two secrets shall be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
  expireTime: '10m',
  refreshTokenExpireTime: '10m'
}

mock.onPost('http://127.0.0.1:8000/api/auth/login').reply(request => {
  const { email, password } = JSON.parse(request.data)
  
  let error = {
    email: ['Something went wrong']
  }

  const user = data.users.find(u => u.email === email && u.password === password)

  if (user) {
    try {
      const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })
      const refreshToken = jwt.sign({ id: user.id }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime
      })

      const userData = { ...user }

      delete userData.password

      const response = {
        userData,
        accessToken,
        refreshToken
      }

      return [200, response]
    } catch (e) {
      error = e
    }
  } else {
    error = {
      email: ['Email or Password is Invalid']
    }
  }

  return [400, { error }]
})

mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = data.users.find(user => user.email === email)
    const isUsernameAlreadyInUse = data.users.find(user => user.username === username)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }

    if (!error.username && !error.email) {
      const userData = {
        email,
        password,
        username,
        fullName: '',
        avatar: null,
        role: 'admin',
        ability: [
          {
            action: 'manage',
            subject: 'all'
          }
        ]
      }

      // Add user id
      const length = data.users.length
      let lastIndex = 0
      if (length) {
        lastIndex = data.users[length - 1].id
      }
      userData.id = lastIndex + 1

      data.users.push(userData)

      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })

      const user = Object.assign({}, userData)
      delete user['password']
      const response = { user, accessToken }

      return [200, response]
    } else {
      return [200, { error }]
    }
  }
})

mock.onPost('/jwt/refresh-token').reply(request => {
  const { refreshToken } = JSON.parse(request.data)

  try {
    const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

    const userData = { ...data.users.find(user => user.id === id) }

    const newAccessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn })
    const newRefreshToken = jwt.sign({ id: userData.id }, jwtConfig.refreshTokenSecret, {
      expiresIn: jwtConfig.refreshTokenExpireTime
    })

    delete userData.password
    const response = {
      userData,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    }

    return [200, response]
  } catch (e) {
    const error = 'Invalid refresh token'
    return [401, { error }]
  }
})
