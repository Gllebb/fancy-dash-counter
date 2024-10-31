function Title({ locked }) {
  return <h1 className="title">{locked ? 'You reached the limit!' : 'Fancy Counter'}</h1>;
}

export default Title;