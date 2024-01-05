
const config = {
    port : getValueFromEnv("port",8080),
    bodyParser : {
        json : true,
        urlEncoded: { extended: true },
    }
}

function getValueFromEnv (key,defaultValue) {
    const value = process.env[key] || defaultValue
    return value; 
}

module.exports = config; 


