# Workshop | Inovação & Eficiência em Hotelaria

<div align="center">
  <img src="https://i.postimg.cc/SNSqbD6x/Screenshot-2025-07-18-18-24-37.png" alt="Workshop R3 Hotelaria" style="width: 70%; max-width: 900px;">
</div>

## 🌐 Acesse online:  
[https://workshop-iota-gilt.vercel.app](https://workshop-iota-gilt.vercel.app)

---

## Sobre o Projeto

Esta é uma landing page para inscrição no **Workshop - Inovação & Eficiência em Hotelaria** promovido pela R3 Suprimentos.  
O formulário coleta dados completos do participante, integrando-se ao HubSpot via N8N para gerenciamento dos leads. Após o envio, o usuário é automaticamente redirecionado para o WhatsApp para receber mais informações.

---

## Funcionalidades

- Formulário de inscrição com validação de campos obrigatórios
- Envio automático dos dados para o HubSpot através do workflow no N8N
- Redirecionamento do usuário para o WhatsApp após a inscrição
- Layout moderno, responsivo e identidade visual R3 Suprimentos
- Checkbox de consentimento com a política de privacidade

---

## Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript** (obrigatório)
- **HTML5 & CSS3**
- **Tailwind CSS** (para estilização)
- **Integração N8N** (workflow para envio dos leads ao HubSpot)
- **Integração com WhatsApp** (via link após envio)

---

## Imagem de Apresentação

![Screenshot do site](https://i.postimg.cc/SNSqbD6x/Screenshot-2025-07-18-18-24-37.png)

---

## Como usar

1. **Clone ou baixe este repositório**

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Configure as variáveis de ambiente:**  
   Crie um arquivo `.env.local` na raiz do projeto com as URLs e chaves do seu endpoint do N8N (utilizado para enviar leads ao HubSpot).

4. **Execute o projeto em ambiente de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    Acesse em [http://localhost:3000](http://localhost:3000).

5. **Para build e produção:**
    ```bash
    npm run build
    npm start
    # ou
    yarn build
    yarn start
    ```

---

## Fluxo de Integração

1. Usuário preenche e envia o formulário.
2. Os dados são enviados via API para o N8N.
3. O workflow do N8N faz a integração e cria/atualiza o lead no HubSpot.
4. Após o envio, o usuário é redirecionado automaticamente para o WhatsApp.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

Desenvolvido por **Christofer Henrique** para R3 Suprimentos.  
Dúvidas? Sugestões? Fale comigo!

---
