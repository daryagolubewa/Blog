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
                    if (!userName.value.trim()) {
                        return
                    }
                    if (!title.value.trim()) {
                        return
                    }
                    if (!text.value.trim()) {
                        return
                    }
                    dispatch(addPost(userName.value))
                    userName.value = '';
                    dispatch(addPost(title.value))
                    title.value = '';
                    dispatch(addPost(text.value))
                    text.value = '';
                }}

            >
                <input ref={node => userName = node}  />
                <input ref={node => title = node}  />
                <input ref={node => text = node}  />
                <button type="submit">
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default connect()(AddPost)