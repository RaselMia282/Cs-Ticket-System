import React, { use } from 'react';
import CardData from '../CardData/CardData';

const Layout = ({ fetchData, handleClick, clicked,handleProgress }) => {
    const cards = use(fetchData);

    return (
        <div className='container mx-auto py-4 grid grid-cols-12 gap-6'>
            {/* left side */}
            <div className='col-span-8'>
                <h1 className="text-2xl font-bold mb-6 text-slate-800">Ticket System</h1>
                
                {/* card showing map */}
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    {cards.map(data => (
                        <CardData 
                            key={data.id} 
                            handleClick={handleClick} 
                            data={data} 
                        />
                    ))}
                </div>
            </div>

            {/* right-side */}
            <div className='col-span-4 bg-slate-50 p-6 min-h-screen rounded-xl border border-slate-200'>
                <h2 className="text-xl font-bold text-slate-700 mb-6">Task Status</h2>
                
                <div className="space-y-4">
                    {clicked.length > 0 ? (
                        clicked.map((card) => (
                            <div key={card.id} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                                <h4 className="text-[16px] font-semibold text-slate-800 mb-4">
                                    {card.title}
                                </h4>
                                <button 
                                onClick={()=>handleProgress(card)}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition-colors"
                                    
                                >
                                    Complete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-400 italic">No tasks selected yet.</p>
                    )}
                </div>

                {/* Resolved Task Section */}
                <div className="mt-10 pt-8 border-t border-slate-200">
                    <h2 className="text-xl font-bold text-slate-700 mb-2">Resolved Task</h2>
                    <p className="text-slate-400 text-sm">No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default Layout;