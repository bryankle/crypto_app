// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     // dev code
// }

export const ROOT_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';