import EscapeOutside from 'react-escape-outside'

export default function Question({
  question,
}) {
  return <EscapeOutside
    onEscapeOutside={
      () => console.log('Esc!')
    }
  >
    <h1>{question}</h1>
  </EscapeOutside>
}
