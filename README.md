# PhysicsQuest - Platform Belajar Fisika Online untuk SMP

## 🎯 Deskripsi
PhysicsQuest adalah platform pembelajaran fisika interaktif berbasis web untuk siswa SMP dengan sistem autentikasi, dashboard personal, leaderboard online, dan progress tracking. Dilengkapi dengan **scaffolding berjenjang** dan **strategi problem solving** untuk membantu siswa memahami konsep fisika secara mandiri.

## ✨ Fitur Utama Platform

### 🔐 Sistem Autentikasi
- **Registrasi** - Siswa dapat membuat akun dengan data lengkap (nama, sekolah, kelas, avatar)
- **Login** - Masuk dengan username/email dan password
- **Session Management** - Tetap login meskipun browser ditutup
- **Demo Accounts** - 5 akun demo untuk mencoba platform

### 🏠 Dashboard Personal
- **Welcome Banner** - Sambutan personal dengan avatar siswa
- **Quick Stats** - Total skor, game dimainkan, akurasi, best streak
- **Progress Overview** - Visualisasi progress per topik
- **Achievements** - Badge pencapaian yang diraih
- **Topic Selection** - Pilih topik untuk dimainkan

### 🏆 Leaderboard Online
- **Peringkat Global** - Lihat peringkat semua siswa berdasarkan total skor
- **Top 3 Podium** - Tampilan khusus untuk juara 1, 2, dan 3
- **Current User Highlight** - Peringkat kamu di-highlight
- **Real-time Update** - Peringkat update otomatis setelah bermain

### 👤 Profil Siswa
- **Informasi Lengkap** - Nama, username, email, sekolah, kelas
- **Statistik Detail** - Total skor, game, akurasi, best streak
- **Progress Per Topik** - Progress bar untuk setiap topik
- **Achievements Gallery** - Semua badge yang sudah diraih
- **Account Info** - Tanggal bergabung, total soal dijawab

### 📊 Progress Tracking
- **Per-Topic Progress** - Track kemajuan di setiap topik
- **Attempts Counter** - Berapa kali sudah mencoba
- **Best Score** - Skor terbaik yang pernah diraih
- **Completion Status** - Tandai topik yang sudah diselesaikan
- **Last Played** - Kapan terakhir kali bermain

### 🏗️ Scaffolding Berjenjang (4 Level)
1. **💡 Level 1 - Petunjuk Ringan**: Mengarahkan pemikiran
2. **🤔 Level 2 - Pertanyaan Penuntun**: Identifikasi konsep
3. **🔑 Level 3 - Konsep/Rumus Kunci**: Langkah penyelesaian
4. **📖 Level 4 - Penjelasan Lengkap**: Pemahaman penuh

### 🧩 Problem Solving Strategy (4 Langkah)
1. **🔍 Identifikasi** - Apa yang diketahui & ditanya
2. **📐 Rencanakan** - Rumus/konsep yang dipakai
3. **✏️ Laksanakan** - Hitung langkah demi langkah
4. **✅ Evaluasi** - Cek jawaban & verifikasi

## 🎮 5 Topik Fisika SMP
- 🚀 **Gaya & Hukum Newton** (6 soal)
- ⚡ **Energi & Usaha** (6 soal)
- 🔦 **Cahaya & Optik** (6 soal)
- 🌡️ **Suhu & Kalor** (6 soal)
- 🌊 **Getaran & Gelombang** (6 soal)

**Total: 30 soal dengan scaffolding lengkap**

## 🏅 Sistem Pencapaian (Achievements)
- 👋 **Selamat Datang** - Bergabung di PhysicsQuest
- 🎮 **Game Pertama** - Menyelesaikan game pertama
- 💯 **Skor Sempurna** - Mendapat nilai 100%
- 🔥 **5x Streak** - 5 game sempurna berturut-turut
- ⚡ **10x Streak** - 10 game sempurna berturut-turut
- 🌟 **Semua Topik** - Menyelesaikan semua topik

