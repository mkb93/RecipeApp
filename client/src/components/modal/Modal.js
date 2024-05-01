import React from "react";
import Button from "../button/Button";

function Modal({ description }) {
  const modal = document.querySelector("#modal");
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");
  console.log(description);
  if (modal) {
    openModal && openModal.addEventListener("click", () => modal.showModal());

    closeModal && closeModal.addEventListener("click", () => modal.close());
  }
  return (
    <div>
      <button id="openModal">See Full text</button>

      <dialog id="modal">
        <p>{description}</p>
        <button id="closeModal">Close</button>
      </dialog>
    </div>
  );
}

export default Modal;
