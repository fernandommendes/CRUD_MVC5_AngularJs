/*
    * Arquivo: Controller.js
    * Data: 11/03/2018
    * Descrição: Este aquivo vai conter o código do "funcionarioCtrl", a qual controla os módulos de 'funcionario'
    * Author: Fernando Mendes
*/

//Controller Funcionario
funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    //Aqui estou carregando todos os dados do Fucionário quando a página for recarregada:
    carregarFuncionarios();

    function carregarFuncionarios() {
        var listarFuncionarios = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(function (d) {
            //se tudo der certo:
            $scope.Funcionarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os funcionários!");
            });
    }
});