# 🏗️ Integrasi Scaffolding Bertahap - PhysicsQuest

## 🎯 Konsep Utama

Scaffolding di PhysicsQuest sekarang **terintegrasi secara otomatis dan bertahap** ke dalam game, sehingga bantuan muncul secara natural berdasarkan performa siswa tanpa harus klik manual.

---

## 🔄 Sistem Scaffolding Otomatis

### 1. **Idle-Time Detection** (Deteksi Waktu Diam)
- Jika siswa **diam selama 15 detik** tanpa berinteraksi
- Sistem **otomatis menampilkan** scaffolding level berikutnya
- Notifikasi muncul: *"🤔 Kamu diam sebentar, bantuan Level X muncul!"*
- Timer idle di-reset setiap kali siswa berinteraksi

### 2. **Wrong-Attempt Progression** (Progresi Berdasarkan Jawaban Salah)
- **1x jawaban salah** → Level 1 terbuka (Petunjuk Ringan)
- **2x jawaban salah** → Level 2 terbuka (Pertanyaan Penuntun)
- **3x jawaban salah** → Level 3 terbuka (Konsep/Rumus Kunci)
- **4x jawaban salah** → Level 4 terbuka (Penjelasan Lengkap)
- Notifikasi muncul: *"💡 Bantuan Level X terbuka!"*

### 3. **Manual Trigger** (Pemicu Manual)
- Siswa tetap bisa **klik tombol scaffolding** kapan saja
- Setiap klik menaikkan level scaffolding
- Dihitung sebagai "manual triggered"

---

## 📊 Visualisasi Scaffolding

### Progress Bar Level
```
[💡 Petunjuk] [🤔 Penuntun] [🔑 Konsep] [📖 Lengkap]
     L1            L2           L3          L4
```
- Setiap level yang aktif **menyala dengan warna berbeda**
- Level saat ini memiliki **ring highlight**
- Animasi pulse saat level berubah

### Scaffold Indicator di Header
```
[Soal 3/6] [✓ 2] [🏗️ L2]
```
- Badge kecil menunjukkan level scaffolding aktif
- Warna amber/orange untuk visibility

### Notification System
- **Toast notification** muncul di atas layar
- Auto-dismiss setelah 3 detik
- Animasi slide-down yang smooth
- Contoh pesan:
  - *"💡 Bantuan Level 2 terbuka!"*
  - *"🤔 Kamu diam sebentar, bantuan Level 3 muncul!"*

---

## 🎮 Integrasi dengan Game Flow

### Sebelum Menjawab
1. Siswa membaca soal
2. Timer mulai berjalan (45 detik)
3. Idle timer juga berjalan
4. Jika siswa klik scaffolding → level naik
5. Jika siswa diam 15 detik → auto-hint muncul

### Saat Menjawab
- **Jawaban benar** → scaffold level di-record, lanjut ke soal berikutnya
- **Jawaban salah** → wrong attempt bertambah, scaffold level naik otomatis
- **Waktu habis** → scaffolding tetap bisa diakses di feedback

### Setelah Menjawab
- Feedback menampilkan **penjelasan lengkap**
- Jika salah, **Problem Solving Strategy** ditampilkan
- Scaffold level yang digunakan di-record
- Tombol "Soal Berikutnya" untuk lanjut

---

## 📈 Tracking & Analytics

### Data yang Di-track
```typescript
interface ScaffoldData {
  totalHintsUsed: number;      // Total hint yang digunakan
  avgScaffoldLevel: number;    // Rata-rata level scaffolding
  autoTriggered: number;       // Berapa kali auto-trigger
  manualTriggered: number;     // Berapa kali manual trigger
}
```

### Analisis Kemandirian
Di halaman hasil, siswa melihat:
- **Independence Rating**: Sangat Mandiri → Butuh Bimbingan
- **Total Hint**: Jumlah hint yang digunakan
- **Average Level**: Rata-rata level scaffolding
- **Auto vs Manual**: Perbandingan trigger otomatis vs manual
- **Visualisasi per soal**: Bar chart level scaffolding per soal

### Rating Kemandirian
| Rating | Icon | Kondisi |
|--------|------|---------|
| Sangat Mandiri | 🦅 | Tidak menggunakan scaffolding |
| Mandiri | 🌟 | Hanya Level 1 |
| Cukup Mandiri | 👍 | Level 1-2 |
| Perlu Latihan | 📖 | Level 2-3 |
| Butuh Bimbingan | 🤝 | Level 3-4 |

---

## 🎨 UI/UX Features

### Progressive Disclosure
- Scaffolding **tidak langsung muncul** semua
- Level 1 → 2 → 3 → 4 muncul **bertahap**
- Siswa bisa **navigate** antar level yang sudah terbuka
- Tombol "Sebelumnya" dan "Berikutnya" untuk navigasi

### Visual Feedback
- **Animasi scale** saat level berubah
- **Shimmer effect** pada progress bar
- **Color-coded levels**:
  - Level 1: Blue
  - Level 2: Indigo
  - Level 3: Purple
  - Level 4: Pink

