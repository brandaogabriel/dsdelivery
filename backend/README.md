# 💻 Backend Ds Delivery

A api foi desenvolvida durante a 2ª Semana do Devsuperior.

A implantação da api foi feita utilizando o heroku.

**Atenção**: Você precisa ter o java jdk 11 instalado na sua máquina bem como o `PATH_VARIABLE` do java configurado e uma IDE de sua preferência.

**O backend está setado em modo de teste, dessa forma, não é necessário nenhum tipo de configuração para banco de dados, pois está sendo utilizado o banco de dados em memória (H2).**

Execute o comando: `mvn install` para instalar as dependências do maven.

Após baixar as dependências, execute a aplicação e a api estará rodando em http://localhost:8080.

Acesso ao banco de dados: `http://localhost:8080/h2-console`.

## 📌 Endpoints

Os seguintes endpoints estão configurados:

### Products

- `/products` - GET - Exibe todos os produtos cadastrado na API em ordem alfabética (nome do produto).

### Orders

- `/orders` - GET - Exibe todos os pedidos que estão com status "PENDING" e em ordem do pedido (do mais antigo até o mais recente).
- `/orders` - POST - Cria um pedido.
- `/orders/{id}/delivered` - PUT - Atualiza o status de um pedido para "DELIVERED".

**Exemplo de dados para criar Order (JSON)**

```json
{
  "address": "any_address",
  "longitude": 9999999,
  "latitude": 9999999,
  "products": [
    {
      "id": 1
    },
    {
      "id": 2
    }
  ]
}
```

## 🛠️ Ferramentas
1. Java
2. Springboot
3. H2 database
4. postgresql 


## 💾 Dados para povoar a api
Na pasta `src/main/resources` existe um arquivo **data.sql** com alguns dados já adicionados,
para inserir novos dados, basta incluí-los no arquivo. 