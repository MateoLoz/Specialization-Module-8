import { expect } from 'chai';
import { BookingService } from '../services/booking.service.js';
import { bookingSchema } from '../schemas/booking.schema.js';
import { getAuthToken } from '../utils/auth.js';
import { bookingData, createbookingData } from '../test-data/booking.data.js';
import { validateSchema } from '../utils/validate.js';

describe('Booking API Tests', () => {
  let bookingId;
  let token;

  before(async () => {
    const auth = await getAuthToken();
    token = auth;
  });

  it('CREATE booking', async () => {
    const res = await BookingService.createBooking(createbookingData);
    bookingId = res.data.bookingid;

    const { error } = validateSchema(bookingSchema, res.data.booking);
    expect(error).to.be.undefined;
    expect(res.status).to.equal(200);
  });

  it('GET booking by id', async () => {
    const res = await BookingService.getBookingById(bookingId);
    expect(res.status).to.equal(200);
  });

  it('UPDATE booking', async () => {
    const res = await BookingService.updateBooking(
      bookingId,
      { ...bookingData, firstname: 'Updated' },
      token
    );

    expect(res.status).to.equal(200);
  });

  it('DELETE booking', async () => {
    const res = await BookingService.deleteBooking(bookingId, token);
    expect(res.status).to.equal(201);
  });

  after(async () => {
    if (bookingId && token) {
      await BookingService.deleteBooking(bookingId, token);
    }
  });
});