import './style.css';

const GreetingImageContainer = ({children}) => {
    return <div className='greeting-container'>
        <div className='img-container'>
            <div>
                <img src="https://healthstro.com/_next/static/media/logo_symbol_healthstro.50f56eaf.svg" alt="" />
                <h2>Find the best products for your wellness goals.</h2>
            </div>
            <div>
            <img className='image' src="https://healthstro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin_card_img.dc08c50a.png&w=1080&q=75" alt="" />
            </div>
        </div>
        {children}
    </div>
}


export default GreetingImageContainer;