import React, { useState } from 'react';
import NotFavButton from './notFavButton';


function FavoriteCard({ oneFavCard, id, deleteFavorite }) {
  const [dropDown, setDropDown] = useState(true);
  const [notes, setNotes] = useState('');


  const editFavorite = async () => {
    await fetch(`/favorites/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes })
    });
    console.log('Notes Edited on Favorites List')
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };


  return (
    <div className='allFavCards'>
      {dropDown ? (
        <div className='oneFavCard-card'>

          <div className='favcard-route' onClick={handleDropDown} >
            <h1>{oneFavCard.start_location} <span className='arrow'>&#x2192;</span> {oneFavCard.end_location}</h1>
          </div>

        </div>
      ) : (
        <div className='oneFavCard-card'>

          <div className='favcard-route' onClick={handleDropDown}>
            <h1>{oneFavCard.start_location} <span className='arrow'>&#x2192;</span> {oneFavCard.end_location}</h1>
          </div>
          <div className='favcard-results'>
            <h2>Distance: <span className='favcard-results-span'>{oneFavCard.distance}</span></h2>
            <h2>Duration: <span className='favcard-results-span'>{oneFavCard.duration}</span></h2>
          </div>

          <div className='notes-section'>
            <h2 >Notes: <span className='favcard-results-span'>{oneFavCard.notes}</span></h2>
            </div>


            <div>
              <textarea
                className='notes-textarea'
                type="text"
                id="add-notes"
                placeholder="Add your notes here..."
                value={notes}
                onChange={(e) => setNotes(e.currentTarget.value)}
              />
              <br />
              <button onClick={editFavorite}>Add Notes</button>
            </div>

          <NotFavButton id={id} deleteFavorite={deleteFavorite} />
        </div>
      )}

    </div>
  )
}

export default FavoriteCard
