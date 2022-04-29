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
    }
  ]
};

  render() {

    const publis = this.state.post.map((posts) => {
      return (
        <p>{posts.nomeUsuario}</p>,
        <img >{posts.fotoUsuario}</img>,
        <img src={posts.fotoPrincipal} alt="fotoPrincipal"/>
        /* nao entendi como colocar a imagem para ser visualizada  */
        );
      });

    return (
      <MainContainer>
        <div>
       <input value={} onChange={} placeHolder={}/>
       <input value={} onChange={} placeHolder={}/>
       <input value={} onChange={} placeHolder={}/>

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
