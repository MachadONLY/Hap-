import "../assets/styles/Principal.css"
import mainimg from "../assets/mainimg.svg"
import relogio from '../assets/img/time.png'
import video from '../assets/img/video.png'
import conversa from '../assets/img/talk.png'


//página de apresentação da marca
export default function Principal() {
  return (
    <>
    <main>
        <section className="slideshow">
            <img src={mainimg} alt="Imagem principal de agendamento" />
            <div className="slideshow-text">
                <h2>HAP +</h2>
                <p>Desenvolver uma plataforma de telemedicina para a Hapvida, visando facilitar o acesso a consultas médicas, melhorar o gerenciamento de medicamentos, promover a gestão eficiente de vacinas e proporcionar uma experiência abrangente de saúde para os pacientes.</p>
            </div>
        </section>
        <section className="c-solucao">
            <div>
                <h3>SOLUÇÃO</h3>
                <p>A plataforma de telemedicina desenvolvida apresenta uma solução inovadora e abrangente para otimizar a experiência dos usuários no cuidado com a saúde. Integrando agendamento de consultas, consultas virtuais, gerenciamento de medicamentos e vacinas, além de notificações personalizadas, a plataforma visa simplificar e aprimorar a jornada do paciente. Com um foco especial na eficiência, a solução oferece um check-in rápido no hospital, permitindo que os usuários agendem suas consultas online e realizem um check-in presencial de forma ágil, usando a tecnologia NFC. Essa abordagem inovadora redefine a interação entre paciente e sistema de saúde, proporcionando conveniência, eficácia e um cuidado mais personalizado. 
                </p>
            </div>
            <div>
                <h3>UTILIDADE</h3>
                <p>A plataforma de telemedicina oferece uma gama abrangente de funcionalidades projetadas para simplificar a gestão da saúde do usuário. Ao agendar consultas de forma intuitiva, participar de consultas virtuais, gerenciar medicamentos e registrar vacinas, os usuários têm acesso a uma experiência de cuidado integrada e eficiente. Além disso, a plataforma emite notificações automáticas para lembretes de consultas, horários de medicamentos e atualizações sobre vacinas. A solução também revoluciona o processo de check-in no hospital, permitindo que os usuários cheguem e ingressem na sala de espera com facilidade, utilizando a tecnologia NFC para uma interação rápida e sem complicações. </p>
            </div>
            <div>
                <h3>FUNCIONALIDADE</h3>
                <p>A plataforma de telemedicina oferece um conjunto robusto de funcionalidades para otimizar a gestão da saúde dos usuários. Isso inclui um sistema intuitivo de agendamento de consultas que permite aos usuários escolherem horários convenientes, consultas virtuais para um acesso rápido e seguro aos profissionais de saúde, e um eficiente gerenciamento de medicamentos, com lembretes precisos para garantir a adesão ao tratamento. A funcionalidade de registro de vacinas fornece aos usuários um histórico claro e notificações automáticas para garantir que estejam em dia com as imunizações recomendadas. Além disso, a inovação no check-in hospitalar, através da tecnologia NFC, agiliza o processo, economizando tempo e proporcionando uma transição suave do agendamento online para a sala de espera do médico. Essas funcionalidades combinadas visam melhorar significativamente a experiência do paciente e promover uma abordagem proativa para o cuidado com a saúde.</p>
            </div>
        </section>
        <section className="c-vantagens">
            <h3 id="vantagens-titulo">VANTAGENS</h3>
            <div className="c-vantagens-div">
            <div className="c-vantagens-div-interna">
                <div>
                    <img src={relogio} alt="" />
                </div>
                <div>
                    <h3>ECONOMIA DE TEMPO</h3>
                    <p>Com nosso aplicativo, o usuário pode economizar tempo, uma vez que não precisa fazer diversas ligações e pesquisas por clínicas para poder marcar um agendamento. Todas as informações e opções disponíveis estão centralizadas e unificadas na Ponto +.</p>
                </div>
            </div>
            <div className="c-vantagens-div-interna">
                <div>
                    <img src={video} alt="" />
                </div>
                <div>
                    <h3>TUTORIAL EM VÍDEO</h3>
                    <p>Com o intuito de promover maior acessibilidade, principalmente a idosos, será disponibilizado um vídeo de tutorial de como utilizar nossa aplicação. Este estará disponível a qualquer momento para quem precisar de ajuda.</p>
                </div>
            </div>
            <div className="c-vantagens-div-interna">
                <div>
                    <img src={conversa} alt="" />
                </div>
                <div>
                    <h3>COMUNICAÇÃO FACILITADA</h3>
                    <p>Além de facilitar o agendamento, buscamos facilitar a comunicação entre as clínicas e os usuários. Nosso aplicativo contará com chats para que os futuros pacientes e os locais de exame possam conversar e esclarecer dúvidas.</p>
                </div>
            </div>
            </div>
        </section>
        </main>
    </>
  );
}