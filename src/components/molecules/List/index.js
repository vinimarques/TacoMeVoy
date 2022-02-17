import Modal from '@molecules/Modal';
import { useState } from 'react';
import {
  Wrapper,
  ListItem,
  NoResult,
} from './style';

const List = ({ data }) => {
  const [dataModal, setDataModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const openItem = i => {
    setDataModal(i);
    setVisible(true);
  };

  return (
    <>
      <Wrapper>
        {data.length === 0 ? (
          <NoResult>Nenhum resultado encontrado!</NoResult>
        ) : (
          <>
            {data.map(item => (
              <ListItem key={item.id} onClick={() => openItem(item)}>
                <span>{item.description}</span>
                <small>{item.category}</small>
              </ListItem>
            ))}
          </>
        )}
      </Wrapper>
      <Modal data={dataModal} visible={visible} setVisible={setVisible} />
    </>
  );
}

export default List;
