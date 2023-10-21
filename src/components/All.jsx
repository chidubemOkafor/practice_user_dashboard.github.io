import React, { useState, useContext, useEffect } from 'react';
import { AllObj } from './AllObj';
import { TabContext } from '../context/TabContext';

const All = () => {
  const { tab } = useContext(TabContext);
  const [objects, setObjects] = useState(AllObj);

  useEffect(() => {
    let filteredObjects = AllObj;

    if (tab === 'class') {
      filteredObjects = AllObj.filter((type) => type.type === 'class');
    } else if (tab === 'seminar') {
      filteredObjects = AllObj.filter((type) => type.type === 'seminar');
    } else if (tab === 'exam') {
      filteredObjects = AllObj.filter((type) => type.type === 'exam');
    }

    setObjects(filteredObjects);
  }, [tab]);

  return (
    <div className="gap-4 flex flex-col md:overflow-y-scroll overflow-hidden sm:overflow-hidden h-[60vh]">
      {objects.map((prop, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-3 py-5 border rounded-md border-purple-100 bg-white shadow-purple-100 shadow-lg"
        >
          <div>
            <p className={`${prop.typeStyle} uppercase`}>{prop.type}</p>
            <p className="text-[15px]">{prop.body}</p>
          </div>
          <div>
            <p className={`${prop.timeStyle} text-[15px]`}>{prop.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
