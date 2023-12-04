const config = {
    port : getValueFromEnv(port,8080),
    bodyParser : {
        json : true,
        urlEncoded: { extended: true },
    }
}

module.exports = config; 



const getValueFromEnv = (value,defaultValue) => {
    const value = process.env[value] || defaultValue
    return value; 
}