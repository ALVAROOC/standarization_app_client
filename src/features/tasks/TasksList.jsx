import { useGetTasksQuery } from "./tasksApiSlice";
import Task from "./Task";
import { Link } from "react-router-dom";
import ExcelUploader from '../fileLoaders/ExcelUploader';

const TasksList = () => {
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery(null, {
    pollinginterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

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
        {/* BODY CONTENT */}
        <div className="p-4 sm:ml-64 mt-20">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {/* ROW 1 */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  TASK LIST
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  title
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded ">
                <Link
                  to="/dash/tasks/new"
                  className="bg-[#49d196]  hover:scale-105 text-black font-bold py-2 px-4 rounded m-10 space-between hover:text-white"
                >
                  + New Task
                </Link>
              </div>
            </div>
            {/* ROW 3 */}
            <div className="relative flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 overflow-x-auto">
              {/* <div className="releative  shadow-md sm:rounded-lg m-5"> */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-400 uppercase bg-zinc-900">
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
              {/* </div> */}
            </div>
            
            <div className="relative flex items-center justify-center mb-4 ">
              <ExcelUploader/>
            </div>
          </div>
        </div>
      </>
    );
  }
  return content;
};

export default TasksList;
