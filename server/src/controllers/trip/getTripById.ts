import { TripNotFoundError } from "../../helpers/errors";
import { getTripByIdService } from "../../services/trip/getTripByIdService";

/**
 * Retrieves a trip by its ID and returns the trip details.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the trip details.
 */
export const getTripById = async (req, res,next) => {
  try {
    const { tripId } = req.params;

    const tripDetails = await getTripByIdService(tripId);

    res.status(200).json(tripDetails);
  } catch (error) {
    next(TripNotFoundError)
  }
};
