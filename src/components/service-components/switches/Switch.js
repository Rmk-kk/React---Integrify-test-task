import './switch.css'
const Switch = ({onSwitchAlphabet, onSelectedFilter}) => {

    return (
        <div className='switch-group'>
            <div className='favourite-switch'>
                <h3>Favourites</h3>
                <span>
                    <input onChange={() => onSelectedFilter()} className='switch-input' type="checkbox" id="favourite-switch" data-switch='selected'/>
                    <label className='switch-label' htmlFor="favourite-switch">Toggle</label>
                </span>
            </div>
        </div>
    )
}

export default Switch