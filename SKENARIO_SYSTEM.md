# 🎯 Sistem Skenario Adaptif - PhysicsQuest

## 📊 Overview

Sistem Skenario Adaptif adalah engine pembelajaran cerdas yang menganalisis performa siswa secara real-time dan menyesuaikan tingkat bantuan (scaffolding) berdasarkan persentase kesalahan jawaban. Sistem ini memastikan setiap siswa mendapatkan bantuan yang tepat sesuai dengan kemampuan mereka.

---

## 🎮 5 Level Skenario

### Level 0: Mandiri 🦅
- **Range Kesalahan**: 0-25%
- **Deskripsi**: Siswa mampu menjawab dengan baik tanpa bantuan
- **Intervensi**: Tidak ada
- **Scaffolding**: Tidak ada auto-unlock
- **Warna**: Hijau (Green)

**Karakteristik Siswa:**
- Memahami konsep dengan baik
- Mampu menyelesaikan soal secara mandiri
- Tidak memerlukan bantuan scaffolding

---

### Level 1: Perlu Sedikit Bantuan 💡
- **Range Kesalahan**: 26-50%
- **Deskripsi**: Siswa mulai kesulitan, butuh petunjuk ringan
- **Intervensi**:
  - Auto-hint setelah 15 detik diam
  - Pesan: "Coba pikirkan kembali konsep dasarnya"
- **Scaffolding**: Auto-unlock Level 1, max Level 2
- **Warna**: Biru (Blue)

**Karakteristik Siswa:**
- Mulai ragu-ragu dengan jawaban
- Butuh konfirmasi konsep dasar
- Masih bisa menyelesaikan dengan sedikit bantuan

---

### Level 2: Butuh Bimbingan 🤔
- **Range Kesalahan**: 51-75%
- **Deskripsi**: Siswa kesulitan sedang, butuh pertanyaan penuntun
- **Intervensi**:
  - Auto-hint setelah 10 detik diam
  - Error-based explanation
  - Pesan: "Identifikasi variabel yang diketahui dan ditanya"
- **Scaffolding**: Auto-unlock Level 1-2, max Level 3, force expand
- **Warna**: Indigo

**Karakteristik Siswa:**
- Kesulitan mengidentifikasi variabel
- Butuh bantuan untuk memilih rumus yang tepat
- Perlu bimbingan langkah demi langkah

---

### Level 3: Perlu Bantuan Intensif 🔑
- **Range Kesalahan**: 76-90%
- **Deskripsi**: Siswa sangat kesulitan, butuh konsep kunci dan langkah penyelesaian
- **Intervensi**:
  - Auto-hint setelah 8 detik diam
  - Step-by-step guidance
  - Example setelah 20 detik
  - Pesan: "Perhatikan rumus yang menghubungkan variabel-variabel ini"
- **Scaffolding**: Auto-unlock Level 1-3, max Level 4, force expand
- **Warna**: Ungu (Purple)

**Karakteristik Siswa:**
- Sangat kesulitan dengan konsep
- Butuh penjelasan detail
- Perlu contoh soal serupa

---

### Level 4: Mode Terpandu 📖
- **Range Kesalahan**: 91-100%
- **Deskripsi**: Siswa membutuhkan penjelasan lengkap dan bimbingan penuh
- **Intervensi**:
  - Auto-hint setelah 5 detik diam
  - Auto step-by-step setelah 5 detik
  - Auto explanation setelah 5 detik
  - Auto visual setelah 10 detik
  - Pesan: "Mode Terpandu aktif! Semua scaffolding tersedia untuk membantumu."
- **Scaffolding**: Auto-unlock semua level, force expand
- **Warna**: Pink

**Karakteristik Siswa:**
- Hampir tidak bisa menjawab tanpa bantuan
- Memerlukan bimbingan penuh
- Butuh penjelasan lengkap dengan visual

---

## 🔄 Cara Kerja Sistem

### 1. Inisialisasi
```typescript
const skenarioEngine = new SkenarioEngine();
```
- Engine diinisialisasi saat game dimulai
- Metrics dimulai dari 0 (Level 0: Mandiri)

### 2. Recording Jawaban
```typescript
skenarioEngine.recordAnswer(isCorrect, timeSpent);
```
Setiap kali siswa menjawab:
- Record apakah benar/salah
- Catat waktu yang dihabiskan
- Update metrics (total, correct, wrong, error%)
- Update skenario level berdasarkan error%

### 3. Perhitungan Error Percentage
```typescript
errorPercentage = (wrongAnswers / totalQuestions) × 100
```

**Contoh:**
- Soal 1: Salah → Error = 100% → Level 4
- Soal 2: Benar → Error = 50% → Level 2
- Soal 3: Benar → Error = 33% → Level 1
- Soal 4: Benar → Error = 25% → Level 0

