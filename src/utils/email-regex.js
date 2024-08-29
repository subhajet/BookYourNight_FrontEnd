export const validateEmail = (email) => {
    const regex =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); //text@text.text
    return  regex.test(email ); 
};