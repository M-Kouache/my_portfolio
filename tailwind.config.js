module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-side-img':"url('https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
        'position-center':"center"
        
      },
      colors:{
        'firefly':'#0f2830',
        'emerald':'#014751',
        'mint':'#aff8c8',
        'lilac':'#d2c4fb',
        'bananayellow':'#ffeeb4',
        'zircon':'#f8fbff'
      }
    },
  },
  plugins: [],
}