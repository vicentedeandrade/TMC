# Imagem Padrao: Ubuntu 20.04 LTS
FROM ubuntu:20.04

# Instala e configura os pacotes necessarios para a execucao do App
RUN apt-get update && \
  apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -yq tzdata && \
  ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata && \
  apt install unrar -y && \
  apt install unzip -y && \
  apt install nodejs -y && \
  npm install -g yarn && \
  npm install -g expo-cli && \
  npm install -g pm2

# Cria os diretorios abaixo, para serem usados apos a execucao do Container
RUN mkdir -p /react-native
RUN mkdir -p /db-tmc

# Define o diretorio de trabalho/home do Container
WORKDIR /react-native/

# Adiciona os Diretorios para dentro do Container
COPY . /react-native/

RUN ls -la /react-native

# Instala as Dependencias do Projeto
RUN npm install

# Faz a Construcao do App
RUN yarn build

# Publica as portas utilizadas pelo App TMC
EXPOSE 3000
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Inicia a publicacao do App na porta 3000
ENTRYPOINT ["/usr/bin/sh", "-c", "pm2 serve /react-native/build 3000 --spa && /bin/bash"]