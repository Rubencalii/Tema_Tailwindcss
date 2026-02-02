import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
    <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
      <div class="flex flex-col items-center text-center space-y-6">
        <div class="w-20 h-20 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <div class="space-y-2">
          <h1 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
            Vite + Tailwind
          </h1>
          <p class="text-slate-300 font-medium tracking-wide">
            Estructura configurada con éxito
          </p>
        </div>

        <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div class="grid grid-cols-2 gap-4 w-full text-sm">
          <div class="bg-white/5 rounded-xl p-3 border border-white/5">
            <p class="text-cyan-400 font-bold mb-1">Vite</p>
            <p class="text-slate-400 text-xs">Build tool ultra rápido</p>
          </div>
          <div class="bg-white/5 rounded-xl p-3 border border-white/5">
            <p class="text-blue-400 font-bold mb-1">Tailwind</p>
            <p class="text-slate-400 text-xs">Utility-first CSS</p>
          </div>
        </div>

        <button class="group relative px-6 py-3 bg-white text-slate-900 rounded-xl font-bold overflow-hidden transition-all hover:pr-10">
          <span class="relative z-10">¡Empezar a Crear!</span>
          <div class="absolute right-0 top-0 h-full w-0 bg-cyan-500 transition-all group-hover:w-full"></div>
          <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 transition-all group-hover:opacity-100 group-hover:right-3 group-hover:z-10" fill="none" stroke="white" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
`
