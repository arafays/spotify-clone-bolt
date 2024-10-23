import { Home, Search, Library, Menu } from 'lucide-react';

export default function MobileNav({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="lg:hidden fixed bottom-20 w-full bg-zinc-900 border-t border-zinc-800 px-4 py-3">
      <div className="flex justify-between items-center">
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
          <Library className="h-6 w-6" />
          <span className="text-xs mt-1">Library</span>
        </a>
        <button 
          onClick={onMenuClick}
          className="flex flex-col items-center text-gray-400 hover:text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="text-xs mt-1">More</span>
        </button>
      </div>
    </div>
  );
}