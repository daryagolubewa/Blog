import React from 'react'
import { connect } from 'react-redux'
import {addComment} from '../Actions/Actions'
import { FormControl, Button, FormGroup, Form, Row, Col, Panel } from 'react-bootstrap'

const AddComment = ({ postId,  dispatch }) => {
    let userName, text

    return (
        <Row>
            <Col md={4}>
                <Panel>
                    <Panel.Body>
            <Form horizontal
            onSubmit={e => {
                e.preventDefault()
                if(!userName.value.trim() || !text.value.trim()) {
                    return
                }
                dispatch(addComment(userName.value, text.value, postId))
                userName.value = ''
                text.value = ''
            }}
            >
                <h4>Оставить комментарий</h4>
                <FormGroup>
                <FormControl type='text' inputRef={node => userName = node} placeholder="Введите имя"/>
                </FormGroup>
                <FormGroup>
                <FormControl type='textarea' inputRef={node => text = node} placeholder="Введите текст" />
                </FormGroup>
                <FormGroup>
                <Button type="submit">
                    Отправить
                </Button>
                </FormGroup>
            </Form>
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    )
}

export default connect()(AddComment)

