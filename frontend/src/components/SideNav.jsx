export default function SideNav(){
    return(
        <nav className="shadow-xl border-t-2 h-screen fixed left-0 top-[-4] flex flex-col bg-white">
            <div className="flex flex-col items-center p-3">
                <ul className="flex flex-col space-y-4">
                    {/* Dashboard / Analytics */}
                    <div className="border-y-2 p-2">
                        <li>
                            <a href="">
                                <img width="24" height="32" src="https://img.icons8.com/fluency-systems-regular/48/laptop-metrics.png" alt="laptop-metrics"/>
                            </a>
                        </li>
                    </div>
                    {/* Product Management & Inventory Tracking */}
                    <div className="flex flex-col space-y-4 border-y-2 p-2">
                        <li>
                            <a href="">
                                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/delivery-settings.png" alt="delivery-settings"/>
                            </a>
                        </li>
                        <li>   
                            <a href="">
                                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/boxes.png" alt="boxes"/>
                            </a>
                        </li>
                    </div>
                    {/* Sales Management */}
                    <div className="flex flex-col space-y-4 border-y-2 p-2">
                        <li>
                            <a href="">
                                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/total-sales.png" alt="total-sales"/>
                            </a>
                        </li>
                        <li>   
                            <a href="">
                                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/tax.png" alt="tax"/>                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/money-box--v1.png" alt="money-box--v1"/>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}