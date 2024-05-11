import React from "react";

const Repositories = () => {
  return (
    <>
      <div className="flex flex-col w-[70%] p-4 container mx-auto">
        <table className="table-auto rounded-lg shadow-2xl w-[100%]">
          <thead>
            <tr>
              <th className="px-4 py-2">Repository name</th>
              <th className="px-4 py-2">Issues</th>
              <th className="px-4 py-2">Grade</th>
              <th className="px-4 py-2">Duplication</th>
              <th className="px-4 py-2">Last updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Repositories;
