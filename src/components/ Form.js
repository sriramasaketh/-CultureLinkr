import React, {useState} from 'react'

function Form() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className='form-container'>
      {submitted ? (
        <div className='success-message'>
          Success! Your message has been submitted.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='form-field'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-field'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-field'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  )
}

export default Form
