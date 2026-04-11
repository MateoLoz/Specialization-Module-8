import { api } from '../client/apiClient.js';

export const BookingService = {
  getBookings: (params = {}) => api.get('/booking', { params }),
  getBookingById: (id) => api.get(`/booking/${id}`),
  createBooking: (data) => api.post('/booking', data),
  updateBooking: (id, data, token) =>
    api.put(`/booking/${id}`, data, {
      headers: { Cookie: `token=${token}` },
    }),
  deleteBooking: (id, token) =>
    api.delete(`/booking/${id}`, {
      headers: { Cookie: `token=${token}` },
    }),
  auth: (data) => api.post('/auth', data),
};
