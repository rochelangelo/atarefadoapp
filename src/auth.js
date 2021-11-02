import axios from './Utils/axios';

class Auth {
    signIn = (usuario, senha) => {
        console.log("foi")
        return new Promise((resolve, reject) => {
            axios
                .post('/v1/login', { usuario, senha })
                .then((response) => {
                    if (response.data.usuario) {
                        this.setToken(response.data.token);
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

    signIn = (nome, usuario, senha) => { };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios
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

    setToken = (token) => {
        if(token){
            localStorage.setItem('accessToken', token);
            axios.defaults.headers.common.Authorization = 'Bearer ${token}';
        }else{
            localStorage.removeItem('token');
            delete axios.defaults.headers.common.Authorization;
        }
    };

    getToken = () => localStorage.getItem('accessToken');

    removeToken = () => localStorage.removeItem('accessToken');

    isAuthenticated = () => !!this.getToken();
}

const auth = new Auth();

export default auth;