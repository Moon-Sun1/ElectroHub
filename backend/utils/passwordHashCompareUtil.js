import {compare} from 'bcrypt';
import hashPassword from './passwordHashUtil.js';

async function comparePassword(plainPassword, storedHash) {
    try {
        // Compare the plain password with the stored hash.
        // Bcrypt automatically extracts the salt from the storedHash and uses it.
        const isMatch = await compare(plainPassword, storedHash);
        return isMatch;
    } catch (error) {
        console.error('Error comparing password:', error);
        throw new Error('Failed to compare password');
    }
}

// Example usage (simulating a login attempt):
(async () => {
    const userProvidedPassword = 'mySecurePassword123!';
    // In a real application, you would retrieve this from your database
    const storedHashedPassword = await hashPassword(userProvidedPassword); // Hash the password for storage
    // Example hash, replace with actual hash from your database

        const isPasswordValid = await comparePassword(userProvidedPassword, storedHashedPassword);
        if (isPasswordValid) {
           console.log('Password is valid!'); 
        }
        else {
            console.log('Invalid password!');
        }
   

})().catch(console.error);