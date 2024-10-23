import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  return (
    <div className="h-20 bg-zinc-900 border-t border-zinc-800 fixed bottom-0 w-full px-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-4 flex-1 lg:flex-initial">
        <img 
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
          alt="Album cover" 
          className="w-12 h-12 rounded hidden sm:block"
        />
        <div>
          <h4 className="text-sm text-white truncate">Summer Nights</h4>
          <p className="text-xs text-gray-400 hidden sm:block">Artist Name</p>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center gap-2 flex-1 max-w-[45%]">
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:scale-105 transition">
            <Play className="h-5 w-5 text-black" fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-gray-400">1:45</span>
          <div className="h-1 rounded-full flex-1 bg-zinc-600">
            <div className="bg-white w-1/3 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:25</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Volume2 className="h-5 w-5 text-gray-400" />
        <div className="w-24 h-1 rounded-full bg-zinc-600">
          <div className="bg-white w-1/2 h-1 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Player Controls */}
      <div className="flex lg:hidden items-center gap-4">
        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
          <Play className="h-5 w-5 text-black" fill="black" />
        </button>
        <button className="text-gray-400">
          <SkipForward className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}