interface Props {
    params : {
        postId : string
    }
}
const router = async({ params} : Props) => {
    return(
        <div>Router Page {params.postId}</div>
    )
}
export default router