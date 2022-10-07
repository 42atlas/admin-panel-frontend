import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DiamondIcon from '@mui/icons-material/Diamond'
import AssessmentIcon from '@mui/icons-material/Assessment'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>archiviadmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>PRINCIPALE</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTE</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className='icon' />
              <span>Utenti</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <DiamondIcon className='icon' />
              <span>Preziosi</span>
            </li>
          </Link>
          <li>
            <ShoppingCartIcon className='icon' />
            <span>Ordini</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Spedizioni</span>
          </li>
          <p className='title'>RISORSE</p>
          <li>
            <AssessmentIcon className='icon' />
            <span>Statistiche</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notifiche</span>
          </li>
          <p className='title'>SERVIZIO</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>Stato del sistema</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Accessi</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Impostazioni</span>
          </li>
          <p className='title'>UTENTE</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profilo</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
