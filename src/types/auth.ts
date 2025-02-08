import type { User as FirebaseUser } from "firebase/auth"

export interface UserProfile {
  uid: string
  firstName: string
  lastName: string
  email: string
  username: string
  country: string
  createdAt: Date
}

export interface AuthContextType {
  user: FirebaseUser | null
  userProfile: UserProfile | null
  loading: boolean
  signup: (data: SignupData) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export interface SignupData {
  firstName: string
  lastName: string
  email: string
  password: string
  username: string
  country: string
}

