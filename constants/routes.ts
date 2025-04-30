const ROUTES = {
    HOME: '/',
    SIGN_IN: '/sign_in',
    SIGN_UP: '/sign_up',
    PROFILE: (id: string) => `/profile/${id}`,
    TAGS: (id: string) => `/tags/${id}`
};

export default ROUTES