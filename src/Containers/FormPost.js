import React from 'react'
import { connect } from "react-redux"
import { addPost } from "../Actions/Actions"

const AddPost = ({ dispatch }) => {
    let userName;
    let title;
    let text

    return(
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!userName.value.trim() || !title.value.trim() || !text.value.trim()) {
                        return
                    }
                    dispatch(addPost(userName.value, title.value, text.value))
                    userName.value = '';
                    title.value = '';
                    text.value = '';
                }}

            >
                <input ref={node => userName = node} placeholder="Введите ваше имя" />
                <input ref={node => title = node} placeholder="Введите заголовок" />
                <textarea ref={node => text = node} placeholder="Введите текст" />
                <button type="submit">
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default connect()(AddPost)