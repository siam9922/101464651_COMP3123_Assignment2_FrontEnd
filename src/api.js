const API = {
    post: async (endpoint, data) => {
        console.log(`POST to ${endpoint}`, data);
        if (endpoint === '/auth/login') {
            return { data: { token: 'mockToken' } };
        }
        if (endpoint === '/auth/signup') {
            return { message: 'Signup successful!' };
        }
        throw new Error('Invalid POST endpoint');
    },
    get: async (endpoint) => {
        console.log(`GET from ${endpoint}`);
        if (endpoint === '/employees') {
            return {
                data: [
                    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
                    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Marketing' },
                ],
            };
        }
        throw new Error('Invalid GET endpoint');
    },
    put: async (endpoint, data) => {
        console.log(`PUT to ${endpoint}`, data);
        return { message: 'Update successful!' };
    },
    delete: async (endpoint) => {
        console.log(`DELETE from ${endpoint}`);
        return { message: 'Delete successful!' };
    },
};

export default API;
