import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100, // Límite peticiones por IP por minuto
  message: "Too many requests from this IP, please try again later.",
  headers: true,
});

export default limiter;
