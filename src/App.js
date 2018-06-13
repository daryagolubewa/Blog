import React from "react";
import AddPost from './Containers/AddPost'
import AddedPostList from './Containers/AddedPostList'
import AddComment from './Containers/AddComment'
import { FormControl, Button, FormGroup, Form, Grid, Row, Col } from 'react-bootstrap'
import './index.css';
//import 'bootstrap/dist/css/bootstrap-reboot.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-grid.css';

const App = () => (
    <Grid>
        <AddPost />
        <AddedPostList />
    </Grid>
)

export default App

//root component (без него формы добавления показываться не будут)
