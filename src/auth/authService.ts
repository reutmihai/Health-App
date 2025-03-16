import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig"; 


export const auth = getAuth(app);


export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const checkAuthStatus = (callback: (user: any) => void) => {
    return onAuthStateChanged(auth, (user) => {
      callback(user);
    });
  };


export const registerUser = async (name: string, email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name
        });
      }
  
      return userCredential.user;
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
