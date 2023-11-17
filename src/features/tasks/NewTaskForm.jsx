import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NewTaskForm = () => {
  return (
    <>
      {/* BODY CONTENT */}
      <div className="p-4 sm:ml-64 mt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* ROW 1 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                NEW TASK
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              
            </div>
            
          </div>
          {/* ROW 3 */}
          <div className="relative flex items-center justify-center mb-4 rounded ">
            <section className="">
              <div className="flex flex-col items-center justify-center ">
                <div className="">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl flex justify-center">
                      Create a Task
                    </h1>
                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            Title
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-teal-400 focus:border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="What do we have to do?"
                          />
                          {/* <p className="text-red-500 text-xs italic">
                            Please fill out this field.
                          </p> */}
                        </div>
                        <div className="w-full  px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                          >
                            Description
                          </label>
                          <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                            focus:border-teal-400 focus:border-2
                            "
                            id="grid-last-name"
                            type="text-area"
                            placeholder="Brief explanation..."
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                          htmlFor="priority"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Select Priority
                          </label>
                          <select
                            id="priority"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose a Priority</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                          htmlFor="AssignedTo"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Assigned To
                          </label>
                          <select
                            id="AssignedTo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose an Employee</option>
                            <option value="1">Employee1</option>
                            <option value="2">Employee2</option>
                            <option value="3">Employee3</option>
                            <option value="4">Employee4</option>
                          </select>
                        </div>
                      </div>
                      {/* <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                            htmlFor="grid-city"
                          >
                            City
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Albuquerque"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                          >
                            State
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                            >
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                            htmlFor="grid-zip"
                          >
                            Zip
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                          />
                        </div>
                      </div> */}
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <button className="bg-teal-700 hover:bg-teal-600 text-md w-full rounded-lg p-4 text-white" type="submit">
                          <FontAwesomeIcon
                            icon={faSave}
                            className="mr-2 text-white"
                          />
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTaskForm;
