import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequena from "./components/CardPequena/CardPequena"
import MinhaFoto from "./img-labedin/mypicture.JPG"



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaFoto}
          nome="Lucía Cufré Aman" 
          descricao="Oi, eu sou o Lucía. Argentina ambiciosa que só procura o crescimento, tanto pessoal como profisional. Estudante da Labenu, no curso Web Full Stack Developer."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/25/25415.png" 
          texto="Ver mais"
        />
      </div>

      <div>

<CardPequena

imagem="https://thumbs.dreamstime.com/z/%C3%ADcone-do-email-isolado-no-fundo-branco-106510001.jpg"
dado="E-mail:"
informacao="luchicufre@hotmail.com"

/>

<CardPequena

imagem="https://cdn-icons-png.flaticon.com/512/3722/3722049.png"
dado="Endereco"
informacao="Rua Francisco 1020, Camepeche, Florianópolis, SC."

/>


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.18169-9/15873165_357845587933632_1873081265981739133_n.jpg?stp=cp0_dst-jpg_e15_p64x64_q65&_nc_cat=100&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=AcX3lRjDAecAX-wZ486&_nc_ht=scontent.ffln1-1.fna&oh=00_AT_Nexj1woElxohl1-qC4oqwQ3VpOfwDvA-zOc-R3QW5NA&oe=6287CD00" 
          nome="Padaria Dupão" 
          descricao="Auxiliar financeira. Realizo tudo aquilo que esteja relacionado com o financeiro, porém, também cumplo com responsabilidades de RRHH e gerenciamento." 
        />
        
        <CardGrande 
          imagem="https://scontent.ffln1-1.fna.fbcdn.net/v/t31.18172-8/272271_10150243936047276_7412882_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Pd2tt3tlj3sAX9o94z1&_nc_ht=scontent.ffln1-1.fna&oh=00_AT-7WNB4ARN6LJPQfS_wkPmOzO19wTnxljam7PeShy5sng&oe=62882ED7" 
          nome="CESYT" 
          descricao="Caixa e Auxiliar Administrativo. Principalmente na função de caixa, e nos tempos livres realizando diversas questões administrativas e financeiras também." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
