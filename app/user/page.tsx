import Header from "@/components/Header"
import axios from "axios"

const wait =(ms : number) => new Promise((resolve) => setTimeout(resolve, ms))
      

const user = async () => {
    await wait(5000)
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    return(
        <div>user
            <Header/>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}
export default user