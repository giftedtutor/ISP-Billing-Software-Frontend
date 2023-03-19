// ** React Imports
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import UserP from '../../../../assets/images/UserIcon.jpg'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'
import Cookies from 'js-cookie'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import axios from 'axios'
import baseURL from '../../../../baseURL/baseURL'
import { toast } from 'react-toastify'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  const role = Cookies.get('email')
  const name = Cookies.get('name')
  const fileInputRef = useRef(null)

  // ** State
  const [userData, setUserData] = useState(null)
  const [image, setImage] = useState('')
  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }

    if (
      Cookies.get("id") === "" ||
      Cookies.get("id") === null ||
      Cookies.get("id") === undefined
    ) {
      dispatch(handleLogout())
    }

  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  const uploadImageFunction = () => {
    const File = fileInputRef.current.files[0]

    const formData = new FormData()
    formData.append("files", File)

    if (File) {
      axios.post(`${baseURL}/generals/uploadImage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          if (res.data.messsage === "Files Uploaded") {

            setImage(res.data.data[0]?.img)
            Cookies.set("profilePicture", res.data.data[0]?.img)
            axios.put(`${baseURL}/users/updateUserDetails`, {
              _id: Cookies.get("id"),
              profile_picture: res.data.data[0]?.img
            })
              .then(res2 => {
                if (res2.data.status === "ok") {
                  toast(res.data.message)
                } else {
                  toast("Somthing went Wrong - Error")
                }
              })
              .catch(err => {
                toast(err)
              })
            toast("Image Picked Up!")
          } else {
            toast("Somthing went Wrong while Uploading File!")
          }
        })
        .catch(err => {
        })
    }
  }
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          {/* <span className='user-name font-weight-bold'>{(userData && userData['username']) || 'John Doe'}</span>
          <span className='user-status'>{(userData && userData.role) || 'Admin'}</span> */}
          <span className='user-name font-weight-bold'> {name}</span>
          <span className='user-status'>{role}</span>
        </div>
        <Avatar img={`${baseURL}/files/${image === "" ? (Cookies.get("profilePicture")) : image}`} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu right>
        {/* <DropdownItem tag={Link} to='/pages/profile'>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/ISPBS/apps/email'>
          <Mail size={14} className='mr-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/ISPBS/apps/todo'>
          <CheckSquare size={14} className='mr-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/ISPBS/apps/chat'>
          <MessageSquare size={14} className='mr-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='mr-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/pricing'>
          <CreditCard size={14} className='mr-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/faq'>
          <HelpCircle size={14} className='mr-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem> */}
        <input type="file"
          className='form-control'
          onChange={(e) => {
            uploadImageFunction(e.target.files[0])
          }}
          ref={fileInputRef} />
        {/* <button onClick={uploadImageFunction}>Upload Image</button> */}
        <DropdownItem>
          <CheckSquare size={14} className='mr-75' />
          <span className='align-middle'>Update Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/ISPBS/login' onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
