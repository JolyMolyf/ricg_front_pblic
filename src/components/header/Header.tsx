import './header.scss';
import NavBar from './navBar/NavBar';
import PerfomanceBar from './perfomanceBar/PerfomanceBar';

const Header = () => {

    return (
        <div className='header'>
            <NavBar/>
            <div id='radialBlur'></div>
            <div className='header-content'>
                <div className='header-content-left'>
                    <p className='blackSecondaryHeader'>Wystartuj z nami-</p>
                    <p className='blueHeader'>rynek pracy <br></br>bez tajemnic</p>
                    <div className='header-content-left-arrow'>
                        <img src={'/ArrowRight.svg'}></img>
                        <p className='blueMainText'>Bądż z nami</p>
                    </div>
                </div>
                <div className='header-content-right'>
                    <img src={'/illustration.svg'} style={{"width": "80%", height: "auto"}}></img>
                </div>
            </div>
            <PerfomanceBar/>
        </div>
    )
}

export default Header;