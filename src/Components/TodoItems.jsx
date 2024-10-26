import React from 'react';

export default function ToDoItem({ text }) {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition duration-300">
      <span className="text-gray-700">{text}</span>
      <button className="px-3  py-1 text-[0.95rem] text-red-500 bg-red-100 rounded-full hover:bg-red-200 focus:outline-none">
        Delete
      </button>
    </li>
  );
}
