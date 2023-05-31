import asyncHandler from 'express-async-handler';

// @desc   Auth user / set token
// route   POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(401)
  throw new Error('Opps, I did it again')
  
  res.status(200).json({ message: 'Auth User'});
});

export {
  authUser
};