### Contextual Hints
- Setiap level memiliki **pesan kontekstual**:
  - L0: "Klik untuk mendapatkan bantuan bertahap"
  - L1: "💡 Petunjuk ringan untuk memulai"
  - L2: "🤔 Pertanyaan penuntun untuk membantumu"
  - L3: "🔑 Konsep kunci untuk menyelesaikan"
  - L4: "📖 Penjelasan lengkap"

---

## 🧠 Pedagogi di Balik Integrasi

### Zone of Proximal Development (ZPD)
- Scaffolding muncul **tepat saat siswa butuh**
- Tidak terlalu cepat (mengganggu proses berpikir)
- Tidak terlalu lambat (membuat frustrasi)

### Fading Principle
- Siswa **didorong untuk mandiri** dulu
- Bantuan muncul **hanya jika diperlukan**
- Level scaffolding **tidak di-reset** antar soal (accumulative learning)

### Metacognition
- Siswa **sadar kapan mereka butuh bantuan**
- Visualisasi level membantu **self-assessment**
- Analytics di akhir game untuk **refleksi belajar**

---

## 🔧 Implementasi Teknis

### State Management
```typescript
// QuizGame.tsx
const [currentScaffoldLevel, setCurrentScaffoldLevel] = useState(0);
const [wrongAttempts, setWrongAttempts] = useState(0);
const [idleTime, setIdleTime] = useState(0);
const [scaffoldExpanded, setScaffoldExpanded] = useState(false);
const [scaffoldHistory, setScaffoldHistory] = useState<number[]>([]);
```

### Auto-Trigger Logic
```typescript
// Idle time detection
useEffect(() => {
  if (idleTime >= 15 && !showFeedback && currentScaffoldLevel < 4) {
    triggerIdleScaffold();
  }
}, [idleTime, showFeedback, currentScaffoldLevel]);

// Wrong attempt detection
useEffect(() => {
  if (wrongAttempts > 0 && !showFeedback) {
    const targetLevel = WRONG_ANSWERS_FOR_LEVEL[wrongAttempts];
    if (targetLevel > currentScaffoldLevel) {
      setCurrentScaffoldLevel(targetLevel);
      setScaffoldExpanded(true);
    }
  }
}, [wrongAttempts, showFeedback, currentScaffoldLevel]);
```

### Component Communication
```typescript
// QuizGame → ScaffoldingHelper
<ScaffoldingHelper
  currentLevel={currentScaffoldLevel}
  onLevelChange={(level) => setCurrentScaffoldLevel(level)}
  isExpanded={scaffoldExpanded}
  onToggleExpand={() => setScaffoldExpanded(!scaffoldExpanded)}
  mode="integrated"
/>
```

---

## 📊 Contoh Skenario

### Skenario 1: Siswa Mandiri
1. Baca soal → langsung jawab benar
2. Scaffold level: 0
3. Result: "Sangat Mandiri 🦅"

### Skenario 2: Siswa Ragu-ragu
1. Baca soal → diam 15 detik
2. Auto-hint Level 1 muncul
3. Baca hint → jawab benar
4. Scaffold level: 1
5. Result: "Mandiri 🌟"

### Skenario 3: Siswa Kesulitan
1. Baca soal → jawab salah (1x)
2. Level 1 terbuka otomatis
3. Baca Level 1 → jawab salah lagi (2x)
4. Level 2 terbuka otomatis
5. Baca Level 2 → jawab benar
6. Scaffold level: 2
7. Result: "Cukup Mandiri 👍"

### Skenario 4: Siswa Sangat Kesulitan
1. Baca soal → jawab salah 3x berturut-turut
2. Level 1 → 2 → 3 terbuka otomatis
3. Baca semua level → jawab benar
4. Scaffold level: 3
5. Result: "Perlu Latihan 📖"

---

## 🎯 Benefits

### Untuk Siswa
- ✅ **Tidak frustrasi** - bantuan muncul tepat waktu
- ✅ **Belajar mandiri** - didorong berusaha dulu
- ✅ **Self-aware** - sadar level pemahaman
- ✅ **Motivasi** - rating kemandirian sebagai tantangan

### Untuk Guru
- ✅ **Monitor progress** - lihat data scaffolding per siswa
- ✅ **Identifikasi masalah** - siswa yang selalu butuh Level 4
- ✅ **Personalized learning** - sesuaikan kesulitan berdasarkan data
- ✅ **Evidence-based** - data konkret untuk evaluasi

---

## 🚀 Future Enhancements

- [ ] **Adaptive difficulty** - soal berikutnya disesuaikan berdasarkan scaffold level
- [ ] **Scaffold recommendation** - AI menyarankan level scaffolding optimal
- [ ] **Peer comparison** - bandingkan kemandirian dengan teman sekelas
- [ ] **Scaffold history** - lihat evolusi kemandirian dari waktu ke waktu
- [ ] **Teacher dashboard** - monitor scaffolding usage per kelas

---

**PhysicsQuest** - Scaffolding yang Cerdas untuk Pembelajaran yang Personal! 🎓✨
