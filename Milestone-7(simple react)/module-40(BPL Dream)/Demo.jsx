import React, { useState, Suspense } from 'react';
// Removed 'use' hook import as it was causing the TypeError

// Tailwind CSS is active
// For icons, we use Lucide-React equivalent (inline SVG)
const LucideDollarSign = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
// Mock Logo (Placeholder image)
const LogoPlaceholder = () => (
    <div className="w-[60px] h-[60px] bg-green-700 flex items-center justify-center rounded-full shadow-lg">
        <span className="text-white font-bold text-sm">BPL</span>
    </div>
);


// ----------------------------------------------------
// MOCK DATA (Player JSON)
// NOTE: We use this static data array directly now.
// ----------------------------------------------------
const playerJsonData = [
    {
        "id": 1,
        "name": "Shakib Al Hasan",
        "country": "Bangladesh",
        "allrounder": true,
        "batting_style": "Left-Hand Bat",
        "bowl_style": "Slow Left-Arm Orthodox",
        "price": 95,
        "player_image": "https://placehold.co/150x150/007bff/ffffff?text=Shakib"
    },
    {
        "id": 3,
        "name": "Andre Russell",
        "country": "West Indies",
        "allrounder": true,
        "batting_style": "Right-Hand Bat",
        "bowl_style": "Right-Arm Fast",
        "price": 120,
        "player_image": "https://placehold.co/150x150/ff4500/ffffff?text=Russell"
    },
    {
        "id": 5,
        "name": "Dawid Malan",
        "country": "England",
        "allrounder": false,
        "batting_style": "Left-Hand Bat",
        "bowl_style": "Legbreak",
        "price": 90,
        "player_image": "https://placehold.co/150x150/8a2be2/ffffff?text=Malan"
    },
    {
        "id": 10,
        "name": "Sunil Narine",
        "country": "West Indies",
        "allrounder": true,
        "batting_style": "Left-Hand Bat",
        "bowl_style": "Right-Arm Offbreak",
        "price": 105,
        "player_image": "https://placehold.co/150x150/20b2aa/ffffff?text=Narine"
    },
    {
        "id": 11,
        "name": "Litton Das",
        "country": "Bangladesh",
        "allrounder": false,
        "batting_style": "Right-Hand Bat",
        "bowl_style": "None",
        "price": 78,
        "player_image": "https://placehold.co/150x150/ffd700/000000?text=Litton"
    },
    { "id": 12, "name": "Tamim Iqbal", "country": "Bangladesh", "allrounder": false, "batting_style": "Left-Hand Bat", "bowl_style": "None", "price": 85, "player_image": "https://placehold.co/150x150/00008b/ffffff?text=Tamim" },
    { "id": 13, "name": "Mohammad Amir", "country": "Pakistan", "allrounder": false, "batting_style": "Left-Hand Bat", "bowl_style": "Left-Arm Fast", "price": 65, "player_image": "https://placehold.co/150x150/483d8b/ffffff?text=Amir" }
];


// ----------------------------------------------------
// COMPONENT: AvalilableP
// Manages player selection and filtering
// ----------------------------------------------------

