
export default defineEventHandler(async (event) => {

    try {
        // pega o header
        const authorization = event.req.headers.authorization

        const response = await fetch('https://api.huggy.app/v3/chats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': authorization
            }
        })

        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
 
})