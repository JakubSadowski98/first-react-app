import styles from './TextInput.module.scss';

const TextInput = props => { {/* (!) argument props to obiekt zawierający atrybuty (parametry) komponentu-funkcji TextInput */}
  return (
    <input className={styles.input} placeholder={props.placeholder} type="text" />
  ); {/* (!) w JSX wszystkie elementy muszą być “zamykane” */}
};

export default TextInput;