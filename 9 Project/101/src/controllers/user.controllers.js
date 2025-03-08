import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary";
import { ApiResponse } from "../utils/ApiResponse";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body; // Extract all required fields from request body

  // Check if all fields are provided
  if ([fullName, username, email, password].some((field) => !field)) {
    throw new ApiError(400, "All fields are required"); // Throw error if any field is missing
  }

  // Check if user already exists with the same fullName, username or email
  const existingUser = await User.findOne({
    $or: [{ fullName }, { username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(400, "User already exists"); // Throw error if user already exists
  }

  // Handle the images
  const avatarLocalPath = req.files?.avatar?.[0]?.path; // Get avatar local path
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path; // Get cover image local path

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required"); // Throw error if avatar is missing
  }

  // Upload avatar to cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) {
    throw new ApiError(500, "Error uploading avatar"); // Throw error if avatar upload fails
  }

  // Upload cover image to cloudinary if provided
  let coverImage;
  if (coverImageLocalPath) {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  }

  // Create user in database
  const user = await User.create({
    fullName,
    username,
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || "", // Use cover image URL if available, otherwise empty string
  });

  // Retrieve created user without password and refresh token
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user"); // Throw error if user creation fails
  }

  // Return success response with created user
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

export { registerUser };
