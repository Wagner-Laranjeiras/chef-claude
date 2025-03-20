import chefClaudeLogo from '../images/chef-claude-icon.png';
function clickButton() {
    console.log('I was clicked.')
}


const Header = () => {
    return ( 
        <header className='flex gap-4 items-center justify-center p-6 border-b-2 border-blue-300 shadow-sm bg-blue-300'>
            <img 
                src={chefClaudeLogo} 
                alt='chef claude logo'
                className='w-12'
            />
            <h1 className='font-semibold text-4xl'>
                Chef Claude
            </h1>







            <img 
                src={chefClaudeLogo} 
                alt='chef claude logo'
                className='w-12'
            />
            <button
                onClick={clickButton}
                className="py-2 px-8 m-1 border-2 bg-blue-900 text-white rounded-lg text-sm"
            >Click me</button>

        </header>
     );
}
 
export default Header;