import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'

const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))

    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')

        const cellStatus = user.active ? '' : 'bg-red-200 dark:bg-red-700';

        const created = new Date(user.createdAt).toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})
        const updated = new Date(user.updatedAt).toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})

        return (

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${cellStatus}`}>
            {user.username}
            </th>
            <td className="px-6 py-4">
            {userRolesString}
            </td>
            <td className="px-6 py-4">
            {user.email}
            </td>
            <td className="px-6 py-4">
            {user.active ? 'Active' : 'Inactive'}
            </td>
            <td className="px-6 py-4">
            {created}
            </td>
            <td className="px-6 py-4">
            {updated}
            </td>
            <td className="px-6 py-4 text-right">
            <button
                        className="icon-button table__button text-yellow-200 flex justify-center"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
            </td>
            </tr>
        )

    } else return null
}
export default User