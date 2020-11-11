import React from 'react'
import './App.css';

export default function Form() {
  return (
    <>
     <section className="welcome__section">
        <p className="welcome__section-title">Welcome</p>
        <p className="welcome__section-info"></p>
     </section>
     <section className="form__section">
        <form>
           <label>
              FIRST NAME
             <input />
           </label>
           <label>
           LAST NAME
             <input />
           </label>
           <label>
             ADDRESS
             <input />
           </label>
           <label>
             ADDRESS 2 (OPTIONAL)
             <input />
           </label>
        </form>
     </section>
    </>
  );
}
