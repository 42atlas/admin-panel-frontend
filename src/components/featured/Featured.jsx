import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Guadagni Totali</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className='title'>Vendite totali di oggi</p>
        <p className='amount'>€429</p>
        <p className='desc'>
          La transazione precedente non é ancora stata processata. L'ultimo
          pagamento potrebbe non essere incluso
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Obbiettivo</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>€12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Ultima Settimana</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>€12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Ultimo Mese</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>€12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
