import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../Actions/Actions'

const AddComment = ({ dispatch }) => {
    let userName;
    let text

    return (
        <div>
            <form
            onSubmit={e => {
                e.preventDefault()
                if(!userName.value.trim() || !text.value.trim()) {
                    return
                }
                dispatch(addComment(userName.value, text.value))
                userName.value = ''
                text.value = ''
            }}
            >
                <input ref={node => userName = node} placeholder="Введите имя"/>
                <textarea ref={node => title = node} placeholder="Введите текст" />
                <button type="submit">
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default connect()(AddComment)

