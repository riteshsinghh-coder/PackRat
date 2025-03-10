import { PackNotFoundError } from '../../helpers/errors';
import { responseHandler } from '../../helpers/responseHandler';
import { getPackByIdService } from '../../services/pack/pack.service';

/**
 * Retrieves a pack by its ID and returns it as a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The pack object as a JSON response.
 */
export const getPackById = async (req, res, next) => {
  try {
    const { packId } = req.params;

    const pack = await getPackByIdService(packId);

    res.locals.data = pack;
    responseHandler(res);
  } catch (error) {
    next(PackNotFoundError);
  }
};
