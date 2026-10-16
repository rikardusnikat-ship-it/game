// Skenario Engine - Adaptive Learning System
// Menghitung persentase kesalahan dan menentukan level intervensi

export interface PerformanceMetrics {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  errorPercentage: number;
  currentStreak: number;
  consecutiveErrors: number;
  timePerQuestion: number[];
  avgTimePerQuestion: number;
}

export interface SkenarioLevel {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  errorRange: [number, number]; // [min%, max%]
  interventions: Intervention[];
  scaffoldingConfig: ScaffoldingConfig;
}

export interface Intervention {
  type: 'hint' | 'explanation' | 'visual' | 'example' | 'step-by-step';
  trigger: 'auto' | 'manual' | 'time-based' | 'error-based';
  delay?: number; // seconds before auto-trigger
  content?: string;
}

export interface ScaffoldingConfig {
  autoUnlockLevels: number[]; // which levels to auto-unlock
  maxLevel: number;
  showAllLevels: boolean;
  forceExpand: boolean;
  notificationMessage: string;
}

export const SKENARIO_LEVELS: SkenarioLevel[] = [
  {
    id: 0,
    name: 'Mandiri',
    description: 'Siswa mampu menjawab dengan baik tanpa bantuan',
    icon: '🦅',
    color: 'text-green-300',
    gradient: 'from-green-500/20 to-emerald-500/20',
    errorRange: [0, 25],
    interventions: [],
    scaffoldingConfig: {
      autoUnlockLevels: [],
      maxLevel: 0,
      showAllLevels: false,
      forceExpand: false,
      notificationMessage: '',
    },
  },
  {
    id: 1,
    name: 'Perlu Sedikit Bantuan',
    description: 'Siswa mulai kesulitan, butuh petunjuk ringan',
    icon: '💡',
    color: 'text-blue-300',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    errorRange: [26, 50],
    interventions: [
      {
        type: 'hint',
        trigger: 'auto',
        delay: 15,
        content: 'Coba pikirkan kembali konsep dasarnya',
      },
    ],
    scaffoldingConfig: {
      autoUnlockLevels: [1],
      maxLevel: 2,
      showAllLevels: true,
      forceExpand: false,
      notificationMessage: '💡 Kamu mulai kesulitan, bantuan Level 1 tersedia!',
    },
  },
  {
    id: 2,
    name: 'Butuh Bimbingan',
    description: 'Siswa kesulitan sedang, butuh pertanyaan penuntun',
    icon: '🤔',
    color: 'text-indigo-300',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    errorRange: [51, 75],
    interventions: [
      {
        type: 'hint',
        trigger: 'auto',
        delay: 10,
        content: 'Identifikasi variabel yang diketahui dan ditanya',
      },
      {
        type: 'explanation',
        trigger: 'error-based',
        content: 'Coba gunakan rumus yang sesuai dengan variabel tersebut',
      },
    ],
    scaffoldingConfig: {
      autoUnlockLevels: [1, 2],
      maxLevel: 3,
      showAllLevels: true,
      forceExpand: true,
      notificationMessage: '🤔 Kamu butuh bimbingan, scaffolding Level 1-2 terbuka!',
    },
  },
  {
    id: 3,
    name: 'Perlu Bantuan Intensif',
    description: 'Siswa sangat kesulitan, butuh konsep kunci dan langkah penyelesaian',
    icon: '🔑',
    color: 'text-purple-300',
    gradient: 'from-purple-500/20 to-pink-500/20',
    errorRange: [76, 90],
    interventions: [
      {
        type: 'hint',
        trigger: 'auto',
        delay: 8,
        content: 'Perhatikan rumus yang menghubungkan variabel-variabel ini',
      },
      {
        type: 'step-by-step',
        trigger: 'error-based',
        content: 'Ikuti langkah-langkah penyelesaian secara berurutan',
      },
      {
        type: 'example',
        trigger: 'time-based',
        delay: 20,
        content: 'Lihat contoh soal serupa di penjelasan',
      },
    ],
    scaffoldingConfig: {
      autoUnlockLevels: [1, 2, 3],
      maxLevel: 4,
      showAllLevels: true,
      forceExpand: true,
      notificationMessage: '🔑 Kamu butuh bantuan intensif, scaffolding Level 1-3 terbuka!',
    },
  },
  {
    id: 4,
    name: 'Mode Terpandu',
    description: 'Siswa membutuhkan penjelasan lengkap dan bimbingan penuh',
    icon: '📖',
    color: 'text-pink-300',
    gradient: 'from-pink-500/20 to-rose-500/20',
    errorRange: [91, 100],
    interventions: [
      {
        type: 'hint',
        trigger: 'auto',
        delay: 5,
        content: 'Baca penjelasan lengkap dengan seksama',
      },
      {
        type: 'step-by-step',
        trigger: 'auto',
        delay: 5,
        content: 'Ikuti setiap langkah penyelesaian',
      },
      {
        type: 'explanation',
        trigger: 'auto',
        delay: 5,
        content: 'Pahami konsep di balik rumus ini',
      },
      {
        type: 'visual',
        trigger: 'auto',
        delay: 10,
        content: 'Perhatikan diagram atau ilustrasi jika ada',
      },
    ],
    scaffoldingConfig: {
      autoUnlockLevels: [1, 2, 3, 4],
      maxLevel: 4,
      showAllLevels: true,
      forceExpand: true,
      notificationMessage: '📖 Mode Terpandu aktif! Semua scaffolding tersedia untuk membantumu.',
    },
  },
];

