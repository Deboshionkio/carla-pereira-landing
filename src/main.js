import './style.css'
import './brand.css'

const whatsapp = 'https://wa.me/554892074105?text=Oi%20Carla%2C%20quero%20conversar%20com%20voc%C3%AA.'
const instagram = 'https://www.instagram.com/carla.zpereira/p/DcFijwWNmk-/'
const youtubeVideo = 'https://www.youtube.com/embed/psdnZqtf5fQ'
const assetBase = import.meta.env.BASE_URL

const causes = [
  ['01', 'Empreendedorismo e oportunidades', 'Menos obstáculos para quem trabalha, empreende, gera empregos e movimenta nossa economia.'],
  ['02', 'Saúde e qualidade de vida', 'Prevenção, acesso, inovação e políticas que cuidem melhor das pessoas.'],
  ['03', 'Mulheres', 'Mais oportunidades, proteção, autonomia e espaço para cada uma construir sua história.'],
  ['04', 'Proteção e bem-estar animal', 'Responsabilidade, políticas públicas eficientes e respeito aos animais.'],
  ['05', 'Infância, família e futuro', 'Melhores condições para nossas crianças crescerem com oportunidades, educação e segurança.'],
  ['06', 'Inclusão e dignidade', 'Olhar para quem muitas vezes não consegue ser ouvido e construir com humanidade.'],
]

const causeCards = causes.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join('')

