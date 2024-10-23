import { Play, Heart } from 'lucide-react';

const playlists = [
  {
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    title: "RapCaviar",
    description: "New music from Drake, Travis Scott and more",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop"
  }
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-auto">
      <div className="px-4 sm:px-8 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Good afternoon</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div 
              key={index}
              className="flex items-center bg-white/5 rounded-md hover:bg-white/10 transition-colors group"
            >
              <img 
                src={playlist.imageUrl}
                alt={playlist.title}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-l-md object-cover"
              />
              <div className="flex-1 flex items-center justify-between p-4">
                <span className="text-white font-semibold text-sm sm:text-base">{playlist.title}</span>
                <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Play fill="black" className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Made for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {playlists.map((playlist, index) => (
            <div 
              key={index} 
              className="bg-zinc-800/40 p-3 sm:p-4 rounded-md hover:bg-zinc-800 transition-colors group"
            >
              <div className="relative mb-4">
                <img 
                  src={playlist.imageUrl}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute bottom-2 right-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-lg translate-y-2 group-hover:translate-y-0">
                  <Play fill="black" className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{playlist.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}