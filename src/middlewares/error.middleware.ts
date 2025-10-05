import { Request, Response, NextFunction } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { logger } from "../utils/logger"; // If you created a logger

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.error(err.message || "Unhandled error");
    // Prisma validation / unique constraint errors
    if (err instanceof PrismaClientKnownRequestError) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    // Custom thrown errors
    if (err instanceof Error) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

    // Fallback for unexpected errors
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}
