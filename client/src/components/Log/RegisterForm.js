import React from 'react'

export default function RegisterForm() {
  return (
    <div className='registerForm'>
      <form action="POST" className="registerForm-form">
        <label htmlFor="Nom"></label>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="Prénom"></label>
        <input type="text" name="lastname" id="lastname" />
      </form>
    </div>
  )
}
