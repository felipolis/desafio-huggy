
export default defineEventHandler(async (event) => {

    try {
        const { id } = event.context.params
        const authorization = event.req.headers.authorization
        const body = await readBody(event)
        const response = await fetch(`https://api.huggy.app/v3/chats/${id}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': authorization
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
 
})