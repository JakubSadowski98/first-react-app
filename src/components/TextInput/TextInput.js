import styles from './TextInput.module.scss';

const TextInput = props => { {/* (!) argument props to obiekt zawierający atrybuty (parametry) komponentu-funkcji TextInput */}
  return (
    <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
  ); {/* (!) w JSX wszystkie elementy muszą być “zamykane” */}
};

export default TextInput;