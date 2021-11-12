import api from './api';

class Auth {

    signIn = (usuario, senha) => {
        return new Promise((resolve, reject) => {
            api
                .post('/v1/login', { usuario, senha })
                .then((response) => {
                    if (response.data.usuario) {
                        let usuario = response.data.usuario.nome;
                        let usuarioId = response.data.usuario.id;
                        this.setToken(response.data.token, usuario, usuarioId);
                        resolve(response.data.usuario);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            api
                .post('/v1/usuario')
                .then((response) => {
                    if (response.data.user) {
                        resolve(response.data.user);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    signOut = () => {
        this.removeToken();
    };

    setToken = (token, usuario, usuarioId) => {
        if (token) {
            localStorage.setItem('accessToken', token);
            localStorage.setItem('user', JSON.stringify({ name: usuario, id: usuarioId }));
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            localStorage.removeItem('token');
            delete api.defaults.headers.authorization;
        }
    };

    getToken = () => localStorage.getItem('accessToken');

    getUser = () => JSON.parse(localStorage.getItem('user'));

    removeToken = () => localStorage.removeItem('accessToken');

    isAuthenticated = () => !!this.getToken();
}

const auth = new Auth();

export default auth;