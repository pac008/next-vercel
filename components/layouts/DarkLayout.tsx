interface Props {
    children: JSX.Element | JSX.Element[]
}


export const DarkLayout = ({children}: Props) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px',
    }}>
        <h3>Dark-Louyr</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
