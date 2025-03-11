import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../firebaseConfig"; // Importă app pentru a obține instanța Firebase

// Obține instanța de autentificare
const auth = getAuth(app);

// Înregistrare utilizator
export const registerUser = async (name: string, email: string, password: string) => {
    try {
      // Creează utilizatorul cu email și parolă
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Actualizează profilul utilizatorului cu numele său
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

// Autentificare utilizator
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
