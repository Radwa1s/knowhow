import React, { useState } from "react";
import "./signup.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>sign up</button>
      <Modal
        className=" add-modal  "
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="font-BenzinBold text-2xl ml-20 mt-8 leading-6">
          Create an account
        </h1>
        <p className=" ml-24 text-neutral-400	 mt-2 font-BenzinRegular leading-4">
          {" "}
          to share your experience
        </p>
        <input
          type="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  absolute mt-10 ml-10 w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="knowhow@gmail.com"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          name="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  absolute mt-24 ml-10 w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="your name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  absolute mt-40 ml-10 w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button className=" absolute bg-lightGreen hover:bg-lightGreen font-BenzinRegular rounded-sm w-32 h-10 mt-80 ">
          Submit
        </button>
        <div className="absolute">
          <h4>already have an account?</h4>
          <button>Login</button>
        </div>
      </Modal>
    </>
  );
}
export default SignUp;
