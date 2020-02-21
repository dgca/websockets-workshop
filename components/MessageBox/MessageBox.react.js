import {useState} from 'react';
import Button from '../Button/Button.react';
import Input from '../Input/Input.react';
import Label from '../Label/Label.react';
import Textarea from '../Textarea/Textarea.react';
import styles from './message-box.module.css';

const MessageBox = ({onSend}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className={styles.wrapper}>
      <Label label='Name:'>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Label>
      <Label label='Message:'>
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </Label>
      <Button
        disabled={!message || !name}
        onClick={() => {
          onSend({name, message});
          setMessage('');
        }}
      >
        Send
      </Button>
    </div>
  );
};

export default MessageBox;
