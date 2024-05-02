const HomeCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className='text-home flex flex-grow items-center justify-center gap-2 rounded-xl bg-white text-2xl md:text-5xl'>
      <div className='material-symbols-outlined text-3xl md:text-6xl'>
        {icon}
      </div>
      <div>{text}</div>
    </div>
  )
}
export default HomeCard
