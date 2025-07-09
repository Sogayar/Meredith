# 🚀 Como começar

## 📌 Pré-requisitos

Antes de iniciar, certifique-se de que o **Node.js** esteja instalado em sua máquina.  
Caso ainda não o tenha, você pode instalá-lo acessando: [https://nodejs.org/](https://nodejs.org/)

---

## 📦 Instalação das dependências

No terminal, execute o seguinte comando para instalar todas as dependências do projeto:

```bash
npm install
```
## 🛠 Ambiente de desenvolvimento
Para iniciar o projeto em modo de desenvolvimento, utilize:
```bash
npm run dev
```
Após alguns segundos, o projeto estará disponível no navegador em:
```bash
http://localhost:5173/
```
## 📦 Build para produção
Quando estiver satisfeito com o resultado, gere a versão final e otimizada com:
```bash
npm run build
```
> 💡 Caso precise de instruções adicionais sobre deploy, variáveis de ambiente ou estrutura do projeto, consulte a documentação complementar ou entre em contato com a equipe de desenvolvimento.


<details>
  <summary>Ler Mais</summary>

### 🔧 Configurações adicionais

  Caso deseje personalizar o comportamento do projeto, você pode ajustar os seguintes arquivos:

  - `.env` — Defina variáveis de ambiente como `API_URL`, `PORT`, `MODE` etc.
  - `vite.config.ts` — Personalize configurações do Vite, como aliases, plugins e proxy.
  - `tailwind.config.js` — Ajuste a paleta de cores, tipografia e breakpoints do Tailwind.

</details>

