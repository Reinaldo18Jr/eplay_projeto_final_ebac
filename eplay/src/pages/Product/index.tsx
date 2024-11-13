import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium obcaecati deleniti repudiandae voluptate quibusdam labore
          reiciendis voluptates voluptatum harum, amet rem recusandae delectus
          odit reprehenderit eaque explicabo minus libero! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Quasi aut libero sapiente
          tenetur, laudantium soluta neque eius quidem dolore est, id, assumenda
          illum dolorum aliquid at veniam quo voluptas? Nobis. praesentium
          obcaecati deleniti repudiandae voluptate quibusdam labore reiciendis
          voluptates voluptatum harum, amet rem recusandae delectus odit
          reprehenderit eaque explicabo minus libero!
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
