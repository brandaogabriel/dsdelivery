# 📟 Frontend Web Ds Delivery

O frontend foi desenvolvido durante a 2ª semana do DevSuperior.

A implantação do frontend foi feita na netlify e o site pode ser visto aqui: 
https://gabrielbrandao-dsdelivery.netlify.app/

**Atenção**: 
- Para subir a aplicação localmente é necessário ter o `node` instalado na máquina.

- Antes de inicializar a aplicação é necessário gerar um arquivo `.env` na raiz do projeto para configuração de variáveis de ambiente. 
Verifique o arquivo `.env_example` para servir de base. 

- É necessário ter uma conta no map box (mapa utilizado para localização), coloque o token gerado nele em **REACT_APP_ACCESS_TOKEN_MAP_BOX**.

- Para uma melhor experiência é necessário que a instância do backend esteja no ar também. Coloque em **REACT_APP_API_URL** a url local do seu backend.

- Execute o comando `npm i` para baixar as dependências.

Feitos os passos acima, execute `npm start`, nesse ponto sua aplicação deverá estar rodando em `localhost:3000`.

## 🚊 Rotas desenvolvidas

### Home ( / ) 
- Responsável pela página principal do site.

### Orders ( /orders )
- Responsável por listar todos os produtos disponíveis, bem como renderização do mapa e finalização do pedido. 

## 🛠️ Ferramentas
1. Typescript
2. ReactJS
3. React toastify
4. React leaflet
5. Axios

## Map box
Link para mais informações sobre o Map box:
https://www.mapbox.com/