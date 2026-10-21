import { useEffect, useState } from 'react';

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  Check,
  ClipboardCheck,
  Clock3,
  Factory,
  GraduationCap,
  HeartHandshake,
  Hospital,
  House,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';

const imagePath = (name: string) =>
  `${import.meta.env.BASE_URL}images/${name}`;

const phone = '5511970685205';
const message = 'Olá! Conheci a EMUNAH pelo site e gostaria de solicitar uma proposta de serviços de facilities.';
const whatsApp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// Fotografias ilustrativas: substitua por imagens autorizadas da operação da EMUNAH.
const photos = {
  lobby: imagePath('portaria-emunah.png'),
  cleaning: imagePath('limpeza-emunah.png'),
  reception: imagePath('Atendimento-emunah.png'),
  building: imagePath('Manutencao-emunah.png'),
  garden: imagePath('Jardinagem-emunah.png'),
  monitor: imagePath('Monitoramento-emunah.png'),
  kitchen: imagePath('Refeitorios-emunah.png'),
};


const heroSlides = [
  {
    image: imagePath('portaria-emunah.png'),
    title: 'Portaria e Controle de Acesso',
  },
  {
    image: imagePath('limpeza-emunah.png'),
    title: 'Limpeza, Asseio e Conservação',
  },
  {
    image: imagePath('Atendimento-emunah.png'),
    title: 'Atendimento e Recepção',
  },
  {
    image: imagePath('Manutencao-emunah.png'),
    title: 'Manutenção Predial',
  },
  {
    image: imagePath('Jardinagem-emunah.png'),
    title: 'Jardinagem',
  },
  {
    image: imagePath('Monitoramento-emunah.png'),
    title: 'Monitoramento',
  },
  {
    image: imagePath('Refeitorios-emunah.png'),
    title: 'Refeitórios e Cozinhas Profissionais',
  },
];


type Service = { num: string; title: string; description: string; image: string; icon: LucideIcon };
const services: Service[] = [
  { num: '01', title: 'Portaria e controle de acesso', description: 'Controle de entrada e saída de pessoas e veículos, com atendimento profissional e apoio da tecnologia.', image: photos.lobby, icon: ShieldCheck },
  { num: '02', title: 'Limpeza, asseio e conservação', description: 'Conservação de ambientes internos e externos com equipes preparadas, produtos e equipamentos adequados.', image: photos.cleaning, icon: Sparkles },
  { num: '03', title: 'Atendimento e recepção', description: 'Profissionais selecionados de acordo com o perfil, a rotina e as necessidades de cada cliente.', image: photos.reception, icon: Users },
  { num: '04', title: 'Manutenção predial', description: 'Suporte em elétrica, hidráulica, pintura, alvenaria e pequenos reparos para o dia a dia da operação.', image: photos.building, icon: Wrench },
  { num: '05', title: 'Jardinagem', description: 'Cuidados com áreas verdes, poda, roçagem, plantio e jardinagem ornamental.', image: photos.garden, icon: Leaf },
  { num: '06', title: 'Monitoramento', description: 'Soluções de monitoramento e controle de acesso, incluindo portaria remota e sistemas de câmeras.', image: photos.monitor, icon: Monitor },
  { num: '07', title: 'Refeitórios e cozinhas', description: 'Profissionais para refeitórios corporativos, industriais, escolares e hospitalares, com seleção e acompanhamento.', image: photos.kitchen, icon: UtensilsCrossed },
];


const segments: { icon: LucideIcon; name: string }[] = [
  { icon: House, name: 'Condomínios' },
  { icon: Building2, name: 'Empresas' },
  { icon: Factory, name: 'Indústrias' },
  { icon: GraduationCap, name: 'Escolas' },
  { icon: ShoppingCart, name: 'Supermercados' },
  { icon: ShoppingBag, name: 'Shopping centers' },
  { icon: BedDouble, name: 'Hotéis' },
  { icon: Hospital, name: 'Hospitais' },
];


const advantages = [
  { num: '01', title: 'Atendimento personalizado', detail: 'Acompanhamento próximo e soluções dimensionadas para cada operação.', icon: HeartHandshake },
  { num: '02', title: 'Seleção de profissionais', detail: 'Equipes alinhadas às demandas, rotinas e perfis de cada cliente.', icon: Users },
  { num: '03', title: 'Agilidade operacional', detail: 'Suporte à seleção e à reposição de profissionais conforme a necessidade.', icon: Clock3 },
  { num: '04', title: 'Qualidade e padronização', detail: 'Organização da rotina e atenção permanente à execução dos serviços.', icon: ClipboardCheck },
];

