import { betterAuth } from 'better-auth';

// Initialize BetterAuth
const auth = betterAuth({
  providers: ['email'],
  redirectUrl: window.location.origin,
  onAuthStateChange: (user) => {
    // Handle auth state changes
    console.log('Auth state changed:', user);
  }
});

// Login function
export const login = async (email, password) => {
  try {
    const user = await auth.signIn(email, password);
    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register function
export const register = async (userData) => {
  try {
    const user = await auth.createUser({
      email: userData.email,
      password: userData.password,
      metadata: {
        pharmacyName: userData.pharmacyName,
        address: userData.address,
        phone: userData.phone,
        role: 'pharmacy'
      }
    });
    return user;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// Get current user
export const getCurrentUser = () => {
  return auth.getCurrentUser();
};

export default auth; 