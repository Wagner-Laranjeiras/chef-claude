import chefClaudeLogo from '../images/chef-claude-icon.png';

const Header = () => {
  return ( 
        <header className='flex gap-4 items-center justify-center p-6 border-b-2 border-blue-100 shadow-sm bg-blue-100'>
            <img 
                src={chefClaudeLogo} 
                alt='chef claude logo'
                className='w-12'
            />
            <h1 className='font-semibold text-4xl'>
                Chef Claude
            </h1>
        </header>
     );
}
 
export default Header;