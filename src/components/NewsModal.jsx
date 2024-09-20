/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./NewsModal.css";
import demoImg from "../assets/images/demo.jpg";

function NewsModal({ showModal, article, handleCloseModal }) {
  if (!showModal) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={handleCloseModal}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        {article && (
          <>
            <img
              src={article.image}
              alt={article.title}
              className="modal-img"
            />
            <h2 className="modal-title">{article.title}</h2>
            <p className="modal-source">Source: {article.source.name}</p>
            <p className="modal-date">
              {new Date(article.publishedAt).toLocaleString("en-Us", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="modal-content-text">{article.content}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-link"
            >
              Read More
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsModal;
