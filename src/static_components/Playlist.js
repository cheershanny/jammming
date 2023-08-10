
export const Playlist = (prop) => {
    const list = ['Would it be nice', 'Unbreak my heart'];

    return (
        <div className = {prop.className} >
            {list.map((song) => <li>{song}</li>)}
        </div>
    );

};