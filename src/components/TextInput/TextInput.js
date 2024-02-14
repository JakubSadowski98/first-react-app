import styles from './TextInput.module.scss';

const TextInput = props => { {/* (!) argument props to obiekt zawierający atrybuty (parametry) komponentu-funkcji TextInput */}
  return (
    <input type="text" placeholder={props.placeholder} className={styles.input} value={props.value} onChange={props.onChange} />
  ); {/* (!) w JSX wszystkie elementy muszą być “zamykane” */}
};

export default TextInput;