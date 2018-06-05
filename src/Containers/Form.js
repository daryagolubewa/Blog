class App extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', title: '', message: ''}
    }
    render() {
        return (
            <div className="App">
                <p> <input type="text" name="userName" placeholder="Введите ваше имя" value={this.state.userName} /> </p>
                <p> <input type="text" name="title" placeholder="Введите название поста" value={this.state.title}/> </p>
                <p><textarea type="text" name="message" placeholder="Введите текст" value={this.state.message}/></p>
                <p><button onClick={buttonClick}>
                    Отправить
                </button></p>

            </div>
        );
    }

    const PostForm = {(OnClick, )} => ()
}

export default App;