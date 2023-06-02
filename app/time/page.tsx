export const dynamic = 'auto';
const time = () => {
    let showdate = new Date().toLocaleString()
    return(
        <div className="flex justify-center items-center max-w-screen-xl bg-slate-600">
            <div className="flex flex-col text-white p-8">
                <h1>
                Date and time : {showdate}
                </h1>
               
            </div>
        </div>
    )
}
export default time