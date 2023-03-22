import React, { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZmoG9NQn9_YQrp4saBP5XSuNRre39uZM",
  authDomain: "pagerwaitlist.firebaseapp.com",
  projectId: "pagerwaitlist",
  storageBucket: "pagerwaitlist.appspot.com",
  messagingSenderId: "823931447714",
  appId: "1:823931447714:web:4c87a068cd4f206bd46afb",
  measurementId: "G-EDYELD2Y2R"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

type FormData = {
  email: string;
};

const Waitlist: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await addDoc(collection(db, 'waitlist'), data);
      setMessage('Thanks. we&apos;ll stay in touch.');
    } catch (error) {
      setMessage('There was an error submitting your email. Please try again.');
    }
  };


  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-md mx-auto px-4">
        <h1 className="font-futura-condensed-extra-bold text-8xl font-bold mb-4 tracking-tighter">YOUR TICKET<br />TO FREEDOM.</h1>
        <p className="font-pt-serif-bold-italic mb-6">
          <span className="font-pt-serif-bold-italic font-bold">
            In a world of endless notifications - we&apos;re taking you back to the essentials.<br />
          </span>
          <span className="font-palatino">
            Pagers? Beepers? Whatever you want to call them - we&apos;re bringing them back.
            Minus the hunt for the nearest payphone. Choose who you want to hear from and
            block out the rest. Simplify your life, and live in the moment — one beep at a time.
          </span>
        </p>
      </div>
      <form className="text-center space-x-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="font-palatino"
        />
        {errors.email && <span>Please enter a valid email.</span>}
        <button type="submit" className="font-palatino">Join Waitlist</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Waitlist;
