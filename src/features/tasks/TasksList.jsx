import { useGetTasksQuery } from "./tasksApiSlice";
import Task from "./Task";

const TasksList = () => {
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();

  let content;

  if (isLoading) content = <div>Loading...</div>;

  if (isError) {
    content = (
      <p className={isError ? "bg-red-500" : "bg-blue-400"}>
        {" "}
        {error?.data?.message}{" "}
      </p>
    );
  }

  if (isSuccess) {
    const { ids } = tasks;

    const tableContent = ids?.length
      ? ids.map((taskId) => <Task key={taskId} taskId={taskId} />)
      : null;

    content = (
      <>
        <div className="container mx-auto mt-8 p-4 bg-zinc-900 shadow-lg rounded-lg flex justify-center shadow-black">
          <h1>TASK LIST</h1>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-[#49d196]  hover:scale-105 text-black font-bold py-2 px-4 rounded m-10 space-between">
            + Add Task
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Priority
                </th>
                <th scope="col" className="px-6 py-3">
                  CreatedBy
                </th>
                <th scope="col" className="px-6 py-3">
                  CreatedAt
                </th>
                <th scope="col" className="px-6 py-3">
                  LastUpdate
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>{tableContent}</tbody>
          </table>
        </div>
      </>
    );
  }
  return content;
};

export default TasksList;
