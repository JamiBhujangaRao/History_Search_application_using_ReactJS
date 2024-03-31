import './index.css'

const BrowserItem = props => {
  const {details, onDelete} = props
  const {timeAccessed, title, domainUrl, logoUrl, id} = details

  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="list-items">
      <p className="timing">{timeAccessed}</p>
      <div className="history-container">
        <img className="history-logo" alt="domain logo" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        className="delete-btn"
        data-testid="delete"
        type="button"
        onClick={deleteItem}
      >
        <img
          alt="delete"
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
        />
      </button>
    </li>
  )
}

export default BrowserItem
