export const userProfile = {
  name: "Arjun",
  role: "EV Owner",
  location: "Bengaluru, India",
  vehicle: "Tata Nexon EV"
};
 
export const stations = [
  { id: 1, name: 'Tata Power EZ Charge', address: 'Indiranagar, Bengaluru', price: '₹18/kWh', available: 4, total: 6, type: 'Fast DC', top: '30%', left: '40%' },
  { id: 2, name: 'Jio-bp Pulse', address: 'Koramangala, Bengaluru', price: '₹20/kWh', available: 0, total: 4, type: 'Level 2', top: '60%', left: '70%' },
  { id: 3, name: 'Ather Grid', address: 'HSR Layout, Bengaluru', price: '₹15/kWh', available: 2, total: 2, type: 'Fast DC', top: '20%', left: '80%' },
  { id: 4, name: 'ChargeZone', address: 'Whitefield, Bengaluru', price: '₹19/kWh', available: 3, total: 8, type: 'Level 2', top: '70%', left: '20%' },
];
 
export const initialHistory = [
  { id: 101, station: 'Tata Power EZ Charge', date: 'Oct 24, 2026', duration: '45 mins', cost: '₹450', status: 'Completed' },
  { id: 102, station: 'Ather Grid', date: 'Oct 20, 2026', duration: '30 mins', cost: '₹300', status: 'Completed' },
];