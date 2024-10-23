import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className="w-10/12 mx-auto p-7 flex justify-between items-center border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
