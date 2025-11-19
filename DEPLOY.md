# Guia de Deploy - Site Cobrasis

## 📦 Build Estático Gerado

O build estático do seu projeto Next.js foi gerado com sucesso na pasta **`out`**.

**⚠️ IMPORTANTE:** O site está configurado para ser hospedado em **`/ANDERSEN/`** (subdiretório).

## 🚀 Como Fazer Upload em um Servidor sem Node.js

### Opção 1: Upload via FTP/SFTP

1. **Conecte-se ao seu servidor** usando um cliente FTP (FileZilla, WinSCP, etc.)

2. **Navegue até a pasta pública do seu servidor** (geralmente `public_html`, `www`, `htdocs` ou similar)

3. **Crie ou navegue até a pasta `ANDERSEN`** dentro da pasta pública

4. **Faça upload de TODOS os arquivos** da pasta `out` para a pasta `ANDERSEN` no servidor

5. **Certifique-se de que:**
   - O arquivo `index.html` está dentro da pasta `ANDERSEN`
   - Todos os arquivos da pasta `_next` foram enviados
   - Todos os arquivos da pasta `assets` foram enviados
   - O arquivo `.htaccess` foi enviado

### Opção 2: Upload via cPanel

1. Acesse o **File Manager** no cPanel
2. Navegue até a pasta pública (`public_html`)
3. **Crie ou navegue até a pasta `ANDERSEN`**
4. Faça upload de todos os arquivos da pasta `out` para dentro de `ANDERSEN`
5. Certifique-se de que o arquivo `index.html` está dentro da pasta `ANDERSEN`

### Opção 3: Upload via Git (se disponível)

Se seu servidor suporta Git:

```bash
# No servidor, clone ou atualize o repositório
git clone seu-repositorio.git
cd Site-Cobrasis

# Instale as dependências e gere o build
pnpm install
pnpm build

# Copie os arquivos da pasta out para a pasta ANDERSEN
cp -r out/* /caminho/para/pasta/publica/ANDERSEN/
```

## ⚙️ Configurações do Servidor

### Apache (.htaccess)

O arquivo `.htaccess` já está incluído na pasta `out` e configurado para o subdiretório `/ANDERSEN/`.

Se precisar criar manualmente, coloque dentro da pasta `ANDERSEN`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /ANDERSEN/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /ANDERSEN/index.html [L]
</IfModule>
```

### Nginx

Se estiver usando Nginx, configure:

```nginx
location /ANDERSEN/ {
  try_files $uri $uri/ /ANDERSEN/index.html;
}
```

## 📁 Estrutura de Arquivos no Servidor

Após o upload, a estrutura deve ser:

```
pasta-publica/
└── ANDERSEN/
    ├── index.html
    ├── 404.html
    ├── favicon.ico
    ├── .htaccess
    ├── assets/
    │   ├── images/
    │   └── videos/
    ├── _next/
    │   └── static/
    └── [outros arquivos estáticos]
```

**URL de acesso:** `https://cobrasis.com.br/ANDERSEN/`

## ✅ Verificações Pós-Deploy

1. Acesse o site no navegador: **`https://cobrasis.com.br/ANDERSEN/`**
2. Verifique se todas as imagens carregam corretamente
3. Teste os formulários (eles fazem chamadas para API externa)
4. Verifique se os links internos funcionam (navegação entre seções)
5. Teste em diferentes dispositivos (mobile, tablet, desktop)
6. Verifique se os caminhos dos recursos estão corretos (devem começar com `/ANDERSEN/`)

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Execute `pnpm build` localmente
3. Faça upload novamente dos arquivos da pasta `out`

## 📝 Notas Importantes

- ✅ O projeto está configurado para exportação estática
- ✅ **Configurado para subdiretório `/ANDERSEN/`** (basePath)
- ✅ As imagens estão configuradas como não otimizadas (compatível com servidor estático)
- ✅ Os formulários fazem chamadas para API externa (`https://api-resend-cb5u.vercel.app`)
- ✅ Não é necessário Node.js no servidor de produção
- ✅ Todos os arquivos necessários estão na pasta `out`
- ✅ O arquivo `.htaccess` já está configurado para o subdiretório

## 🆘 Problemas Comuns

### Página 404 em rotas internas
- Certifique-se de que o `.htaccess` (Apache) ou configuração do Nginx está correta

### Imagens não carregam
- Verifique se a pasta `assets` foi enviada completamente
- Verifique as permissões dos arquivos no servidor

### Formulários não funcionam
- Verifique se a API externa está acessível
- Verifique o console do navegador para erros de CORS

