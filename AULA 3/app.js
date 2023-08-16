/*****************************************************************************************
 * Objetivo: Calcular a média de um aluno e fornecer um status baseado na média  
 * Data: 09/08/2023
 * Autor: Cauã
 * Versão: 1.1
 ******************************************************************************************/

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o nome do aluno: ', function(nomeUsuario) {
    var nome = nomeUsuario;

    entradaDados.question('Digite o curso do aluno: ', function(cursoAluno) {
        var curso = cursoAluno; 

        entradaDados.question('Digite a disciplina: ', function(disciplinaAluno) {
            var disciplina = disciplinaAluno;

            entradaDados.question('Digite a 1ª nota: ', function(nota1Aluno) {
                var nota1 = parseFloat(nota1Aluno.replace(',', '.'));

                entradaDados.question('Digite a 2ª nota: ', function(nota2Aluno) {
                    var nota2 = parseFloat(nota2Aluno.replace(',', '.')); 

                    entradaDados.question('Digite a 3ª nota: ', function(nota3Aluno) {
                        var nota3 = parseFloat(nota3Aluno.replace(',', '.'));

                        entradaDados.question('Digite a 4ª nota: ', function(nota4Aluno) {
                            var nota4 = parseFloat(nota4Aluno.replace(',', '.')); 
                            var media = (nota1 + nota2 + nota3 + nota4) / 4;

                            if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                console.log('ERRO: É obrigatório a entrada apenas de valores numéricos.');
                                entradaDados.close();
                            } else if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0) {
                                console.log('ERRO: É obrigatório apenas a entrada de valores entre 0 e 10.');
                                entradaDados.close();
                            } else {
                                console.log('A média do aluno é ' + media.toFixed(2));

                                var status;

                                
                                if (media >= 0 && media < 4.9) {
                                    status = 'Reprovado';
                                } else if (media >= 5 && media < 7) {
                                    status = 'Aluno de Exame';
                                } else if (media >= 7 && media <= 10) {
                                    status = 'Aprovado';
                                }


                                console.log('Status do aluno: ' + status);
                                console.log('                                    ');
                                console.log('********* Boletim do Aluno *********');
                                console.log('Nome do aluno: ' + nome);
                                console.log('Curso: ' + curso);
                                console.log('Disciplina: ' + disciplina);
                                console.log('Notas: 1ª nota: ' + nota1 + ', 2ª nota: ' + nota2 + ', 3ª nota: ' + nota3 + ', 4ª nota: ' + nota4);
                                console.log('Média do Aluno: ' + media.toFixed(1));
                                console.log('Status do Aluno: ' + status);
                                entradaDados.close();
                            }
                        });
                    });
                });
            });
        });
    });
});
