import React from 'react';
import {
  Panel,
  PanelHeader,
  Div,
} from '@vkontakte/vkui';
import Logo from '../../../img/logo.png';

type Props = {
    id: string;
}

const Guess: React.FunctionComponent<Props> = (props: Props) => {
  const { id } = props;

  return (
    <Panel id={id}>
      <PanelHeader
        className="header"
        separator={false}
        left={<img src={Logo} width="24px" height="24px" alt="Logo" />}
      >
        СКОЛЬКО?
      </PanelHeader>
      <Div>
        УГАДАЙ СКОЛЬКО ВЕСИТ БАНАН И ВЫИГРАЙ ДО 300 000 ₽
      </Div>
    </Panel>
  );
};

export default Guess;
