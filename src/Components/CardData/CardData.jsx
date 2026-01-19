import React from 'react';
import { Calendar } from 'lucide-react';
const CardData = ({data,handleClick}) => {
    console.log(data);
    const {title,status,priority,customer,description
,createdAt


}= data;

  
    return (
        <div onClick={()=>{handleClick(data)}} className="max-w-[440px] bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      {/* Header Area */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-[18px] font-semibold text-slate-800 leading-tight">
          {title}
        </h3>
        <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
          {status}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>

      {/* Footer Meta Data */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100 text-[13px]">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-medium">#1001</span>
          <span className="text-red-500 font-bold tracking-tight">{priority}
         </span>
        </div>

        <div className="flex items-center gap-4 text-slate-600">
          <span>{customer}</span>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-slate-400" />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CardData;
