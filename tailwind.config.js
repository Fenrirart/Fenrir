module.exports = {
    purge: [
        "./resources/**/*.blade.php",

        "./resources/**/*.js",

        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", "Arial", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
