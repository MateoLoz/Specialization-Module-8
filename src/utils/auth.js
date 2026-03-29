import { BookingService } from "../services/booking.service.js";
import { ENV } from "../config/env.js";

// auxiliar function for some test in booking

export const getAuthToken = async () => {
  const res = await BookingService.auth({
    username: ENV.AUTH.username,
    password: ENV.AUTH.password
  });
  if (!res.data.token) {
    throw new Error(`Auth failed: ${JSON.stringify(res.data)}`);
  }

  return res.data.token;
};