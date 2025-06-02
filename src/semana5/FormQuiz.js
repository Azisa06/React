import { useState } from 'react';
import './FormQuiz.css';

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing'); // 'typing', 'submitting', 'success'

  if (status === 'success') {
    return (
      <div className="semana5-quiz-container semana5-quiz-success">
        <h1 className="semana5-quiz-title">Parabéns!</h1>
        <p className="semana5-quiz-message">Isso está correto!</p>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="semana5-quiz-container">
      <h2 className="semana5-quiz-title">Quiz da Cidade</h2>
      <p className="semana5-quiz-question">
        Em que cidade há um outdoor que transforma ar em água potável?
      </p>
      <form onSubmit={handleSubmit} className="semana5-quiz-form">
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
          className="semana5-quiz-textarea"
        />
        <br />
        <button
          disabled={answer.length === 0 || status === 'submitting'}
          className="semana5-quiz-button"
        >
          Enviar
        </button>
        {error !== null && (
          <p className="semana5-quiz-error">
            {error.message}
          </p>
        )}
      </form>
    </div>
  );
}

function submitForm(answer) {
  // Simula uma requisição de rede.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Tente novamente!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}