document.querySelector('#app').innerHTML = `
<header class="site-header">
  <div class="header-left">
    <a class="brand-logo" href="#top" aria-label="Carla Z. Pereira, início">
      <div class="brand-name-box">
        <span class="brand-name">Carla</span>
        <span class="brand-sub">Z. PEREIRA</span>
      </div>
    </a>
    <div class="header-number">
      <span>20055</span>
    </div>
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
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2.1 22l5.6-1.46A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.29-.17-3.32.87.89-3.24-.19-.31A8 8 0 1 1 12 19.7Zm4.38-5.98c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.28.18-.52.06-1.4-.7-2.32-1.25-3.24-2.83-.25-.43.25-.4.72-1.32.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66 1.54.66 2.14.72 2.91.61.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28Z"/></svg>
      <span>CONVERSAR AGORA</span>
      <span class="arrow-up">↗</span>
    </a>
  </nav>
</header>

<main id="top">
  <section class="hero section-shell" id="carla">
    <div class="hero-copy reveal">
      <p class="eyebrow">CARLA Z. PEREIRA <span class="line"></span> SANTA CATARINA</p>
      <h1>E se a política começasse <em>ouvindo você?</em></h1>
      <p class="hero-lead">Eu acredito que política pode ser feita de um jeito diferente: ouvindo mais, aproximando pessoas e transformando boas ideias em ações que melhorem a vida de verdade.</p>
      <div class="hero-actions">
        <a class="button button-dark" href="${whatsapp}" target="_blank" rel="noreferrer">Quero conversar com a Carla <span>↗</span></a>
        <a class="text-link" href="#historia">Conhecer a Carla <span>↓</span></a>
      </div>
    </div>
    <div class="hero-visual reveal">
      <div class="image-frame"><img src="${assetBase}CandidataCarla.png" alt="Carla Z. Pereira, candidata a deputada estadual" /></div>
      <div class="hero-note"><span class="note-mark">“</span><p>Unir pessoas para transformar boas ideias em ações.</p></div>
      <div class="sticker">VAMOS<br><b>JUNTOS</b></div>
    </div>
  </section>
  <section class="campaign-video" aria-labelledby="video-title"><div class="section-shell video-inner"><div class="video-heading"><p class="kicker">UM POUCO MAIS DE PERTO</p><h2 id="video-title">A campanha em <em>movimento.</em></h2></div><div class="youtube-embed"><iframe src="${youtubeVideo}" title="Vídeo da campanha Carla Z. Pereira" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></section>
  <section class="intro band-cream" id="historia"><div class="section-shell split"><div class="section-label"><span>01</span><span class="vertical-line"></span><span>MINHA<br>HISTÓRIA</span></div><figure class="history-image"><img src="${assetBase}3_entrarNaPolitica.jpeg" alt="Carla Z. Pereira apresenta sua história e sua decisão de entrar para a política" /></figure></div></section>
  <section class="association band-paper" id="associacao"><div class="section-shell association-grid"><div class="section-label"><span>02</span><span class="vertical-line"></span><span>DEFESA<br>DA ESTÉTICA</span></div><div class="association-content"><p class="kicker">UM MOVIMENTO NECESSÁRIO</p><h2>Movimento em Defesa da Estética <em>Avançada e Multiprofissional.</em></h2><h3>O cenário atual</h3><p>Tramitam ações que buscam restringir os procedimentos estéticos minimamente invasivos exclusivamente aos médicos.</p><p>Essa medida impacta diretamente a atuação de biomédicos, fisioterapeutas, enfermeiros e farmacêuticos pós-graduados e habilitados em estética.</p><div class="association-risks"><div><h3>Os riscos desta restrição</h3><p><strong>Inviabilidade profissional:</strong> risco à atuação legal de milhares de profissionais de saúde devidamente qualificados por seus conselhos federais.</p><p><strong>Prejuízo ao consumidor:</strong> a centralização dos serviços gera um monopólio, elevando o preço de procedimentos, como Botox e preenchimentos, em até quatro vezes.</p></div><div class="association-commitment"><h3>Nosso compromisso: a criação da associação</h3><p>Como resposta a essa ameaça, este projeto apoia ativamente a criação de uma associação representativa dedicada exclusivamente à defesa dos profissionais de saúde da estética.</p><p>O objetivo central da futura associação será blindar juridicamente o direito ao trabalho e garantir a união das classes afetadas.</p><p>Defendemos o acesso da sociedade a tratamentos de qualidade, com preços justos, fundamentados na qualificação técnica e no respeito às normas sanitárias.</p></div></div></div><figure class="association-image"><img src="${assetBase}imagem-associacao.webp" alt="Profissionais de saúde reunidos em um ambiente de trabalho" /></figure></div></section>
  <section class="causes section-shell" id="causas"><div class="section-heading"><div><p class="kicker">03 / O QUE EU QUERO DEFENDER</p><h2>As causas que fazem<br>meus olhos <em>brilharem.</em></h2></div><p class="heading-note">Esses são alguns dos temas. Mas existe um que ainda falta aqui: <strong>o seu.</strong></p></div><div class="cause-grid">${causeCards}</div><a class="button button-outline" href="#plano">Conhecer todos os temas e causas <span>↗</span></a></section>
  <section class="listen band-teal" id="plano"><div class="section-shell listen-grid"><div><p class="kicker light">04 / PLANO DE MANDATO</p><h2>Eu quero<br><em>ouvir você.</em></h2><p>Não quero construir um Plano de Mandato dentro de uma sala, distante das pessoas. Quero construí-lo com as pessoas.</p><a class="button button-light" href="#participar">Participar do plano de mandato <span>↗</span></a></div><div class="questions"><div class="question"><span>01</span><p>O que precisa melhorar<br>na sua cidade?</p></div><div class="question"><span>02</span><p>Qual causa você gostaria<br>de ver representada?</p></div><div class="question"><span>03</span><p>Que ideia você levaria<br>para a Assembleia?</p></div></div></div></section>
  <section class="conversation section-shell"><div class="conversation-copy"><p class="kicker">05 / PORTA ABERTA</p><h2>Política também<br>é <em>conversa.</em></h2><p>Uma sugestão. Uma crítica. Uma causa. Ou só vontade de entender quem eu sou antes de decidir caminhar comigo.</p><a class="button button-dark" href="${whatsapp}" target="_blank" rel="noreferrer">Começar uma conversa <span>↗</span></a></div><div class="conversation-quote"><span>“</span><p>A sua experiência pode ajudar a construir uma proposta melhor para Santa Catarina.</p><div class="quote-line"></div></div></section>
  <section class="band-coral participate" id="participar"><div class="section-shell participate-inner"><div><p class="kicker light">06 / AGORA, JUNTOS</p><h2>Vamos unir<br>para <em>construir!</em></h2></div><div class="participate-side"><p>Eu acredito em uma Santa Catarina que cresce sem deixar as pessoas para trás. Mas nenhuma transformação importante é feita por uma pessoa sozinha.</p><a class="button button-light" href="${whatsapp}" target="_blank" rel="noreferrer">Quero participar <span>↗</span></a></div></div></section>
</main>

<footer class="footer">
  <div class="section-shell footer-inner"><a class="brand" href="#top"><span>CARLA Z.</span><strong>PEREIRA</strong></a><div><p>Candidata a Deputada Estadual<br>por Santa Catarina</p><strong class="number">20055</strong></div><div class="footer-links"><a href="${instagram}" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><p class="motto">Unir para realizar.</p></div><p class="copyright">© 2026 Carla Z. Pereira. Todos os direitos reservados.</p><p class="ai-disclosure">Algumas imagens desta página podem ter sido geradas ou tratadas com inteligência artificial.</p></div>
</footer>

<a class="floating-whatsapp" href="${whatsapp}" target="_blank" rel="noreferrer" aria-label="Fale com a Carla pelo WhatsApp"><svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2.1 22l5.6-1.46A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.29-.17-3.32.87.89-3.24-.19-.31A8 8 0 1 1 12 19.7Zm4.38-5.98c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.28.18-.52.06-1.4-.7-2.32-1.25-3.24-2.83-.25-.43.25-.4.72-1.32.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66 1.54.66 2.14.72 2.91.61.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28Z"/></svg><span>Fale com a Carla</span></a>
`

document.querySelector('.menu-toggle').addEventListener('click', (event) => { const button = event.currentTarget; const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); document.querySelector('#site-nav').classList.toggle('is-open', !open) })
document.querySelectorAll('#site-nav a').forEach((link) => link.addEventListener('click', () => { document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false'); document.querySelector('#site-nav').classList.remove('is-open') }))

