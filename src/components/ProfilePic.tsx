import nandalal from "../../public/nandalal.png"
const ProfilePic = () => {
  return (
    <div className="w-40 overflow-hidden border-2 dark:border-gray-500 border-gray-700 rounded-4xl">
      <img src={nandalal} alt="Nandalal Shukla"
      className="h-full w-full object-cover"/>
    </div>
  )
}

export default ProfilePic