function Card({username="Learn React",btntxt="Read More"}){
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
  <img
    className="rounded-t-lg"
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    alt="Programming"
  />

  <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {username}
    </h5>

    <p className="mb-3 font-normal text-gray-700">
      React is a JavaScript library for building modern user interfaces.
    </p>

    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      {btntxt}
    </button>
  </div>
</div>
    )
}
export default Card