import { useState, useEffect } from "react";
import { useUpdateTaskMutation, useDeleteTaskMutation } from "./tasksApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { TASK_STATUS } from "../../config/tasksStatus";
import { TASK_PRIORITY } from "../../config/tasksPriorities";

const EditTaskForm = ({ task, users }) => {
  
  const [updateTask, { isLoading, isSuccess, isError, error }] =
    useUpdateTaskMutation();

  const [
    deleteTask,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeleteTaskMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [createdBy, setCreatedBy] = useState(task.createdBy);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  useEffect(() => {
    // console.log(isSuccess);
    if (isSuccess || isDelSuccess) {
      setTitle("");
      setDescription("");
      setCreatedBy("");
      setStatus([]);
      setPriority([]);
      navigate("/dash/tasks");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const oncreatedByChanged = (e) => setDescription(e.target.value);

  const onStatusChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setStatus(values);
  };

  const onPriorityChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setPriority(values);
  };

  const canSave =
    [title, description, createdBy, status, priority].every(Boolean) &&
    !isLoading;

  const onSaveTaskClicked = async (e) => {
    console.log(task.id, title, description, createdBy, status, priority);
    if (canSave) {
      await updateTask({
        id: task.id,
        title,
        description,
        createdBy,
        status,
        priority,
      });
    }
  };

  const onDeleteTaskClicked = async () => {
    await deleteTask({ id: task.id });
  };

  const options_users = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.username}
      </option>
    );
  });

  const options_status = Object.values(TASK_STATUS).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });
  const options_priority = Object.values(TASK_PRIORITY).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  //   let canSave;
  //   if (password) {
  //     canSave =
  //       [roles.length, validUsername, validPassword].every(Boolean) && !isLoading;
  //   } else {
  //     canSave = [roles.length, validUsername].every(Boolean) && !isLoading;
  //   }

  //   const errClass = isError || isDelError ? "errmsg" : "offscreen";
  //   const validUserClass = !validUsername ? "border-red-500" : "border-gray-300";
  //   const validPwdClass =
  //     password && !validPassword ? "border-red-500" : "border-gray-300";
  //   const validRolesClass = !Boolean(roles.length)
  //     ? "form__input--incomplete"
  //     : "";

  //   const errContent = (error?.data?.message || delerror?.data?.message) ?? "";S

  const content = (
    <>
      {/* BODY CONTENT */}
      <div className="p-4 sm:ml-64 mt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl">EDIT TASK</p>
            </div>

            {/* <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"></div> */}
          </div>
          {/* ROW 2 */}
          <div className="relative flex mb-4 rounded dark:bg-gray-800">
            {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5"> */}
            {/* <p className={errClass}>{errContent}</p> */}

            <form className="m-10 w-full" onSubmit={(e) => e.preventDefault()}>
              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 md:gap-6 mt-10">
                {/* USERNAME */}
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className={`
        block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white
         dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
         
         `}
                    placeholder=" "
                    required
                    value={title}
                    onChange={onTitleChanged}
                  />
                  <label
                    htmlFor="title"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Task Title
                  </label>
                </div>
                {/* Description */}
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text-area"
                    name="description"
                    id="description"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={description}
                    onChange={onDescriptionChanged}
                  />
                  <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Description
                  </label>
                </div>
              </div>

              {/* ROW  2 */}
              <div className="grid md:grid-cols-3 md:gap-6">
                {/* STATUS */}
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-white"
                  >
                    Select Status{" "}
                    
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={status}
                    onChange={onStatusChanged}
                    
                  >
                    {options_status}
                  </select>
                </div>
                {/* PRIORITY */}
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm cursor-pointer  font-medium text-gray-900 dark:text-white"
                  >
                    Select Priority{" "}
                    
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={priority}
                    onChange={onPriorityChanged}
                    
                  >
                    {options_priority}
                  </select>
                </div>
                {/* ASIGNED */}
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="assignedTo"
                    className="block mb-2 text-sm font-medium cursor-pointer  text-gray-900 dark:text-white"
                  >
                    Select User{" "}
                    
                  </label>
                  <select
                    id="assignedTo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={priority}
                    onChange={oncreatedByChanged}
                    
                  >
                    {options_users}
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  onClick={onSaveTaskClicked}
                  className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  //   disabled={!canSave}
                >
                  <FontAwesomeIcon icon={faSave} /> Save
                </button>
                <button
                  type="submit"
                  onClick={onDeleteTaskClicked}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  <FontAwesomeIcon icon={faTrashCan} /> Delete
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );

  return content;
};

export default EditTaskForm;