const AvalilableP = ({ playerData, budget, setBudget, selectedPlayers, setSelectedPlayers }) => {
    
    // Filter players who haven't been selected yet
    const availablePlayers = playerData.filter(
        (p) => !selectedPlayers.some((sp) => sp.id === p.id)
    );
    
    const MAX_PLAYERS = 5; // Limiting to 5 for easy testing, can be 11

    const selectPlayer = (player) => {
        if (selectedPlayers.length >= MAX_PLAYERS) {
            console.warn(`Team is full. Max ${MAX_PLAYERS} players allowed.`);
            return;
        }

        if (budget >= player.price) {
            setBudget(prev => prev - player.price);
            setSelectedPlayers(prev => [...prev, player]);
            console.log(`Player ${player.name} selected. Remaining budget: ${budget - player.price} Lakhs.`);
        } else {
            console.warn(`Insufficient funds: Cannot afford ${player.name}. Requires ${player.price} Lakhs, but only ${budget} Lakhs remaining.`);
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            
            {/* Display Selected Team (New Section) */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border-l-4 border-emerald-500">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Team ({selectedPlayers.length} / {MAX_PLAYERS})</h2>
                {selectedPlayers.length === 0 ? (
                    <p className="text-gray-500 italic">Select players to build your squad...</p>
                ) : (
                    <div className="flex flex-wrap gap-3">
                        {selectedPlayers.map(p => (
                            <span key={p.id} className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full shadow-md">
                                {p.name} ({p.price}L)
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-emerald-500 pb-2">
                Available Players ({availablePlayers.length})
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {availablePlayers.map(player => (
                    <div key={player.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
                        <div className="p-6">
                            <img 
                                src={player.player_image} 
                                alt={player.name} 
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-emerald-500 shadow-md"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = `https://placehold.co/96x96/9ca3af/ffffff?text=${player.name.split(' ')[0]}`;
                                }}
                            />
                            <h2 className="text-xl font-bold text-gray-900 text-center mb-1">{player.name}</h2>
                            <p className="text-sm text-center text-gray-500 mb-4">{player.country}</p>
                            
                            <div className="text-sm space-y-1">
                                <p><span className="font-semibold text-emerald-600">Price:</span> {player.price} Lakhs</p>
                                <p><span className="font-semibold text-gray-600">Batting:</span> {player.batting_style}</p>
                                <p><span className="font-semibold text-gray-600">Bowling:</span> {player.bowl_style || 'N/A'}</p>
                                <p>
                                    <span className="font-semibold text-gray-600">Role:</span> 
                                    <span className={`font-medium ${player.allrounder ? 'text-blue-600' : 'text-purple-600'}`}>
                                        {player.allrounder ? " All-Rounder" : " Specialist"}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={() => selectPlayer(player)}
                            disabled={budget < player.price || selectedPlayers.length >= MAX_PLAYERS}
                            className={`w-full py-3 text-white font-semibold transition duration-200 
                                ${budget >= player.price && selectedPlayers.length < MAX_PLAYERS
                                    ? 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md' 
                                    : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {selectedPlayers.length >= MAX_PLAYERS ? 'Team Full' : (budget >= player.price ? `Select (Costs ${player.price}L)` : 'Too Expensive')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ----------------------------------------------------
// COMPONENT: Navbar (Receives dynamic budget)
// ----------------------------------------------------

const Navbar = ({ budget }) => { // Accept budget as prop
    // Total budget is now dynamically updated
    return (
        <div className="bg-white shadow-xl sticky top-0 z-10">
            <div className="navbar max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                
                {/* Logo Section (Flex-1) */}
                <div className="flex items-center">
                    <a className="btn btn-ghost text-xl p-0 hover:bg-transparent" href="/">
                        <LogoPlaceholder />
                        <span className="text-2xl font-extrabold text-green-700 ml-2">BPL Team Builder</span>
                    </a>
                </div>
                
                {/* Budget/Coin Display Section */}
                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full shadow-inner border border-gray-300">
                    {/* Use the dynamic budget prop */}
                    <span className="text-lg font-mono text-gray-800">{budget.toLocaleString()}</span> 
                    <span className="text-sm font-semibold text-gray-600">Lakhs Available</span>
                    <LucideDollarSign className="w-5 h-5 text-yellow-600" /> 
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------------------
// MAIN COMPONENT: App
// Manages global states (Budget, Selected Players)
// ----------------------------------------------------

function App() {
    // Initial budget is 600 Lakhs
    const [budget, setBudget] = useState(600); 
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Pass the dynamic budget down */}
            <Navbar budget={budget} />
            
            {/* Suspense is removed since we are not using the unstable use() hook */}
            <AvalilableP 
                playerData={playerJsonData} 
                budget={budget}
                setBudget={setBudget}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
            />
        </div>
    );
}

// ----------------------------------------------------
// HTML/REACT SETUP
// ----------------------------------------------------
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// Add necessary imports and setup for standalone execution
// Note: This block is necessary for Canvas environment to run React standalone
// and includes Tailwind CSS for styling.
// ----------------------------------------------------
