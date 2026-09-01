import './brand.css'

const whatsapp = 'https://wa.me/554892074105?text=Oi%20Carla%2C%20quero%20conversar%20com%20voc%C3%AA.'

const replaceHeader = () => {
  const header = document.querySelector('.site-header')

  if (!header) {
    requestAnimationFrame(replaceHeader)
    return
  }

  header.outerHTML = `
<header class="site-header">
  <div class="header-left">
    <a class="brand-logo" href="#top" aria-label="Carla Z. Pereira, início">
      <div class="brand-name-box">
        <span class="brand-name">Carla</span>
        <span class="brand-sub">Z. PEREIRA</span>
      </div>
    </a>
    <div class="header-number"><span>20055</span></div>
    <div class="header-subtitle">
      <span class="title-deputada">Deputada Estadual</span>
      <span class="title-sc">SANTA CATARINA</span>
    </div>
  </div>
  <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu <span>☰</span></button>
  <nav id="site-nav" aria-label="Navegação principal">
    <a href="#carla">A CARLA</a>
    <a href="#causas">CAUSAS</a>
    <a href="#plano">PLANO DE MANDATO</a>
    <a class="nav-cta" href="${whatsapp}" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2.1 22l5.6-1.46A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.29-.17-3.32.87.89-3.24-.19-.31A8 8 0 1 1 12 19.7Zm4.38-5.98c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.28.18-.52.06-1.4-.7-2.32-1.25-3.24-2.83-.25-.43.25-.4.72-1.32.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66 1.54.66 2.14.72 2.91.61.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28Z" /></svg>
      <span>CONVERSAR AGORA</span>
      <span class="arrow-up">↗</span>
    </a>
  </nav>
</header>
`

  const menuToggle = document.querySelector('.menu-toggle')
  const navigation = document.querySelector('#site-nav')

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!isOpen))
    navigation.classList.toggle('is-open', !isOpen)
  })

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    navigation.classList.remove('is-open')
  }))
}

replaceHeader()