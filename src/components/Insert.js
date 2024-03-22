
function Insert({onInsert}) {


    return (
        <form onSubmit={onInsert}>
            <input name="text"/><button type="submit">create</button>
        </form>
    )

}

export default Insert;