## 🛠️ Teknologi
- **React 18** + TypeScript
- **Tailwind CSS** - Styling modern & responsive
- **Vite** - Build tool super cepat
- **LocalStorage** - Penyimpanan data offline
- **Context API** - State management

## 📁 Struktur File

```
src/
├── App.tsx                      # Main app dengan routing
├── contexts/
│   └── AuthContext.tsx          # Authentication & user state
├── components/
│   ├── LoginPage.tsx            # Halaman login/register
│   ├── Dashboard.tsx            # Dashboard utama
│   ├── ProfilePage.tsx          # Profil siswa
│   ├── Leaderboard.tsx          # Papan peringkat
│   ├── QuizGame.tsx             # Game quiz dengan scaffolding
│   ├── ScaffoldingHelper.tsx    # Komponen scaffolding
│   ├── TopicCard.tsx            # Card topik
│   ├── ResultScreen.tsx         # Halaman hasil
│   └── ParticleBackground.tsx   # Background animasi
├── data/
│   └── questions.ts             # Bank soal + scaffolding
└── index.css                    # Styling & animasi
```

## 🚀 Cara Menggunakan

### Untuk Siswa:
1. **Daftar** - Buat akun dengan data lengkap
2. **Login** - Masuk ke platform
3. **Pilih Topik** - Mulai dari topik yang diinginkan
4. **Jawab Soal** - Gunakan scaffolding jika butuh bantuan
5. **Lihat Hasil** - Cek skor dan penjelasan
6. **Cek Progress** - Lihat kemajuan di dashboard
7. **Kompetisi** - Lihat peringkat di leaderboard

### Untuk Guru:
- **Monitor Progress** - Lihat kemajuan siswa melalui profil
- **Evaluasi** - Cek akurasi dan topik yang perlu diperkuat
- **Motivasi** - Gunakan leaderboard untuk kompetisi sehat
- **Achievement** - Dorong siswa meraih semua badge

## 💾 Penyimpanan Data
Semua data disimpan di **localStorage** browser:
- `physicsquest_users` - Daftar semua user
- `physicsquest_current_user` - User yang sedang login

**Catatan:** Untuk implementasi production, disarankan menggunakan backend database (Firebase, Supabase, dll) untuk sinkronisasi data antar device.

## 🎨 Desain UI/UX
- **Glassmorphism** - Efek kaca modern
- **Gradient Colors** - Warna gradient yang menarik
- **Smooth Animations** - Animasi halus dan engaging
- **Responsive Design** - Bisa dimainkan di HP, tablet, laptop
- **Playful Fonts** - Fredoka & Nunito untuk kesan fun
- **Particle Background** - Efek partikel yang dinamis

## 📈 Learning Outcomes
Setelah menggunakan PhysicsQuest, siswa mampu:
- ✅ Memahami konsep fisika SMP dengan mendalam
- ✅ Menyelesaikan soal hitungan dengan strategi terstruktur
- ✅ Menggunakan scaffolding untuk belajar mandiri
- ✅ Mengembangkan kemampuan problem solving
- ✅ Termotivasi melalui gamifikasi dan kompetisi
- ✅ Track progress belajar secara visual

## 🔮 Future Enhancements
- [ ] Backend database untuk multi-device sync
- [ ] Real-time multiplayer quiz
- [ ] Teacher dashboard untuk monitoring kelas
- [ ] Export progress report ke PDF
- [ ] Social features (friend list, chat)
- [ ] More topics (listrik, magnet, dll)
- [ ] Mobile app (React Native)

## 📞 Support
Untuk pertanyaan atau saran pengembangan, silakan hubungi pengembang.

---

**PhysicsQuest** - Platform Belajar Fisika Online yang Menyenangkan! 🚀⚛️

*Dibuat dengan ❤️ untuk siswa SMP Indonesia*
