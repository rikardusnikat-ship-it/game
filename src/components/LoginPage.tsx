import { useState } from 'react';
import { useAuth, AVATARS } from '../contexts/AuthContext';

export default function LoginPage() {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Login form
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form
  const [regUsername, setRegUsername] = useState('');
  const [regDisplayName, setRegDisplayName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regSchool, setRegSchool] = useState('');
  const [regGrade, setRegGrade] = useState('Kelas 7');
  const [regAvatar, setRegAvatar] = useState(AVATARS[0]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!loginUsername || !loginPassword) {
      setError('Username dan password harus diisi!');
      return;
    }

    const success = login(loginUsername, loginPassword);
    if (!success) {
      setError('Username atau password salah!');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!regUsername || !regDisplayName || !regEmail || !regPassword || !regSchool) {
      setError('Semua field harus diisi!');
      return;
    }

    if (regPassword.length < 6) {
      setError('Password minimal 6 karakter!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail)) {
      setError('Format email tidak valid!');
      return;
    }

    const result = register({
      username: regUsername,
      displayName: regDisplayName,
      email: regEmail,
      password: regPassword,
      avatar: regAvatar,
      school: regSchool,
      grade: regGrade,
    });

    if (result) {
      setSuccess('Registrasi berhasil! Selamat datang di PhysicsQuest! 🎉');
    } else {
      setError('Username atau email sudah digunakan!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-60"></div>
      <div className="absolute top-20 left-20 text-6xl animate-float opacity-20">⚛️</div>
      <div className="absolute bottom-20 right-20 text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🚀</div>
      <div className="absolute top-1/2 left-10 text-4xl animate-float opacity-20" style={{ animationDelay: '2s' }}>🔬</div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="text-6xl mb-3 animate-bounce">⚛️</div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Physics<span className="text-gradient-ocean">Quest</span>
          </h1>
          <p className="text-gray-400 text-sm">Game Fisika SMP Interaktif</p>
        </div>

        {/* Card */}
        <div className="glass-card-strong rounded-3xl p-8 animate-slideUp">
          {/* Toggle */}
          <div className="flex gap-2 mb-6 bg-white/5 rounded-2xl p-1">
            <button
              onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                isLogin
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              🔑 Masuk
            </button>
            <button
              onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                !isLogin
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              ✨ Daftar
            </button>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 bg-red-500/10 border border-red-400/30 rounded-xl p-3 text-red-300 text-sm animate-slideDown">
              ⚠️ {error}
            </div>
          )}
          {success && (
            <div className="mb-4 bg-green-500/10 border border-green-400/30 rounded-xl p-3 text-green-300 text-sm animate-slideDown">
              ✅ {success}
            </div>
          )}

          {/* Login Form */}
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                  Username atau Email
                </label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                  placeholder="Masukkan username atau email"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                  placeholder="Masukkan password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] text-lg"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                🚀 Masuk & Mainkan!
              </button>

              {/* Demo accounts */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center mb-3">
                  💡 Coba akun demo untuk mencoba:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { setLoginUsername('fisika_pro'); setLoginPassword('demo123'); }}
                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-gray-300 transition-all"
                  >
                    🧑‍🔬 fisika_pro
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLoginUsername('einstein_girl'); setLoginPassword('demo123'); }}
                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-gray-300 transition-all"
                  >
                    👩‍🎓 einstein_girl
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Avatar Selection */}
              <div>
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 block">
                  Pilih Avatar
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {AVATARS.map((avatar) => (
                    <button
                      key={avatar}
                      type="button"
                      onClick={() => setRegAvatar(avatar)}
                      className={`text-2xl p-2 rounded-xl transition-all ${
                        regAvatar === avatar
                          ? 'bg-purple-500/30 border-2 border-purple-400 scale-110'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                    Username
                  </label>
                  <input
                    type="text"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all text-sm"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={regDisplayName}
                    onChange={(e) => setRegDisplayName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all text-sm"
                    placeholder="Nama kamu"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all text-sm"
                  placeholder="email@sekolah.sch.id"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all text-sm"
                  placeholder="Minimal 6 karakter"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                    Sekolah
                  </label>
                  <input
                    type="text"
                    value={regSchool}
                    onChange={(e) => setRegSchool(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all text-sm"
                    placeholder="Nama sekolah"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">
                    Kelas
                  </label>
                  <select
                    value={regGrade}
                    onChange={(e) => setRegGrade(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all text-sm"
                  >
                    <option value="Kelas 7" className="bg-gray-800">Kelas 7</option>
                    <option value="Kelas 8" className="bg-gray-800">Kelas 8</option>
                    <option value="Kelas 9" className="bg-gray-800">Kelas 9</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] text-lg mt-2"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                ✨ Daftar & Mulai Belajar!
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          🎓 Platform pembelajaran fisika interaktif untuk siswa SMP
        </p>
      </div>
    </div>
  );
}
