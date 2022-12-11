function Listtdl({tdlist}){
    return(
        <div className="App">
            {
                tdlist.map((tdldetails) => (
                    <>
                        <p>tdldetails.todolist</p>
                        <p>tdldetails.date</p>
                    </>
                ))
            }
        </div>
    )

}

export default Listtdl;