### 4. Adaptive Scaffolding
Berdasarkan skenario level, sistem:
- **Auto-unlock** level scaffolding tertentu
- **Force expand** panel scaffolding
- **Show notification** tentang perubahan level
- **Apply intervention** (hint, explanation, dll)

### 5. Visual Feedback
- **SkenarioIndicator** menampilkan:
  - Level skenario aktif (icon + nama)
  - Performance metrics (total, benar, salah)
  - Error percentage bar
  - Skenario progress (5 level bars)
  - Active interventions list

---

## 📈 Analytics & Tracking

### Performance Metrics
```typescript
interface PerformanceMetrics {
  totalQuestions: number;        // Total soal yang dijawab
  correctAnswers: number;        // Jumlah jawaban benar
  wrongAnswers: number;          // Jumlah jawaban salah
  errorPercentage: number;       // Persentase kesalahan (0-100)
  currentStreak: number;         // Streak jawaban benar saat ini
  consecutiveErrors: number;     // Jumlah kesalahan berturut-turut
  timePerQuestion: number[];     // Waktu per soal (detik)
  avgTimePerQuestion: number;    // Rata-rata waktu per soal
}
```

### Skenario History
```typescript
interface SkenarioHistory {
  skenario: SkenarioLevel;       // Level skenario pada soal tersebut
  questionNumber: number;        // Nomor soal
}
```

**Contoh History:**
```
Soal 1: Level 4 (Mode Terpandu) - Salah
Soal 2: Level 2 (Butuh Bimbingan) - Benar
Soal 3: Level 1 (Perlu Sedikit Bantuan) - Benar
Soal 4: Level 0 (Mandiri) - Benar
```

### Scaffold Data
```typescript
interface ScaffoldData {
  totalHintsUsed: number;        // Total hint yang digunakan
  avgScaffoldLevel: number;      // Rata-rata level scaffolding
  autoTriggered: number;         // Berapa kali auto-trigger
  manualTriggered: number;       // Berapa kali manual trigger
  skenarioHistory: SkenarioHistory[]; // History skenario per soal
}
```

---

## 🎨 UI Components

### SkenarioIndicator
Komponen floating di kanan atas yang menampilkan:
- **Header**: Icon + nama skenario + deskripsi
- **Stats Grid**: 3 kartu (Total, Benar, Salah)
- **Error Bar**: Progress bar error percentage
- **Level Progress**: 5 bar untuk 5 level skenario
- **Interventions**: List intervensi yang aktif

**Visual Design:**
- Glass morphism effect
- Color-coded berdasarkan level
- Smooth transitions
- Responsive layout

### Notification System
Toast notification muncul saat:
- Skenario level berubah
- Auto-trigger aktif
- Force expand terjadi

**Contoh Pesan:**
- "💡 Kamu mulai kesulitan, bantuan Level 1 tersedia!"
- "🤔 Kamu butuh bimbingan, scaffolding Level 1-2 terbuka!"
- "📖 Mode Terpandu aktif! Semua scaffolding tersedia untuk membantumu."

---

## 🧠 Pedagogi di Balik Sistem

### 1. Zone of Proximal Development (ZPD)
Sistem memastikan siswa berada di ZPD mereka:
- **Terlalu mudah** → Tidak ada bantuan (Level 0)
- **Tepat challenging** → Sedikit bantuan (Level 1-2)
- **Terlalu sulit** → Banyak bantuan (Level 3-4)

### 2. Adaptive Learning
- **Personalized**: Setiap siswa mendapat bantuan sesuai kemampuan
- **Dynamic**: Level berubah real-time berdasarkan performa
- **Progressive**: Bantuan meningkat seiring kesulitan

### 3. Scaffolding Fading
- Siswa didorong mandiri dulu
- Bantuan hanya jika benar-benar butuh
- Level scaffolding tidak di-reset antar soal (accumulative)

### 4. Metacognition
- Siswa sadar level kemampuan mereka
- Visual feedback membantu self-assessment
- Analytics untuk refleksi belajar

---

## 🔧 Implementasi Teknis

### SkenarioEngine Class
```typescript
class SkenarioEngine {
  private metrics: PerformanceMetrics;
  private currentSkenario: SkenarioLevel;
  private questionHistory: boolean[];

  recordAnswer(isCorrect: boolean, timeSpent: number): void;
  getCurrentSkenario(): SkenarioLevel;
  getMetrics(): PerformanceMetrics;
  getScaffoldingConfig(): ScaffoldingConfig;
  getSkenarioHistory(): SkenarioHistory[];
  reset(): void;
}
```

