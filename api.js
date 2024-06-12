// api.js

const url = "https://8000-rdrgotxra-apiplayer-0mteohlhcqu.ws-us114.gitpod.io/api/music/";

function fazerRequisicaoAPI() {
    // Desativa o botão enquanto a requisição está sendo feita
    apiBtn.disabled = true;

    fetch(url)
        .then(response => {
            // Verifica se a resposta está OK (status 200)
            if (!response.ok) {
                throw new Error('Erro ao carregar a API');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Redireciona após o sucesso da solicitação
            window.location.href = url;
        })
        .catch(error => {
            console.error('Erro ao carregar a API:', error);
            
            alert('Erro ao carregar a API. Por favor, tente novamente mais tarde.');
        })
        .finally(() => {
           
            apiBtn.disabled = false;
        });
}

// Evento de clique ao botão
const apiBtn = document.querySelector("#btn-api")
apiBtn.addEventListener("click", fazerRequisicaoAPI);
