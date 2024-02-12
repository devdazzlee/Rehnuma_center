import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners';
// import BasicModal from '../Modal/Modal';
import { Link  , useNavigate  } from 'react-router-dom';
import Modal1 from '../../Components/Modals/Modal1';
import Modal2 from '../../Components/Modals/Modal2';
import Transportation_Edit from '../../Components/Modals/Transportation_Edit';

const Transportation_List = () => {
  const navigate = useNavigate();


    const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');




  const handleCheckboxChange = async (id) => {
    // deleteData(id)
    // Make your API call here using the id
    try {
      const response = await axios.post(`https://busy-tan-dhole-wig.cyclic.app/api/v1/CompletedProject/${id}`, { /* your payload */ });
      console.log("Checkbox API Response: ", response.data);
      window.location.reload(true);
    }
    catch (error) {
      console.log("Error in checkbox API call", error);
    }
  };
    

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/Transportation_Detail`);
      console.log("response: ", response);
      console.log(products);
      setProducts(response.data.data);
      setProductsBoolean(true)
    } catch (error) {
      console.log("error in getting all products", error);
    }
  };

  const deleteData = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/customer6/${id}`)
      console.log("response: ", response.data);
      setdelete(!Delete)
    } catch (error) {
      console.log("error in getting all products", error);
    }
  }

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
    // return () => {
    //   console.log('Cleanup Function');
    //  }
}, [Delete , productsBoolean ])


const filteredProducts = products
const formatProjectId = (projectId) => {
  // You can implement your own logic to format or truncate the ID
  return projectId.slice(0, 8); // Example: Display the first 8 characters
};


  return (
  <>
     <div className='flex ' >
     <h1 className="text-4xl text-center  mb-6 m-auto">Transportation Details </h1>


      <div>

      <input
            type="text"
            placeholder='Search Here'
            className="mr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

</div>
     </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            
                
                <th   scope="col" class="px-6 py-3">
    
                Staff  Name
    
                </th>
                
               
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Staff Type 
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                  Staff Fuel 
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
    
                <th scope="col" class="px-6 py-3 ">
                    <div  class="flex items-center ">
                    Edit
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Delete  
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
               
            </tr>
        </thead>


        <tbody>
          {productsBoolean ? (
            filteredProducts.map((value) => (
              <tr class=" border-b    bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">


<th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
  {value.staffName}
</th>
<th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
  {value.transportationType}
</th>
                <th   onClick={() => navigate('/payment/Detail/view', { state: { id : value._id , name :value.projectName , category :value.projectCategory , requiredAmout : value.amountRequired , collectedAmout : value.paymentDetail , village : value.projectVillage , image: value.imageUrl } })}
 scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    {value.transportationFuel}
                </th>
                
           {/* <td class="px-6 py-4">

           {value.paymentDetail
    ? value.paymentDetail.reduce((sum, payment) => sum + payment.paymentDetail, 0)
    : 'N/A'}

                </td>  */}




       
                <td class=" mr-8 text-right">
                    <Transportation_Edit  staffName={value.staffName} transportationType={value.transportationType}  transportationFuel={value.transportationFuel}  name={value.staffName}  age={value.patientAge}  admissionDate={value.AdmissionDate}   admissionFee={value.AdmissionFee} monthlyFee={value.MonthlyFee}  requiredAmount={value.RequiredAmount}  patientDec={value.PatientDescription}   id={value._id}    />
                </td>
                <td    className='lllololo' 
                
                onClick={()=>{
                    deleteData(value._id)
                }}  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Delete
                </td>
                {/* <td className="px-6 py-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => handleCheckboxChange(value._id)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </td> */}
                
            </tr>
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80px',
                margin: 'auto',
                position: 'relative',
                top: '400px',
                left: '400px',
              }}
            >
              <BeatLoader size={15} color={'#0D6DB7'} loading={true} />
            </div>
          )}
        </tbody>

        <tbody> 
   
        </tbody>
    </table>
        
        </>
  )
}

export default Transportation_List