export async function Test() {

    try{
        const response = await fetch('https://localhost:7087/api/Facebook',{
            method : "GET",
            mode: 'cors',
        
        });
        console.log("TEsttt",response.json());
        return await response.json();
    }catch(error) {
        return [];
    }
    
}