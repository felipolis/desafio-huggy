
export default defineEventHandler(async (event) => {

    try {
        const body = await readBody(event)
    
        const response = await fetch('https://auth.huggy.app/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(body)
        })


        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
 
})