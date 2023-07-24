
export default defineEventHandler(async (event) => {

    try {
        const { id } = event.context.params
        const authorization = event.req.headers.authorization
        const query = getQuery(event)

        const response = await fetch(`https://api.huggy.app/v3/chats/${id}/messages?page=${query.page}`, {
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