# EMUNAH — Landing Page Institucional

Site institucional responsivo em **React + Vite + TypeScript + CSS**.

## Como executar

1. Instale o Node.js 20 ou superior.
2. Abra esta pasta no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

## Compilar para produção

```bash
npm run build
npm run preview
```

A compilação pronta para hospedagem será criada em `dist/`. É possível publicar o projeto na Vercel, Netlify ou outra hospedagem estática.

## Alterações de conteúdo

- Textos, serviços, fotos ilustrativas, links, segmentos e telefone: `src/App.tsx`.
- Aparência, cores, tipografia, dimensões e responsividade: `src/style.css`.
- Logo e símbolo: `public/images/`.
- SEO, título e favicon: `index.html`.

## Observações antes de publicar

- **Fotografias de referência:** as fotos carregam da hospedagem de imagens Unsplash e são **ilustrativas**, não retratam instalações ou colaboradores da EMUNAH. Substituir por fotografias próprias/autorizadas é recomendado.
- **Endereço:** confirmar cidade/UF e número antes da publicação. O site apresenta São Paulo, SP como referência do projeto.
- **Histórico:** a apresentação original menciona experiência superior a 10 anos no portfólio da empresa; o site evita afirmar tempo de fundação sem verificação.
- **Redes e contatos:** validar URL do Instagram e WhatsApp antes da publicação.
- **Conteúdo de serviços:** elaborado a partir das apresentações institucionais fornecidas, podendo ser ajustado comercialmente.
- **Não há** seção de clientes nem formulário, conforme solicitado.
