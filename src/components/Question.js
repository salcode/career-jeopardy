import EscapeOutside from 'react-escape-outside'

export default function Question({
  clearQuestion,
  question,
}) {
  return <EscapeOutside
    onEscapeOutside={clearQuestion}
  >
    <h1>{question}</h1>
  </EscapeOutside>
}
