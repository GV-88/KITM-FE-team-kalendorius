import './PlaceholderComponent1.scss'

const PlaceholderComponent1 = ({children}) => {
    return (
        <div className="placeholder-component-1" title="this is just a temporary placeholder for testing">
            {children}
        </div>
    )
}

export default PlaceholderComponent1;