import React from 'react';

const TableContainer: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <h1 className="text-xs p-1">Trade Overview</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Counterparties
              </th>
              <th scope="col" className="px-6 py-3">
                Limit Type
              </th>
              <th scope="col" className="px-6 py-3">
                Counterparty Signal
              </th>
              <th scope="col" className="px-6 py-3">
                Concentration Signal
              </th>
              <th scope="col" className="px-6 py-3">
                Lock
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-lime-500 rounded-full opacity-100"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-lime-500 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="animate-bounce p-2 bg-green-600 rounded-full"
                ></button>
              </td>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Modal Title</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the main thing people are controlled by!
                            Thoughts- their perception of themselves! They're slowed down by their perception of
                            themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I
                            could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-red-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-red-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-red-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-red-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-red-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BARC/LDN
              </th>
              <td className="px-6 py-2">001</td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-green-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2">
                <button className="animate-bounce p-2 bg-red-600 rounded-full"></button>
              </td>
              <td className="px-6 py-2 text-right">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" value="disabled" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContainer;
