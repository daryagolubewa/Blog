import React from 'react'
import PropTypes from 'prop-types'
import {Panel, Row, Col} from 'react-bootstrap'

const Comment = ({userName, text}) => (
    <div>
        <Row>
            <Col md={8}>
                <Panel bsStyle='success'>
                    <Panel.Heading> {userName} </Panel.Heading>
                    <Panel.Body> {text} </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </div>
)

Comment.propTypes = {
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment

//якобы показывает комменты

