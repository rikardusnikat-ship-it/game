export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
  explanation: string;
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
        question: 'Hukum Newton I menyatakan bahwa...',
        options: [
          'F = m × a',
          'Setiap aksi ada reaksi yang sama besar dan berlawanan arah',
          'Benda akan tetap diam atau bergerak lurus beraturan jika resultan gaya = 0',
          'Gaya gravitasi bergantung pada massa benda'
        ],
        correctAnswer: 2,
        feedback: 'Benar! 🎉',
        explanation: 'Hukum Newton I (Hukum Inersia/Kelembaman) menyatakan bahwa benda akan tetap diam atau bergerak lurus beraturan jika tidak ada resultan gaya yang bekerja padanya (ΣF = 0). Contoh: penumpang terdorong ke depan saat mobil direm mendadak.'
      },
      {
        id: 2,
        question: 'Sebuah benda bermassa 5 kg didorong dengan gaya 20 N. Berapa percepatan benda tersebut?',
        options: ['100 m/s²', '4 m/s²', '25 m/s²', '15 m/s²'],
        correctAnswer: 1,
        feedback: 'Tepat sekali! 🌟',
        explanation: 'Menggunakan Hukum Newton II: F = m × a, maka a = F/m = 20/5 = 4 m/s². Semakin besar gaya yang diberikan, semakin besar percepatannya. Semakin besar massa benda, semakin kecil percepatannya.'
      },
      {
        id: 3,
        question: 'Satuan gaya dalam SI adalah...',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correctAnswer: 1,
        feedback: 'Bagus! 👏',
        explanation: 'Satuan gaya dalam SI adalah Newton (N). 1 Newton = 1 kg·m/s². Dinamai dari Sir Isaac Newton yang merumuskan hukum-hukum gerak.'
      },
      {
        id: 4,
        question: 'Ketika kita menendang bola, kaki kita terasa sakit. Hal ini sesuai dengan...',
        options: ['Hukum Newton I', 'Hukum Newton II', 'Hukum Newton III', 'Hukum Gravitasi'],
        correctAnswer: 2,
        feedback: 'Hebat! 🏆',
        explanation: 'Ini sesuai Hukum Newton III (Aksi-Reaksi). Saat kaki menendang bola (aksi), bola memberikan gaya yang sama besar ke kaki (reaksi). Inilah mengapa kaki terasa sakit saat menendang bola keras.'
      },
      {
        id: 5,
        question: 'Berat benda di bumi berbeda dengan di bulan karena...',
        options: [
          'Massa benda berubah di bulan',
          'Percepatan gravitasi bulan lebih kecil dari bumi',
          'Bulan tidak memiliki gravitasi',
          'Benda di bulan menjadi lebih ringan massanya'
        ],
        correctAnswer: 1,
        feedback: 'Sempurna! 🌙',
        explanation: 'Berat (W) = m × g. Massa benda tetap di mana saja, tetapi percepatan gravitasi bulan (1,6 m/s²) jauh lebih kecil dari bumi (9,8 m/s²). Jadi berat benda di bulan hanya sekitar 1/6 berat di bumi.'
      },
      {
        id: 6,
        question: 'Sebuah mobil bermassa 1000 kg bergerak dengan percepatan 2 m/s². Gaya yang bekerja pada mobil adalah...',
        options: ['500 N', '2000 N', '1002 N', '998 N'],
        correctAnswer: 1,
        feedback: 'Luar biasa! 🚗',
        explanation: 'F = m × a = 1000 × 2 = 2000 N. Ini adalah penerapan langsung Hukum Newton II. Gaya sebesar 2000 N dibutuhkan untuk mempercepat mobil 1000 kg sebesar 2 m/s².'
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
        question: 'Energi yang dimiliki benda karena kedudukannya disebut...',
        options: ['Energi kinetik', 'Energi potensial', 'Energi mekanik', 'Energi panas'],
        correctAnswer: 1,
        feedback: 'Benar! 📚',
        explanation: 'Energi potensial adalah energi yang dimiliki benda karena kedudukan/posisinya. Contoh: batu di atas bukit memiliki energi potensial gravitasi. Semakin tinggi kedudukannya, semakin besar energi potensialnya (Ep = m × g × h).'
      },
      {
        id: 2,
        question: 'Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Energi kinetiknya adalah...',
        options: ['6 Joule', '9 Joule', '18 Joule', '3 Joule'],
        correctAnswer: 1,
        feedback: 'Tepat! 🎯',
        explanation: 'Energi kinetik = ½ × m × v² = ½ × 2 × 3² = ½ × 2 × 9 = 9 Joule. Energi kinetik bergantung pada massa dan kuadrat kecepatan benda.'
      },
      {
        id: 3,
        question: 'Hukum kekekalan energi menyatakan bahwa...',
        options: [
          'Energi dapat diciptakan',
          'Energi dapat dimusnahkan',
          'Energi tidak dapat diciptakan dan dimusnahkan, hanya dapat berubah bentuk',
          'Energi selalu berkurang'
        ],
        correctAnswer: 2,
        feedback: 'Sempurna! 💡',
        explanation: 'Hukum Kekekalan Energi: Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat berubah dari satu bentuk ke bentuk lain. Contoh: energi potensial air berubah menjadi energi kinetik, lalu menjadi energi listrik di PLTA.'
      },
      {
        id: 4,
        question: 'Usaha dilakukan pada benda jika...',
        options: [
          'Benda diam',
          'Gaya bekerja pada benda dan benda berpindah',
          'Benda bergerak tanpa gaya',
          'Gaya tegak lurus dengan perpindahan'
        ],
        correctAnswer: 1,
        feedback: 'Bagus! 💪',
        explanation: 'Usaha (W) = F × s × cos θ. Usaha terjadi ketika gaya bekerja pada benda DAN benda berpindah tempat searah dengan gaya. Jika gaya tegak lurus perpindahan (cos 90° = 0), maka usaha = 0.'
      },
      {
        id: 5,
        question: 'Satuan energi dalam SI adalah...',
        options: ['Newton', 'Watt', 'Joule', 'Kalori'],
        correctAnswer: 2,
        feedback: 'Benar! ✅',
        explanation: 'Satuan energi dalam SI adalah Joule (J). 1 Joule = 1 Newton × 1 meter. Dinamai dari James Prescott Joule, ilmuwan yang meneliti hubungan antara panas dan usaha.'
      },
      {
        id: 6,
        question: 'Saat buah mangga jatuh dari pohon, terjadi perubahan energi...',
        options: [
          'Kinetik menjadi potensial',
          'Potensial menjadi kinetik',
          'Kinetik menjadi kinetik',
          'Potensial menjadi potensial'
        ],
        correctAnswer: 1,
        feedback: 'Hebat! 🥭',
        explanation: 'Saat buah jatuh, energi potensial gravitasi berkurang (ketinggian berkurang) dan energi kinetik bertambah (kecepatan bertambah). Ini adalah contoh perubahan energi potensial menjadi energi kinetik.'
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
        question: 'Cahaya merambat secara...',
        options: ['Berbelok-belok', 'Lurus', 'Melingkar', 'Zig-zag'],
        correctAnswer: 1,
        feedback: 'Benar! ☀️',
        explanation: 'Cahaya merambat lurus. Ini dapat dibuktikan dengan melihat berkas cahaya matahari yang masuk melalui celah kecil. Sifat ini disebut perambatan lurus cahaya.'
      },
      {
        id: 2,
        question: 'Hukum pemantulan Snellius menyatakan bahwa...',
        options: [
          'Sudut datang selalu lebih besar dari sudut pantul',
          'Sudut datang = sudut pantul, dan sinar datang, pantul, garis normal terletak pada satu bidang',
          'Cahaya tidak dapat dipantulkan',
          'Sudut pantul selalu 90°'
        ],
        correctAnswer: 1,
        feedback: 'Tepat! 🪞',
        explanation: 'Hukum Pemantulan Snellius: (1) Sudut datang = sudut pantul (i = r), (2) Sinar datang, sinar pantul, dan garis normal terletak pada satu bidang datar. Berlaku untuk pemantulan pada cermin datar.'
      },
      {
        id: 3,
        question: 'Cermin yang digunakan pada kaca spion mobil adalah...',
        options: ['Cermin datar', 'Cermin cekung', 'Cermin cembung', 'Lensa cembung'],
        correctAnswer: 2,
        feedback: 'Hebat! 🚗',
        explanation: 'Kaca spion menggunakan cermin cembung karena menghasilkan bayangan yang diperkecil sehingga jangkauan pandang lebih luas. Sifat bayangan: maya, tegak, diperkecil.'
      },
      {
        id: 4,
        question: 'Pembiasan cahaya terjadi ketika cahaya...',
        options: [
          'Dipantulkan oleh cermin',
          'Melewati dua medium yang berbeda kerapatan',
          'Menyerap oleh benda hitam',
          'Berjalan di ruang hampa'
        ],
        correctAnswer: 1,
        feedback: 'Sempurna! 🌈',
        explanation: 'Pembiasan (refraksi) terjadi ketika cahaya melewati batas dua medium yang berbeda kerapatan (misal: udara ke air). Cahaya akan dibiaskan mendekati atau menjauhi garis normal tergantung kerapatan mediumnya.'
      },
      {
        id: 5,
        question: 'Pelangi terbentuk karena peristiwa...',
        options: ['Pemantulan saja', 'Pembiasan dan dispersi cahaya', 'Penyerapan cahaya', 'Interferensi cahaya'],
        correctAnswer: 1,
        feedback: 'Luar biasa! 🌈',
        explanation: 'Pelangi terbentuk karena pembiasan dan dispersi (penguraian) cahaya matahari oleh tetesan air hujan. Cahaya putih diuraikan menjadi warna-warna spektrum: merah, jingga, kuning, hijau, biru, nila, ungu.'
      },
      {
        id: 6,
        question: 'Lensa yang digunakan untuk membantu orang yang menderita rabun jauh (miopi) adalah...',
        options: ['Lensa cembung', 'Lensa cekung', 'Lensa datar', 'Lensa silindris'],
        correctAnswer: 1,
        feedback: 'Benar! 👓',
        explanation: 'Rabun jauh (miopi) terjadi karena bayangan jatuh di depan retina. Lensa cekung (negatif) digunakan untuk membantu karena bersifat menyebarkan cahaya sehingga bayangan jatuh tepat di retina.'
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
        question: 'Satuan suhu dalam SI adalah...',
        options: ['Celcius', 'Fahrenheit', 'Kelvin', 'Reamur'],
        correctAnswer: 2,
        feedback: 'Benar! 🌡️',
        explanation: 'Satuan suhu dalam SI adalah Kelvin (K). Hubungan: K = °C + 273. Suhu 0°C = 273 K, suhu 100°C = 373 K. Kelvin dimulai dari nol mutlak (-273°C).'
      },
      {
        id: 2,
        question: 'Perpindahan kalor tanpa melalui zat perantara disebut...',
        options: ['Konduksi', 'Konveksi', 'Radiasi', 'Isolasi'],
        correctAnswer: 2,
        feedback: 'Tepat! 🔥',
        explanation: 'Radiasi adalah perpindahan kalor tanpa zat perantara (melalui gelombang elektromagnetik). Contoh: panas matahari sampai ke bumi melalui ruang hampa. Konduksi melalui zat padat, konveksi melalui aliran fluida.'
      },
      {
        id: 3,
        question: 'Sendok logam terasa panas saat digunakan mengaduk kopi panas. Ini contoh perpindahan kalor secara...',
        options: ['Radiasi', 'Konveksi', 'Konduksi', 'Evaporasi'],
        correctAnswer: 2,
        feedback: 'Hebat! 🥄',
        explanation: 'Konduksi adalah perpindahan kalor melalui zat padat tanpa disertai perpindahan partikel. Panas dari kopi berpindah ke sendok melalui tumbukan antar partikel logam. Logam adalah konduktor yang baik.'
      },
      {
        id: 4,
        question: 'Kalor yang diperlukan untuk menaikkan suhu benda bergantung pada...',
        options: [
          'Massa dan jenis zat saja',
          'Massa, kalor jenis, dan perubahan suhu',
          'Suhu awal saja',
          'Waktu pemanasan saja'
        ],
        correctAnswer: 1,
        feedback: 'Sempurna! 📐',
        explanation: 'Q = m × c × ΔT. Kalor (Q) bergantung pada massa benda (m), kalor jenis zat (c), dan perubahan suhu (ΔT). Semakin besar massa atau perubahan suhu, semakin besar kalor yang diperlukan.'
      },
      {
        id: 5,
        question: 'Air mendidih pada suhu 100°C. Dalam Kelvin, suhu tersebut adalah...',
        options: ['373 K', '173 K', '273 K', '100 K'],
        correctAnswer: 0,
        feedback: 'Benar! 💧',
        explanation: 'K = °C + 273 = 100 + 273 = 373 K. Ingat rumus konversi dari Celcius ke Kelvin: tambahkan 273. Titik didih air = 373 K, titik beku air = 273 K.'
      },
      {
        id: 6,
        question: 'Termos digunakan untuk mencegah perpindahan kalor. Dinding bagian dalam termos dilapisi perak untuk mencegah perpindahan secara...',
        options: ['Konduksi', 'Konveksi', 'Radiasi', 'Semua jenis perpindahan'],
        correctAnswer: 2,
        feedback: 'Luar biasa! 🫖',
        explanation: 'Lapisan perak/mengkilap pada dinding dalam termos berfungsi memantulkan radiasi kalor kembali ke dalam, sehingga mencegah perpindahan kalor secara radiasi. Termos juga menggunakan vakum (mencegah konduksi & konveksi) dan tutup (mencegah konveksi).'
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
        question: 'Satu getaran penuh pada bandul adalah...',
        options: [
          'A-B-C',
          'A-B-C-B-A',
          'A-B',
          'B-C-B'
        ],
        correctAnswer: 1,
        feedback: 'Benar! 🎵',
        explanation: 'Satu getaran penuh adalah gerakan dari titik awal kembali ke titik awal melalui lintasan lengkap. Pada bandul: A-B-C-B-A (dari A ke B, ke C, kembali ke B, dan ke A). Ini adalah satu siklus getaran penuh.'
      },
      {
        id: 2,
        question: 'Frekuensi adalah...',
        options: [
          'Waktu untuk satu getaran',
          'Jumlah getaran per satuan waktu',
          'Jarak maksimum dari titik setimbang',
          'Kecepatan gelombang'
        ],
        correctAnswer: 1,
        feedback: 'Tepat! ⏱️',
        explanation: 'Frekuensi (f) = jumlah getaran per detik, satuannya Hertz (Hz). f = n/t (n = jumlah getaran, t = waktu). Periode (T) = 1/f. Semakin tinggi frekuensi, semakin cepat getarannya.'
      },
      {
        id: 3,
        question: 'Gelombang yang memerlukan medium untuk merambat disebut...',
        options: ['Gelombang elektromagnetik', 'Gelombang mekanik', 'Gelombang transversal', 'Gelombang longitudinal'],
        correctAnswer: 1,
        feedback: 'Hebat! 🌊',
        explanation: 'Gelombang mekanik memerlukan medium (zat perantara) untuk merambat. Contoh: gelombang bunyi, gelombang air. Berbeda dengan gelombang elektromagnetik (cahaya) yang dapat merambat tanpa medium.'
      },
      {
        id: 4,
        question: 'Hubungan antara cepat rambat gelombang (v), frekuensi (f), dan panjang gelombang (λ) adalah...',
        options: ['v = f + λ', 'v = f × λ', 'v = f / λ', 'v = f - λ'],
        correctAnswer: 1,
        feedback: 'Sempurna! 📊',
        explanation: 'v = f × λ (cepat rambat = frekuensi × panjang gelombang). Satuan: v dalam m/s, f dalam Hz, λ dalam meter. Contoh: jika f = 50 Hz dan λ = 2 m, maka v = 100 m/s.'
      },
      {
        id: 5,
        question: 'Bunyi tidak dapat merambat melalui...',
        options: ['Zat padat', 'Zat cair', 'Zat gas', 'Ruang hampa'],
        correctAnswer: 3,
        feedback: 'Benar! 🔇',
        explanation: 'Bunyi adalah gelombang mekanik yang memerlukan medium untuk merambat. Di ruang hampa (vakum) tidak ada partikel yang dapat bergetar, sehingga bunyi tidak dapat merambat. Inilah sebabnya di luar angkasa tidak ada suara.'
      },
      {
        id: 6,
        question: 'Amplitudo getaran adalah...',
        options: [
          'Jumlah getaran per detik',
          'Waktu untuk satu getaran',
          'Simpangan terjauh dari titik setimbang',
          'Panjang satu gelombang'
        ],
        correctAnswer: 2,
        feedback: 'Luar biasa! 📏',
        explanation: 'Amplitudo (A) adalah simpangan maksimum/terjauh dari titik setimbang. Amplitudo menentukan besar energi getaran. Semakin besar amplitudo, semakin besar energi dan semakin keras bunyi yang dihasilkan.'
      }
    ]
  }
];
