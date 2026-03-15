export const signInAsDemo = async () => {
    console.log("Demo sign-in disabled on marketing site. Redirecting to app...");
    window.location.href = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/demo' : 'https://app.ministrymotion.com/demo';
};
