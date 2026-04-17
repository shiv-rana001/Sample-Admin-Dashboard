import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <>
            <div>
                <input type="text" placeholder="Jo search krna h vo likhein" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </>
    )
}

export default Search