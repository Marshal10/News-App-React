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
        <img src={demoImg} alt="Article image" className="modal-img" />
        <h2 className="modal-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odit?
        </h2>
        <p className="modal-source">Source: The Guardian</p>
        <p className="modal-date">Jun 28, 2024, 03:15 PM</p>
        <p className="modal-content-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae
          blanditiis voluptate fugit ut molestias velit laboriosam animi iure
          nostrum, architecto quis eos aliquam porro cumque facilis provident
          dignissimos? Reprehenderit earum totam repellat recusandae cupiditate.
        </p>
        <a href="#" className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsModal;
