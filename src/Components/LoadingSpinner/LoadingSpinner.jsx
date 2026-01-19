const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[400px] w-full">
            <div className="relative flex justify-center items-center">
                
                <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-slate-200"></div>
                
                
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                
                
                <div className="absolute h-4 w-4 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            
            
            <div className="mt-8 flex items-center gap-2">
                <span className="text-xl font-medium text-slate-600 tracking-widest uppercase">
                    Loading
                </span>
                
                <span className="flex gap-1">
                    <span className="animate-bounce delay-75 w-1 h-1 bg-slate-400 rounded-full"></span>
                    <span className="animate-bounce delay-100 w-1 h-1 bg-slate-400 rounded-full"></span>
                    <span className="animate-bounce delay-150 w-1 h-1 bg-slate-400 rounded-full"></span>
                </span>
            </div>
        </div>
    );
};

export default LoadingSpinner;