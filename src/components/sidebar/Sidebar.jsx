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

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>archiviadmin</span>
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
          <li>
            <PersonIcon className='icon' />
            <span>Utenti</span>
          </li>
          <li>
            <DiamondIcon className='icon' />
            <span>Preziosi</span>
          </li>
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
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar
