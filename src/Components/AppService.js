export default class AppService {
    
    static async fetchData() {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }

    static async fetchAge(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }
 
}