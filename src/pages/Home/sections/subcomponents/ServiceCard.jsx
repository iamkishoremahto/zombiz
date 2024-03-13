

export default function ServiceCard(props) {
  return (
    <div className="card max-w-[400px] flex flex-col items-center justify-center gap-7 p-8 py-10 border-2 border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-cardShadow">
    <div className="image">
        <img src={props.data.icon} alt="image" />
    </div>
    <h1 className=" text-2xl text-gray-700">{props.data.title}</h1>
    <p className="text-center text-gray-500">{props.data.content}</p>

</div>
  )
}
