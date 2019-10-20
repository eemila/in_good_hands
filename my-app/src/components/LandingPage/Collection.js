import React from 'react';

const Collection = ({ collections, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="collections-list">
      {collections.map(collection => (
        <li key={collection.id} className=''>
            <article className="org-item">
                <div className="org-info">
                    <h3>{collection.name}</h3>
                    <p className="org-item-mission">{collection.aimAndMission}</p>
                </div>
                <div className="org-add">
                    <p className="org-item-needed">{collection.needed}</p>
                </div>
            </article>    
        </li>
      ))}
    </ul>
  );
};

export default Collection;