% EXERCÍCIO 1: desafio de prolog.

% Este exercício é apenas um aquecimento, para nos prepararmos para os próximos dias
% da nossa academy. Queremos aqui somente praticar um pouquinho do pensamento lógico.

% Este exercício foi implementado em prolog, e descreve as relações familiares das três
% primeiras gerações da Família Buendía, de 100 anos de solidão, de Gabriel Garcia Marquez.
% Se você não leu ainda a obra (😱), considere a imagem do link abaixo para entender melhor
% a lista de nomes.
% (https://pt.wikipedia.org/wiki/Cem_Anos_de_Solid%C3%A3o#/media/Ficheiro:Buendía.gif)

% DESCRIÇÃO DO EXERCÍCIO:
% O arquivo abaixo é um programa em prolog. O primeiro bloco (linhas <>) apresenta os
% personagens da Família Buendía, e as relações familiares básicas entre eles. O segundo
% bloco (linhas <>), as relações familiares são descritas, a partir dos fatos apresentados.
% O último bloco, declara uma função que executa as consultas do nosso programa.
% Repare que neste bloco, existem algumas relações familiares, que não estão implementadas.
% Seu trabalho aqui é implementar estas relações, de forma que as consultas executadas
% reflitam a realidade da família Buendía.

% COMO EXECUTAR O PROGRAMA:
% - entre no REPL online do prolog, no link https://swish.swi-prolog.org/, e clique no botão
%   "Create a Program".
% - cole todo o conteúdo deste arquivo na área a esquerda da tela. Esta é sua área de trabalho,
%   onde você descreverá suas regras.
% - na parte baixa, a direita, é onde você deverá operara suas queries. Basta escrever
%   "resolve." e clicar no botão de "run!".
%% fatos (predicados)
personagem(joseArcadioBuendia).
personagem(ursulaIguaran).
personagem(joseArcadio).
personagem(aureliano).
personagem(amaranta).
personagem(pilarTernera).
personagem(arcadio).
personagem(aurelianoJose).
personagem(remediosMoscote).

homem(joseArcadioBuendia).
homem(joseArcadio).
homem(aureliano).
homem(aurelianoJose).
homem(arcadio).
mulher(ursulaIguaran).
mulher(pilarTernera).
mulher(amaranta).
mulher(remediosMoscote).

genitor(joseArcadioBuendia, aureliano).
genitor(joseArcadioBuendia, joseArcadio).
genitor(ursulaIguaran, aureliano).
genitor(ursulaIguaran, joseArcadio).
genitor(joseArcadioBuendia, amaranta).
genitor(ursulaIguaran, amaranta).
genitor(joseArcadio, arcadio).
genitor(pilarTernera, arcadio).
genitor(pilarTernera, aurelianoJose).
genitor(aureliano, aurelianoJose).
casado(aureliano, remediosMoscote).

%% regras
pai(X, Y) :- homem(X), genitor(X, Y).
mae(X, Y) :- mulher(X), genitor(X, Y).

% queries
resolve :-
    pai(joseArcadioBuendia, joseArcadio),
    mae(ursulaIguaran, aureliano),
    irmao(aureliano, amaranta),
    neto(aurelianoJose, joseArcadioBuendia),
    tio(joseArcadio, aurelianoJose),
    tio(remediosMoscote, aurelianoJose),
	  primo(arcadio, aurelianoJose).


