module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'login-background': "url('/img/login-background.jpg')",
                'header-background': "url('/img/header-background.jpg')",
            },
            colors: {
                'regal-blue': '#243c5a',
            },
            fontFamily: {
                'cormorantGaramond': ['"Cormorant Garamond"', 'serif'],
                'theSeasons': ['theSeasons', 'serif']
            },
        },
    },
    plugins: [],
}