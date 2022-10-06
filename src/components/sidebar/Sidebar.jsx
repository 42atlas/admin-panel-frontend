import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>archiviadmin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <span>dashboard</span>
          </li>
          <li>
            <span>dashboard</span>
          </li>
          <li>
            <span>dashboard</span>
          </li>
          <li>
            <span>dashboard</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>colors</div>
    </div>
  )
}

export default Sidebar
