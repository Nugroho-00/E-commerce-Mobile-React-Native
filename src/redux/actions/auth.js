import http from '../../helpers/http';
import qs from 'querystring';

export default {
    login: (data) => ({
        type: 'LOGIN_CUSTOMER',
        payload: http().post('http://localhost:8000/auth/login/customer', qs.stringify(data))
    })
}