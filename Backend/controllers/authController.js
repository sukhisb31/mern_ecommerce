import { errorMiddleware } from "../middlewares/errorMiddleware.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import database from "../database/db.js";

export const register = catchAsyncError(async(req, res, next) =>{});
export const login = catchAsyncError(async(req, res, next) =>{});
export const getUser = catchAsyncError(async(req, res, next) =>{});
export const logout = catchAsyncError(async(req, res, next) =>{});
