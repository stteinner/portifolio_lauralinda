# Portfólio — stteinner

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro. Os projetos exibidos na página são carregados a partir da API pública do GitHub.

## Como executar

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

```bash
python -m http.server 5500
```

Depois, acesse `http://localhost:5500`.

## Estrutura do projeto

```text
portifolio_lauralinda/
├── index.html
├── css/
│   ├── base/          # Variáveis e reset
│   ├── components/    # Botões, cards e cursor
│   ├── layout/        # Navegação, seções e rodapé
│   ├── sections/      # Estilos específicos das seções
│   ├── utilities/     # Animações e responsividade
│   └── style.css      # Arquivo de entrada dos estilos
└── js/
    ├── components/    # Comportamentos da interface
    ├── data/          # Dados estáticos e configuração
    ├── services/      # Integrações externas
    ├── utils/         # Funções auxiliares
    └── main.js        # Ponto de entrada da aplicação
```

## Convenções

- Cada arquivo possui uma responsabilidade principal.
- Os estilos são organizados por finalidade e separados em arquivos menores.
- Os módulos JavaScript são importados pelo `js/main.js`.
- Os nomes de arquivos e pastas usam letras minúsculas e formatos claros.
