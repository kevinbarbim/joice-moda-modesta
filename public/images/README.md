# Guia das imagens

As fotos dos vestidos em `products/` e `instagram/` vieram dos posts públicos do Instagram oficial da Joice Moda Modesta, conforme autorização informada para o projeto. O arquivo de logo fornecido foi preservado em `design-reference/logo-original.png`; a interface usa uma assinatura tipográfica responsiva.

A seção Sobre usa temporariamente uma composição com duas fotografias da curadoria. Quando houver uma fotografia real e autorizada da Joice ou da loja, atualize os caminhos correspondentes em `src/data/site.ts`.

## Arquivos necessários

| Pasta | Quantidade | Proporção recomendada | Uso |
| --- | ---: | --- | --- |
| `design-reference/` | 1 | Logo horizontal | Arquivo original preservado como referência, não publicado |
| `products/` | 6 | 4:5 recomendado | Coleção, categorias e imagens editoriais |
| `instagram/` | 6 arquivos, 5 ativos | 4:5 ou 1:1 | Galeria vinculada aos posts originais; `instagram-06.webp` está preservada, mas não é exibida |
| `about/` | 1 futura | 4:5, mínimo 1200 × 1500 px | Foto da Joice ou da loja, quando disponível |

## Recomendações

- Prefira WebP ou AVIF com qualidade visual entre 75 e 85.
- Evite texto aplicado dentro das fotos.
- Preserve tons naturais de pele e das peças.
- Garanta autorização de imagem das pessoas fotografadas.
- Não copie imagens de outras lojas ou marcas sem licença.
- Mantenha o foco principal longe das bordas para funcionar em diferentes recortes.
- Para não alterar código, substitua os arquivos mantendo os mesmos nomes e extensões.
- Ao trocar uma foto da galeria, atualize também a URL do post em `src/data/site.ts`.

O componente `ImageWithFallback` impede quebra de layout quando um caminho estiver incorreto ou um arquivo estiver ausente.
