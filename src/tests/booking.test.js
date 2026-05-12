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
    token = await getAuthToken();
    const res = await BookingService.createBooking(createbookingData);
    bookingId = res.data.bookingid;
  });



  it('GET /booking with filter', async () => {
    const res = await BookingService.getBookings({ firstname: 'Mateo' });
    expect(res.status).to.equal(200);
    expect(res.data).to.be.an('array');
  });

  it('POST /booking create booking', async () => {
    const res = await BookingService.createBooking(createbookingData);

    bookingId = res.data.bookingid;

    const validation = validateSchema(bookingSchema, res.data.booking);

    expect(validation.error).to.be.undefined;
    expect(res.status).to.equal(200);
    expect(res.data.booking.firstname).to.equal(createbookingData.firstname);
  });

  it('GET /booking/:id', async () => {
    // 🔥 FIX CI: usar bookingId creado
    const res = await BookingService.getBookingById(bookingId);

    const validation = validateSchema(bookingSchema, res.data);

    expect(validation.error).to.be.undefined;
    expect(res.status).to.equal(200);
  });

  it('POST /auth', async () => {
    token = await getAuthToken();
    expect(token).to.be.a('string');
  });

  it('PUT /booking/:id', async () => {
    const res = await BookingService.updateBooking(
      bookingId,
      { ...bookingData, firstname: 'Updated' },
      token
    );

    const validation = validateSchema(bookingSchema, res.data.booking);

    expect(validation.error).to.be.undefined;
    expect(res.status).to.equal(200);
  });

  it('DELETE /booking/:id', async () => {
    const res = await BookingService.deleteBooking(bookingId, token);

    expect(res.status).to.equal(201);
  });

  after(async () => {
    try {
      await BookingService.deleteBooking(bookingId, token);
    } catch (e) { }
  });

});