export interface ScaffoldingLevel {
  level: number;
  label: string;
  icon: string;
  content: string;
  color: string;
}

export interface ProblemSolvingStep {
  step: number;
  title: string;
  icon: string;
  content: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
  explanation: string;
  scaffolding: ScaffoldingLevel[];
  problemSolving?: ProblemSolvingStep[];
  type: 'concept' | 'calculation' | 'application';
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  questions: Question[];
}

export const topics: Topic[] = [
  {
    id: 'gaya',
    name: 'Gaya & Hukum Newton',
    icon: '🚀',
    description: 'Pelajari tentang gaya, hukum Newton, dan penerapannya',
    color: 'from-blue-500 to-blue-700',
    questions: [
      {
        id: 1,
        type: 'concept',
        question: 'Hukum Newton I menyatakan bahwa...',
        options: [
          'F = m × a',
          'Setiap aksi ada reaksi yang sama besar dan berlawanan arah',
          'Benda akan tetap diam atau bergerak lurus beraturan jika resultan gaya = 0',
          'Gaya gravitasi bergantung pada massa benda'
        ],
        correctAnswer: 2,
        feedback: 'Benar! 🎉',
        explanation: 'Hukum Newton I (Hukum Inersia/Kelembaman) menyatakan bahwa benda akan tetap diam atau bergerak lurus beraturan jika tidak ada resultan gaya yang bekerja padanya (ΣF = 0). Contoh: penumpang terdorong ke depan saat mobil direm mendadak.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Pikirkan tentang apa yang terjadi pada tubuhmu saat mobil tiba-tiba berhenti. Mengapa tubuhmu terdorong ke depan?',
            color: 'from-blue-400 to-blue-500'
          },
          {
            level: 2,
            label: 'Pertanyaan Penuntun',
            icon: '🤔',
            content: 'Jika tidak ada gaya yang mengganggu, apakah benda yang diam akan bergerak dengan sendirinya? Atau benda yang bergerak akan berhenti dengan sendirinya?',
            color: 'from-indigo-400 to-indigo-500'
          },
          {
            level: 3,
            label: 'Kata Kunci',
            icon: '🔑',
            content: 'Hukum Newton I disebut juga Hukum KELEMBAMAN (INERSIA). Kata kuncinya: "mempertahankan keadaan semula" - diam tetap diam, bergerak tetap bergerak.',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Hukum Newton I: ΣF = 0 → benda mempertahankan keadaannya. Jika diam → tetap diam. Jika bergerak → tetap bergerak lurus beraturan. Ini karena benda memiliki sifat kelembaman (inersia).',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 2,
        type: 'calculation',
        question: 'Sebuah benda bermassa 5 kg didorong dengan gaya 20 N. Berapa percepatan benda tersebut?',
        options: ['100 m/s²', '4 m/s²', '25 m/s²', '15 m/s²'],
        correctAnswer: 1,
        feedback: 'Tepat sekali! 🌟',
        explanation: 'Menggunakan Hukum Newton II: F = m × a, maka a = F/m = 20/5 = 4 m/s². Semakin besar gaya yang diberikan, semakin besar percepatannya. Semakin besar massa benda, semakin kecil percepatannya.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Soal ini melibatkan hubungan antara gaya (F), massa (m), dan percepatan (a). Hukum Newton manakah yang menghubungkan ketiga besaran ini?',
            color: 'from-blue-400 to-blue-500'
          },
          {
            level: 2,
            label: 'Identifikasi Variabel',
            icon: '📋',
            content: 'Diketahui:\n• m = 5 kg\n• F = 20 N\nDitanya: a = ?\n\nRumus yang digunakan: F = m × a',
            color: 'from-indigo-400 to-indigo-500'
          },
          {
            level: 3,
            label: 'Langkah Penyelesaian',
            icon: '📝',
            content: 'Langkah 1: Tulis rumus → F = m × a\nLangkah 2: Ubah rumus untuk mencari a → a = F/m\nLangkah 3: Substitusi nilai → a = 20/5\nLangkah 4: Hitung → a = ? m/s²',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 4,
            label: 'Penyelesaian Lengkap',
            icon: '✅',
            content: 'Diketahui: m = 5 kg, F = 20 N\nDitanya: a = ?\nJawab:\nF = m × a\n20 = 5 × a\na = 20/5\na = 4 m/s²\nJadi percepatan benda adalah 4 m/s²',
            color: 'from-pink-400 to-pink-500'
          }
        ],
        problemSolving: [
          {
            step: 1,
            title: 'Identifikasi',
            icon: '🔍',
            content: 'Yang diketahui: massa (m) = 5 kg, gaya (F) = 20 N. Yang ditanya: percepatan (a).'
          },
          {
            step: 2,
            title: 'Rencanakan',
            icon: '📐',
            content: 'Gunakan Hukum Newton II: F = m × a. Kita perlu mencari a, jadi ubah rumus menjadi a = F/m.'
          },
          {
            step: 3,
            title: 'Laksanakan',
            icon: '✏️',
            content: 'Substitusi: a = 20/5 = 4 m/s²'
          },
          {
            step: 4,
            title: 'Evaluasi',
            icon: '✓',
            content: 'Cek: F = m × a = 5 × 4 = 20 N ✓ (sesuai dengan yang diketahui). Jawaban benar!'
          }
        ]
      },
      {
        id: 3,
        type: 'concept',
        question: 'Satuan gaya dalam SI adalah...',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correctAnswer: 1,
        feedback: 'Bagus! 👏',
        explanation: 'Satuan gaya dalam SI adalah Newton (N). 1 Newton = 1 kg·m/s². Dinamai dari Sir Isaac Newton yang merumuskan hukum-hukum gerak.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Satuan ini dinamai dari nama seorang ilmuwan yang sangat terkenal dengan hukum gravitasi dan hukum gerak.',
            color: 'from-blue-400 to-blue-500'
          },
          {
            level: 2,
            label: 'Eliminasi',
            icon: '🤔',
            content: 'Joule = satuan energi, Watt = satuan daya, Pascal = satuan tekanan. Mana yang tersisa?',
            color: 'from-indigo-400 to-indigo-500'
          },
          {
            level: 3,
            label: 'Kata Kunci',
            icon: '🔑',
            content: 'Gaya → F → Newton. Ingat: F = m × a, satuannya kg·m/s² = Newton (N)',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Newton (N) adalah satuan gaya dalam SI. 1 N = 1 kg·m/s². Dinamai dari Sir Isaac Newton (1643-1727) yang merumuskan 3 hukum gerak dan hukum gravitasi universal.',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 4,
        type: 'application',
        question: 'Ketika kita menendang bola, kaki kita terasa sakit. Hal ini sesuai dengan...',
        options: ['Hukum Newton I', 'Hukum Newton II', 'Hukum Newton III', 'Hukum Gravitasi'],
        correctAnswer: 2,
        feedback: 'Hebat! 🏆',
        explanation: 'Ini sesuai Hukum Newton III (Aksi-Reaksi). Saat kaki menendang bola (aksi), bola memberikan gaya yang sama besar ke kaki (reaksi). Inilah mengapa kaki terasa sakit saat menendang bola keras.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Pikirkan: ada DUA gaya yang bekerja di sini. Gaya kaki ke bola, dan gaya bola ke kaki. Hubungan antara kedua gaya ini disebut apa?',
            color: 'from-blue-400 to-blue-500'
          },
          {
            level: 2,
            label: 'Pertanyaan Penuntun',
            icon: '🤔',
            content: 'Jika kaki memberikan gaya pada bola (aksi), apakah bola juga memberikan gaya pada kaki? Jika ya, bagaimana hubungan kedua gaya tersebut?',
            color: 'from-indigo-400 to-indigo-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Hukum Newton III = Aksi-Reaksi. "Untuk setiap aksi, ada reaksi yang sama besar dan berlawanan arah." F_aksi = -F_reaksi',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Hukum III Newton: F_aksi = -F_reaksi. Kaki menendang bola (aksi) → bola mendorong kaki dengan gaya sama besar (reaksi). Karena kaki menerima gaya balik, maka terasa sakit. Kedua gaya sama besar tapi berlawanan arah.',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 5,
        type: 'calculation',
        question: 'Sebuah mobil bermassa 1000 kg bergerak dengan percepatan 2 m/s². Gaya yang bekerja pada mobil adalah...',
        options: ['500 N', '2000 N', '1002 N', '998 N'],
        correctAnswer: 1,
        feedback: 'Luar biasa! 🚗',
        explanation: 'F = m × a = 1000 × 2 = 2000 N. Ini adalah penerapan langsung Hukum Newton II. Gaya sebesar 2000 N dibutuhkan untuk mempercepat mobil 1000 kg sebesar 2 m/s².',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Soal ini meminta kita mencari GAYA. Ingat rumus yang menghubungkan gaya, massa, dan percepatan.',
            color: 'from-blue-400 to-blue-500'
          },
          {
            level: 2,
            label: 'Identifikasi Variabel',
            icon: '📋',
            content: 'Diketahui:\n• m = 1000 kg\n• a = 2 m/s²\nDitanya: F = ?\n\nRumus: F = m × a',
            color: 'from-indigo-400 to-indigo-500'
          },
          {
            level: 3,
            label: 'Langkah Penyelesaian',
            icon: '📝',
            content: 'Langkah 1: F = m × a\nLangkah 2: F = 1000 × 2\nLangkah 3: F = ? N',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 4,
            label: 'Penyelesaian Lengkap',
            icon: '✅',
            content: 'Diketahui: m = 1000 kg, a = 2 m/s²\nDitanya: F = ?\nJawab:\nF = m × a\nF = 1000 × 2\nF = 2000 N\nJadi gaya yang bekerja pada mobil adalah 2000 N.',
            color: 'from-pink-400 to-pink-500'
          }
        ],
        problemSolving: [
          {
            step: 1,
            title: 'Identifikasi',
            icon: '🔍',
            content: 'Diketahui: m = 1000 kg, a = 2 m/s². Ditanya: F (gaya).'
          },
          {
            step: 2,
            title: 'Rencanakan',
            icon: '📐',
            content: 'Gunakan Hukum Newton II: F = m × a. Langsung substitusi karena semua variabel sudah diketahui.'
          },
          {
            step: 3,
            title: 'Laksanakan',
            icon: '✏️',
            content: 'F = 1000 × 2 = 2000 N'
          },
          {
            step: 4,
            title: 'Evaluasi',
            icon: '✓',
            content: 'Cek satuan: kg × m/s² = N ✓. Besaran masuk akal untuk mobil. Jawaban: 2000 N.'
          }
        ]
      },
      {
        id: 6,
        type: 'concept',
        question: 'Berat benda di bumi berbeda dengan di bulan karena...',
        options: [
          'Massa benda berubah di bulan',
          'Percepatan gravitasi bulan lebih kecil dari bumi',
          'Bulan tidak memiliki gravitasi',
          'Benda di bulan menjadi lebih ringan massanya'
        ],
        correctAnswer: 1,
        feedback: 'Sempurna! 🌙',
        explanation: 'Berat (W) = m × g. Massa benda tetap di mana saja, tetapi percepatan gravitasi bulan (1,6 m/s²) jauh lebih kecil dari bumi (9,8 m/s²). Jadi berat benda di bulan hanya sekitar 1/6 berat di bumi.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Perhatikan perbedaan antara MASSA dan BERAT. Apakah massa benda berubah saat berpindah tempat?',
            color: 'from-blue-400 to-blue-500'
          },
          {
            level: 2,
            label: 'Pertanyaan Penuntun',
            icon: '🤔',
            content: 'Rumus berat: W = m × g. Jika massa (m) tetap, apa yang harus berbeda antara bumi dan bulan agar beratnya berbeda?',
            color: 'from-indigo-400 to-indigo-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'g (percepatan gravitasi) berbeda di setiap planet! Di bumi g ≈ 9,8 m/s², di bulan g ≈ 1,6 m/s². Karena g bulan < g bumi, maka berat di bulan < berat di bumi.',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Massa (m) = jumlah zat, TIDAK berubah di mana pun. Berat (W) = m × g, BERUBAH tergantung gravitasi. g_bumi = 9,8 m/s², g_bulan = 1,6 m/s². Maka W_bulan = 1/6 × W_bumi. Inilah mengapa astronot bisa melompat tinggi di bulan!',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      }
    ]
  },
  {
    id: 'energi',
    name: 'Energi & Usaha',
    icon: '⚡',
    description: 'Pahami konsep energi kinetik, potensial, dan hukum kekekalan energi',
    color: 'from-yellow-500 to-orange-600',
    questions: [
      {
        id: 1,
        type: 'concept',
        question: 'Energi yang dimiliki benda karena kedudukannya disebut...',
        options: ['Energi kinetik', 'Energi potensial', 'Energi mekanik', 'Energi panas'],
        correctAnswer: 1,
        feedback: 'Benar! 📚',
        explanation: 'Energi potensial adalah energi yang dimiliki benda karena kedudukan/posisinya. Contoh: batu di atas bukit memiliki energi potensial gravitasi. Semakin tinggi kedudukannya, semakin besar energi potensialnya (Ep = m × g × h).',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Kata kuncinya adalah "kedudukan" atau "posisi". Bayangkan sebuah batu di atas bukit - energi apa yang dimilikinya karena POSISINYA yang tinggi?',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 2,
            label: 'Perbandingan',
            icon: '🤔',
            content: 'Energi kinetik = energi karena GERAK. Energi potensial = energi karena...? (Petunjuk: berkaitan dengan posisi/kedudukan)',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Rumus',
            icon: '🔑',
            content: 'Ep = m × g × h\nEp = Energi POTENSIAL\nm = massa, g = gravitasi, h = ketinggian (kedudukan)',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Energi Potensial (Ep) = energi yang dimiliki benda karena KEDUDUKANNYA/POSISINYA. Ep = mgh. Semakin tinggi posisi benda dari tanah, semakin besar Ep-nya. Contoh: air di bendungan, buah di pohon, pegas yang diregangkan.',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 2,
        type: 'calculation',
        question: 'Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Energi kinetiknya adalah...',
        options: ['6 Joule', '9 Joule', '18 Joule', '3 Joule'],
        correctAnswer: 1,
        feedback: 'Tepat! 🎯',
        explanation: 'Energi kinetik = ½ × m × v² = ½ × 2 × 3² = ½ × 2 × 9 = 9 Joule. Energi kinetik bergantung pada massa dan kuadrat kecepatan benda.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Benda BERGERAK, berarti memiliki energi kinetik. Rumus energi kinetik melibatkan massa dan kecepatan. Apakah kamu ingat rumusnya?',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 2,
            label: 'Identifikasi Variabel',
            icon: '📋',
            content: 'Diketahui:\n• m = 2 kg\n• v = 3 m/s\nDitanya: Ek = ?\n\nRumus: Ek = ½ × m × v²',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Langkah Penyelesaian',
            icon: '📝',
            content: 'Langkah 1: Ek = ½ × m × v²\nLangkah 2: Ek = ½ × 2 × 3²\nLangkah 3: Ek = ½ × 2 × ?\nLangkah 4: Ek = ? Joule',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 4,
            label: 'Penyelesaian Lengkap',
            icon: '✅',
            content: 'Ek = ½ × m × v²\nEk = ½ × 2 × 3²\nEk = ½ × 2 × 9\nEk = ½ × 18\nEk = 9 Joule\n\nPerhatikan: v² = 3² = 9 (kuadratkan dulu baru kalikan!)',
            color: 'from-pink-400 to-pink-500'
          }
        ],
        problemSolving: [
          {
            step: 1,
            title: 'Identifikasi',
            icon: '🔍',
            content: 'Diketahui: m = 2 kg, v = 3 m/s. Ditanya: Ek (energi kinetik).'
          },
          {
            step: 2,
            title: 'Rencanakan',
            icon: '📐',
            content: 'Gunakan rumus Ek = ½mv². Hati-hati: v harus dikuadratkan terlebih dahulu!'
          },
          {
            step: 3,
            title: 'Laksanakan',
            icon: '✏️',
            content: 'Ek = ½ × 2 × 3² = ½ × 2 × 9 = ½ × 18 = 9 Joule'
          },
          {
            step: 4,
            title: 'Evaluasi',
            icon: '✓',
            content: 'Cek satuan: kg × (m/s)² = kg·m²/s² = Joule ✓. Jawaban masuk akal. Ek = 9 J.'
          }
        ]
      },
      {
        id: 3,
        type: 'concept',
        question: 'Hukum kekekalan energi menyatakan bahwa...',
        options: [
          'Energi dapat diciptakan',
          'Energi dapat dimusnahkan',
          'Energi tidak dapat diciptakan dan dimusnahkan, hanya dapat berubah bentuk',
          'Energi selalu berkurang'
        ],
        correctAnswer: 2,
        feedback: 'Sempurna! 💡',
        explanation: 'Hukum Kekekalan Energi: Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat berubah dari satu bentuk ke bentuk lain. Contoh: energi potensial air berubah menjadi energi kinetik, lalu menjadi energi listrik di PLTA.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Kata "kekekalan" berarti "tetap/tidak berubah". Jika energi itu KEKAL, apakah bisa diciptakan dari ketiadaan?',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 2,
            label: 'Contoh Nyata',
            icon: '🤔',
            content: 'Saat buah jatuh: energi potensial berkurang, tapi energi kinetik bertambah. Total energinya tetap sama. Energi hanya BERUBAH BENTUK, bukan hilang.',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Hukum Kekekalan Energi: "Energi tidak dapat diciptakan dan tidak dapat dimusnahkan, tetapi dapat BERUBAH dari satu bentuk ke bentuk lain."',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Total energi dalam sistem tertutup selalu tetap (konstan). Energi hanya berubah bentuk: kimia → panas → gerak (mesin), potensial → kinetik (buah jatuh), listrik → cahaya (lampu). Energi TIDAK PERNAH hilang, hanya berubah bentuk.',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 4,
        type: 'concept',
        question: 'Usaha dilakukan pada benda jika...',
        options: [
          'Benda diam',
          'Gaya bekerja pada benda dan benda berpindah',
          'Benda bergerak tanpa gaya',
          'Gaya tegak lurus dengan perpindahan'
        ],
        correctAnswer: 1,
        feedback: 'Bagus! 💪',
        explanation: 'Usaha (W) = F × s × cos θ. Usaha terjadi ketika gaya bekerja pada benda DAN benda berpindah tempat searah dengan gaya. Jika gaya tegak lurus perpindahan (cos 90° = 0), maka usaha = 0.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Dalam fisika, "usaha" punya syarat khusus. Bayangkan: apakah kamu melakukan usaha jika mendorong tembok yang tidak bergerak?',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 2,
            label: 'Pertanyaan Penuntun',
            icon: '🤔',
            content: 'Untuk melakukan usaha, diperlukan DUA hal: (1) ada gaya, dan (2) benda harus...? (Petunjuk: benda tidak boleh diam)',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Rumus Kunci',
            icon: '🔑',
            content: 'W = F × s × cos θ\nSyarat usaha ≠ 0:\n1. F ≠ 0 (ada gaya)\n2. s ≠ 0 (ada perpindahan)\n3. θ ≠ 90° (gaya tidak tegak lurus perpindahan)',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Usaha (W) = F × s × cos θ. Usaha terjadi JIKA gaya bekerja DAN benda berpindah searah gaya. Contoh usaha: mendorong meja. Bukan usaha: mendorong tembok (s=0), membawa beban berjalan horizontal (F tegak lurus s).',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 5,
        type: 'concept',
        question: 'Satuan energi dalam SI adalah...',
        options: ['Newton', 'Watt', 'Joule', 'Kalori'],
        correctAnswer: 2,
        feedback: 'Benar! ✅',
        explanation: 'Satuan energi dalam SI adalah Joule (J). 1 Joule = 1 Newton × 1 meter. Dinamai dari James Prescott Joule, ilmuwan yang meneliti hubungan antara panas dan usaha.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Satuan energi dalam SI dinamai dari seorang ilmuwan Inggris yang meneliti hubungan antara kalor dan usaha mekanik.',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 2,
            label: 'Eliminasi',
            icon: '🤔',
            content: 'Newton = satuan gaya, Watt = satuan daya (energi/waktu). Kalori = satuan energi tapi BUKAN satuan SI. Yang tersisa?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Kata Kunci',
            icon: '🔑',
            content: 'Energi dalam SI = Joule (J). 1 J = 1 N·m = 1 kg·m²/s²',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Joule (J) adalah satuan energi dalam SI. 1 Joule = usaha oleh gaya 1 Newton untuk memindahkan benda sejauh 1 meter. Dinamai dari James Prescott Joule (1818-1889). Kalori juga satuan energi tapi bukan SI (1 kal = 4,2 J).',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 6,
        type: 'application',
        question: 'Saat buah mangga jatuh dari pohon, terjadi perubahan energi...',
        options: [
          'Kinetik menjadi potensial',
          'Potensial menjadi kinetik',
          'Kinetik menjadi kinetik',
          'Potensial menjadi potensial'
        ],
        correctAnswer: 1,
        feedback: 'Hebat! 🥭',
        explanation: 'Saat buah jatuh, energi potensial gravitasi berkurang (ketinggian berkurang) dan energi kinetik bertambah (kecepatan bertambah). Ini adalah contoh perubahan energi potensial menjadi energi kinetik.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Saat buah jatuh: ketinggiannya berkurang (Ep berubah) dan kecepatannya bertambah (Ek berubah). Dari mana asal energi geraknya?',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 2,
            label: 'Analisis',
            icon: '🤔',
            content: 'Di atas pohon: h besar → Ep besar, v = 0 → Ek = 0\nSaat jatuh: h berkurang → Ep berkurang, v bertambah → Ek bertambah\nEp → berubah menjadi → ?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Hukum Kekekalan Energi Mekanik:\nEm = Ep + Ek = konstan\nSaat jatuh: Ep ↓ (berkurang) → Ek ↑ (bertambah)\nArtinya: Ep berubah menjadi Ek',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Buah di pohon: Ep = mgh (maksimum), Ek = 0 (diam). Saat jatuh: h↓ → Ep↓, v↑ → Ek↑. Energi potensial GRAVITASI berubah menjadi energi KINETIK. Total energi mekanik tetap: Ep + Ek = konstan (jika tanpa gesekan udara).',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      }
    ]
  },
  {
    id: 'cahaya',
    name: 'Cahaya & Optik',
    icon: '🔦',
    description: 'Eksplorasi sifat cahaya, pemantulan, dan pembiasan',
    color: 'from-purple-500 to-pink-600',
    questions: [
      {
        id: 1,
        type: 'concept',
        question: 'Cahaya merambat secara...',
        options: ['Berbelok-belok', 'Lurus', 'Melingkar', 'Zig-zag'],
        correctAnswer: 1,
        feedback: 'Benar! ☀️',
        explanation: 'Cahaya merambat lurus. Ini dapat dibuktikan dengan melihat berkas cahaya matahari yang masuk melalui celah kecil. Sifat ini disebut perambatan lurus cahaya.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Pernahkah kamu melihat berkas sinar matahari yang masuk melalui celah jendela? Bagaimana bentuk jalannya sinar tersebut?',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 2,
            label: 'Bukti Nyata',
            icon: '🤔',
            content: 'Bayangkan senter di ruangan gelap: cahayanya membentuk garis... Apakah lurus, berbelok, atau melingkar?',
            color: 'from-pink-400 to-pink-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Salah satu sifat dasar cahaya: MERAMBAT LURUS. Ini bisa dibuktikan dengan percobaan 3 karton berlubang yang segaris.',
            color: 'from-fuchsia-400 to-fuchsia-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Cahaya merambat LURUS di medium yang homogen (seragam). Bukti: (1) berkas sinar senter lurus, (2) bayangan terbentuk karena cahaya terhalang, (3) percobaan 3 karton berlubang segaris. Cahaya hanya berbelok saat MEMANTUL atau MEMBIAS.',
            color: 'from-rose-400 to-rose-500'
          }
        ]
      },
      {
        id: 2,
        type: 'concept',
        question: 'Hukum pemantulan Snellius menyatakan bahwa...',
        options: [
          'Sudut datang selalu lebih besar dari sudut pantul',
          'Sudut datang = sudut pantul, dan sinar datang, pantul, garis normal terletak pada satu bidang',
          'Cahaya tidak dapat dipantulkan',
          'Sudut pantul selalu 90°'
        ],
        correctAnswer: 1,
        feedback: 'Tepat! 🪞',
        explanation: 'Hukum Pemantulan Snellius: (1) Sudut datang = sudut pantul (i = r), (2) Sinar datang, sinar pantul, dan garis normal terletak pada satu bidang datar. Berlaku untuk pemantulan pada cermin datar.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Saat kamu bercermin, bayanganmu simetris. Jika cahaya datang dengan sudut 30° terhadap garis normal, dengan sudut berapa cahaya dipantulkan?',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 2,
            label: 'Pertanyaan Penuntun',
            icon: '🤔',
            content: 'Hubungan antara sudut datang (i) dan sudut pantul (r) adalah...? Apakah i > r, i < r, atau i = r?',
            color: 'from-pink-400 to-pink-500'
          },
          {
            level: 3,
            label: 'Hukum Pemantulan',
            icon: '🔑',
            content: 'Hukum I Pemantulan (Snellius):\n1. Sudut datang = Sudut pantul (i = r)\n2. Sinar datang, sinar pantul, dan garis normal terletak pada SATU bidang datar',
            color: 'from-fuchsia-400 to-fuchsia-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Hukum Pemantulan Snellius: (1) i = r (sudut datang = sudut pantul), diukur terhadap GARIS NORMAL (tegak lurus permukaan). (2) Sinar datang, garis normal, dan sinar pantul terletak pada satu bidang datar. Berlaku untuk cermin datar.',
            color: 'from-rose-400 to-rose-500'
          }
        ]
      },
      {
        id: 3,
        type: 'application',
        question: 'Cermin yang digunakan pada kaca spion mobil adalah...',
        options: ['Cermin datar', 'Cermin cekung', 'Cermin cembung', 'Lensa cembung'],
        correctAnswer: 2,
        feedback: 'Hebat! 🚗',
        explanation: 'Kaca spion menggunakan cermin cembung karena menghasilkan bayangan yang diperkecil sehingga jangkauan pandang lebih luas. Sifat bayangan: maya, tegak, diperkecil.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Kaca spion harus bisa menampilkan area yang LUAS di belakang mobil. Cermin jenis apa yang bisa menampilkan bayangan lebih kecil sehingga area pandang lebih lebar?',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 2,
            label: 'Analisis Kebutuhan',
            icon: '🤔',
            content: 'Syarat kaca spion: bayangan harus tegak (tidak terbalik) dan diperkecil (agar jangkauan luas). Cermin datar = bayangan sama besar. Cermin cekung = bisa terbalik. Cermin cembung = ?',
            color: 'from-pink-400 to-pink-500'
          },
          {
            level: 3,
            label: 'Sifat Cermin',
            icon: '🔑',
            content: 'Cermin CEMBUNG:\n• Bayangan: MAYA, TEGAK, DIPERKECIL\n• Jangkauan pandang: LEBIH LUAS\n• Cocok untuk: spion, cermin tikungan jalan',
            color: 'from-fuchsia-400 to-fuchsia-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Cermin cembung (konveks) memiliki permukaan melengkung ke luar. Sifat bayangan: SELALU maya, tegak, diperkecil. Karena diperkecil, area yang tertangkap lebih luas → cocok untuk spion mobil dan cermin di tikungan jalan.',
            color: 'from-rose-400 to-rose-500'
          }
        ]
      },
      {
        id: 4,
        type: 'concept',
        question: 'Pembiasan cahaya terjadi ketika cahaya...',
        options: [
          'Dipantulkan oleh cermin',
          'Melewati dua medium yang berbeda kerapatan',
          'Menyerap oleh benda hitam',
          'Berjalan di ruang hampa'
        ],
        correctAnswer: 1,
        feedback: 'Sempurna! 🌈',
        explanation: 'Pembiasan (refraksi) terjadi ketika cahaya melewati batas dua medium yang berbeda kerapatan (misal: udara ke air). Cahaya akan dibiaskan mendekati atau menjauhi garis normal tergantung kerapatan mediumnya.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Pernahkah kamu mencelupkan pensil ke dalam gelas berisi air? Pensil terlihat "patah". Peristiwa ini disebut apa?',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 2,
            label: 'Pertanyaan Penuntun',
            icon: '🤔',
            content: 'Pensil terlihat patah karena cahaya MELINTASI dua medium berbeda (air dan udara). Apa yang terjadi pada arah rambat cahaya saat melewati dua medium berbeda?',
            color: 'from-pink-400 to-pink-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'PEMBIASAN (Refraksi) = pembelokan arah rambat cahaya saat melewati batas DUA MEDIUM yang berbeda kerapatan (indeks bias). Contoh: udara → air, kaca → udara.',
            color: 'from-fuchsia-400 to-fuchsia-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Pembiasan: pembelokan cahaya saat melewati medium berbeda kerapatan. Dari kurang rapat ke lebih rapat: mendekat garis normal. Dari lebih rapat ke kurang rapat: menjauhi garis normal. Contoh: pensil patah di air, dasar kolam terlihat dangkal, fatamorgana.',
            color: 'from-rose-400 to-rose-500'
          }
        ]
      },
      {
        id: 5,
        type: 'application',
        question: 'Pelangi terbentuk karena peristiwa...',
        options: ['Pemantulan saja', 'Pembiasan dan dispersi cahaya', 'Penyerapan cahaya', 'Interferensi cahaya'],
        correctAnswer: 1,
        feedback: 'Luar biasa! 🌈',
        explanation: 'Pelangi terbentuk karena pembiasan dan dispersi (penguraian) cahaya matahari oleh tetesan air hujan. Cahaya putih diuraikan menjadi warna-warna spektrum: merah, jingga, kuning, hijau, biru, nila, ungu.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Pelangi memiliki BANYAK WARNA. Padahal cahaya matahari itu putih. Apa yang terjadi sehingga cahaya putih bisa terurai menjadi banyak warna?',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 2,
            label: 'Peran Tetesan Air',
            icon: '🤔',
            content: 'Tetesan air hujan berperan seperti PRISMA. Saat cahaya putih masuk ke tetesan air, cahaya dibiaskan dan terurai. Proses penguraian cahaya putih menjadi warna-warna disebut...?',
            color: 'from-pink-400 to-pink-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'DISPERSI = penguraian cahaya putih menjadi spektrum warna (me-ji-ku-hi-bi-ni-u). Terjadi karena setiap warna memiliki indeks bias berbeda saat melewati medium (tetesan air).',
            color: 'from-fuchsia-400 to-fuchsia-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Pelangi: Cahaya matahari → masuk tetesan air → DIBIASKAN + DIDISPERSIKAN → dipantulkan di dinding dalam tetesan → keluar terurai menjadi 7 warna spektrum. Merah di luar (paling sedikit dibiaskan), ungu di dalam (paling banyak dibiaskan).',
            color: 'from-rose-400 to-rose-500'
          }
        ]
      },
      {
        id: 6,
        type: 'application',
        question: 'Lensa yang digunakan untuk membantu orang yang menderita rabun jauh (miopi) adalah...',
        options: ['Lensa cembung', 'Lensa cekung', 'Lensa datar', 'Lensa silindris'],
        correctAnswer: 1,
        feedback: 'Benar! 👓',
        explanation: 'Rabun jauh (miopi) terjadi karena bayangan jatuh di depan retina. Lensa cekung (negatif) digunakan untuk membantu karena bersifat menyebarkan cahaya sehingga bayangan jatuh tepat di retina.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Pada mata miopi (rabun jauh), bayangan benda jauh jatuh DI DEPAN retina (seharusnya di retina). Kita perlu lensa yang bisa "mundurkan" bayangan ke retina. Lensa apa yang menyebarkan cahaya?',
            color: 'from-purple-400 to-purple-500'
          },
          {
            level: 2,
            label: 'Analisis Masalah',
            icon: '🤔',
            content: 'Miopi: bayangan di depan retina → perlu lensa yang MEMPERLEMAH pengumpulan cahaya → lensa yang MENYEBARKAN cahaya → lensa...?',
            color: 'from-pink-400 to-pink-500'
          },
          {
            level: 3,
            label: 'Sifat Lensa',
            icon: '🔑',
            content: 'Lensa CEKUNG (negatif/concave):\n• Menyebarkan cahaya (divergen)\n• Bayangan: maya, tegak, diperkecil\n• Digunakan untuk: miopi (rabun jauh)',
            color: 'from-fuchsia-400 to-fuchsia-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Miopi: titik jauh < ∞, bayangan di depan retina. Penyebab: bola mata terlalu panjang/kornea terlalu cembung. Penanganan: lensa CEKUNG (negatif) yang menyebarkan cahaya → bayangan mundur ke retina. Kacamata minus = lensa cekung.',
            color: 'from-rose-400 to-rose-500'
          }
        ]
      }
    ]
  },
  {
    id: 'suhu',
    name: 'Suhu & Kalor',
    icon: '🌡️',
    description: 'Pelajari tentang suhu, perpindahan kalor, dan pemuaian',
    color: 'from-red-500 to-red-700',
    questions: [
      {
        id: 1,
        type: 'concept',
        question: 'Satuan suhu dalam SI adalah...',
        options: ['Celcius', 'Fahrenheit', 'Kelvin', 'Reamur'],
        correctAnswer: 2,
        feedback: 'Benar! 🌡️',
        explanation: 'Satuan suhu dalam SI adalah Kelvin (K). Hubungan: K = °C + 273. Suhu 0°C = 273 K, suhu 100°C = 373 K. Kelvin dimulai dari nol mutlak (-273°C).',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Di Indonesia kita biasa pakai Celcius, tapi SATUAN INTERNASIONAL (SI) untuk suhu menggunakan nama seorang ilmuwan yang menemukan konsep nol mutlak.',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 2,
            label: 'Eliminasi',
            icon: '🤔',
            content: 'Celcius = biasa dipakai di Indonesia (bukan SI). Fahrenheit = dipakai di Amerika. Reamur = sudah jarang dipakai. Yang merupakan satuan SI (internasional)?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Satuan SI suhu = KELVIN (K). Perhatikan: bukan "derajat Kelvin" tapi cukup "Kelvin". 0 K = nol mutlak = -273,15°C',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Kelvin (K) adalah satuan SI untuk suhu. Skala Kelvin dimulai dari NOL MUTLAK (0 K = -273,15°C), suhu terendah yang mungkin. Konversi: K = °C + 273. Contoh: 25°C = 298 K, 100°C = 373 K.',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 2,
        type: 'concept',
        question: 'Perpindahan kalor tanpa melalui zat perantara disebut...',
        options: ['Konduksi', 'Konveksi', 'Radiasi', 'Isolasi'],
        correctAnswer: 2,
        feedback: 'Tepat! 🔥',
        explanation: 'Radiasi adalah perpindahan kalor tanpa zat perantara (melalui gelombang elektromagnetik). Contoh: panas matahari sampai ke bumi melalui ruang hampa. Konduksi melalui zat padat, konveksi melalui aliran fluida.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Panas matahari sampai ke bumi melewati RUANG HAMPA (vakum). Tidak ada udara di luar angkasa. Jadi panas matahari sampai dengan cara apa?',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 2,
            label: 'Perbandingan',
            icon: '🤔',
            content: 'Konduksi = butuh zat padat. Konveksi = butuh fluida (air/udara). Kalau TANPA zat perantara sama sekali, namanya...?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'RADIASI = perpindahan kalor TANPA zat perantara, melalui GELOMBANG ELEKTROMAGNETIK. Contoh: panas matahari, panas api unggun yang terasa dari jarak jauh.',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: '3 cara perpindahan kalor: (1) KONDUKSI: melalui zat padat, tanpa pindah partikel (sendok panas). (2) KONVEKSI: melalui fluida, disertai pindah partikel (air mendidih). (3) RADIASI: TANPA zat perantara, lewat gelombang EM (matahari → bumi).',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 3,
        type: 'application',
        question: 'Sendok logam terasa panas saat digunakan mengaduk kopi panas. Ini contoh perpindahan kalor secara...',
        options: ['Radiasi', 'Konveksi', 'Konduksi', 'Evaporasi'],
        correctAnswer: 2,
        feedback: 'Hebat! 🥄',
        explanation: 'Konduksi adalah perpindahan kalor melalui zat padat tanpa disertai perpindahan partikel. Panas dari kopi berpindah ke sendok melalui tumbukan antar partikel logam. Logam adalah konduktor yang baik.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Panas berpindah dari kopi → sendok melalui BENDA PADAT (sendok logam). Partikel-partikel logam saling bertumbukan meneruskan energi panas. Proses ini disebut...?',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 2,
            label: 'Ciri-ciri',
            icon: '🤔',
            content: 'Ciri: (1) melalui zat padat, (2) tanpa perpindahan partikel, (3) energi berpindah lewat tumbukan antar partikel. Ini adalah definisi dari...?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'KONDUKSI = perpindahan kalor melalui zat padat TANPA disertai perpindahan partikel. Energi berpindah lewat tumbukan antar partikel. Logam = konduktor baik. Kayu/plastik = isolator.',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Konduksi: panas dari kopi → ujung sendok (tercelup) → tumbukan partikel logam → energi merambat ke ujung lain → tangan terasa panas. Logam konduktor baik karena elektron bebasnya banyak. Contoh lain: setrika, panci logam.',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      },
      {
        id: 4,
        type: 'calculation',
        question: 'Kalor yang diperlukan untuk menaikkan suhu benda bergantung pada...',
        options: [
          'Massa dan jenis zat saja',
          'Massa, kalor jenis, dan perubahan suhu',
          'Suhu awal saja',
          'Waktu pemanasan saja'
        ],
        correctAnswer: 1,
        feedback: 'Sempurna! 📐',
        explanation: 'Q = m × c × ΔT. Kalor (Q) bergantung pada massa benda (m), kalor jenis zat (c), dan perubahan suhu (ΔT). Semakin besar massa atau perubahan suhu, semakin besar kalor yang diperlukan.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Untuk memanaskan air, faktor apa saja yang mempengaruhi banyaknya kalor yang dibutuhkan? Pikirkan: jumlah air, jenis zat, dan berapa derajat suhu naik.',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 2,
            label: 'Rumus',
            icon: '🤔',
            content: 'Rumus kalor: Q = m × c × ΔT\nQ = kalor, m = massa, c = kalor jenis, ΔT = perubahan suhu\nJadi Q bergantung pada berapa variabel?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: '3 Faktor',
            icon: '🔑',
            content: 'Q = m × c × ΔT\n1. m = massa benda (kg)\n2. c = kalor jenis zat (J/kg°C)\n3. ΔT = perubahan suhu (°C)\nSemua 3 faktor mempengaruhi besar kalor!',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Q = m × c × ΔT. Kalor bergantung pada: (1) massa - semakin besar massa, semakin banyak kalor dibutuhkan. (2) kalor jenis - setiap zat butuh kalor berbeda. (3) perubahan suhu - semakin besar ΔT, semakin banyak kalor. Contoh: memanaskan 2 kg air butuh 2× kalor dari 1 kg.',
            color: 'from-pink-400 to-pink-500'
          }
        ],
        problemSolving: [
          {
            step: 1,
            title: 'Identifikasi',
            icon: '🔍',
            content: 'Soal menanyakan faktor-faktor yang mempengaruhi besar kalor (Q). Ingat rumus Q = m × c × ΔT.'
          },
          {
            step: 2,
            title: 'Rencanakan',
            icon: '📐',
            content: 'Dari rumus Q = m × c × ΔT, identifikasi setiap variabel: m (massa), c (kalor jenis), ΔT (perubahan suhu).'
          },
          {
            step: 3,
            title: 'Laksanakan',
            icon: '✏️',
            content: 'Q bergantung pada: massa (m), kalor jenis (c), dan perubahan suhu (ΔT). Tiga faktor ini semuanya mempengaruhi.'
          },
          {
            step: 4,
            title: 'Evaluasi',
            icon: '✓',
            content: 'Cek: apakah semua faktor sudah termasuk? Ya, m, c, dan ΔT. Jawaban: massa, kalor jenis, dan perubahan suhu.'
          }
        ]
      },
      {
        id: 5,
        type: 'calculation',
        question: 'Air mendidih pada suhu 100°C. Dalam Kelvin, suhu tersebut adalah...',
        options: ['373 K', '173 K', '273 K', '100 K'],
        correctAnswer: 0,
        feedback: 'Benar! 💧',
        explanation: 'K = °C + 273 = 100 + 273 = 373 K. Ingat rumus konversi dari Celcius ke Kelvin: tambahkan 273. Titik didih air = 373 K, titik beku air = 273 K.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Untuk mengubah Celcius ke Kelvin, kamu perlu MENAMBAHKAN suatu angka ke suhu Celcius. Angka berapakah itu?',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 2,
            label: 'Rumus Konversi',
            icon: '🤔',
            content: 'Rumus: K = °C + ?\nPetunjuk: 0°C = 273 K (titik beku air)\nBerarti: K = °C + 273\nSekarang hitung: 100 + 273 = ?',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Langkah Hitung',
            icon: '🔑',
            content: 'K = °C + 273\nK = 100 + 273\nK = ?\n\nTips: tinggal tambahkan 273 ke suhu Celcius!',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 4,
            label: 'Penyelesaian Lengkap',
            icon: '✅',
            content: 'Diketahui: t = 100°C\nDitanya: t dalam Kelvin?\nJawab:\nK = °C + 273\nK = 100 + 273\nK = 373 K\nJadi air mendidih pada suhu 373 K.',
            color: 'from-pink-400 to-pink-500'
          }
        ],
        problemSolving: [
          {
            step: 1,
            title: 'Identifikasi',
            icon: '🔍',
            content: 'Diketahui: suhu = 100°C. Ditanya: suhu dalam Kelvin.'
          },
          {
            step: 2,
            title: 'Rencanakan',
            icon: '📐',
            content: 'Gunakan rumus konversi: K = °C + 273'
          },
          {
            step: 3,
            title: 'Laksanakan',
            icon: '✏️',
            content: 'K = 100 + 273 = 373 K'
          },
          {
            step: 4,
            title: 'Evaluasi',
            icon: '✓',
            content: 'Cek: 373 K - 273 = 100°C ✓. Jawaban: 373 K.'
          }
        ]
      },
      {
        id: 6,
        type: 'application',
        question: 'Termos digunakan untuk mencegah perpindahan kalor. Dinding bagian dalam termos dilapisi perak untuk mencegah perpindahan secara...',
        options: ['Konduksi', 'Konveksi', 'Radiasi', 'Semua jenis perpindahan'],
        correctAnswer: 2,
        feedback: 'Luar biasa! 🫖',
        explanation: 'Lapisan perak/mengkilap pada dinding dalam termos berfungsi memantulkan radiasi kalor kembali ke dalam, sehingga mencegah perpindahan kalor secara radiasi. Termos juga menggunakan vakum (mencegah konduksi & konveksi) dan tutup (mencegah konveksi).',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Lapisan PERAK/MENGKILAP pada dinding termos bersifat seperti CERMIN. Cermin memantulkan cahaya/panas. Perpindahan kalor jenis apa yang bisa DIPANTULKAN?',
            color: 'from-red-400 to-red-500'
          },
          {
            level: 2,
            label: 'Analisis',
            icon: '🤔',
            content: 'Konduksi = butuh zat padat (dicegah dengan vakum). Konveksi = butuh fluida (dicegah dengan vakum & tutup). Radiasi = gelombang EM (dicegah dengan permukaan MENGKILAP/perak yang memantulkan).',
            color: 'from-orange-400 to-orange-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Permukaan MENGKILAP/PERAK = memantulkan RADIASI kalor. Permukaan GELAP/KASAT = menyerap & memancarkan radiasi dengan baik.',
            color: 'from-yellow-400 to-yellow-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Termos mencegah 3 jenis perpindahan kalor: (1) Vakum antara dinding → cegah KONDUKSI & KONVEKSI. (2) Tutup rapat → cegah KONVEKSI udara. (3) Lapisan perak mengkilap → PANTULKAN RADIASI kembali. Inilah mengapa air panas tetap panas lama di termos!',
            color: 'from-pink-400 to-pink-500'
          }
        ]
      }
    ]
  },
  {
    id: 'getaran',
    name: 'Getaran & Gelombang',
    icon: '🌊',
    description: 'Pahami konsep getaran, gelombang, dan bunyi',
    color: 'from-green-500 to-teal-600',
    questions: [
      {
        id: 1,
        type: 'concept',
        question: 'Satu getaran penuh pada bandul adalah...',
        options: [
          'A-B-C',
          'A-B-C-B-A',
          'A-B',
          'B-C-B'
        ],
        correctAnswer: 1,
        feedback: 'Benar! 🎵',
        explanation: 'Satu getaran penuh adalah gerakan dari titik awal kembali ke titik awal melalui lintasan lengkap. Pada bandul: A-B-C-B-A (dari A ke B, ke C, kembali ke B, dan ke A). Ini adalah satu siklus getaran penuh.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Satu getaran PENUH berarti bandul harus kembali ke POSISI AWAL. Jika mulai dari A, harus kembali ke A lagi melalui semua titik.',
            color: 'from-green-400 to-green-500'
          },
          {
            level: 2,
            label: 'Visualisasi',
            icon: '🤔',
            content: 'Bayangkan bandul: A (kiri) - B (tengah/setimbang) - C (kanan). Dari A, bandul harus melewati B, C, B, dan kembali ke A. Tulisan jalannya: A→?→?→?→?',
            color: 'from-teal-400 to-teal-500'
          },
          {
            level: 3,
            label: 'Definisi',
            icon: '🔑',
            content: '1 getaran penuh = gerakan dari titik awal KEMBALI ke titik awal melalui SEMUA titik lintasan. A-B-C-B-A = 1 getaran penuh.',
            color: 'from-emerald-400 to-emerald-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Getaran penuh: gerakan bolak-balik melalui lintasan lengkap dan kembali ke posisi awal. A-B-C-B-A = 1 getaran. A-B = 1/2 getaran. A-B-C = 1/2 getaran (belum kembali ke A). B-C-B = 1 getaran (kembali ke B).',
            color: 'from-cyan-400 to-cyan-500'
          }
        ]
      },
      {
        id: 2,
        type: 'concept',
        question: 'Frekuensi adalah...',
        options: [
          'Waktu untuk satu getaran',
          'Jumlah getaran per satuan waktu',
          'Jarak maksimum dari titik setimbang',
          'Kecepatan gelombang'
        ],
        correctAnswer: 1,
        feedback: 'Tepat! ⏱️',
        explanation: 'Frekuensi (f) = jumlah getaran per detik, satuannya Hertz (Hz). f = n/t (n = jumlah getaran, t = waktu). Periode (T) = 1/f. Semakin tinggi frekuensi, semakin cepat getarannya.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Frekuensi berkaitan dengan "seberapa SERING" sesuatu terjadi. Dalam konteks getaran: seberapa sering getaran terjadi dalam satu detik?',
            color: 'from-green-400 to-green-500'
          },
          {
            level: 2,
            label: 'Perbandingan',
            icon: '🤔',
            content: 'Periode (T) = waktu untuk 1 getaran. Frekuensi (f) = kebalikannya, yaitu jumlah getaran per...? (Petunjuk: per satuan waktu)',
            color: 'from-teal-400 to-teal-500'
          },
          {
            level: 3,
            label: 'Rumus',
            icon: '🔑',
            content: 'f = n/t (jumlah getaran per waktu)\nT = t/n (waktu per getaran)\nHubungan: f = 1/T atau T = 1/f\nSatuan: f = Hz, T = sekon',
            color: 'from-emerald-400 to-emerald-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Frekuensi (f) = JUMLAH GETARAN per SATUAN WAKTU. f = n/t, satuan Hz. Contoh: 50 getaran dalam 10 detik → f = 50/10 = 5 Hz. Periode (T) = 1/f = 1/5 = 0,2 sekon. Semakin besar f, semakin cepat getaran.',
            color: 'from-cyan-400 to-cyan-500'
          }
        ]
      },
      {
        id: 3,
        type: 'concept',
        question: 'Gelombang yang memerlukan medium untuk merambat disebut...',
        options: ['Gelombang elektromagnetik', 'Gelombang mekanik', 'Gelombang transversal', 'Gelombang longitudinal'],
        correctAnswer: 1,
        feedback: 'Hebat! 🌊',
        explanation: 'Gelombang mekanik memerlukan medium (zat perantara) untuk merambat. Contoh: gelombang bunyi, gelombang air. Berbeda dengan gelombang elektromagnetik (cahaya) yang dapat merambat tanpa medium.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Gelombang bunyi tidak bisa merambat di ruang hampa (vakum). Artinya bunyi BUTUH zat perantara. Gelombang yang butuh medium disebut gelombang...?',
            color: 'from-green-400 to-green-500'
          },
          {
            level: 2,
            label: 'Klasifikasi',
            icon: '🤔',
            content: 'Berdasarkan medium: (1) Butuh medium = gelombang mekanik (bunyi, air). (2) Tidak butuh medium = gelombang elektromagnetik (cahaya, radio). Mana yang BUTUH medium?',
            color: 'from-teal-400 to-teal-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'GELOMBANG MEKANIK = gelombang yang MEMERLUKAN MEDIUM untuk merambat. Contoh: gelombang bunyi, gelombang air, gelombang pada tali.',
            color: 'from-emerald-400 to-emerald-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Gelombang mekanik: butuh medium (padat/cair/gas) untuk merambat. Contoh: bunyi (butuh udara/air/benda padat), gelombang air, gelombang tali. Transversal & longitudinal = klasifikasi berdasarkan ARAH getar, bukan medium.',
            color: 'from-cyan-400 to-cyan-500'
          }
        ]
      },
      {
        id: 4,
        type: 'calculation',
        question: 'Hubungan antara cepat rambat gelombang (v), frekuensi (f), dan panjang gelombang (λ) adalah...',
        options: ['v = f + λ', 'v = f × λ', 'v = f / λ', 'v = f - λ'],
        correctAnswer: 1,
        feedback: 'Sempurna! 📊',
        explanation: 'v = f × λ (cepat rambat = frekuensi × panjang gelombang). Satuan: v dalam m/s, f dalam Hz, λ dalam meter. Contoh: jika f = 50 Hz dan λ = 2 m, maka v = 100 m/s.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Cepat rambat = jarak yang ditempuh per waktu. Dalam satu periode, gelombang menempuh jarak satu panjang gelombang. Jadi v = jarak/waktu = λ/T = λ × f',
            color: 'from-green-400 to-green-500'
          },
          {
            level: 2,
            label: 'Penurunan Rumus',
            icon: '🤔',
            content: 'v = λ/T (jarak per periode)\nKarena f = 1/T, maka T = 1/f\nSubstitusi: v = λ/(1/f) = λ × f\nJadi v = f × λ',
            color: 'from-teal-400 to-teal-500'
          },
          {
            level: 3,
            label: 'Rumus Akhir',
            icon: '🔑',
            content: 'v = f × λ\nv = cepat rambat (m/s)\nf = frekuensi (Hz)\nλ = panjang gelombang (m)\n\nCepat rambat = frekuensi × panjang gelombang',
            color: 'from-emerald-400 to-emerald-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'v = f × λ. Penurunan: v = λ/T, karena f = 1/T → v = λ × f. Contoh: f = 50 Hz, λ = 2 m → v = 50 × 2 = 100 m/s. Satuan: Hz × m = (1/s) × m = m/s ✓. Rumus ini berlaku untuk SEMUA jenis gelombang.',
            color: 'from-cyan-400 to-cyan-500'
          }
        ],
        problemSolving: [
          {
            step: 1,
            title: 'Identifikasi',
            icon: '🔍',
            content: 'Soal menanyakan hubungan antara v (cepat rambat), f (frekuensi), dan λ (panjang gelombang).'
          },
          {
            step: 2,
            title: 'Rencanakan',
            icon: '📐',
            content: 'Ingat: v = jarak/waktu. Dalam 1 periode, gelombang menempuh λ. Jadi v = λ/T = λ × f.'
          },
          {
            step: 3,
            title: 'Laksanakan',
            icon: '✏️',
            content: 'v = f × λ (perkalian, bukan penjumlahan/pengurangan/pembagian)'
          },
          {
            step: 4,
            title: 'Evaluasi',
            icon: '✓',
            content: 'Cek satuan: Hz × m = (1/s) × m = m/s ✓ (sesuai satuan cepat rambat). Jawaban: v = f × λ.'
          }
        ]
      },
      {
        id: 5,
        type: 'concept',
        question: 'Bunyi tidak dapat merambat melalui...',
        options: ['Zat padat', 'Zat cair', 'Zat gas', 'Ruang hampa'],
        correctAnswer: 3,
        feedback: 'Benar! 🔇',
        explanation: 'Bunyi adalah gelombang mekanik yang memerlukan medium untuk merambat. Di ruang hampa (vakum) tidak ada partikel yang dapat bergetar, sehingga bunyi tidak dapat merambat. Inilah sebabnya di luar angkasa tidak ada suara.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Bunyi merambat dengan cara menggetarkan partikel-partikel medium. Jika TIDAK ADA partikel sama sekali, apakah bunyi bisa merambat?',
            color: 'from-green-400 to-green-500'
          },
          {
            level: 2,
            label: 'Logika',
            icon: '🤔',
            content: 'Bunyi bisa merambat di: zat padat ✓, zat cair ✓, zat gas ✓. Ketiganya memiliki partikel. Di mana TIDAK ADA partikel?',
            color: 'from-teal-400 to-teal-500'
          },
          {
            level: 3,
            label: 'Konsep Kunci',
            icon: '🔑',
            content: 'Bunyi = gelombang MEKANIK → BUTUH MEDIUM. Ruang hampa (vakum) = TIDAK ADA medium → bunyi TIDAK BISA merambat.',
            color: 'from-emerald-400 to-emerald-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Bunyi merambat melalui getaran partikel medium. Zat padat (tercepat) > zat cair > zat gas (terlambat). Di ruang hampa TIDAK ADA partikel → tidak ada yang bisa bergetar → bunyi tidak merambat. Bukti: percobaan lonceng dalam tabung vakum.',
            color: 'from-cyan-400 to-cyan-500'
          }
        ]
      },
      {
        id: 6,
        type: 'concept',
        question: 'Amplitudo getaran adalah...',
        options: [
          'Jumlah getaran per detik',
          'Waktu untuk satu getaran',
          'Simpangan terjauh dari titik setimbang',
          'Panjang satu gelombang'
        ],
        correctAnswer: 2,
        feedback: 'Luar biasa! 📏',
        explanation: 'Amplitudo (A) adalah simpangan maksimum/terjauh dari titik setimbang. Amplitudo menentukan besar energi getaran. Semakin besar amplitudo, semakin besar energi dan semakin keras bunyi yang dihasilkan.',
        scaffolding: [
          {
            level: 1,
            label: 'Petunjuk Ringan',
            icon: '💡',
            content: 'Bayangkan bandul berayun. Seberapa JAUH bandul bergerak dari posisi tengah (setimbang)? Jarak terjauh ini disebut...?',
            color: 'from-green-400 to-green-500'
          },
          {
            level: 2,
            label: 'Eliminasi',
            icon: '🤔',
            content: 'Jumlah getaran/detik = frekuensi. Waktu untuk 1 getaran = periode. Panjang gelombang = jarak satu gelombang lengkap. Yang tersisa: simpangan terjauh dari titik setimbang = ?',
            color: 'from-teal-400 to-teal-500'
          },
          {
            level: 3,
            label: 'Definisi',
            icon: '🔑',
            content: 'AMPLITUDO (A) = simpangan MAKSIMUM/TERJAUH dari titik setimbang. Satuan: meter (m). Amplitudo menentukan BESAR ENERGI getaran.',
            color: 'from-emerald-400 to-emerald-500'
          },
          {
            level: 4,
            label: 'Penjelasan Lengkap',
            icon: '📖',
            content: 'Amplitudo = simpangan terjauh dari posisi setimbang. Pada bandul: jarak dari B ke A atau B ke C. Amplitudo besar → energi besar → bunyi keras. Amplitudo kecil → energi kecil → bunyi pelan. Amplitudo berkurang seiring waktu karena gesekan.',
            color: 'from-cyan-400 to-cyan-500'
          }
        ]
      }
    ]
  }
];
