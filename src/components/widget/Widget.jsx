import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

const Widget = ({ type }) => {
  let data

  //temp
  const amount = 100
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'UTENTI',
        isMoney: false,
        link: 'Vedi tutti gli utenti',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDINI',
        isMoney: false,
        link: 'Vedi tutti gli ordini',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(255, 215, 0, 0.2)',
            }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'GUADAGNI',
        isMoney: true,
        link: 'Vedi i guadagni',
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.2)',
            }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BILANCIO',
        isMoney: true,
        link: 'Vedi in dettaglio',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
            }}
          />
        ),
      }
      break
    default:
      break
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '€'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
