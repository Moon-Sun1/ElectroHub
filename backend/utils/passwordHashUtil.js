import { genSalt , hash } from "bcrypt";

/**
 * 
 */
export default async function hashPassword(plainPassword) {
    try {
        // Generate a salt with a cost factor (e.g., 10 rounds).
        // A higher number means more secure but slower.
        // 10 is a good starting point, adjust based on your server's CPU load.
        // Each increment doubles the time.
        const saltRounds = 10;
        const salt = await genSalt(saltRounds);
        console.log('Generated Salt:', salt);

        // Hash the password with the generated salt
        const hashedPassword = await hash(plainPassword, salt);

        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Failed to hash password');
    }
}

// Example usage:
(async () => {
    const userPassword = 'mySecurePassword123!';
    const hashed = await hashPassword(userPassword);
    console.log('Original Password:', userPassword);
    console.log('Hashed Password:', hashed);
    // Store this 'hashed' value in your database along with the user's details.
})();