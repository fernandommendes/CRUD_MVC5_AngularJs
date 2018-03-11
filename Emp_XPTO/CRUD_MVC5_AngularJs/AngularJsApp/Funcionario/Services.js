/*
    * Arquivo: Service.js
    * Data: 11/03/2018
    * Descrição: arquivo responsável por carregar os dados via $http.get - do MVC Controller (onde transformará os dados em Json)
    * Author: Fernando Mendes
*/

funcionarioApp.service('funcionarioService', function ($http) {

    this.getTodosFuncionarios = function () {

        return $http.get("/Funcionario/GetFuncionario");
    }
});