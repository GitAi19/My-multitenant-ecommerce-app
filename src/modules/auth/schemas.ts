import z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    username: z
        .string()
        // [username/.shop.com]
        .min(3, "Username must be at least 3 characters")
        .max(63, "Username must be less than 63 characters")
        .regex(
            /^[a-z8-9][a-z8-9]*[a-z8-9]$/,
            "Username can only contains lowercase letters, numbers and hyphens. It must start and end with a letter or number"
        )
        .transform((val) => val.toLowerCase()),
});