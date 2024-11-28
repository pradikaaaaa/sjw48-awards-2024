const CardCandidate = ({id, name, img} : {id: number, name :string, img: string}) => (
    <div key={id} className="group relative">
    <div className="aspect-h-1 aspect-w-1 xl:w-40 lg:w-40 md:w-40 sm:w-40 xs:w-40 2xs:w-32 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 xl:h-40 lg:h-40 md:h-40 sm:h-40 xs:h-40 2xs:h-32">
      <img
        alt={name}
        src={img}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-2 flex font-bold justify-center text-center xl:w-40 lg:w-40 md:w-40 sm:w-40 xs:w-40 2xs:w-32">
      <div>
        <h3 className="text-sm text-wrap  text-gray-700">
          {/* <a href={id}> */}
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          {/* </a> */}  
        </h3>
        {/* <p className="mt-1 text-sm text-gray-500">{fanbase.color}</p> */}
      </div>
      {/* <p className="text-sm font-medium text-gray-900">{fanbase.price}</p> */}
    </div>
  </div>
)

export default CardCandidate