import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  password: string;
  avatar: string;
  school: string;
  grade: string;
  joinDate: string;
  totalScore: number;
  gamesPlayed: number;
  correctAnswers: number;
  totalQuestions: number;
  streak: number;
  bestStreak: number;
  topicProgress: Record<string, TopicProgress>;
  achievements: string[];
}

export interface TopicProgress {
  topicId: string;
  topicName: string;
  attempts: number;
  bestScore: number;
  totalCorrect: number;
  totalQuestions: number;
  lastPlayed: string;
  completed: boolean;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (username: string, password: string) => boolean;
  register: (userData: Omit<User, 'id' | 'joinDate' | 'totalScore' | 'gamesPlayed' | 'correctAnswers' | 'totalQuestions' | 'streak' | 'bestStreak' | 'topicProgress' | 'achievements'>) => boolean;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  updateTopicProgress: (topicId: string, topicName: string, correct: number, total: number) => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AVATARS = ['🧑‍🔬', '👩‍🔬', '🧑‍🎓', '👩‍🎓', '🦸‍♂️', '🦸‍♀️', '🧙‍♂️', '🧙‍♀️', '🥷', '👨‍🚀', '👩‍🚀', '🤖'];

const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

// Demo users for leaderboard
const DEMO_USERS: User[] = [
  {
    id: 'demo1',
    username: 'fisika_pro',
    displayName: 'Andi Pratama',
    email: 'andi@demo.com',
    password: 'demo123',
    avatar: '🧑‍🔬',
    school: 'SMP Negeri 1 Jakarta',
    grade: 'Kelas 8',
    joinDate: '2024-01-15',
    totalScore: 2850,
    gamesPlayed: 28,
    correctAnswers: 85,
    totalQuestions: 100,
    streak: 5,
    bestStreak: 12,
    topicProgress: {},
    achievements: ['first_game', 'perfect_score', 'streak_5'],
  },
  {
    id: 'demo2',
    username: 'science_queen',
    displayName: 'Siti Nurhaliza',
    email: 'siti@demo.com',
    password: 'demo123',
    avatar: '👩‍🔬',
    school: 'SMP Negeri 5 Bandung',
    grade: 'Kelas 9',
    joinDate: '2024-02-01',
    totalScore: 2400,
    gamesPlayed: 24,
    correctAnswers: 72,
    totalQuestions: 96,
    streak: 3,
    bestStreak: 8,
    topicProgress: {},
    achievements: ['first_game', 'streak_3'],
  },
  {
    id: 'demo3',
    username: 'newton_jr',
    displayName: 'Budi Santoso',
    email: 'budi@demo.com',
    password: 'demo123',
    avatar: '🧑‍🎓',
    school: 'SMP Negeri 3 Surabaya',
    grade: 'Kelas 7',
    joinDate: '2024-03-10',
    totalScore: 1950,
    gamesPlayed: 20,
    correctAnswers: 58,
    totalQuestions: 80,
    streak: 2,
    bestStreak: 6,
    topicProgress: {},
    achievements: ['first_game'],
  },
  {
    id: 'demo4',
    username: 'einstein_girl',
    displayName: 'Dewi Lestari',
    email: 'dewi@demo.com',
    password: 'demo123',
    avatar: '👩‍🎓',
    school: 'SMP Negeri 2 Yogyakarta',
    grade: 'Kelas 8',
    joinDate: '2024-01-20',
    totalScore: 3200,
    gamesPlayed: 32,
    correctAnswers: 95,
    totalQuestions: 110,
    streak: 8,
    bestStreak: 15,
    topicProgress: {},
    achievements: ['first_game', 'perfect_score', 'streak_5', 'all_topics'],
  },
  {
    id: 'demo5',
    username: 'quantum_kid',
    displayName: 'Rizky Firmansyah',
    email: 'rizky@demo.com',
    password: 'demo123',
    avatar: '🦸‍♂️',
    school: 'SMP Negeri 4 Medan',
    grade: 'Kelas 9',
    joinDate: '2024-02-15',
    totalScore: 1600,
    gamesPlayed: 16,
    correctAnswers: 48,
    totalQuestions: 64,
    streak: 1,
    bestStreak: 4,
    topicProgress: {},
    achievements: ['first_game'],
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = localStorage.getItem('physicsquest_users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      // Initialize with demo users
      setUsers(DEMO_USERS);
      localStorage.setItem('physicsquest_users', JSON.stringify(DEMO_USERS));
    }

    // Check if user is already logged in
    const currentUser = localStorage.getItem('physicsquest_current_user');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const saveUsers = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
    localStorage.setItem('physicsquest_users', JSON.stringify(updatedUsers));
  };

  const login = (username: string, password: string): boolean => {
    const allUsers = [...users];
    const foundUser = allUsers.find(
      u => (u.username === username || u.email === username) && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
      localStorage.setItem('physicsquest_current_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = (userData: Omit<User, 'id' | 'joinDate' | 'totalScore' | 'gamesPlayed' | 'correctAnswers' | 'totalQuestions' | 'streak' | 'bestStreak' | 'topicProgress' | 'achievements'>): boolean => {
    const allUsers = [...users];
    
    // Check if username or email already exists
    if (allUsers.some(u => u.username === userData.username || u.email === userData.email)) {
      return false;
    }

    const newUser: User = {
      ...userData,
      id: generateId(),
      joinDate: new Date().toISOString().split('T')[0],
      totalScore: 0,
      gamesPlayed: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      streak: 0,
      bestStreak: 0,
      topicProgress: {},
      achievements: ['welcome'],
    };

    const updatedUsers = [...allUsers, newUser];
    saveUsers(updatedUsers);
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('physicsquest_current_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('physicsquest_current_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('physicsquest_current_user', JSON.stringify(updatedUser));

    // Update in users list
    const allUsers = users.map(u => u.id === user.id ? updatedUser : u);
    saveUsers(allUsers);
  };

  const updateTopicProgress = (topicId: string, topicName: string, correct: number, total: number) => {
    if (!user) return;

    const existingProgress = user.topicProgress[topicId];
    const score = correct * 100;
    const now = new Date().toISOString().split('T')[0];

    let newProgress: TopicProgress;
    if (existingProgress) {
      newProgress = {
        ...existingProgress,
        attempts: existingProgress.attempts + 1,
        bestScore: Math.max(existingProgress.bestScore, score),
        totalCorrect: existingProgress.totalCorrect + correct,
        totalQuestions: existingProgress.totalQuestions + total,
        lastPlayed: now,
        completed: correct === total ? true : existingProgress.completed,
      };
    } else {
      newProgress = {
        topicId,
        topicName,
        attempts: 1,
        bestScore: score,
        totalCorrect: correct,
        totalQuestions: total,
        lastPlayed: now,
        completed: correct === total,
      };
    }

    // Check achievements
    const newAchievements = [...user.achievements];
    if (correct === total && !newAchievements.includes('perfect_score')) {
      newAchievements.push('perfect_score');
    }
    const topicsCompleted = Object.keys({ ...user.topicProgress, [topicId]: newProgress }).filter(
      key => ({ ...user.topicProgress, [topicId]: newProgress }[key] as TopicProgress)?.completed
    ).length;
    if (topicsCompleted >= 5 && !newAchievements.includes('all_topics')) {
      newAchievements.push('all_topics');
    }

    const newStreak = correct === total ? user.streak + 1 : 0;
    const newBestStreak = Math.max(user.bestStreak, newStreak);
    if (newStreak >= 5 && !newAchievements.includes('streak_5')) {
      newAchievements.push('streak_5');
    }
    if (newStreak >= 10 && !newAchievements.includes('streak_10')) {
      newAchievements.push('streak_10');
    }

    const updates: Partial<User> = {
      topicProgress: { ...user.topicProgress, [topicId]: newProgress },
      totalScore: user.totalScore + score,
      gamesPlayed: user.gamesPlayed + 1,
      correctAnswers: user.correctAnswers + correct,
      totalQuestions: user.totalQuestions + total,
      streak: newStreak,
      bestStreak: newBestStreak,
      achievements: newAchievements,
    };

    if (user.gamesPlayed === 0 && !newAchievements.includes('first_game')) {
      updates.achievements = [...newAchievements, 'first_game'];
    }

    updateUser(updates);
  };

  return (
    <AuthContext.Provider value={{
      user,
      users,
      login,
      register,
      logout,
      updateUser,
      updateTopicProgress,
      isLoggedIn,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AVATARS };
