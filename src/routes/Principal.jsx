import "../assets/styles/Principal.css"
import mainimg from "../assets/mainimg.svg"
import watch from '../assets/watch.svg'
import easy from '../assets/easy.svg'
import conversa from '../assets/efficiency.svg'


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
        <section className="cards">
            <div className="solucao">
                <h3>SOLUÇÃO</h3>
                <p>A plataforma de telemedicina desenvolvida apresenta uma solução inovadora e abrangente para otimizar a experiência dos usuários no cuidado com a saúde. Integrando agendamento de consultas, consultas virtuais, gerenciamento de medicamentos e vacinas, além de notificações personalizadas, a plataforma visa simplificar e aprimorar a jornada do paciente. Com um foco especial na eficiência, a solução oferece um check-in rápido no hospital, permitindo que os usuários agendem suas consultas online e realizem um check-in presencial de forma ágil, usando a tecnologia NFC. Essa abordagem inovadora redefine a interação entre paciente e sistema de saúde, proporcionando conveniência, eficácia e um cuidado mais personalizado. 
                </p>
            </div>
            <div className="utilidade">
                <h3>UTILIDADE</h3>
                <p>A plataforma de telemedicina oferece uma gama abrangente de funcionalidades projetadas para simplificar a gestão da saúde do usuário. Ao agendar consultas de forma intuitiva, participar de consultas virtuais, gerenciar medicamentos e registrar vacinas, os usuários têm acesso a uma experiência de cuidado integrada e eficiente. Além disso, a plataforma emite notificações automáticas para lembretes de consultas, horários de medicamentos e atualizações sobre vacinas. A solução também revoluciona o processo de check-in no hospital, permitindo que os usuários cheguem e ingressem na sala de espera com facilidade, utilizando a tecnologia NFC para uma interação rápida e sem complicações. </p>
            </div>
            <div className="funcionalidade">
                <h3>FUNCIONALIDADE</h3>
                <p>A plataforma de telemedicina oferece um conjunto robusto de funcionalidades para otimizar a gestão da saúde dos usuários. Isso inclui um sistema intuitivo de agendamento de consultas que permite aos usuários escolherem horários convenientes, consultas virtuais para um acesso rápido e seguro aos profissionais de saúde, e um eficiente gerenciamento de medicamentos, com lembretes precisos para garantir a adesão ao tratamento. A funcionalidade de registro de vacinas fornece aos usuários um histórico claro e notificações automáticas para garantir que estejam em dia com as imunizações recomendadas. Além disso, a inovação no check-in hospitalar, através da tecnologia NFC, agiliza o processo, economizando tempo e proporcionando uma transição suave do agendamento online para a sala de espera do médico. Essas funcionalidades combinadas visam melhorar significativamente a experiência do paciente e promover uma abordagem proativa para o cuidado com a saúde.</p>
            </div>
        </section>
        <section className="benefits">
            <h3 id="benefits-title">VANTAGENS</h3>
            <div className="benefits-container">
            <div className="benefits-content">
                <div>
                    <img src={watch} alt="" />
                </div>
                <div>
                    <h3>AGILIDADE NA JORNADA DO PACIENTE</h3>
                    <p>A plataforma integra agendamento eficiente, consultas virtuais, e check-in inovador com tecnologia NFC, proporcionando uma experiência fluida e rápida para os usuários.</p>
                </div>
            </div>
            <div className="benefits-content">
                <div>
                    <img src={easy} alt="" />
                </div>
                <div>
                    <h3>GESTÃO DE SAÚDE SIMPLIFICADA</h3>
                    <p>Com funcionalidades como lembretes automáticos, gerenciamento de medicamentos e registro de vacinas, a plataforma facilita a gestão proativa da saúde, promovendo a adesão ao tratamento e a prevenção de condições.</p>
                </div>
            </div>
            <div className="benefits-content">
                <div>
                    <img src={conversa} alt="" />
                </div>
                <div>
                    <h3>EFICIÊNCIA OPERACIONAL</h3>
                    <p>A combinação de agendamento online, consultas virtuais e check-in ágil não apenas melhora a experiência do paciente, mas também otimiza os processos internos, tornando a prestação de cuidados mais eficiente e centrada no usuário.</p>
                </div>
            </div>
            </div>
        </section>
        </main>
    </>
  );
}