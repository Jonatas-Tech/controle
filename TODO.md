# TODO - Projeto Painel de Senhas

## Funcionalidades
- [x] Criar servidor Node.js com Express
- [x] Implementar CORS e parsing JSON
- [x] Gerenciar filas de senhas para diferentes setores:
  - [x] Senhas SP (Suporte Presencial)
  - [x] Senhas SG (Suporte Geral)
  - [x] Senhas SE (Suporte Especial)
- [x] Gerar novas senhas com contador sequencial
- [x] Registrar últimas 5 senhas chamadas
- [x] Endpoint para emitir senha
- [x] Endpoint para chamar próxima senha
- [x] Endpoint para consultar últimas senhas chamadas
- [ ] Interface web para painel de chamadas
- [ ] Interface web para usuários emitirem senha
- [ ] Sistema de atualização em tempo real (WebSocket ou Polling)
- [ ] Responsividade do painel (mobile e desktop)
- [ ] Estilização do painel (cores, botões e organização visual)
- [ ] Testes básicos das rotas
- [ ] Documentação do código

## Melhorias Futuras
- [ ] Persistência de dados com banco (ex: SQLite, MongoDB)
- [ ] Autenticação de atendentes
- [ ] Histórico completo de senhas
- [ ] Dashboard com estatísticas (total de senhas, tempo médio de atendimento)
