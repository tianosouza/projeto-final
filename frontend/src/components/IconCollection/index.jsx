import React from 'react';

export function IconCollection({ icon, collection, active, onClick }) {
  return (
    <div className="w-40 h-50 text-gray-900 flex flex-col gap-2 items-center">
      <button
        onClick={onClick}
        className="w-30 h-30 bg-white-color rounded-full flex items-center justify-center cursor-pointer"
      >
        {React.cloneElement(icon, { active })}
      </button>
      <h5 className="font-bold">{collection}</h5>
    </div>
  );
}