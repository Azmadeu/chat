import React from 'react'
import propTypes from 'prop-types'

const AddMessage = props => {
  let input;

  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.addMessage(input.value, 'Me');
            input.value = ''
          }
        }}
        type="text"
        placeholder="Type new message here..."
        ref={(node) => {
          input = node
        }}
      />
    </section>
  )
};

AddMessage.propTypes = {
  addMessage: propTypes.func.isRequired
};

export default AddMessage
