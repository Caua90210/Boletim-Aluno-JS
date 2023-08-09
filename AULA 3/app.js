/*****************************************************************************************
 * Objetivo: Calcular a média de um aluno  
 * Data: 09/08/2023
 * Autor: Cauã
 * Versão: 1.0
 ******************************************************************************************/

// Import da biblioteca readline 
var readline = require('readline');

// Criando um objeto para interação com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * var = Permite criar uma variável no escopo Global do projeto
 * let = Permite criar uma variável no escopo local do projeto (esta variavel irá existir somente dentro do seu bloco de programação)
 * const = Permite criar um espaço em memórial para guardar um conteúdo que não sofrerá alteração e pode ser no escopo global ou local
 * 
 * Operadores de Comparação:
 * 
 *  == Permite verificar igualdade
 *  < Permite verificar o menor valor
 *  > Permite verificar o maior valor
 *  <= Permite verificar o menor valor ou a igualdade
 *  >= Permite verificar o maior valor ou a igualdade
 *  != Permite verificar a diferença entre dois conteúdos
 *  === Permite verificar a igualdade entre conteúdos e validar e a igualdade nos tipos de dados
 *  !== Permite verificar a diferença de conteúdo e a igualdade de tipo de dados 
 *
 * 
 */

// Entrada de dados para o nome do aluno
entradaDados.question('Digite o nome do aluno: ', function(nomeUsuario) {

    var nome = nomeUsuario;

    // Entrada de dados para o curso do aluno
    entradaDados.question('Digite o curso do aluno: ', function(cursoAluno) {

        var curso = cursoAluno; 

        // Entrada de dados para a disciplina
        entradaDados.question('Digite a disciplina: ', function(disciplinaAluno) {

            var disciplina = disciplinaAluno;

            // Entrada de dados para as notas
            entradaDados.question('Digite a 1ª nota: ', function(nota1Aluno) {

                var nota1 = parseFloat(nota1Aluno);

                entradaDados.question('Digite a 2ª nota: ', function(nota2Aluno) {

                    var nota2 = parseFloat(nota2Aluno); 

                    entradaDados.question('Digite a 3ª nota: ', function(nota3Aluno) {

                        var nota3 = parseFloat(nota3Aluno);

                        entradaDados.question('Digite a 4ª nota: ', function(nota4Aluno) {

                            var nota4 = parseFloat(nota4Aluno); 
                            var media = (nota1 + nota2 + nota3 + nota4) / 4;
                            console.log('                                    ');
                            console.log('********* Boletim do Aluno *********');
                            console.log('Nome do aluno: ' + nome);
                            console.log('Curso: ' + curso);
                            console.log('Disciplina: ' + disciplina);
                            console.log('Notas: 1ª nota: ' + nota1 + ', 2ª nota: ' + nota2 + ', 3ª nota: ' + nota3 + ', 4ª nota: ' + nota4);
                            console.log('Média do Aluno: ' + media.toFixed(2)); // Limitando a 2 casas decimais
                            
                            if(nota1 == '')

                            entradaDados.close();
                            
                            
                        });
                    });
                });
            });
        });
    });
});
