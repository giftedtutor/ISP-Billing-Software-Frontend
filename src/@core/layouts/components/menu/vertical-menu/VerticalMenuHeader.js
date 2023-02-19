// ** React Imports
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// ** Third Party Components
import { Disc, X, Circle } from 'react-feather'

// ** Config
import themeConfig from '@configs/themeConfig'

const VerticalMenuHeader = props => {
  // ** Props
  const { menuCollapsed, setMenuCollapsed, setMenuVisibility, setGroupOpen, menuHover } = props

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([])
  }, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {
      return (
        <Circle
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }

  return (
    <div className='navbar-header' style={{marinTop:200}} >
      <ul className='nav navbar-nav flex-row'  >
        <li className='nav-item mr-auto' >
          {/* <NavLink to='/' clasName="navbar-brand"> 
            <span className='brand-logo' >
              <img src={themeConfig.app.appLogoImage} height="65px" width="65px" alt='logo' />
            </span>
            
          </NavLink> */}
          <h2 style={{fontSize:20, marginTop:20}}>{themeConfig.app.appName}</h2>
        </li>
        <li></li>
        <li className='nav-item nav-toggle'>
          <div className='nav-link modern-nav-toggle cursor-pointer'>
            <Toggler />
            <X onClick={() => setMenuVisibility(false)} className='toggle-icon icon-x d-block d-xl-none' size={20} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default VerticalMenuHeader
