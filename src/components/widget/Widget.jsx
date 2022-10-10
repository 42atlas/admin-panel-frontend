import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null)
  const [diff, setDiff] = useState(null)
  let data

  //temp

  switch (type) {
    case 'user':
      data = {
        title: 'UTENTI',
        isMoney: false,
        link: 'Vedi tutti gli utenti',
        query: 'users',
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

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date()
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))

      const lastMonthQuery = query(
        collection(db, data.query),
        where('timeStamp', '<=', today),
        where('timeStamp', '>', lastMonth)
      )
      const prevMonthQuery = query(
        collection(db, data.query),
        where('timeStamp', '<=', lastMonth),
        where('timeStamp', '>', prevMonth)
      )

      const lastMonthData = await getDocs(lastMonthQuery)
      const prevMonthData = await getDocs(prevMonthQuery)

      setAmount(lastMonthData.docs.length)
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      )
    }
    fetchData()
  }, [])

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
        <div className={`percentage ${diff < 0 ? 'negative' : 'positive'}`}>
          {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