### Integration dengan QuizGame
```typescript
// Initialize
const skenarioEngineRef = useRef(new SkenarioEngine());

// Record answer
skenarioEngineRef.current.recordAnswer(correct, timeSpent);

// Update state
setCurrentSkenario(skenarioEngineRef.current.getCurrentSkenario());
setPerformanceMetrics(skenarioEngineRef.current.getMetrics());

// Apply config
const config = newSkenario.scaffoldingConfig;
if (config.forceExpand) setScaffoldExpanded(true);
if (config.autoUnlockLevels.length > 0) {
  setCurrentScaffoldLevel(Math.max(...config.autoUnlockLevels));
}
```

---

## 📊 Contoh Skenario

### Skenario A: Siswa Pintar
```
Soal 1: Benar (5 detik) → Error 0% → Level 0
Soal 2: Benar (8 detik) → Error 0% → Level 0
Soal 3: Salah (12 detik) → Error 33% → Level 1
Soal 4: Benar (6 detik) → Error 25% → Level 0
Soal 5: Benar (7 detik) → Error 20% → Level 0
Soal 6: Benar (5 detik) → Error 16% → Level 0

Result: 5/6 benar (83%), Avg Level 0.17
Rating: Sangat Mandiri 🦅
```

### Skenario B: Siswa Average
```
Soal 1: Salah (20 detik) → Error 100% → Level 4
Soal 2: Benar (15 detik) → Error 50% → Level 2
Soal 3: Salah (25 detik) → Error 66% → Level 3
Soal 4: Benar (18 detik) → Error 50% → Level 2
Soal 5: Salah (30 detik) → Error 60% → Level 2
Soal 6: Benar (20 detik) → Error 50% → Level 2

Result: 3/6 benar (50%), Avg Level 2.5
Rating: Butuh Bimbingan 🤔
```

### Skenario C: Siswa Kesulitan
```
Soal 1: Salah (40 detik) → Error 100% → Level 4
Soal 2: Salah (45 detik) → Error 100% → Level 4
Soal 3: Salah (42 detik) → Error 100% → Level 4
Soal 4: Benar (35 detik) → Error 75% → Level 2
Soal 5: Salah (45 detik) → Error 80% → Level 3
Soal 6: Salah (45 detik) → Error 83% → Level 3

Result: 1/6 benar (16%), Avg Level 3.3
Rating: Perlu Bantuan Intensif 🔑
```

---

## 🎯 Benefits

### Untuk Siswa
✅ **Personalized Learning**: Bantuan sesuai kemampuan
✅ **Tidak Frustrasi**: Tidak terlalu mudah atau sulit
✅ **Self-Aware**: Sadar level kemampuan
✅ **Motivasi**: Rating sebagai tantangan
✅ **Progressive**: Bisa naik level seiring latihan

### Untuk Guru
✅ **Data-Driven**: Metrics konkret per siswa
✅ **Early Detection**: Identifikasi siswa kesulitan
✅ **Personalized Intervention**: Sesuaikan bantuan
✅ **Progress Tracking**: Lihat evolusi kemampuan
✅ **Evidence-Based**: Data untuk evaluasi

### Untuk Sistem
✅ **Adaptive**: Menyesuaikan real-time
✅ **Scalable**: Bisa untuk banyak siswa
✅ **Measurable**: Metrics terukur
✅ **Flexible**: Bisa disesuaikan threshold
✅ **Insightful**: Analytics mendalam

---

## 🚀 Future Enhancements

### 1. Machine Learning Integration
- Predict skenario level berdasarkan pattern
- Recommend intervention yang paling efektif
- Adaptive difficulty adjustment

### 2. Peer Comparison
- Bandingkan dengan teman sekelas
- Leaderboard berdasarkan kemandirian
- Collaborative learning suggestions

### 3. Teacher Dashboard
- Real-time monitoring per kelas
- Alert untuk siswa yang stuck
- Recommended interventions per siswa

### 4. Longitudinal Tracking
- Track progress over time
- Identify learning patterns
- Predict future performance

### 5. Multi-Subject Support
- Extend ke matematika, kimia, biologi
- Subject-specific interventions
- Cross-subject analytics

---

## 📝 Kesimpulan

Sistem Skenario Adaptif PhysicsQuest memastikan setiap siswa mendapatkan pengalaman belajar yang **personalized, adaptive, dan effective**. Dengan 5 level skenario yang dinamis, sistem ini mampu:

1. **Mengidentifikasi** tingkat kesulitan siswa secara real-time
2. **Menyesuaikan** tingkat bantuan secara otomatis
3. **Memotivasi** siswa melalui visual feedback dan rating
4. **Menganalisis** performa secara mendalam
5. **Membantu** guru dalam personalized intervention

Sistem ini merupakan implementasi nyata dari **adaptive learning** dan **zone of proximal development** dalam platform pembelajaran digital.

---

**PhysicsQuest** - Pembelajaran Adaptif untuk Setiap Siswa! 🎓✨
