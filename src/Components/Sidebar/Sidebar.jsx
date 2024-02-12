import { React, useState } from "react";
import { Link } from "react-router-dom";
import Patient_Data from "../Patient-Data/Patient_Data";
import Add_Patient from "../../Pages/Add_Patient/Add_Patient";
import Patient_Expenses from "../../Pages/Patient_Expenses/Patient_Expenses";
import Doctor_Expense from "../../Pages/Doctor_Expense/Doctor_Expense";
import Teacher_Expense from "../../Pages/Teacher_Expense/Teacher_Expense";
import Staff_Salaries from "../../Pages/Staff_Salaries/Staff_Salaries";
import Office_Rent from "../../Pages/Office_Rent/Office_Rent";
import Transportation from "../../Pages/Transportation/Transportation";
import Electricity_Bill from "../../Pages/Electricity_Bill/Electricity_Bill";
import Water_Bill from "../../Pages/Water_Bill/Water_Bill";
import Gas_Bill from "../../Pages/Gas_Bill/Gas_Bill";
import Groccery_Expenses from "../../Pages/Groccery_Expenses/Groccery_Expenses";
import Patient_List from "../../Pages/Patient_List/Patient_List";
import Doctor_List from "../../Pages/Doctor_Expense/Doctor_Detail";
import Teacher_List from "../../Pages/Teacher_Expense/Teaher_Detail";
import Groccery_List from "../../Pages/Groccery_Expenses/Groccery_Detail";
import Office_List from "../../Pages/Office_Rent/Office_Detail";
import Transportation_List from "../../Pages/Transportation/Transportation_List";
import Staff_List from "../../Pages/Staff_Salaries/Staff_List";
import Electricity_List from "../../Pages/Electricity_Bill/Electricity_Bill_List";
import Water_Bill_List from "../../Pages/Water_Bill/Water_Bill_List";
import Gas_List from "../../Pages/Gas_Bill/Gas_Bill_List";
const Sidebar = () => {
    const [isPatientsDropdownOpen, setIsPatientsDropdownOpen] = useState(false);
    const [isExpensesDropdownOpen, setIsExpensesDropdownOpen] = useState(false);
    const [isRentDropdownOpen, setIsRentDropdownOpen] = useState(false);
    const [isBillsDropdownOpen, setIsBillsDropdownOpen] = useState(false);
    const [isProfitLossDropdownOpen, setIsProfitLossDropdownOpen] = useState(false);
  
  const [activeComponent, setActiveComponent] = useState("/Add-Patient");

  const handleMenuClick = (route) => {
    setActiveComponent(route);
    updateDropdownStates(route);
  };
  const updateDropdownStates = (route) => {
    setIsPatientsDropdownOpen(route === "/Add-Patient" || route === "/Patient-Expenses");
    setIsExpensesDropdownOpen(route.includes("/patient/"));
    setIsRentDropdownOpen(route.includes("/rent/"));
    setIsBillsDropdownOpen(route.includes("/bills/"));
    setIsProfitLossDropdownOpen(route.includes("/profit-loss/"));
  };

  const handlePatientsDropdownClick = () => {
    setIsPatientsDropdownOpen(true);
    setIsExpensesDropdownOpen(false);
    setIsRentDropdownOpen(false)
    setIsBillsDropdownOpen(false)
    setIsProfitLossDropdownOpen(false)
  };
  
  const handleExpensesDropdownClick = () => {
    setIsExpensesDropdownOpen(true);
    setIsPatientsDropdownOpen(false);
    setIsRentDropdownOpen(false)
    setIsBillsDropdownOpen(false)
    setIsProfitLossDropdownOpen(false)
  };
  const handleRentDropdownClick = () => {
    setIsRentDropdownOpen(true);
    setIsPatientsDropdownOpen(false);
    setIsBillsDropdownOpen(false)
    setIsProfitLossDropdownOpen(false)
    setIsExpensesDropdownOpen(false);
  };
  const handleBillsDropdownClick = () => {
    setIsBillsDropdownOpen(true);
    setIsRentDropdownOpen(false);
    setIsPatientsDropdownOpen(false);
    setIsProfitLossDropdownOpen(false)
    setIsExpensesDropdownOpen(false);
  };

  const handleProfitLossDropdownClick = () => {
    setIsProfitLossDropdownOpen(true);
    setIsBillsDropdownOpen(false);
    setIsRentDropdownOpen(false);
    setIsPatientsDropdownOpen(false);
    setIsExpensesDropdownOpen(false);
  };

  
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-md text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a  class="flex items-center ps-2.5 mb-5">
            {/* <img src={logo} className="h-20	 mr-3" alt="Logo" /> */}
            {/* <i class="fas fa-4x fa-hospital"></i> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Rehnuma Center</span>
          </a>
          <ul class="space-y-2 font-medium">
            <li
            onClick={handlePatientsDropdownClick}
            >
              <a
                class="flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <div>
               <i class="fa-solid fa-user"></i>
                <span class="ms-3 text-lg">Patients</span>
               </div>

                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </a>


            </li>
              {isPatientsDropdownOpen && (
            <div className="pl-6">
                 <Link onClick={() => handleMenuClick("/Add-Patient")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                 <i class="fa-solid fa-plus mr-2"></i>  Add  Patient
              </Link>


             
              <Link  onClick={() => handleMenuClick("/Patient_List")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fa-solid fa-list-check mr-2"></i> Patient List
              </Link>
              
              {/* <div onClick={() => handleMenuClick("/Patient-Expenses")}    to="/patient/list" className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class='fas fa-balance-scale mr-2'></i>  Patient  Expenses
              </div> */}
            </div>
          )}
            <li onClick={handleExpensesDropdownClick}>
  <a
    href="#"
    class="flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
    <div>
      <i class='fas fa-donate'></i>
      <span class="flex-1 ms-3 whitespace-nowrap text-lg">
        Expenses
      </span>
    </div>
    <i class="fa fa-caret-down" aria-hidden="true"></i>
  </a>
  {isExpensesDropdownOpen && (
    <div className="pl-6">
     <Link   onClick={() => handleMenuClick("/Doctor_Expense")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i   class="fas fa-user-md mr-2"></i>   Doctor Expense 
              </Link>
              <Link   onClick={() => handleMenuClick("/Doctor_List")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i   class="fas fa-user-md mr-2"></i>   Doctor Details 
              </Link>

              
              <Link onClick={() => handleMenuClick("/Teacher_Expense")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i  class='fas fa-chalkboard-teacher mr-2'></i>  Teacher Expense
              </Link>
              <Link onClick={() => handleMenuClick("/Teacher_List")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i  class='fas fa-chalkboard-teacher mr-2'></i>  Teacher Details
              </Link>


              
              <Link onClick={() => handleMenuClick("/Groccery_Expenses")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i  class="fas fa-shopping-cart mr-2"></i>  Grocery Expense
              </Link>

              <Link onClick={() => handleMenuClick("/Groccery_List")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i  class="fas fa-shopping-cart mr-2"></i>  Grocery Details
              </Link>


             
              <Link onClick={() => handleMenuClick("/Staff_Salaries")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i  class="fas fa-users mr-2"></i>Staff Salaries
          </Link>

          <Link onClick={() => handleMenuClick("/Staff_List")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i  class="fas fa-users mr-2"></i>Staff Salaries List 
          </Link>

          




    </div>
  )}
</li>

            <li onClick={handleRentDropdownClick} >
              <a
                href="#"
                class="flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
           <div>
           <i class='fas fa-home'></i>
                <span class="flex-1 ms-3 whitespace-nowrap text-lg">
                    
                Rent
                </span>
           </div>
           <i class="fa fa-caret-down" aria-hidden="true"></i>

              </a>

              {isRentDropdownOpen && (
    <div className="pl-6">
     <Link  onClick={() => handleMenuClick("/Office_Rent")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i class="fa-solid fa-building mr-2"></i>  Office Rent   
              </Link>

              <Link  onClick={() => handleMenuClick("/Office_List")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i class="fa-solid fa-building mr-2"></i>  Office Lists   
              </Link>


              <Link onClick={() => handleMenuClick("/Transportation")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fa-solid fa-car-side mr-2"></i>   Transportation
              </Link>
              <Link onClick={() => handleMenuClick("/Transportation_List")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fa-solid fa-car-side mr-2"></i>   Transportation List
              </Link>
    </div>
  )}





            </li>
            <li   onClick={handleBillsDropdownClick}  >
              <a
                href="#"
                class="flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
          <div>
          <i class='fas fa-dollar-sign'></i>
                <span class="flex-1 ms-3 whitespace-nowrap text-lg">
                Bills
                </span>
          </div>
          <i class="fa fa-caret-down" aria-hidden="true"></i>

              </a>

              {isBillsDropdownOpen && (
    <div className="pl-6">
     <Link  onClick={() => handleMenuClick("/Electricity_Bill")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i class="fas fa-charging-station mr-2"></i>   Electricity Bill
              </Link>
              <Link  onClick={() => handleMenuClick("/Electricity_List")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i class="fas fa-charging-station mr-2"></i>   Electricity Bill List 
              </Link>    
              <Link  onClick={() => handleMenuClick("/Water_Bill")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fas fa-hand-holding-water mr-2"></i>  Water Bill
              </Link>
              <Link  onClick={() => handleMenuClick("/Water_Bill_List")}  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fas fa-hand-holding-water mr-2"></i>  Water Bill List 
              </Link>

              
              <Link onClick={() => handleMenuClick("/Gas_Bill")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fas fa-gas-pump mr-2"></i>   Gas Bill  
              </Link>
              <Link onClick={() => handleMenuClick("/Gas_List")} className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fas fa-gas-pump mr-2"></i>   Gas Bill  List 
              </Link>



    </div>
  )}

            </li>
            <li   onClick={handleProfitLossDropdownClick}  >
              <a
                href="#"
                class="flex justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
    <div>
    <i class="fas fa-hand-holding-usd"></i>
                <span class="flex-1 ms-3 whitespace-nowrap text-lg">
                Profit Loss
                </span>
    </div>
    <i class="fa fa-caret-down" aria-hidden="true"></i>
              </a>

              {isProfitLossDropdownOpen && (
    <div className="pl-6">
     <Link  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
     <i class="fa-solid fa-gift mr-2"></i>   Monthly Profit
              </Link>
              <Link  className="block py-2 text-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="fa-solid fa-link-slash  mr-2"></i>  Monthly Loss
              </Link>
    </div>
  )}
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
      {activeComponent === "/Add-Patient" && <Add_Patient />}
        {activeComponent === "/Patient-Expenses" && <Patient_Expenses />}
        {activeComponent === "/Doctor_Expense" && <Doctor_Expense/>}
        {activeComponent === "/Teacher_Expense" && <Teacher_Expense/>}
        {activeComponent === "/Staff_Salaries" && <Staff_Salaries/>}
        {activeComponent === "/Office_Rent" && <Office_Rent/>}
        {activeComponent === "/Transportation" && <Transportation/>}
        {activeComponent === "/Electricity_Bill" && <Electricity_Bill/>}
        {activeComponent === "/Water_Bill" && <Water_Bill/>}
        {activeComponent === "/Gas_Bill" && <Gas_Bill/>}
        {activeComponent === "/Groccery_Expenses" && <Groccery_Expenses/>}
        {activeComponent === "/Patient_List" && <Patient_List/>}
        {activeComponent === "/Doctor_List" && <Doctor_List/>}
        {activeComponent === "/Teacher_List" && <Teacher_List/>}
        {activeComponent === "/Groccery_List" && <Groccery_List/>}
        {activeComponent === "/Office_List" && <Office_List/>}
        {activeComponent === "/Transportation_List" && <Transportation_List/>}
        {activeComponent === "/Staff_List" && <Staff_List/>}
        {activeComponent === "/Electricity_List" && <Electricity_List/>}
        {activeComponent === "/Water_Bill_List" && <Water_Bill_List/>}
        {activeComponent === "/Gas_List" && <Gas_List/>}

        
        
      </div>
    </>
  );
};

export default Sidebar;
