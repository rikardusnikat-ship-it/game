# PhysicsQuest - Game Fisika SMP dengan Scaffolding Berjenjang

## 🎯 Deskripsi
PhysicsQuest adalah game pembelajaran fisika interaktif untuk siswa SMP yang dilengkapi dengan **scaffolding berjenjang** dan **strategi problem solving** untuk membantu siswa memahami konsep fisika secara mandiri.

## ✨ Fitur Utama

### 1. 🏗️ Scaffolding Berjenjang (4 Level)
Sistem bantuan bertahap yang memberikan scaffolding dari yang paling ringan hingga penjelasan lengkap:

- **Level 1 - Petunjuk Ringan** 💡
  - Mengarahkan pemikiran tanpa memberi jawaban langsung
  - Membantu siswa mulai berpikir tentang konsep
  
- **Level 2 - Pertanyaan Penuntun** 🤔
  - Membantu identifikasi konsep dan variabel
  - Pertanyaan yang memandu ke arah jawaban
  
- **Level 3 - Konsep/Rumus Kunci** 🔑
  - Memberikan rumus atau konsep kunci
  - Langkah-langkah penyelesaian
  
- **Level 4 - Penjelasan Lengkap** 📖
  - Jawaban detail dengan pemahaman penuh
  - Penjelasan komprehensif

**Cara Penggunaan:**
- Tombol "Butuh Bantuan?" muncul di setiap soal
- Siswa dapat naik level scaffolding secara bertahap
- Sistem otomatis menawarkan scaffolding setelah 2x jawaban salah berturut-turut

### 2. 🧩 Problem Solving Strategy (4 Langkah)
Strategi terstruktur untuk menyelesaikan soal hitungan:

1. **🔍 Identifikasi**
   - Apa yang diketahui?
   - Apa yang ditanya?

2. **📐 Rencanakan**
   - Rumus/konsep apa yang digunakan?
   - Strategi penyelesaian

3. **✏️ Laksanakan**
   - Hitung langkah demi langkah
   - Substitusi nilai

4. **✓ Evaluasi**
   - Cek jawaban
   - Verifikasi satuan
   - Pastikan hasil masuk akal

**Implementasi:**
- Tersedia untuk soal tipe "calculation" (hitungan)
- Dapat diakses melalui panel "Strategi Problem Solving"
- Ditampilkan juga sebagai ringkasan setelah jawaban salah

### 3. 📚 5 Topik Fisika SMP
- 🚀 **Gaya & Hukum Newton** (6 soal)
- ⚡ **Energi & Usaha** (6 soal)
- 🔦 **Cahaya & Optik** (6 soal)
- 🌡️ **Suhu & Kalor** (6 soal)
- 🌊 **Getaran & Gelombang** (6 soal)

### 4. 🎮 Fitur Game
- ⏱️ Timer 45 detik per soal
- 🔥 Streak counter untuk jawaban benar berturut-turut
- ⭐ Sistem skor dan bintang
- 🎲 Soal diacak setiap kali bermain
- 📊 Progress bar visual
- 🎨 UI/UX modern dengan animasi

### 5. 📊 Tipe Soal
- **📚 Konsep** - Pemahaman teori dan definisi
- **🧮 Hitungan** - Soal dengan perhitungan matematis
- **🔧 Penerapan** - Aplikasi konsep dalam kehidupan sehari-hari

## 🎓 Pedagogi

### Scaffolding Berjenjang
Berdasarkan teori Vygotsky tentang Zone of Proximal Development (ZPD):
- Siswa mendapat bantuan sesuai tingkat kesulitan yang dihadapi
- Bantuan berkurang secara bertahap seiring peningkatan kemampuan
- Mendorong kemandirian belajar

### Problem Solving Strategy
Mengadopsi model Polya (1945):
- Melatih berpikir sistematis
- Membangun kebiasaan terstruktur
- Meningkatkan kemampuan metakognisi

## 🚀 Cara Menggunakan

### Untuk Siswa:
1. Pilih topik yang ingin dipelajari
2. Baca soal dengan seksama
3. Jika kesulitan, klik "Butuh Bantuan?"
4. Gunakan scaffolding Level 1 terlebih dahulu
5. Naik ke level berikutnya hanya jika masih butuh bantuan
6. Untuk soal hitungan, gunakan Problem Solving Strategy
7. Baca penjelasan setelah menjawab untuk memperkuat pemahaman

### Untuk Guru:
- Gunakan sebagai media pembelajaran interaktif
- Monitor penggunaan scaffolding (ditampilkan di progress)
- Diskusikan strategi problem solving di kelas
- Evaluasi berdasarkan level scaffolding yang digunakan

## 🛠️ Teknologi
- React + TypeScript
- Tailwind CSS
- Vite
- Responsive Design

## 📈 Manfaat Pembelajaran

1. **Kemandirian Belajar** - Siswa belajar meminta bantuan secara bertahap
2. **Metakognisi** - Siswa sadar akan tingkat pemahamannya
3. **Problem Solving** - Terlatih menyelesaikan masalah secara sistematis
4. **Feedback Langsung** - Penjelasan instan untuk setiap jawaban
5. **Motivasi** - Sistem gamifikasi meningkatkan engagement

## 📝 Struktur File

```
src/
├── App.tsx                    # Main component & routing
├── data/
│   └── questions.ts          # Bank soal + scaffolding + problem solving
├── components/
│   ├── TopicCard.tsx         # Card topik di halaman utama
│   ├── QuizGame.tsx          # Component quiz dengan scaffolding
│   ├── ScaffoldingHelper.tsx # Component scaffolding berjenjang
│   └── ResultScreen.tsx      # Halaman hasil + tips belajar
└── index.css                 # Styling & animasi
```

## 🎯 Learning Outcomes

Setelah menggunakan PhysicsQuest, siswa diharapkan mampu:
- Memahami konsep fisika SMP dengan lebih mendalam
- Menyelesaikan soal hitungan dengan strategi terstruktur
- Menggunakan scaffolding secara efektif untuk belajar mandiri
- Mengembangkan kemampuan problem solving
- Meningkatkan motivasi belajar fisika

## 📞 Dukungan

Untuk pertanyaan atau saran pengembangan, silakan hubungi pengembang.

---

**PhysicsQuest** - Belajar Fisika Jadi Menyenangkan dengan Scaffolding Berjenjang! 🚀
