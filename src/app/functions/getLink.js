export default async function getLink(id=''){
    const res = await fetch(`http://localhost:3000/api/ressources/${id}`,{cache : 'no-cache'})
    // 
    if(!res.ok){
        throw new Error("failed to fetch link")
    }
    return res.json()
}