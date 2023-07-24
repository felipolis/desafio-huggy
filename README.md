# Desafio Huggy

Desafio aplicado no processo seletivo da Huggy

## Layout

![image](https://github.com/felipolis/desafio/blob/main/assets/layout/1.png?raw=true)

![image](https://github.com/felipolis/desafio/blob/main/assets/layout/2.png?raw=true)

![image](https://github.com/felipolis/desafio/blob/main/assets/layout/3.png?raw=true)

![image](https://github.com/felipolis/desafio/blob/main/assets/layout/4.png?raw=true)

## Video de Demonstração

[CLIQUE AQUI!](https://youtu.be/XZ_cVI_PgDA)

## Setup

1. Clone este projeto

   ```
   $ git clone https://github.com/felipolis/desafio.git
   $ cd desafio
   ```
2. Instale as dependencias

   ```
   $ yarn
   ```
3. Copie o arquivo .env
4. ```
   cp .env.example .env
   ```
5. Configure o Cloudinary
   a) Em primeiro lugar, crie uma conta no cloudinary [aqui](https://cloudinary.com)

   b) Clique em "Settings"

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/1.png?raw=true)

   c) Clique em "Upload"

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/2.png?raw=true)

   d) Role o scroll ate encontrar "Add upload preset" e clique nele

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/3.png?raw=true)

   e) Escolha um nome para o aplicativo (ex: huggy-challenge) e defina como "unsigned e clique em salvar"

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/4.png?raw=true)

   f) Ative o unsigned uploading e clique em salvar

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/13.png?raw=true)

   g) Volte ao Dashboard e clique em "More info" para visualizar a API base URL

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/5.png?raw=true)

   h) Copie a API base URL

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/6.png?raw=true)

   i) Volte ao dashboard e copie tambem o "Cloud Name"

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/7.png?raw=true)

   j) Abra o arquivo .env do diretorio do seu projeto e preencha as variavis:

   - CLOUDINARY_URL: Com a API base URL que você ja obteve, concatenada com + '/image/upload'

     ```
     CLOUDINARY_URL="https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload"
     ```
   - CLOUD_NAME: O Cloud Name que você ja copiou

     ```
     CLOUD_NAME="<CLOUD_NAME>"
     ```
   - PRESET_NAME: O nome do aplicativo cadastrado no cloudinary (ex: huggy-challenge)

     ```
     PRESET_NAME="<PRESET_NAME>"
     ```
6. Cadastre-se na Huggy e crie um aplicativo

   a) Clique em "Seus aplicativos"

   b) Clique em "Adicionar aplicativo" com o nome desejado

   c) Com isso, o aplicativo será criado e gerado o "ID do cliente" e o "Segredo do cliente", devendo ser adicionados respectivamente em "CLIENT_ID" E "CLIENT_SECRET" do arquivo .env

   d) Agora falta a url de redirecionamento
7. LocalTunnel

   a) Instale o LocalTunnel

   ```
   $ npm install -g localtunnel
   ```

   b) Entre no diretorio do projeto e o inicie na porta 3000

   ```
   $ yarn dev
   ```

   c) Abra outro terminal e inicie o LocalTunnel na porta 3000 também

   ```
   $ lt --port 3000
   ```

   d) Copie o link que foi disponibilizado no segundo terminal e o copie

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/8.png?raw=true)

   e) Volte à página da huggy e cole aquele link concatenado com "/callback" na URL de redirecionamento

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/9.png?raw=true)

   f) abre o arquivo .env e cole o mesmo link na variavel "REDIRECT_URL"

   ```
   REDIRECT_URL="https://shaggy-cobras-speak.loca.lt/callback"
   ```

   g) Abra o link gerado pelo segundo terminal no browser (sem o /callback)

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/10.png?raw=true)

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/11.png?raw=true)

   h) clique no [link](https://ipv4.icanhazip.com/) disponibilizado e o copie o IP gerado

   i) cole esse ip no campo solicitado e clique em submit

   ![image](https://github.com/felipolis/desafio/blob/main/assets/tutorial/12.png?raw=true)

   j) Pronto, você ja pode navegar pela aplicação através desse link publico temporario...

***Made by Felipe Archanjo.***
