import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RemoveIconCart = () => {
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    )
}

export default RemoveIconCart