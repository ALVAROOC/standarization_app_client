import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectTaskById } from './tasksApiSlice'

const Task = ({ taskId }) => {
    const task = useSelector(state => selectTaskById(state, taskId))

    const navigate = useNavigate()

    if (task) {
        const created = new Date(task.createdAt).toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})
        const updated = new Date(task.updatedAt).toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})

        const handleEdit = () => navigate(`/dash/users/${taskId}`)

        // const userRolesString = user.roles.toString().replaceAll(',', ', ')

        const cellStatus = task.status !== "Completed" ? '' : 'bg-green-900';

        console.log(cellStatus)

        return (

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${cellStatus}`}>
            {task.title}
            </th>
            <td className={`px-6 py-4 ${cellStatus}`}>
            {task.description}
            </td>
            <td className={`px-6 py-4 ${cellStatus}`}>
            {task.status}
            </td>
            <td className={`px-6 py-4 ${cellStatus}`}>
            {task.priority}
            </td>
            <td className={`px-6 py-4 ${cellStatus}`}>
            {task.created_by}
            </td>
            <td className={`px-6 py-4 ${cellStatus}`}>
            {created}
            </td>
            <td className={`px-6 py-4 ${cellStatus}`}>
            {updated}
            </td>
            <td className={`px-6 py-4 text-right ${cellStatus}`}>
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
export default Task