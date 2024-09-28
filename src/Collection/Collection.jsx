import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

export const CollectionItem = ({ collection }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Product/${collection.id}`);
  };

  return (
  <div  class='container  bg-white'>
    <div className='w-full justify-center mb-6 mx-auto'>
    <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-1  ">
      <div class=" w-full  md:w-96  md:h-80 lg:w-auto rounded-lg overflow-hidden  shadow-xl shadow-zinc-400  ">
        {/* image section */}
        
        <LazyLoad height={200} offset={100} once>
        
        <img
        
          class="w-full lg:w-full h-52"
          src={`${collection.img}`}
          // src={`../Asset/${collection.img}`}
          alt={collection.brand}
          onClick={handleViewDetails} 
        />  </LazyLoad>

        <div class="card-body  p-2  w-auto  ">
          <h2 class="card-title text-"  >
            {collection.brand}
          </h2>

          {/* div for price */}
          <h3 class=" w-40">
            <span>$</span> {collection.price}
          </h3>
        </div>
        <button class=" bg-gradient-to-r from-slate-300  to-gray-500 text-white   w-96 h-10 ml-1 lg:ml-4 transition-all duration-300 rounded-lg hover:-translate-y-2" onClick={handleViewDetails}>
          View Details
        </button>
        
      </div>
      </div>
    </div>
    </div>
   
  );
};


export const CollectionList = ({ collections }) => {
  const limitedCollections = collections.slice(0, 6);
  return (
    <>
      {limitedCollections.map((collection) => (
        <CollectionItem key={collection.id} collection={collections} />
      ))}
    </>
  );
};

// Add this export if it was intended to be used in NavCollection.jsx
export const Collections = CollectionItem;

 