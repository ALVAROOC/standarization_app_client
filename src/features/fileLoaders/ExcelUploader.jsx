import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelUploader = () => {
  const [checklistData, setChecklistData] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        // Read Excel file
        const workbook = await readExcelFile(file);

        // Convert sheet to checklist data
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Group checklist items by tag
        const groupedData = groupByTag(rawData);

        // Set checklist data in state
        setChecklistData(groupedData);

        console.log('Excel file uploaded and checklist data generated.');
      } catch (error) {
        console.error('Error processing Excel file:', error);
      }
    }
  };

  const readExcelFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          resolve(workbook);
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const groupByTag = (data) => {
    // Group checklist items by tag
    const groupedData = data.reduce((result, item) => {
      const tag = item[0]; // Assuming tag is in the first column
      const name = item[1]; // Assuming name is in the second column

      if (!result[tag]) {
        result[tag] = [];
      }

      result[tag].push({ name });

      return result;
    }, {});

    return groupedData;
  };

  return (
    <div className='mt-10'>
      <div className="max-w-sm cursor-pointer">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
      <input className="block w-full text-md mb-10 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept=".xlsx" onChange={handleFileChange}/>
      </div>
      {/* <input type="file" accept=".xlsx" onChange={handleFileChange} /> */}

      <div className="grid grid-cols-10 gap-4 mb-4">
      {checklistData && Object.keys(checklistData).slice(1).map((tag, index) => (
          <div key={index} className="">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              {tag}
            </h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {checklistData[tag].map((item, itemIndex) => (
                <li key={itemIndex} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id={`tech-checkbox-${index}-${itemIndex}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
              dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`tech-checkbox-${index}-${itemIndex}`}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                    >
                      {item.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      ))}
      </div>
    </div>
  );
};

export default ExcelUploader;
