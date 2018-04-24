# Resumo das novas features do React 16

## 1 - Lidando com erros usando Error Boundaries
[Artigo sobre](https://medium.com/reactbrasil/como-utilizar-error-boundaries-do-react-3579f040f7f1)

Um erro de JavaScript em uma parte da interface não deve quebrar todo seu App. Para solucionar este problema, React 16 introduz um novo conceito de "error boundary" com o `componentDidCatch`.

Error boundaries são componentes React que interceptam erros de JavaScript em qualquer lugar de sua árvore de componentes, oferecendo uma interface de fallback, ou seja, uma interface para ser exibida quando há um erro em sua árvore de componentes.


## 2 - Renderize múltiplos elementos sem precisar de um elemento wrapper
```js
const Fruits = () => [
  <li key="1">Apple</li>,
  <li key="2">Orange</li>,
  <li key="3">Banana</li>,
];
```

## 3 - Renderize componentes somente com textos
Possibilidade de renderizar componentes só com texto, sem nenhuma div container

```js
const Comment = ({ text }) => `Renderiza só texto ${text}`;
```

## 4 - Renderize elementos fora da árvore do DOM atual usando Portals
Bom para elementos overlay e modais

```js
class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.overlayContainer = document.createElement('div');
    document.body.appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span onClick={this.props.onClose}>x</span>
        {this.props.children}
      </div>,
      this.overlayContainer
    );
  }
}
```

## 5 - Defina atributos customizados no DOM
Atributos customizados agora permanecem no DOM. Antes eles era retirados.

```js
// Meu componente
<div mycustomattribute="something" />

// Output no DOM
<div mycustomattribute="something" />
```

## 6 - Chame setState com null para evitar disparar um update
Retornar `null` em um setState para um determinada condição evita o disparo de um update

```js
this.setState(state => {
  const nomeDaCidadeNaoMudou = state.city === newValue

  if (nomeDaCidadeNaoMudou) {
    return null;
  }
  return {
    city: newValue
  };
});
```

## 7 - Renderize múltiplos elementos usando React.Fragment e a sintaxe JSX de Fragment <>

```js
function Fruits() {
  return (
    <Fragment>
      <li>Apple</li>
      <li>Orange</li>
      <li>Banana</li>
    </Fragment>
  );
}
```

## 8 - Crie uma referência a um elemento do DOM com createRef


## 9 - Encaminhe uma referência do DOM para outro componente usando forwardRef


## 10 - Atualize o estado baseado em props usando o hook getDerivedStateFromProps
Usar `getDerivedStateFromProps` ao invés do velho hook `componentWillReceiveProps`

`getDerivedStateFromProps` é chamado tanto no renderização inicial, quanto no re-render do componente

Exemplo:

```js
static getDerivedStateFromProps(nextProps, prevState) {
  if (prevState.url !== nextProps.url) {
    return {
      url: nextProps.url,
    };
  }

  return null;
}
```

## 11 - Capture valores usando o hook getSnapshotBeforeUpdate

`getSnapshotBeforeUpdate()` é invocado um pouco antes do mais recente output que foi commitado no DOM por exemplo. Ele permite que seu componente capture os valores atuais (por exemplo, a posição do scroll) antes que eles sejam alterados. Qualquer valor retornado por este ciclo de vida será passado como um parâmetro para componentDidUpdate().

 ```js
 class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

## 12 - Passe dados através de uma árvore de componentes com Context Providers e Consumers

Permite passar props abaixo na árvore de componentes, sem ter que definir props em todo componente intermediário.

### React.createContext
React.createContext recebe um valor inicial, retorna um objeto com um Provider e um Consumer

```js
const ThemeContext = React.createContext({
  theme: {
    foreground: "#fff",
    background: "#666"
  },
  toggleTheme: () => {}
});
```

### Componente Provider
É o componente que fica no topo da árvore e tem uma prop chamada value que pode ser qualquer coisa.

```js
<ThemeContext.Provider>
```

### Componente Consumer
É o componente que vai consumir um contexto. Aceita uma prop chamada children que precisa ser uma função que aceita o valor e precisa retornar um componente React.

```js
<ThemeContext.Consumer>
```