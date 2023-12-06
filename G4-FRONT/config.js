const API_URL = import.meta.env.VITE_API_URL || 'http://localhost';
const API_PORT = import.meta.env.VITE_API_PORT || 3000;

export const API_BASE_URL = `${API_URL}:${API_PORT}/api`