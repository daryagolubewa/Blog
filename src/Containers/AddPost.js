import React from 'react'
import { connect } from "react-redux"
import { addPost } from "../Actions/Actions"
import { FormControl, Button, FormGroup, Form, Row, Col, Panel } from 'react-bootstrap'

const AddPost = ({ dispatch }) => {
    let title, userName, text
    return(
        <Row>
            <Col md={4}>
                <Panel bsStyle='primary'>
                    <Panel.Body>
                        <Form horizontal
                              onSubmit={e => {
                                  e.preventDefault()
                                  if (!title.value.trim() || !userName.value.trim() || !text.value.trim()) {
                                      return
                                  }

                                  dispatch(addPost(title.value, userName.value, text.value))
                                  title.value = '';
                                  userName.value = '';
                                  text.value = '';
                              }}
                        >

                            <h3>Написать пост</h3>
                            <FormGroup>
                                <FormControl type='text' inputRef={node => userName = node} placeholder="Введите заголовок"/>
                            </FormGroup>

                            <FormGroup>
                                <FormControl type='text' inputRef={node => title = node} placeholder="Введите имя"/>
                            </FormGroup>

                            <FormGroup>
                                <FormControl componentClass="textarea"  type='textarea' inputRef={node => text = node} placeholder="Введите текст"/>
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

export default connect()(AddPost)

//выводит форму добавления поста