export class SkenarioEngine {
  private metrics: PerformanceMetrics;
  private currentSkenario: SkenarioLevel;
  private questionHistory: boolean[]; // true = correct, false = wrong

  constructor() {
    this.metrics = {
      totalQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      errorPercentage: 0,
      currentStreak: 0,
      consecutiveErrors: 0,
      timePerQuestion: [],
      avgTimePerQuestion: 0,
    };
    this.currentSkenario = SKENARIO_LEVELS[0];
    this.questionHistory = [];
  }

  // Record question result
  recordAnswer(isCorrect: boolean, timeSpent: number): void {
    this.metrics.totalQuestions++;
    this.questionHistory.push(isCorrect);

    if (isCorrect) {
      this.metrics.correctAnswers++;
      this.metrics.currentStreak++;
      this.metrics.consecutiveErrors = 0;
    } else {
      this.metrics.wrongAnswers++;
      this.metrics.currentStreak = 0;
      this.metrics.consecutiveErrors++;
    }

    this.metrics.timePerQuestion.push(timeSpent);
    this.metrics.avgTimePerQuestion =
      this.metrics.timePerQuestion.reduce((a, b) => a + b, 0) /
      this.metrics.timePerQuestion.length;

    this.updateErrorPercentage();
    this.updateSkenario();
  }

  private updateErrorPercentage(): void {
    if (this.metrics.totalQuestions === 0) {
      this.metrics.errorPercentage = 0;
    } else {
      this.metrics.errorPercentage =
        (this.metrics.wrongAnswers / this.metrics.totalQuestions) * 100;
    }
  }

  private updateSkenario(): void {
    const errorPct = this.metrics.errorPercentage;
    
    // Find matching skenario based on error percentage
    const matchedSkenario = SKENARIO_LEVELS.find(
      (level) => errorPct >= level.errorRange[0] && errorPct <= level.errorRange[1]
    );

    if (matchedSkenario && matchedSkenario.id !== this.currentSkenario.id) {
      this.currentSkenario = matchedSkenario;
    }
  }

  // Get current skenario
  getCurrentSkenario(): SkenarioLevel {
    return this.currentSkenario;
  }

  // Get performance metrics
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  // Get scaffolding config for current skenario
  getScaffoldingConfig(): ScaffoldingConfig {
    return this.currentSkenario.scaffoldingConfig;
  }

  // Check if should auto-trigger intervention
  shouldAutoTrigger(interventionType: string, idleTime: number): boolean {
    const intervention = this.currentSkenario.interventions.find(
      (i) => i.type === interventionType && i.trigger === 'auto'
    );

    if (!intervention || !intervention.delay) return false;

    return idleTime >= intervention.delay;
  }

  // Get intervention message
  getInterventionMessage(interventionType: string): string | null {
    const intervention = this.currentSkenario.interventions.find(
      (i) => i.type === interventionType
    );

    return intervention?.content || null;
  }

  // Reset metrics
  reset(): void {
    this.metrics = {
      totalQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      errorPercentage: 0,
      currentStreak: 0,
      consecutiveErrors: 0,
      timePerQuestion: [],
      avgTimePerQuestion: 0,
    };
    this.currentSkenario = SKENARIO_LEVELS[0];
    this.questionHistory = [];
  }

  // Get skenario history
  getSkenarioHistory(): { skenario: SkenarioLevel; questionNumber: number }[] {
    const history: { skenario: SkenarioLevel; questionNumber: number }[] = [];
    let tempMetrics = { ...this.metrics, totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0 };

    for (let i = 0; i < this.questionHistory.length; i++) {
      tempMetrics.totalQuestions++;
      if (this.questionHistory[i]) {
        tempMetrics.correctAnswers++;
      } else {
        tempMetrics.wrongAnswers++;
      }

      const errorPct = (tempMetrics.wrongAnswers / tempMetrics.totalQuestions) * 100;
      const skenario = SKENARIO_LEVELS.find(
        (level) => errorPct >= level.errorRange[0] && errorPct <= level.errorRange[1]
      );

      if (skenario) {
        history.push({ skenario, questionNumber: i + 1 });
      }
    }

    return history;
  }
}

// Export singleton instance
export const skenarioEngine = new SkenarioEngine();
