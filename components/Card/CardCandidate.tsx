const CardCandidate = ({id, name, img} : {id: number, name :string, img: string}) => (
    <div key={id} className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-40 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-40">
      <img
        alt={name}
        src={img}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-1 flex justify-center font-bold text-center">
      <div>
        <h3 className="text-sm text-wrap text-gray-700">
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