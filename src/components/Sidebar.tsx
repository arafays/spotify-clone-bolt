import { Home, Search, Library, Plus, Heart, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarClasses = `
    fixed lg:relative
    w-[85vw] lg:w-64
    h-full
    bg-black
    flex flex-col
    transition-transform duration-300
    lg:translate-x-0
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    z-50
  `;

  return (
    <div className={sidebarClasses}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-white">
            <span className="text-green-500">Bolt</span>ify
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Home className="h-6 w-6 mr-4" />
            Home
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Search className="h-6 w-6 mr-4" />
            Search
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Library className="h-6 w-6 mr-4" />
            Your Library
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <button className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Plus className="h-6 w-6 mr-4 p-1 bg-gray-300 text-black rounded-sm" />
            Create Playlist
          </button>
          <button className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Heart className="h-6 w-6 mr-4 p-1 bg-gradient-to-br from-indigo-500 to-blue-300 text-white rounded-sm" />
            Liked Songs
          </button>
        </div>
      </div>
      
      <div className="mt-4 px-6">
        <div className="border-t border-gray-800 pt-4">
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">Playlist 1</div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer mt-2">Chill Vibes</div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer mt-2">Workout Mix</div>
        </div>
      </div>
    </div>
  );
}