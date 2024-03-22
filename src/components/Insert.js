

function Insert({onInsert}) {

    
    return (
        <form onSubmit={onInsert}>
            <input name="text" /><button type='submit'>enter</button>
        </form>
    )
}

export default Insert;