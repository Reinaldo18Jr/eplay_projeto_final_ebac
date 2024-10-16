import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
      neque velit, aperiam architecto qui commodi dignissimos ullam omnis maxime
      vitae cupiditate pariatur hic molestiae fuga! Sit iste culpa dolorem
      omnis.
    </Descricao>
  </Card>
)

export default Product
