import { useState, useContext, Fragment, useEffect } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import logo from '@src/assets/images/logo/logo.png'
import Cookies from 'js-cookie'
// import index from '../../../../src/@fake-db/jwt/index'
// import M from 'materialize'

import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import '@styles/base/pages/page-auth.scss'
import baseURL from '../../../baseURL/baseURL'


// toast-configuration method, 
// it is compulsory method.
toast.configure()

// export const email
// export const password


const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {Cookies.get('name')}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>{Cookies.get('name')} successfully logged in to ISP Billing Software!.</span>
    </div>
  </Fragment>
)

const Login = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [succ, setSucc] = useState('')

  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default


  //Dev Haris


  // useEffect(() => {

  //     PostData()
  // }, [])


  const onSubmit = data => {

    const ftn = () => {
      if (1 === 1) {
        if (isObjEmpty(errors)) {
          useJwt
            .login({ emaill: email, passwordd: password })
            .then(res => {
              const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
              dispatch(handleLogin(data))
              ability.update(res.data.userData.ability)
              history.push(getHomeRouteForLoggedInUser(data.role))
              toast.success(
                <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
                { transition: Slide, hideProgressBar: true, autoClose: 2000 }
              )
            })
            .catch(err => console.log(err))
        }
      } else {
        console.log('Incorrec detail')
      }
    }

    const PostData = () => {
      fetch(`${baseURL}/users/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }).then(response => response.json()).then(res => {
        console.log(data)
        if (res.message === "Logged In Successfully!") {

          Cookies.set("name", res.data.first_name)
          Cookies.set("email", res.data.email)
          Cookies.set("id", res.data._id)
          Cookies.set("userID", res.data._id)
          Cookies.set("token", res.data.token)
          Cookies.set("address", res.data.address)
          Cookies.set("role", 'Admin')
          ftn()
        } else {
          console.log("Somthing went Wrong!")
          toast(res.message)
        }
      }).catch(err => {
        console.log(err)
        toast(err)
      })
    }

    PostData()
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>

          <h2 className='brand-text text-primary ml-1'>ISP Billing Software</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Welcome ! 👋
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your ISP Billing Software and start the adventure!</CardText>
            <Alert color='primary'>
              <div className='alert-body font-small-2'>
                <p>
                  <small className='me-50'>
                    <span className='fw-bold'>Education is our passport to the future, for tomorrow belongs to the people who prepare for it today</span>
                  </small>
                </p>

              </div>
            </Alert>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input
                  autoFocus
                  type='email'
                  value={email}
                  id='login-email'
                  name='login-email'
                  placeholder='john@example.com'
                  onChange={e => setEmail(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-email'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  value={password}
                  id='login-password'
                  name='login-password'
                  // className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}

                  className={classnames({ 'is-invalid': errors['login-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple type='submit' color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>

          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
