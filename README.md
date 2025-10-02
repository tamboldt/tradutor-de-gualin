# 🗣️ Gualín Tradutor

> Tradutor de Português Brasileiro ↔ Gualín - A anti-língua da internet brasileira

Um tradutor web moderno e intuitivo para converter texto entre Português Brasileiro e Gualín, uma linguagem lúdica baseada em inversão silábica popular em comunidades online brasileiras.

## 📝 O que é o Gualín?

O Gualín é uma anti-língua criativa onde as sílabas das palavras são invertidas seguindo regras específicas. É amplamente usado em comunidades online brasileiras como uma forma divertida de comunicação "secreta".

**Exemplos:**
- "Olá" → "Ló-a" → "Loa"
- "Bom dia" → "Bom a-di" → "Bom adi"
- "Como vai?" → "Mo-co i-va?" → "Moco iva?"

## ✨ Funcionalidades

- 🔄 **Tradução bidirecional**: Português → Gualín e Gualín → Português
- 🤖 **IA integrada**: Powered by Google Gemini para traduções precisas
- 📱 **Interface responsiva**: Funciona perfeitamente em desktop e mobile
- ⚡ **Tradução em tempo real**: Resultados instantâneos conforme você digita
- 🎨 **Design moderno**: Interface clean e intuitiva
- 📚 **Como funciona**: Seção explicativa sobre as regras do Gualín

## 🚀 Como Usar

1. **Digite ou cole** seu texto no campo de entrada
2. **Escolha a direção** da tradução (PT→Gualín ou Gualín→PT)
3. **Clique em "Traduzir"** ou use o botão de intercâmbio
4. **Copie o resultado** e use onde quiser!

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Google Gemini AI** - Motor de tradução
- **CSS3** - Estilização moderna

## 📦 Instalação Local

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Uma chave da API do Google Gemini

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/tamboldt/tradutor-de-gualin.git
   cd tradutor-de-gualin
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API Key**
   - Copie o arquivo `.env.local` (já incluído)
   - Adicione sua chave da API do Gemini:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 📁 Estrutura do Projeto

```
gualín-tradutor/
├── components/           # Componentes React
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── TranslatorCard.tsx # Card principal de tradução
│   ├── HowItWorks.tsx   # Seção explicativa
│   └── Footer.tsx       # Rodapé
├── services/            # Serviços e integrações
│   └── geminiService.ts # Integração com Google Gemini
├── constants.ts         # Prompts e configurações do sistema
├── types.ts            # Definições de tipos TypeScript
├── App.tsx             # Componente principal
└── index.tsx           # Ponto de entrada da aplicação
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

## 🙏 Agradecimentos

- Comunidade brasileira online pela criação e popularização do Gualín
- Google pela API do Gemini
- Todos os contributors que ajudaram no desenvolvimento

---

<div align="center">
  Feito com ❤️ para a comunidade brasileira da internet
</div>
