import React, { useState } from 'react';
import './commentSection.css';

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  replies?: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: 'Maria',
    content: 'Adorei o artigo! Muito esclarecedor.',
    date: '2024-06-01',
    replies: [
      {
        id: 2,
        author: 'Dra. Laura',
        content: 'Obrigada pelo carinho, Maria! Fico feliz que tenha gostado.',
        date: '2024-06-02',
      },
    ],
  },
];

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!author.trim() || !content.trim()) {
      setError('Preencha todos os campos.');
      return;
    }
    const newComment: Comment = {
      id: Date.now(),
      author,
      content,
      date: new Date().toLocaleDateString('pt-BR'),
    };
    setComments([newComment, ...comments]);
    setAuthor('');
    setContent('');
  };

  return (
    <div className="comment-section">
      <div className="comment-header">
        <h3>Comentários</h3>
        <p>Deixe sua opinião ou dúvida abaixo:</p>
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="author-input"
            type="text"
            placeholder="Seu nome"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="comment-input"
            placeholder="Escreva seu comentário..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        {error && <div className="comment-error">{error}</div>}
        <button className="submit-button" type="submit">Enviar</button>
      </form>
      <div className="comments-list">
        {comments.length === 0 && <div className="no-comments">Nenhum comentário ainda.</div>}
        {comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div className="comment-header">
              <div className="comment-author">
                <span className="author-name">{comment.author}</span>
                {comment.author === 'Dra. Laura' && <span className="author-badge">Dra. Laura</span>}
              </div>
              <span className="comment-date">{comment.date}</span>
            </div>
            <div className="comment-content">{comment.content}</div>
            {comment.replies && comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map(reply => (
                  <div className="reply" key={reply.id}>
                    <div className="reply-header">
                      <span className="reply-author">{reply.author}</span>
                      <span className="reply-date">{reply.date}</span>
                    </div>
                    <div className="reply-content">{reply.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
export {}; 