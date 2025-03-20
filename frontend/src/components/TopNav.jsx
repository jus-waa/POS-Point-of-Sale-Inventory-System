export default function TopNav(){
  return(
    //top nav bar
    <nav className="shadow-lg">
      <div className="flex justify-between w-screen px-6">
        <div className="flex items-center p-2">
          <img className="mr-2" width="32" height="32" src="https://img.icons8.com/color/48/move-by-trolley.png" alt="move-by-trolley"/>
          Sakamote POS & Inventory
        </div>
        <div className="flex items-center space-x-4 p-4">
          <button className="flex items-center p-1">
            <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
          </button>
          <button className="flex items-center p-1">
            <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/bot--v1.png" alt="bot--v1"/>
          </button>
        </div>
      </div>
    </nav>
  );
};