import {
  Wrapper,
  Container,
  Close,
  Icon,
  Title,
  Subtitle,
  Table,
  TableItem,
  TableItemDescription,
  TableItemTitle,
} from './style';

const Modal = ({ data, visible, setVisible }) => {
  const fixNumber = (num, posfix) => {
    if (typeof num === 'number') return `${num.toFixed(2)} ${posfix ? posfix : ''}`;
    return num;
  };

  if (data) {
    return (
      <Wrapper visible={visible}>
        <Container>
          <Close onClick={() => { setVisible(false); }}><Icon name="close" size="icon" /></Close>
          <Title>{data.description}</Title>
          <Subtitle>{data.category}</Subtitle>
          <Subtitle style={{ padding: '32px 0' }}>Em 100g:</Subtitle>
          <Table>
            <TableItem>
              <TableItemTitle>
                <Icon name="fire" size="thumb" />
                <span>Energy</span>
              </TableItemTitle>
              <TableItemDescription>{fixNumber(data.energy_kcal, 'Kcal')}</TableItemDescription>
            </TableItem>
            <TableItem>
              <TableItemTitle>
                <Icon name="blood" size="thumb" />
                <span>Cholesterol</span>
              </TableItemTitle>
              <TableItemDescription>{fixNumber(data.cholesterol_mg, 'mg')}</TableItemDescription>
            </TableItem>
            <TableItem>
              <TableItemTitle>
                <Icon name="cow" size="thumb" />
                <span>Protein</span>
              </TableItemTitle>
              <TableItemDescription>{fixNumber(data.protein_g, 'g')}</TableItemDescription>
            </TableItem>
            <TableItem>
              <TableItemTitle>
                <Icon name="spaguetti" size="thumb" />
                <span>Carbs</span>
              </TableItemTitle>
              <TableItemDescription>{fixNumber(data.carbohydrate_g, 'g')}</TableItemDescription>
            </TableItem>
            <TableItem>
              <TableItemTitle>
                <Icon name="bacon" size="thumb" />
                <span>Fat</span>
              </TableItemTitle>
              <TableItemDescription>{fixNumber(data.lipid_g, 'g')}</TableItemDescription>
            </TableItem>
            <TableItem>
              <TableItemTitle>
                <Icon name="leaf" size="thumb" />
                <span>Fiber</span>
              </TableItemTitle>
              <TableItemDescription>{fixNumber(data.fiber_g, 'g')}</TableItemDescription>
            </TableItem>
          </Table>
        </Container>
      </Wrapper>
    );
  }

  return '';
}

export default Modal;
