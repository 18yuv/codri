import rateLimit from 'express-rate-limit';


const rateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 10, // 10 requests per window
    message: 'Too many attempts, please try again later'
});

export default rateLimiter;