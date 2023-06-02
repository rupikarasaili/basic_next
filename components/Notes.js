import axios from "axios";
import { useEffect, useState } from "react";

export default function Notes(props) {
    // const { notes } = props
    const [notes, setNotes] = useState(props.notes)
    const [desc, setDesc] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const [targetNote, setTargetNote] = useState({})

    useEffect(() => {
        axios.get('http://localhost:4000/notes')
        .then(response=>{
            console.log(response)
        })
    })

    const notesToShow = showAll ? notes
        : notes.filter(note => note.important)

    const handleChange = (event) => setDesc(event.target.value)
    const handleAdd = (event) => {
        event.preventDefault()
        const newNote = {
            id: notes.length + 1,
            desc: desc,
            important: Math.random() < 0.5
        }
        setNotes(notes.concat(newNote))
        setDesc('')
    }

    const handleDelete = (noteId) => {
        if (window.confirm(`Are you sure to delete note with id ${noteId}`)) {
            setNotes(notes.filter(note => note.id !== noteId))
        }
    }
    const handleEdit = (noteId) => {
        const noteToUpdate = notes.find(n => n.id === noteId)
        setDesc(noteToUpdate.desc)
        setTargetNote(noteToUpdate)
        setIsEdit(true)
    }
    const handleSave = (event) => {
        event.preventDefault()
        setNotes(notes.map(n=> n.id === targetNote.id 
            ? {...targetNote,desc:desc}
            : n )
        )
        setDesc('')
        setIsEdit(false)
    }
    return (
        <div>
            <h2>Notes</h2>

            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <table>
                <thead>
                    <tr>
                        <th>description</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notesToShow.map(note =>
                            <tr key={note.id}>
                                <td>{note.desc}</td>
                                <td>
                                    <button onClick={() => handleDelete(note.id)}>
                                        delete
                                    </button>
                                    <button onClick={() => handleEdit(note.id)}>
                                        edit
                                    </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>

            <br />
            <form>
                <input
                    type="text"
                    value={desc}
                    onChange={handleChange} />
                {' '}
                {
                    isEdit
                        ? <button onClick={handleSave}>save</button>
                        : <button onClick={handleAdd}>add</button>
                }

            </form>
        </div>
    )
}