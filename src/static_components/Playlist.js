
export const Playlist = () => {
    const list = ['Would it be nice', 'Unbreak my heart'];

    return (
        <div>
            {list.map((song) => <li>{song}</li>)}
        </div>
    );

};