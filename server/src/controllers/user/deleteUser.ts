import { UnableToEditUserError } from '../../helpers/errors';
import { responseHandler } from '../../helpers/responseHandler';
import User from '../../models/userModel';

/**
 * Deletes a user from the database.
 * @param {Object} req - The request object containing the user ID.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the message "user was deleted successfully" if the user is deleted, or rejects with an error message if there is an error.
 */
export const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.body;

    await User.findOneAndDelete({ _id: userId });

    res.locals.data = { message: 'User deleted successfully' };
    responseHandler(res);
  } catch (error) {
    next(UnableToEditUserError);
  }
};