function ButtonLink({ children, variant = 'primary', className = '' }: { children: React.ReactNode; variant?: 'primary' | 'outline' | 'light'; className?: string }) {
  return <a className={`button button--${variant} ${className}`} href={whatsApp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} strokeWidth={2} /></a>;
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((previous) =>
        (previous + 1) % heroSlides.length
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const links = [['#inicio', 'Início'], ['#sobre', 'Sobre nós'], ['#servicos', 'Serviços'], ['#segmentos', 'Segmentos'], ['#diferenciais', 'Diferenciais'], ['#contato', 'Contato']];
  return <>
    <header className="header">
      <div className="header-inner container">
        <a href="#inicio" aria-label="EMUNAH — Página inicial" className="brand" onClick={closeMenu}><img src={imagePath('logo-green.png')} alt="EMUNAH — Serviços de Facilities em Geral" /></a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {links.map(([href, label]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
          <a className="mobile-whatsapp" href={whatsApp} target="_blank" rel="noopener noreferrer">Solicitar proposta <ArrowUpRight size={16} /></a>
        </nav>
        <a className="header-cta" href={whatsApp} target="_blank" rel="noopener noreferrer">Solicitar proposta <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="hero-copy">
          <div className="hero-content">
            <SectionLabel>FACILITIES COM PROPÓSITO</SectionLabel>
            <h1>Ambientes bem cuidados. <em>Operações que evoluem.</em></h1>
            <p>A EMUNAH conecta pessoas, gestão e soluções em facilities para tornar a rotina da sua operação mais organizada, segura e eficiente.</p>
            <div className="hero-actions"><ButtonLink>Solicitar proposta</ButtonLink><a className="text-link" href="#servicos">Conhecer soluções <ArrowRight size={18} /></a></div>
            <div className="hero-note"><span className="small-icon"><Check size={16} /></span> Soluções personalizadas para cada necessidade</div>
          </div>
        </div>

        <div
          className="hero-visual"
          role="region"
          aria-label="Serviços da EMUNAH"
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`hero-image ${currentSlide === index ? 'hero-image--active' : ''
                }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
              aria-hidden="true"
            />
          ))}

          <div className="hero-visual-label">
            <span className="hero-label-icon">
              <Building2 size={21} />
            </span>

            <span>{heroSlides[currentSlide].title}</span>
          </div>

          <div className="hero-corner-mark" />
        </div>

        <a href="#sobre" className="scroll-hint" aria-label="Rolar para conhecer a EMUNAH"><ArrowDown size={16} /> DESCUBRA A EMUNAH</a>
      </section>

      <section id="sobre" className="about section container">
        <div className="about-visual">
          <img
            src={imagePath('Acompanhamento-emunah.png')}
            loading="lazy"
            alt="Supervisor da EMUNAH realizando acompanhamento operacional com cliente"
          />
          <div className="about-image-badge"><img src={imagePath('symbol-white.png')} alt="" />
            <span>Cuidado que faz<br />a diferença.</span>
          </div>
        </div>
        <div className="about-copy"><SectionLabel>QUEM SOMOS</SectionLabel><h2>Uma parceria de confiança para o <span>seu dia a dia.</span></h2><p>A EMUNAH é uma empresa de facilities criada para atender de forma personalizada às demandas de seus clientes. Reunimos soluções que integram segurança, tranquilidade e satisfação, sempre com atenção à qualidade da entrega.</p><p>Nossa atuação reúne experiência em consultoria, recursos humanos, serviços, relacionamento e pós-venda — conectando profissionais e necessidades reais de cada operação.</p><div className="about-principles"><div><ShieldCheck /><strong>Segurança</strong><small>Em cada processo</small></div><div><Users /><strong>Pessoas</strong><small>No centro da operação</small></div><div><Leaf /><strong>Cuidado</strong><small>Nos detalhes do dia a dia</small></div></div></div>
      </section>

      <section id="servicos" className="services section section--tint"><div className="container"><div className="section-heading"><div><SectionLabel>O QUE FAZEMOS</SectionLabel><h2>Soluções para cada ambiente,<br /><span>cuidado em cada etapa.</span></h2></div><p>Da rotina operacional à experiência de quem utiliza os espaços, atuamos com profissionais preparados para diferentes necessidades.</p></div><div className="services-grid">{services.map((s) => { const Icon = s.icon; return <article className="service-card" key={s.num}><div className="service-image"><img src={s.image} alt="" loading="lazy" /><div className="service-index">{s.num}</div></div><div className="service-body"><span className="service-icon"><Icon size={22} strokeWidth={1.8} /></span><h3>{s.title}</h3><p>{s.description}</p><a href={whatsApp} target="_blank" rel="noopener noreferrer" aria-label={`Pedir proposta para ${s.title}`}>Saiba mais <ArrowUpRight size={16} /></a></div></article> })}</div></div></section>

      <section id="segmentos" className="segments section container"><div className="segments-intro"><SectionLabel>ONDE ATUAMOS</SectionLabel><h2>Atuação que se adapta<br />ao <span>seu ambiente.</span></h2><p>Cada segmento possui necessidades próprias. Nossa proposta é entender a operação e oferecer a equipe adequada para cada cenário.</p></div><div className="segments-grid">{segments.map(({ name, icon: Icon }) => <div className="segment" key={name}><Icon size={27} strokeWidth={1.5} /><span>{name}</span><ArrowUpRight className="segment-arrow" size={16} /></div>)}</div></section>

      <section id="diferenciais" className="advantages section"><div className="container advantages-layout"><div className="advantages-intro"><SectionLabel>O JEITO EMUNAH</SectionLabel><h2>Mais que serviços.<br /><span>Compromisso com a sua operação.</span></h2><p>Acreditamos em relações próximas, equipes valorizadas e processos que fazem a diferença na rotina de nossos clientes.</p><ButtonLink variant="light">Converse com a EMUNAH</ButtonLink>
        <img
          className="advantages-watermark"
          src={imagePath('symbol-white.png')}
          alt=""
          aria-hidden="true"
        />
      </div><div className="advantages-list">{advantages.map(({ num, title, detail, icon: Icon }) => <div className="advantage" key={num}><div className="advantage-num">{num}</div><div><h3>{title}</h3><p>{detail}</p></div><Icon size={24} strokeWidth={1.5} /></div>)}</div></div></section>

      <section className="process section container"><div className="section-heading"><div><SectionLabel>COMO TRABALHAMOS</SectionLabel><h2>Uma operação bem feita<br /><span>começa com planejamento.</span></h2></div><p>Do entendimento da necessidade ao acompanhamento do serviço, cada etapa é pensada para gerar confiança.</p></div><div className="process-grid">{[['01', 'Entendemos', 'Conversamos para conhecer sua operação e prioridades.'], ['02', 'Planejamos', 'Definimos o perfil e a solução adequada ao ambiente.'], ['03', 'Implantamos', 'Organizamos a equipe e as rotinas de atendimento.'], ['04', 'Acompanhamos', 'Mantemos comunicação e atenção à qualidade da entrega.']].map(([n, t, d]) => <div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>

      <section id="contato" className="contact"><div className="container contact-inner"><div className="contact-copy"><SectionLabel>VAMOS CONVERSAR?</SectionLabel><h2>Seu espaço merece<br /><span>o cuidado certo.</span></h2><p>Conte com a EMUNAH para encontrar uma solução de facilities adequada à sua operação. Nossa equipe comercial está pronta para conversar.</p><ButtonLink>Falar com o comercial</ButtonLink></div><div className="contact-card"><div className="contact-card-top"><img src={imagePath('symbol-green.png')} alt="" /><span>EMUNAH FACILITIES</span></div><h3>Estamos à disposição.</h3><p>Entre em contato e vamos entender como podemos apoiar sua operação.</p><a href={whatsApp} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} /><span><small>WhatsApp comercial</small><strong>(11) 97068-5205</strong></span><ArrowUpRight size={17} /></a><a href="https://www.instagram.com/emunahrh/" target="_blank" rel="noopener noreferrer"><Instagram size={21} /><span><small>Instagram</small><strong>@emunahrh</strong></span><ArrowUpRight size={17} /></a><div className="contact-address"><MapPin size={20} /><span><small>Endereço</small><strong>Rua Clemente Álvares, 119 — sala 74<br />São Paulo, SP</strong></span></div></div></div></section>
    </main >

    <footer className="footer"><div className="container footer-upper"><div className="footer-brand"><img src={imagePath('logo-white.png')} alt="EMUNAH" /><p>Cuidamos dos ambientes.<br />Valorizamos as pessoas.</p></div><div className="footer-menu"><b>Navegação</b><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#segmentos">Segmentos</a><a href="#contato">Contato</a></div><div className="footer-menu"><b>Contato</b><a href={whatsApp} target="_blank" rel="noopener noreferrer">(11) 97068-5205</a><a href="https://www.instagram.com/emunahrh/" target="_blank" rel="noopener noreferrer">Instagram</a><span>São Paulo — SP</span></div></div><div className="footer-bottom container"><span>© {new Date().getFullYear()} EMUNAH. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
    <a className="floating-whatsapp" href={whatsApp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o comercial pelo WhatsApp"><MessageCircle size={26} /></a>
  </>;
}
export default App;
