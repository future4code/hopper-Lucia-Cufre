import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    post: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPrincipal:"https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "luli",
      fotoUsuario:"https://picsum.photos/50/60",
      fotoPrincipal:"https://picsum.photos/200/160"
    },
    {
      nomeUsuario: "lorena",
      fotoUsuario:"https://picsum.photos/50/70",
      fotoPrincipal:`https://picsum.photos/200/170`
    },

  ],

  inputNomeUsuario:"",
  inputFotoUsuario:"",
  inputFotoPrincipal:""

};

adicionaPost = () => {
const postNovo = {
  nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario:this.state.inputFotoUsuario,
      fotoPrincipal:this.state.inputFotoPrincipal
};

const novaPubli = [...this.state.post, postNovo]

this.setState({ post : novaPubli})
this.setState({inputNomeUsuario: "", inputFotoUsuario:"", inputFotoPrincipal: ""})

}

onChangeNomeUsuario = (event) =>{
  this.setState({inputNomeUsuario : event.target.value})
 }
 onChangeFotoUsuario = (event) =>{
   this.setState({inputFotoUsuario : event.target.value})
  }
  onChangeFotoPrincipal = (event) =>{
   this.setState({inputFotoPrincipal : event.target.value})
  }



  render() {

    const publis = this.state.post.map((posts) => {
      return (
        <p>{posts.nomeUsuario}</p>,
        <img >{posts.fotoUsuario}</img>,
        <a url={posts.fotoPrincipal}/> 
        /* nao entendi como colocar a imagem para ser visualizada  */
        );
      });

      
    return (
      <MainContainer>
        <div>
       <input type= "nome" value={this.state.inputNomeUsuario} onChange={this.onChangeNomeUsuario} placeHolder={"Nome de Usuario"}/>
       <input type = "url" value={this.state.inputFotoUsuario} onChange={this.onChangeFotoUsuario} placeHolder={"Foto de Usuario"}/>
       <input type = "url" value={this.state.inputFotoPrincipal} onChange={this.onChangeFotoPrincipal} placeHolder={"Foto de publicacao"}/>
       <button onClick={this.adicionaPost}>Publicar</button>
        </div>
        <Post
          {...publis}
        />
        <Post
          {...publis}
        />
        <Post
          {...publis}
        />
        
      </MainContainer> 
    );
  }
  }

export default App;
