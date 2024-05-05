const Icon = ({ iconText }: { iconText: string }) => {
  return (
    <div
      className={`material-symbols-outlined`}
      style={{ fontSize: 'inherit' }}
    >
      {iconText}
    </div>
  )
}

export default Icon
